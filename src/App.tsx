import { useState, useEffect, useCallback, useMemo } from 'react';
import { App as RealmApp, Credentials } from 'realm-web';
import WebApp from '@twa-dev/sdk';
import { throttle } from 'lodash';
import TableTopData from './TableTopData';
import imageSrc from './assets/pender-head.svg';
import ClickAnimation from './ClickDisplay';

const REALM_APP_ID = 'pender-clicker-ocpnmnl';
const app = new RealmApp({ id: REALM_APP_ID });

function App() {
  const [count, setCount] = useState(0);
  const userId = WebApp.initDataUnsafe.user?.id;
  const userName = WebApp.initDataUnsafe.user?.username;
  const [displayCount, setDisplayCount] = useState(0);
  const [leaderboardPosition, setLeaderboardPosition] = useState<number | null>(
    null
  );
  const displayGems = 1;
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);
  const [clickPositions, setClickPositions] = useState<
    { x: number; y: number }[]
  >([]);

  WebApp.expand();

  const mongodb = useMemo(
    () => app.currentUser?.mongoClient('mongodb-atlas'),
    [app.currentUser]
  );
  const collection = useMemo(
    () => mongodb?.db('pender-clicks').collection('clicks-01'),
    [mongodb]
  );

  const handleTrophyClick = async () => {
    if (collection) {
      try {
        const topDocs = await collection.find(
          {},
          { sort: { count: -1 }, limit: 5 }
        );
        const message = topDocs
          .map((doc, index) => `${index + 1}. ${doc.userName}: ${doc.count}`)
          .join('\n');
        alert(message);
      } catch (error) {
        console.error('Failed to fetch top documents:', error);
      }
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return;

      try {
        const credentials = Credentials.anonymous();
        await app.logIn(credentials);
        if (collection) {
          const existingDoc = await collection.findOne({ userId });
          try {
            const topDocs = await collection.find({}, { sort: { count: -1 } });
            const position =
              topDocs.findIndex(doc => doc.userId === userId) + 1;
            setLeaderboardPosition(position);
          } catch (error) {
            console.error('Failed to fetch top documents:', error);
          }
          if (existingDoc) {
            setCount(existingDoc.count);
            setDisplayCount(existingDoc.count);
          } else {
            const newDoc = { userId, userName, count: 0 };
            await collection.insertOne(newDoc);
            setCount(newDoc.count);
            setDisplayCount(newDoc.count);
          }
          setInitialDataLoaded(true);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, [userId, collection]);

  const updateData = useCallback(
    async (newCount: any) => {
      if (!userId || !userName) return;

      try {
        if (collection) {
          const result = await collection.updateOne(
            { userId },
            { $set: { count: newCount, userName } },
            { upsert: true }
          );
          console.log(
            'Successfully upserted item with _id:',
            result.upsertedId || result.modifiedCount
          );
        }
      } catch (error) {
        console.error('Failed to upsert count in database:', error);
      }
    },
    [userId, userName, collection]
  );

  const throttledUpdateData = useMemo(
    () => throttle(updateData, 3100, { trailing: true }),
    [updateData]
  );

  const [rotation, setRotation] = useState(0);

  const handleClick = async (event: React.TouchEvent<HTMLButtonElement>) => {
    if (!initialDataLoaded) return;
    const newCount = count + 1;
    setCount(newCount);
    setDisplayCount(newCount);
    WebApp.HapticFeedback.impactOccurred('medium');
    setClickPositions([
      ...clickPositions,
      { x: event.touches[0].clientX, y: event.touches[0].clientY },
    ]);
    const newRotation =
      (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 4 + 5);
    setRotation(newRotation);

    setTimeout(() => {
      setRotation(0);
    }, 500);
    try {
      await throttledUpdateData(newCount);
    } catch (error) {
      console.error('Failed to update count in database:', error);
      // Consider showing a message or indication of failure to the user
    }
  };
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <button
        className="absolute right-7 top-7 text-4xl active:text-gray-700"
        onClick={handleTrophyClick}
        disabled={!initialDataLoaded}
      >
        🏆
      </button>

      <div id="table-top" className="relative"></div>
      <div id="table-top" className="relative">
        <TableTopData
          displayCount={displayCount}
          displayGems={displayGems}
          leaderboardPosition={leaderboardPosition}
          imageSrc={imageSrc}
        />
      </div>
      <div id="table-bottom" />
      <button
        style={{ transform: `rotate(${rotation}deg)` }}
        className={`z-50 h-56 w-56 cursor-pointer select-none overflow-hidden rounded-full border-none bg-[url('./assets/chip-default.svg')] bg-cover outline-none transition-transform ${!initialDataLoaded ? 'cursor-not-allowed opacity-50' : ''}`}
        onTouchStart={handleClick}
        disabled={!initialDataLoaded}
      />
      {clickPositions.map((pos, index) => (
        <ClickAnimation
          key={index}
          x={pos.x}
          y={pos.y}
          onEnd={() =>
            setClickPositions(clickPositions.filter((_, i) => i !== index))
          }
          style={{ zIndex: 1000, color: 'red' }}
        />
      ))}
    </div>
  );
}
export default App;
