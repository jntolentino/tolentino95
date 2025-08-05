// src/components/Taskbar.jsx
import React from 'react';
import './Taskbar.css';
import Clock from "./Clock";
import StartButton from './StartButton';

export default function Taskbar({ windows, onRestore, onStartClick }) {
  return (
    <div className="taskbar">
      <div className="taskbar-left">
        <StartButton onClick={onStartClick} />

        {Object.entries(windows).map(([key, win]) =>
          win.visible ? (
            <button key={key} onClick={() => onRestore(key)}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ) : null
        )}
      </div>
      {Object.entries(windows).map(([key, win]) =>
        win.visible ? (
          <button key={key} onClick={() => onRestore(key)}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ) : null
      )}
      <div className="taskbar-right">
        <Clock />
      </div>
    </div>
  );
}
