import React, { useState, useEffect, useRef } from "react";
import "./Timer.css"; // Create a CSS file for unique design

const Timer = ({ onStop }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
    if (onStop) onStop(seconds);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <div className="timer-container">
      <div className="timer-display">{formatTime(seconds)}</div>
      <button className="timer-button" onClick={startTimer}>Start</button>
      <button className="timer-button" onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Timer;
