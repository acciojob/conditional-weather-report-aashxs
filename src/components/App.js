
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    setWeather({ temperature: 0, conditions: "Sunny" });
  }, []);

  return (
    <div className="App">
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
