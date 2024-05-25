import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/logo-white.svg'
//import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)
  const [isClicked, setIsClicked] = useState(false);
  const handleMouseDown = () => {
    setIsClicked(true);
    setCount(count + 1);
  };
  const handleMouseUp = () => {
    setIsClicked(false);
  };
  useEffect(() => {
    document.body.style.backgroundColor = "#FD54A6";
  }, []);
  return (
    <div className="container">
      <span className="counter">{count}</span>
      <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="button">
        <img src={logo} alt="logo" style={{
          filter: isClicked ? 'none' : 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
          backgroundColor: 'transparent'
        }} />
      </button>
    </div>
  );
};

export default App
