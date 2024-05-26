import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

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
