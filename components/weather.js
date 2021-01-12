import React, {useContext} from 'react';
import {Context} from '../GlobalContextProvider';

function weather() {

  const {state, dispatch} = useContext(Context);
  const {weather, loading} = state;
  const weatherToday = !loading && weather && weather.consolidated_weather[0];
  console.log(weatherToday);
  const date = new Date(!loading && weatherToday && weatherToday.applicable_date);
  const dateToday = !loading && date && date.toLocaleString('en-us', { day: 'numeric', weekday: 'short', month: 'short' })

  // Gets date tommorow
  const weatherTom = !loading && weather && weather.consolidated_weather[1];
  const date2 = !loading && weatherTom && weatherTom.applicable_date;
  const dateTom = !loading && date2 && date2.toLocaleString('en-us', { day: 'numeric', weekday: 'short', month: 'short' })
  const weather3 = !loading && weather && weather.consolidated_weather[2];
  const weather4 = !loading && weather && weather.consolidated_weather[3];
  const weather5 = !loading && weather && weather.consolidated_weather[4];
  const weather6 = !loading && weather && weather.consolidated_weather[5];

  // Put all of the weathers which are not today and map them after
  const weathers = [weatherTom, weather3, weather4, weather5, weather6];

  // Dispaly images
  // let X
  // const weatherImg = !loading && weather && weather.consolidated_weather.map(weather => weather.weather_state_name);
  // console.log(weatherImg);
  // const iconsImages = loading && weather.weatherImg.map(icon => {
  //   if(icon === "Light Rain") {
  //     let X = 'lr'
  //   }
  // })

  return (
    <section>
      {
        !loading && weatherToday &&
          <div className="weather--container">
            <div className="weather--today--wrapper">
              <img src="" alt="photo"/>
              <div>
                <h3>{Math.floor(weatherToday.the_temp)} C</h3>
                <p>{weatherToday.weather_state_name}</p>
                <p>Today: {dateToday}</p>
                <h3>{weather.title}</h3>
              </div>
            </div>
            <div className="others--weather--wrapper">
              <div className="weather--wrapper">
                {!loading && weathers && weathers.map(weather => (
                    <div key={weather.id}>
                      <div>
                        <p>{weather.applicable_date === dateTom ? 'Tommorow' : weather.applicable_date}</p>
                        <img src="" alt="photo"/>
                        <div className="temp">
                          <p>{Math.floor(weather.max_temp)} C</p>
                          <p>{Math.floor(weather.min_temp)} C</p>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
              <h2>Today's Highlights</h2>
              <div className="weather--highlight--container">
                <div className="weather--highlight--wrapper">
                  <h3>Wind status</h3>
                  <h4>{weatherToday.wind_speed.toFixed(2)} mph</h4>
                  <h4>{weatherToday.wind_direction_compass}</h4>
                </div>
                <div className="weather--highlight--wrapper">
                  <h3>Humidity</h3>
                  <h4>79%</h4>
                  <div className="progress--wrapper">
                    <label>01</label>
                    <label>50</label>
                    <label>100%</label>
                  </div>
                  <progress id="humidity" value={weatherToday.humidity} max="100">
                  </progress>
                </div>
                <div className="weather--highlight--wrapper">
                  <h3>Visibility</h3>
                  <h4>{weatherToday.visibility.toFixed(2)} miles</h4>
                </div>
                <div className="weather--highlight--wrapper">
                  <h3>Air Pressure</h3>
                  <h4>{weatherToday.air_pressure} mbar</h4>
                </div>
              </div>
            </div>
          </div>
        }
    </section>
  )
}

export default weather
