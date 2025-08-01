import React from 'react';
import Window from './components/Window';
import './App.css'; // optional custom styling

function App() {
  return (
    <div className="desktop" style={{ height: '100vh', background: '#008080', padding: 20 }}>
      <Window title="About Me">
        <p>Hi, I'm Nico Tolentino — a software developer with a love for retro UIs!</p>
      </Window>
    </div>
  );
}

export default App;
