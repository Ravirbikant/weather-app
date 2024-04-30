import React from "react";

const WeatherDetails = ({ humidity, windSpeed }) => {
  return (
    <div className="weather-details">
      <div className="humidity">
        <i className="fa-solid fa-water"></i>
        <div className="text">
          <span>{humidity}</span>
          <p>Humidity</p>
        </div>
      </div>
      <div className="wind">
        <i className="fa-solid fa-wind"></i>
        <div className="text">
          <span>{windSpeed}</span>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
