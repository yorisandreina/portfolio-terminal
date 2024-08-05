import React from "react";
import "./Dock.css";

const Dock = () => {
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
        <img src='/assets/gmail.png' alt="Gmail" />
      </a>
      <a href="tel:+34168045">
        <img src="/assets/contact.png" alt="Phone" />
      </a>
      <img src="/assets/terminal.png" alt="Terminal" />
    </div>
  );
};

export default Dock;
