import React, {useContext, useState} from 'react';
import {Context} from '../GlobalContextProvider';
import WeatherLoading from './weatherLoading';
import WeatherToday from './weatherToday';

function weather() {

  const {
    woeid,
    isLoading,
    isCeluis,
    convertFarUnitIntoCeluis,
    convertUnitCeluisIntoFar,} = useContext(Context);

    // Get the weather today and its detail
    const weatherToday = !isLoading && woeid && woeid.consolidated_weather && woeid.consolidated_weather[0];

    // Gets date tommorow
    const weatherTom = !isLoading && woeid && woeid.consolidated_weather && woeid.consolidated_weather[1];
    const date2 = !isLoading && weatherTom && weatherTom.applicable_date;
    const dateTom = !isLoading && date2 && date2.toLocaleString('en-us', { day: 'numeric', weekday: 'short', month: 'short' })
    const weather3 = !isLoading && woeid && woeid.consolidated_weather && woeid.consolidated_weather[2];
    const weather4 = !isLoading && woeid && woeid.consolidated_weather && woeid.consolidated_weather[3];
    const weather5 = !isLoading && woeid && woeid.consolidated_weather && woeid.consolidated_weather[4];
    const weather6 = !isLoading && woeid && woeid.consolidated_weather && woeid.consolidated_weather[5];

    // // Put all of the weathers which are not today and map them after
    const weathers = [weatherTom, weather3, weather4, weather5, weather6];

    return (
      <section>
        <WeatherLoading />
        {
          !isLoading && weatherToday &&
          <div className="weathers--container">
            <div className="temp--units--container">
              <button className="weather__btn" onClick={convertFarUnitIntoCeluis}>&deg;C</button>
              <button className="weather__btn" onClick={convertUnitCeluisIntoFar}>&deg;F</button>
            </div>
            <div className="weathers--wrapper">
              {!isLoading && weathers && weathers.map(weather => (
              <div key={weather.id} className="weather--wrapper--contents">
                <p>{weather.applicable_date === dateTom ? 'Tommorow' : weather.applicable_date}</p>
                <img src={`https://www.metaweather.com//static/img/weather/${weather.weather_state_abbr}.svg`} alt="photo"/>
                <div className="weather--temp--wrapper">
                  {isCeluis ? <p> {Math.floor((weather.max_temp) * 1.8 + 32)}  &deg;F</p>: <p>{Math.floor(weather.max_temp)}  &deg;C</p>}
                  {isCeluis ? <p> {Math.floor((weather.min_temp) * 1.8 + 32)}  &deg;F</p>: <p>{Math.floor(weather.min_temp)}  &deg;C</p>}
                </div>
              </div>
            ))}
            </div>
            <h2 className="heading2">Today's Highlights</h2>
            <div className="weather--highlight--container">
              <div className="weather--highlight--wrapper">
                <h3 className="weather__heading3">Wind status</h3>
                <h4 className="weather--speed">{weatherToday.wind_speed.toFixed(2)} mph</h4>
                <h4 className="weather--speed">{weatherToday.wind_direction_compass}</h4>
              </div>
              <div className="weather--highlight--wrapper">
                <h3 className="weather__heading3">Humidity</h3>
                <h4 className="weather--humidity">79%</h4>
              <div className="progress--wrapper">
                <label>01</label>
                <label>50</label>
                <label>100%</label>
              </div>
              <progress id="humidity" value={weatherToday.humidity} max="100">
              </progress>
            </div>
            <div className="weather--highlight--wrapper">
              <h3 className="weather__heading3">Visibility</h3>
              <h4 className="weather--visibility">{weatherToday.visibility.toFixed(2)} miles</h4>
            </div>
            <div className="weather--highlight--wrapper">
              <h3 className="weather__heading3">Air Pressure</h3>
              <h4 className="weather--air--pressure">{weatherToday.air_pressure} mb</h4>
            </div>
          </div>
        </div>
      }
    </section>
    )
  }

export default weather
