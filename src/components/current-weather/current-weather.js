import "./current-weather.css";
import React from "react";

const CurrentWeather = ({data}) => {
    console.log(data);
  const {temp, humidity, pressure, feels_like} = data.main;
  const {speed} = data.wind;
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(temp - 273)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{Math.round(feels_like - 273)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{pressure}hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
