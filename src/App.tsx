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
  const handleTouchStart = () => {
    e.preventDefault();
    handleMouseDown();
  };
  const handleTouchEnd = () => {
    e.preventDefault();
    handleMouseUp();
  };
  useEffect(() => {
    document.body.style.backgroundColor = "#FD54A6";
  }, []);
  return (
    <div className="container">
      <span className="counter">{count}</span>
      <button style={{ border: 'none', padding: 0, background: 'none' }}>
        <div
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="button"
          style={{
            display: 'inlibe-block',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: isClicked ? 'none' : '0 10px 20px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          <img src={logo} alt="logo" style={{ backgroundColor: 'transparent' }} />
        </div>
      </button >
    </div >
  );
};

export default App
