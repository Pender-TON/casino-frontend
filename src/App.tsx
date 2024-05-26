import { useState, useEffect } from "react";
import { App as RealmApp, Credentials } from "realm-web";
import WebApp from '@twa-dev/sdk'

const REALM_APP_ID = "pender-clicker-ocpnmnl";

const app = new RealmApp({ id: REALM_APP_ID });

function App() {
  const [count, setCount] = useState(0);
  const userId = WebApp.initDataUnsafe.user?.id;
  const userName = WebApp.initDataUnsafe.user?.username;

  useEffect(() => {
    const login = async () => {
      const credentials = Credentials.anonymous();
      await app.logIn(credentials);
      if (app.currentUser) {
        const mongodb = app.currentUser.mongoClient("mongodb-atlas");
        const collection = mongodb.db("pender-clicks").collection("clicks-01");

        const existingDoc = await collection.findOne({ userId });
        if (!existingDoc || count > existingDoc.count) {
          const doc = { userId, userName, count };
          const result = await collection.insertOne(doc);
          console.log("Successfully inserted item with _id: ", result.insertedId);
        }
      }
    };

    login();
  }, [count, userName, userId]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <span className="text-8xl tabular-nums text-white">{count}</span>
      <button
        className="h-96 w-96 cursor-pointer select-none overflow-hidden rounded-full border-none bg-[url('./assets/coin-default.png')] bg-cover outline-none active:bg-[url('./assets/coin-clicked.png')]"
        onClick={handleClick}
      />
    </div>
  );
}

export default App;
