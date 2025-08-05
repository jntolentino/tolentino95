import React from 'react';  
import './StartButton.css'; 
import startIcon from '../assets/start-icon.png'; // Adjust the path as necessary 

export default function StartButton({ onClick }) {
  return (
    <button className="start-button" onClick={onClick}>
        <img src={startIcon} alt="Start" className="start-button-icon" />
        Start
    </button>
  );
}