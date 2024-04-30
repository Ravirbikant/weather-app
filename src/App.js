import { useRef, useState } from "react";
import "./app.css";
import WeatherBox from "./components/WeatherBox";
import WeatherDetails from "./components/WeatherDetails";
import error from "./Images/404.png";
import clear from "./Images/clear.png";
import rain from "./Images/rain.png";
import snow from "./Images/snow.png";
import cloud from "./Images/cloud.png";
import mist from "./Images/mist.png";
import smoke from "./Images/smoke.png";

function App() {
  // const [city, setCity] = useState("");
  const city = useRef(null);
  const APIKey = "e4e5c3ae19a7a47c9bb9ba7dd2d690af";
  const [noData, setNoData] = useState(false);
  const [image, setImage] = useState(clear);
  const [temperature, setTemperature] = useState();
  const [description, setDescription] = useState();
  const [humidity, setHumidity] = useState();
  const [windSpeed, setWindSpeed] = useState();

  async function handleSearch() {
    let cityValue = city.current.value;
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${APIKey}`
    );
    let json = await res.json();
    if (json.cod === "404") {
      console.log("No data found");
      setNoData(true);
    } else {
      let temperature = `${parseInt(json.main.temp)}`;
      setTemperature(temperature);
      let description = `${json.weather[0].description}`;
      setDescription(description);
      let humidity = `${json.main.humidity}%`;
      setHumidity(humidity);
      let windSpeed = `${parseInt(json.wind.speed)}Km/h`;
      setWindSpeed(windSpeed);
      switch (json.weather[0].main) {
        case "Clear":
          setImage(clear);
          break;

        case "Rain":
          setImage(rain);
          break;

        case "Snow":
          setImage(snow);
          break;

        case "Clouds":
          setImage(cloud);
          break;

        case "Haze":
          setImage(mist);
          break;

        case "Smoke":
          setImage(smoke);
          break;

        default:
          setImage(clear);
      }
    }
  }

  function SearchBox() {
    return (
      <div className="search-box">
        <i className="fa-solid fa-location-dot"></i>
        <input ref={city} type="text" placeholder="Enter your location" />
        <button
          className="fa-solid fa-magnifying-glass"
          onClick={handleSearch}
        ></button>
      </div>
    );
  }

  function NoDataFound() {
    <div className="not-found">
      <img src={error} alt="Error" />
      <p>Oops! Invalid location :/</p>
    </div>;
  }

  return (
    <div className="App">
      <div className="container">
        <SearchBox />
        {noData ? (
          <NoDataFound />
        ) : (
          <div>
            <WeatherBox
              image={image}
              temperature={temperature}
              description={description}
            />
            <WeatherDetails humidity={humidity} windSpeed={windSpeed} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
