// src/App.js
import { useState } from "react";
import Window from "./components/Window";
import DesktopIcon from "./components/DesktopIcon";
import "./App.css";

import githubIcon from "./assets/githubIcon.png";
import linkedinIcon from "./assets/linkedinIcon.webp";
import pcIcon from "./assets/pcIcon.png";

import Taskbar from "./components/Taskbar";


function App() {
  const [windows, setWindows] = useState({
    github: {
      visible: false,
      minimized: false,
      maximized: false,
      positionIndex: 0,
    },
    linkedin: {
      visible: false,
      minimized: false,
      maximized: false,
      positionIndex: 1,
    },
    pcicon: {
      visible: false,
      minimized: false,
      maximized: false,
      positionIndex: 2,
    },
  });

  const toggleWindow = (name, prop, value) => {
    setWindows((prev) => ({
      ...prev,
      [name]: { ...prev[name], [prop]: value },
    }));
  };

  const getOffsetPosition = (index) => ({
    x: 100 + index * 40,
    y: 100 + index * 30,
  });

  return (
    <div
      className="desktop"
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh", // Full screen
        overflow: "hidden", // Prevent scroll
        
        background: "#008080",
        backgroundImage: "url('./assets/desktopBackground.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Pixelated MS Sans Serif', sans-serif",
        color: "#fff",
        fontSize: "16px",
       
      }}
    >
      <div className="desktop-icons">
        <DesktopIcon
          icon={pcIcon}
          label="PC"
          onDoubleClick={() => toggleWindow("pcicon", "visible", true)}
        />
        <DesktopIcon
          icon={githubIcon}
          label="GitHub"
          onDoubleClick={() => toggleWindow("github", "visible", true)}
        />
        <DesktopIcon
          icon={linkedinIcon}
          label="LinkedIn"
          onDoubleClick={() => toggleWindow("linkedin", "visible", true)}
        />

        {/* Add more icons here */}
      </div>

      {/* PC Icon Window */}
      {windows.pcicon && windows.pcicon.visible && (
        <Window
          title="PC Icon"
          isMaximized={windows.pcicon.maximized}
          initialPosition={getOffsetPosition(windows.pcicon.positionIndex)}
          onClose={() => toggleWindow("pcicon", "visible", false)}
          onMinimize={() => toggleWindow("pcicon", "minimized", true)}
          onMaximize={() =>
            toggleWindow("pcicon", "maximized", !windows.pcicon.maximized)
          }
        >
          <p>This is a placeholder for the PC icon window.</p>
          <button onClick={() => alert("PC Icon Window Action")}>
            PC Icon Action
          </button>
        </Window>
      )}

      {/* GitHub Window */}
      {windows.github.visible && !windows.github.minimized && (
        <Window
          title="GitHub "
          isMaximized={windows.github.maximized}
          initialPosition={getOffsetPosition(windows.github.positionIndex)}
          onClose={() => toggleWindow("github", "visible", false)}
          onMinimize={() => toggleWindow("github", "minimized", true)}
          onMaximize={() =>
            toggleWindow("github", "maximized", !windows.github.maximized)
          }
        >
          <p>See my projects and code on GitHub.</p>
          <button
            onClick={() =>
              window.open("https://github.com/your-username", "_blank")
            }
          >
            Open GitHub
          </button>
        </Window>
      )}

      {/* LinkedIn Window */}
      {windows.linkedin.visible && !windows.linkedin.minimized && (
        <Window
          title="LinkedIn"
          isMaximized={windows.linkedin.maximized}
          initialPosition={getOffsetPosition(windows.linkedin.positionIndex)}
          onClose={() => toggleWindow("linkedin", "visible", false)}
          onMinimize={() => toggleWindow("linkedin", "minimized", true)}
          onMaximize={() =>
            toggleWindow("linkedin", "maximized", !windows.linkedin.maximized)
          }
        >
          <p>Click below to view my LinkedIn profile.</p>
          <button
            onClick={() =>
              window.open("https://linkedin.com/in/your-link", "_blank")
            }
          >
            Open LinkedIn
          </button>
        </Window>
      )}

      {/* Taskbar */}

      <Taskbar
        windows={windows}
        onRestore={(key) => toggleWindow(key, "minimized", false)}
      />
    </div>
  );
}

export default App;
