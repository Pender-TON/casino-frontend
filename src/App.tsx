import { useState } from "react";
import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0);
  const userId = WebApp.initDataUnsafe.user?.id;

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <span className="text-8xl tabular-nums text-white">{count}</span>
      <button
        className="h-96 w-96 cursor-pointer select-none overflow-hidden rounded-full border-none bg-[url('./assets/coin-default.png')] bg-cover outline-none active:bg-[url('./assets/coin-clicked.png')]"
        onClick={handleClick}
      >
        {userId}
      </button>
    </div>
  );
}

export default App;
