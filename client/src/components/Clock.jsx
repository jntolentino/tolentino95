// src/components/Clock.jsx
import React, { useState, useEffect } from "react";
import "./Clock.css";

export default function Clock() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="taskbar-clock">{time}</div>;
}
