export default function WeatherBox({ image, temperature, description }) {
  return (
    <div className="weather-box">
      <img src={image} />
      <p className="temperature">{temperature}</p>
      <p className="description">{description}</p>
    </div>
  );
}
