// src/components/Window.jsx
import React from 'react';
import Draggable from 'react-draggable';
import '98.css/dist/98.css';

export default function Window({
  title,
  children,
  onClose,
  onMinimize,
  onMaximize,
  isMaximized,
  initialPosition = { x: 100, y: 100 },
}) {
  const windowStyle = isMaximized
    ? {
        width: '100%',
        height: 'calc(100% - 40px)',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
      }
    : { width: 300, position: 'absolute' };

  return (
    <Draggable handle=".title-bar" disabled={isMaximized} defaultPosition={initialPosition}>
      <div className="window" style={windowStyle}>
        <div className="title-bar">
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" onClick={onMinimize} />
            <button aria-label="Maximize" onClick={onMaximize} />
            <button aria-label="Close" onClick={onClose} />
          </div>
        </div>
        <div className="window-body">{children}</div>
      </div>
    </Draggable>
  );
}
