import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Terminal from "./components/Terminal/Terminal";
import Dock from "./components/Dock/Dock";

function App() {
  return (
    <div className="App">
      <Header />
      <Terminal />
      <Dock />
    </div>
  );
}

export default App;

