import React, { useEffect, useState } from "react";
import "./Header.css";
import env from "react-dotenv";

const Header = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };

    const updateDate = () => {
      const now = new Date();
      const options = { weekday: "short", month: "short", day: "numeric" };
      setDate(now.toLocaleDateString("en-US", options));
    };

    const fetchWeather = async () => {
      const apiKey = env.OPENWEATHER_API;
      const location = "Madrid, Spain";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      const weather = `${Math.round(data.main.temp)}°C ${
        data.weather[0].description
      }`;
      setWeather(weather.charAt(0).toUpperCase() + weather.slice(1));
    };

    updateTime();
    updateDate();
    fetchWeather();

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mac-header">
      <div className="mac-header-left">
        <img src="/assets/apple.png" alt="Apple Logo" className="header-icon" />
        <span className="header-text">Andreina I. Yoris Rodriguez</span>
      </div>
      <div className="mac-header-right">
        <span className="header-text">{date}</span>
        <span className="header-text">{time}</span>
        <span className="header-text">{weather}</span>
      </div>
    </div>
  );
};

export default Header;
