import React from 'react';
import './DesktopIcon.css';

export default function DesktopIcon({ icon, label, onDoubleClick }) {
  return (
    <div className="desktop-icon" onDoubleClick={onDoubleClick}>
      <img src={icon} alt={label} width={40} height={40} />
      <span>{label}</span>
    </div>
  );
}
