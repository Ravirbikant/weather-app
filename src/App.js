import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const APIKey = "e4e5c3ae19a7a47c9bb9ba7dd2d690af";
  const [noData, setNoData] = useState(false);
  const [background, setBackground] = useState();
  const [temperature, setTemperature] = useState();
  const [description, setDescription] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();

  async function handleSearch() {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
    );
    let json = await res.json();
    if (json.cod === 404) setNoData(true); //Write code to handle no data
  }

  return (
    <div className="App">
      <input
        type="text"
        value={city}
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default App;
