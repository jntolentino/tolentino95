import React, { useState } from 'react';
import Window from './components/Window';
import DesktopIcon from './components/DesktopIcon';
import './App.css';

import githubIcon from './assets/githubIcon.png';
import linkedinIcon from './assets/linkedinIcon.webp';

function App() {
  const [showGitHub, setShowGitHub] = useState(false);
  const [showLinkedIn, setShowLinkedIn] = useState(false);

  return (
    <div className="desktop" style={{ height: '100vh', background: '#008080', padding: 20 }}>
      {/* About Me Window */}
      <Window title="About Me">
        <p>Hi, I'm Nico Tolentino — a software developer with a love for retro UIs!</p>
      </Window>

      {/* Desktop Icons */}
      <DesktopIcon icon={githubIcon} label="GitHub" onDoubleClick={() => setShowGitHub(true)} />
      <DesktopIcon icon={linkedinIcon} label="LinkedIn" onDoubleClick={() => setShowLinkedIn(true)} />

      {/* GitHub Window */}
      {showGitHub && (
        <Window title="GitHub">
          <p>See my projects and code on GitHub.</p>
          <button onClick={() => window.open('https://github.com/your-username', '_blank')}>
            Open GitHub
          </button>
          <button onClick={() => setShowGitHub(false)}>Close</button>
        </Window>
      )}

      {/* LinkedIn Window */}
      {showLinkedIn && (
        <Window title="LinkedIn">
          <p>Click below to view my LinkedIn profile.</p>
          <button onClick={() => window.open('https://linkedin.com/in/your-link', '_blank')}>
            Open LinkedIn
          </button>
          <button onClick={() => setShowLinkedIn(false)}>Close</button>
        </Window>
      )}
    </div>
  );
}

export default App;
