import React, {useContext} from 'react';
import {Context} from '../GlobalContextProvider';

function weather() {

  const {woeid, isLoading} = useContext(Context);
  console.log(woeid);
  const weatherToday = !isLoading && woeid && woeid.consolidated_weather && woeid.consolidated_weather[0];
  const date = new Date(!isLoading && weatherToday && weatherToday.applicable_date);
  const dateToday = !isLoading && date && date.toLocaleString('en-us', { day: 'numeric', weekday: 'short', month: 'short' })

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
      {
        !isLoading && weatherToday &&
          <div className="weather--container">
            <div className="weather--today--wrapper">
              <div className="weather--wrapper--wrap">
                <img src={`https://www.metaweather.com//static/img/weather/${weatherToday.weather_state_abbr}.svg`} alt="photo"/>
                <h3 className="heading3">{Math.floor(weatherToday.the_temp)} &deg;C</h3>
                <p>{weatherToday.weather_state_name}</p>
                <p>Today: {dateToday}</p>
                <h3 className="heading3">{woeid.title}</h3>
              </div>
            </div>
            <div className="others--weather--wrapper">
                <div className="weathers--wrapper">
                  {!isLoading && weathers && weathers.map(weather => (
                      <div key={weather.id} className="weather--wrapper">
                        <div className="weather--wrapper--wrap">
                          <p>{weather.applicable_date === dateTom ? 'Tommorow' : weather.applicable_date}</p>
                          <img src={`https://www.metaweather.com//static/img/weather/${weather.weather_state_abbr}.svg`} alt="photo"/>
                          <div className="temp">
                            <p>{Math.floor(weather.max_temp)} &deg;C</p>
                            <p>{Math.floor(weather.min_temp)} &deg;C</p>
                          </div>
                        </div>
                      </div>
                  ))}
              </div>
              <h2 className="heading2">Today's Highlights</h2>
              <div className="weather--highlight--container">
                <div className="weather--highlight--wrapper">
                  <h3 className="heading3">Wind status</h3>
                  <h4 className="heading4">{weatherToday.wind_speed.toFixed(2)} mph</h4>
                  <h4 className="heading4">{weatherToday.wind_direction_compass}</h4>
                </div>
                <div className="weather--highlight--wrapper">
                  <h3 className="heading3">Humidity</h3>
                  <h4 className="heading4">79%</h4>
                  <div className="progress--wrapper">
                    <label>01</label>
                    <label>50</label>
                    <label>100%</label>
                  </div>
                  <progress id="humidity" value={weatherToday.humidity} max="100">
                  </progress>
                </div>
                <div className="weather--highlight--wrapper">
                  <h3 className="heading3">Visibility</h3>
                  <h4 className="heading4">{weatherToday.visibility.toFixed(2)} miles</h4>
                </div>
                <div className="weather--highlight--wrapper">
                  <h3 className="heading3">Air Pressure</h3>
                  <h4 className="heading4">{weatherToday.air_pressure}</h4>
                </div>
              </div>
            </div>
          </div>
        }
    </section>
  )
}

export default weather
