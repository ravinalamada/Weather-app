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
                        <img src="/static/img/weather/sn.svg" alt="photo"/>
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

import {useReducer, useEffect, useState} from 'react';
import axios from 'axios';

// The API that I am going to fetch
const API_CORS = "https://cors-anywhere.herokuapp.com/";
// const endpoint1 = "https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02";
const endpoint2 = "https://www.metaweather.com/api/location/";

function useReduce() {
  const [location, setLocation] = useState('london');// Default location
  const [woeid, setWoeid] = useState('44418'); // Default woeid
  const [state, dispatch] = useReducer((state, action) => {
      switch (action.type) {
        case "FETCH_WEATHER": {
          return {...state, loading: false, weather: action.weather}
        }
        default:
          return state
       }
     }, {
      loading: true,
      weather: [],
    })

    // Fetch the jobs data
    async function getWeather() {
      const fetchWeather = await axios(API_CORS + endpoint2 + woeid + '/');
      dispatch({type:"FETCH_WEATHER", weather: fetchWeather.data})
    }

    // This dispatched the type of fetch jobs
     useEffect(() => {
       setTimeout(() => {
         dispatch({type:"FETCH_WEATHER"})
         getWeather()
       }, 500)
     }, [])

     // return the state and dispatch that I am going to use
    return {state, dispatch}
}

export default useReduce

