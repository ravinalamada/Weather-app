import React from 'react';
import WeatherToday from '../components/weatherToday';
import Weather from '../components/weather';
import Header from '../components/Header'

function App() {

  return (
    <article className="App">
      <h1>Weather App</h1>
      <div className="App--container">
        <Header />
        <WeatherToday />
        <Weather />
      </div>
    </article>
  )
}

export default App
