import React from "react";
import "./Background.css";
import { backgrounds } from "./backgrounds";

const Background = ({ setBackground, closeModal }) => {
  return (
    <div className="background">
      <div className="window-header">
        <div className="circle red" onClick={closeModal}></div>
        <div className="circle yellow"></div>
        <div className="circle green"></div>
      </div>
      <div className="background-options">
        {backgrounds.map((bg, index) => (
          <img
            key={index}
            src={bg}
            alt={`Background ${index + 1}`}
            onClick={() => {
              setBackground(bg);
              closeModal();
            }}
            className="background-thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default Background;
