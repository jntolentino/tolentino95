import React from 'react';
import Draggable from 'react-draggable';
import '98.css/dist/98.css';

export default function Window({ title, children }) {
  return (
    <Draggable handle=".title-bar">
      <div className="window" style={{ width: 300 }}>
        <div className="title-bar">
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
        <div className="window-body">
          {children}
        </div>
      </div>
    </Draggable>
  );
}
