import React, {useContext} from 'react';
import {Context} from '../GlobalContextProvider';
import WeatherLoading from './weatherLoading';
import IconsDir from '../direction-icons';

console.log(IconsDir);

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
    const dateTom = !isLoading && weatherTom && weatherTom.applicable_date;
    const weather3 = !isLoading && woeid && woeid.consolidated_weather && woeid.consolidated_weather[2];
    const weather4 = !isLoading && woeid && woeid.consolidated_weather && woeid.consolidated_weather[3];
    const weather5 = !isLoading && woeid && woeid.consolidated_weather && woeid.consolidated_weather[4];
    const weather6 = !isLoading && woeid && woeid.consolidated_weather && woeid.consolidated_weather[5];

    // Put all of the weathers which are not today and map them after
    const weathers = [weatherTom, weather3, weather4, weather5, weather6];

    return (
      <section className="section--container">
        <WeatherLoading />
        {
          !isLoading && weatherToday &&
          <div className="weathers--container">
            <div className="temp--units--container">
              <button className= 'weather__btn weather__btn--celsuis' onClick={convertFarUnitIntoCeluis}>&deg;C</button>
              <button className= 'weather__btn' onClick={convertUnitCeluisIntoFar}>&deg;F</button>
            </div>
            <div className="weathers--wrapper">
              {!isLoading && weathers && weathers.map(weather => (
              <div key={weather.id} className="weather--wrapper--contents">
                <p>{weather.applicable_date === dateTom ? 'Tommorow' : new Date(weather.applicable_date).toLocaleDateString('en-us', { day: 'numeric', weekday: 'short', month: 'short' })}</p>
                <img className="images" src={`https://www.metaweather.com//static/img/weather/${weather.weather_state_abbr}.svg`} alt="photo"/>
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
                <div className="weather--speed--wrapper">
                  <span className="weather--speed">{weatherToday.wind_speed.toFixed(2)}</span>
                  <span className="weather--speed--unit">mph</span>
                </div>
                <div className="weather--direction--wrapper">
                  <h4 className="weather--speed--direction">{weatherToday.wind_direction_compass}</h4>
                  <div className="weather--direction--icons--wrapper">
                    <svg className={`compass-icon compass-${weatherToday.wind_direction_compass
                  }`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E7E7EB" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
                  </div>
                </div>
              </div>
              <div className="weather--highlight--wrapper">
                <h3 className="weather__heading3">Humidity</h3>
                <div className="weather--humidity--wrapper">
                  <span className="weather--humidity">79</span>
                  <span className="weather--humidity--unit">%</span>
                </div>
              <div className="progress--value">
                <label>01</label>
                <label>50</label>
                <label>100</label>
              </div>
              <div className="progress--wrapper">
                <progress className="progress" id="humidity" value={weatherToday.humidity} max="100">
                </progress>
                <span className="percentage">%</span>
              </div>
            </div>
            <div className="weather--highlight--wrapper">
              <h3 className="weather__heading3">Visibility</h3>
              <div className="weather--visibility--wrapper">
                <span className="weather--visibility">{weatherToday.visibility.toFixed(2)}</span>
                <span className="weather--visibility--unit">miles</span>
              </div>
            </div>
            <div className="weather--highlight--wrapper">
              <h3 className="weather__heading3">Air Pressure</h3>
              <div className="weather--air--pressure--wrapper">
                <span className="weather--air--pressure">{weatherToday.air_pressure}</span>
                <span className="weather--air--pressure--unit">mb</span>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
    )
  }

export default weather
