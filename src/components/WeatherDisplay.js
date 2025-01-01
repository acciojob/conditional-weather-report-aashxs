import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;

  const temperatureStyle = {
    color: temperature > 20 ? 'red' : 'blue',
  };

  return (
    <div>
      <span style={temperatureStyle}>Temperature: {temperature}</span>
      <span>Conditions: {conditions}</span>
    </div>
  );
}

export default WeatherDisplay;