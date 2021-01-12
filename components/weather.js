import React, {useContext} from 'react';
import {Context} from '../GlobalContextProvider';

function weather() {

  const {state, dispatch} = useContext(Context);
  const {weather, loading} = state;
  const weatherToday = !loading && weather && weather.consolidated_weather[0];
  console.log(weatherToday);
  const date = !loading && weatherToday && weatherToday.applicable_date;
  const dateToday = !loading && date && date.toLocaleString('en-us', { dateToday: 'short' })

  // Gets date tommorow
  const weatherTom = !loading && weather && weather.consolidated_weather[1];
  const date2 = !loading && weatherTom && weatherTom.applicable_date;
  const dateTom = !loading && date2 && date2.toLocaleString('en-us', { dateTom: 'short' })
  const weather3 = !loading && weather && weather.consolidated_weather[2];
  const weather4 = !loading && weather && weather.consolidated_weather[3];
  const weather5 = !loading && weather && weather.consolidated_weather[4];
  const weather6 = !loading && weather && weather.consolidated_weather[5];

  // Put all of the weathers which are not today and map them after
  const weathers = [weatherTom, weather3, weather4, weather5, weather6];

  return (
    <section>
      {
        !loading && weatherToday &&
          <div className="weather--container">
            <div className="weather--today--wrapper">
              <img src="" alt="photo"/>
              <div>
                <p>{}</p>
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
              <div>
                <div>
                  <h3>Wind status</h3>
                  <h4></h4>
                </div>
                <div>
                  <h3>Humidity</h3>
                  <h4></h4>
                  <progress>
                  </progress>
                </div>
                <div>
                  <h3>Visibility</h3>
                  <h4></h4>
                </div>
                <div>
                  <h3>Air Pressure</h3>
                  <h4></h4>
                </div>
              </div>
            </div>
          </div>
        }
    </section>
  )
}

export default weather
