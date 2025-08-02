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
  initialPosition = { x: 0, y: 0 },
}) {
  const windowContent = (
    <div
      className="window"
      style={
        isMaximized
          ? {
              width: '100%',
              height: 'calc(100% - 30px)',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 10,
              margin: 0,
            }
          : { width: 300, position: 'absolute' }
      }
    >
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
  );

  // Return either a draggable or normal component depending on maximized state
  return isMaximized ? windowContent : (
    <Draggable handle=".title-bar" defaultPosition={initialPosition}>
      {windowContent}
    </Draggable>
  );
}
