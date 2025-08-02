// src/components/Taskbar.jsx
import React from 'react';
import './Taskbar.css';

export default function Taskbar({ windows, onRestore }) {
  return (
    <div className="taskbar">
      {Object.entries(windows).map(([key, win]) =>
        win.visible ? (
          <button key={key} onClick={() => onRestore(key)}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ) : null
      )}
    </div>
  );
}
