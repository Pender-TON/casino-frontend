import { useState, useEffect } from "react";
import { App as RealmApp, Credentials } from "realm-web";
import WebApp from '@twa-dev/sdk'
import { throttle } from 'lodash'

const REALM_APP_ID = "pender-clicker-ocpnmnl";

const app = new RealmApp({ id: REALM_APP_ID });

function App() {
  const [count, setCount] = useState(0);
  const userId = WebApp.initDataUnsafe.user?.id;
  const userName = WebApp.initDataUnsafe.user?.username;
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return;

      const credentials = Credentials.anonymous();
      await app.logIn(credentials);
      if (app.currentUser) {
        const mongodb = app.currentUser.mongoClient("mongodb-atlas");
        const collection = mongodb.db("pender-clicks").collection("clicks-01");

        const existingDoc = await collection.findOne({ userId });

        if (existingDoc) {
          setCount(existingDoc.count);
          setDisplayCount(existingDoc.count);
        }
      }
    };

    fetchData();
  }, [userId]);

  const updateData = async (count: number) => {
    if (!userId || !userName) return;

    if (app.currentUser) {
      const mongodb = app.currentUser.mongoClient("mongodb-atlas");
      const collection = mongodb.db("pender-clicks").collection("clicks-01");

      const existingDoc = await collection.findOne({ userId });

      if (existingDoc) {
        const result = await collection.updateOne({ userId }, { $set: { count } });
        console.log("Successfully updated item with _id: ", result.upsertedId);
      } else {
        const doc = { userId, userName, count: count };
        const result = await collection.insertOne(doc);
        console.log("Successfully inserted item with _id: ", result.insertedId);
      }
    }
  };

  const trottledUpdateData = throttle(updateData, 2000, { trailing: true })

  const handleClick = async () => {
    const newCount = count + 1;
    setCount(newCount);
    setDisplayCount(newCount);



    try {
      await trottledUpdateData(newCount);
    } catch (error) {
      console.error("Failed to update count in database:", error);
      setDisplayCount(count);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <span className="text-8xl tabular-nums text-white">{displayCount}</span>
      <button
        className="h-96 w-96 cursor-pointer select-none overflow-hidden rounded-full border-none bg-[url('./assets/coin-default.png')] bg-cover outline-none active:bg-[url('./assets/coin-clicked.png')]"
        onClick={handleClick}
      />
    </div>
  );
}

export default App;
