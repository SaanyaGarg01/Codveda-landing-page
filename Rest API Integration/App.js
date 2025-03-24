import React, { useState, useEffect } from "react";
import axios from "axios";
import debounce from "lodash.debounce";

const API_KEY = "YOUR_OPENWEATHER_API_KEY"; // Replace with your API key
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch weather data
  const fetchWeather = async (searchQuery) => {
    if (!searchQuery) return;
    
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(API_URL, {
        params: { q: searchQuery, appid: API_KEY, units: "metric" },
      });
      setWeather(response.data);
    } catch (err) {
      setError("City not found!");
    } finally {
      setLoading(false);
    }
  };

  // Debounced function
  const debouncedFetchWeather = debounce(fetchWeather, 1000);

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedFetchWeather(value);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Weather Search</h2>
      <input
        type="text"
        placeholder="Enter city name..."
        value={query}
        onChange={handleInputChange}
        style={{ padding: "10px", width: "250px" }}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && (
        <div>
          <h3>{weather.name}, {weather.sys.country}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
