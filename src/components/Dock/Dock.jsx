import React, { useState } from "react";
import "./Dock.css";
import Background from "../Background/Background";

const Dock = ({ setBackground }) => {
  const [showBackground, setShowBackground] = useState(false);

  const closeModal = () => {
    setShowBackground(false);
  }

  return (
    <div className="dock">
      <a
        href="https://github.com/yorisandreina"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/github.png" alt="GitHub" />
      </a>
      <a href="mailto:andreyoris2003@gmail.com">
        <img src="/assets/gmail.png" alt="Gmail" />
      </a>
      <a href="tel:+34168045">
        <img src="/assets/contact.png" alt="Phone" />
      </a>
      <button>
        <img src="/assets/terminal.png" alt="Terminal" />
      </button>
      <button
        className="settings-button"
        onClick={() => setShowBackground(true)}
      >
        <img src="/assets/settings.png" alt="Settings" />
      </button>
      {showBackground && (
        <Background
          setBackground={(bg) => {
            setBackground(bg);
          }}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Dock;
