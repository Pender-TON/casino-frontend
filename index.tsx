import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { AppearanceProvider } from "@twa-dev/mark42";
import logo from './logo-white.svg';
import './index.css';

const LogoButton = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [count, setCount] = useState(0);
    const handleMouseDown = () => {
        setIsClicked(true);
        setCount(count + 1);
    };
    const handleMouseUp = () => {
        setIsClicked(false);
    };
    useEffect(() => {
        document.body.style.backgroundColor = "#FD54A6"; // Replace with your desired color
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
const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <AppearanceProvider>
            <LogoButton />
        </AppearanceProvider>
    </div>
);