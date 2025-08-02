// src/App.js
import React, { useState } from "react";
import Window from "./components/Window";
import DesktopIcon from "./components/DesktopIcon";
import "./App.css";

import githubIcon from "./assets/githubIcon.png";
import linkedinIcon from "./assets/linkedinIcon.webp";
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
        paddingBottom: "32px", // Make room for taskbar
        background: "#008080",
        backgroundImage: "url('./assets/desktopBackground.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'dos437', monospace",
        color: "#fff",
        fontSize: "16px",
      }}
    >
      {/* Desktop Icons */}

      <div style={{ position: "absolute", top: 20, left: 20 }}>
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
      </div>

      {/* GitHub Window */}
      {windows.github.visible && !windows.github.minimized && (
        <Window
          title="GitHub"
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
