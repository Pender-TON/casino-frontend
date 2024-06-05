import { useState, useEffect, useCallback, useMemo } from "react";
import { App as RealmApp, Credentials } from "realm-web";
import WebApp from '@twa-dev/sdk';
import { throttle } from 'lodash';

const REALM_APP_ID = "pender-clicker-ocpnmnl";
const app = new RealmApp({ id: REALM_APP_ID });

function App() {
  const [count, setCount] = useState(0);
  const userId = WebApp.initDataUnsafe.user?.id;
  const userName = WebApp.initDataUnsafe.user?.username;
  const [displayCount, setDisplayCount] = useState(0);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);
  WebApp.expand();

  const mongodb = useMemo(() => app.currentUser?.mongoClient("mongodb-atlas"), [app.currentUser]);
  const collection = useMemo(() => mongodb?.db("pender-clicks").collection("clicks-01"), [mongodb]);

  const handleTrophyClick = async () => {
    if (collection) {
      try {
        const topDocs = await collection.find({}, { sort: { count: -1 }, limit: 5 });
        const message = topDocs.map((doc, index) => `${index + 1}. ${doc.userName}: ${doc.count}`).join('\n');
        alert(message);
      } catch (error) {
        console.error("Failed to fetch top documents:", error);
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
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [userId, collection]);

  const updateData = useCallback(async (newCount: any) => {
    if (!userId || !userName) return;

    try {
      if (collection) {
        const result = await collection.updateOne(
          { userId },
          { $set: { count: newCount, userName } },
          { upsert: true }
        );
        console.log("Successfully upserted item with _id:", result.upsertedId || result.modifiedCount);
      }
    } catch (error) {
      console.error("Failed to upsert count in database:", error);
    }
  }, [userId, userName, collection]);

  const throttledUpdateData = useMemo(() => throttle(updateData, 3100, { trailing: true }), [updateData]);

  const [rotation, setRotation] = useState(0);

  const handleClick = async () => {
    if (!initialDataLoaded) return; // Prevent click action if initial data is not loaded

    const newCount = count + 1;
    setCount(newCount);
    setDisplayCount(newCount);
    WebApp.HapticFeedback.impactOccurred('medium');
    const newRotation = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 4 + 5);
    setRotation(newRotation);

    setTimeout(() => {
      setRotation(0);
    }, 500);

    try {
      await throttledUpdateData(newCount);
    } catch (error) {
      console.error("Failed to update count in database:", error);
      // Consider showing a message or indication of failure to the user
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <button
        className="absolute top-7 right-7 text-4xl active:text-gray-700"
        onClick={handleTrophyClick}
        disabled={!initialDataLoaded}
      >
        🏆
      </button>
      <div id="table-top" />
      <div id="table-bottom" />
      <span className="text-8xl tabular-nums text-white select-none">{displayCount}</span>
      <button
        style={{ transform: `rotate(${rotation}deg)` }} // Add inline style here
        className={`h-56 w-56 cursor-pointer select-none overflow-hidden rounded-full border-none bg-[url('./assets/chip-default.svg')] bg-cover outline-none active:scale-90 transition-transform z-10 ${!initialDataLoaded ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={handleClick}
        disabled={!initialDataLoaded}
      />
    </div>
  );
}

export default App;