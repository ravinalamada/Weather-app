import React, {useContext, useState} from 'react';
import {Context} from '../GlobalContextProvider';
import SearchCity from './searchCity';
import WeatherLoading from './weatherLoading';

function weather() {

  const {
    woeid,
    isLoading,
    isClicked,
    isCeluis,
  } = useContext(Context);

  // Get the weather today and its detail
  const weatherToday = !isLoading && woeid && woeid.consolidated_weather && woeid.consolidated_weather[0];
  const date = new Date(!isLoading && weatherToday && weatherToday.applicable_date);
  const dateToday = !isLoading && date && date.toLocaleString('en-us', { day: 'numeric', weekday: 'short', month: 'short' })

  return (
    <section className="section--weaher--today">
      <WeatherLoading />
      {
        !isLoading && weatherToday &&
          <div className="weather--container">
            {!isClicked ?
              <div className="weather--today--container">
               <div className="weather--today--wrapper">
                 <img className="weather__img--today" src={`https://www.metaweather.com//static/img/weather/${weatherToday.weather_state_abbr}.svg`} alt="photo"/>
                 {isCeluis
                  ?
                    <div className="weather--temperature--wrapper">
                      <p className="weather--temp">{Math.floor((weatherToday.the_temp)* 1.8 + 32)}</p>
                      <span className="weather--temp--unit"> &deg;F</span>
                    </div>
                  :
                    <div className="weather--temperature--wrapper">
                      <p className="weather--temp">{Math.floor(weatherToday.the_temp)}</p>
                      <span className="weather--temp--unit">&deg;C</span>
                    </div>
                 }
                 <p className="weather--name">{weatherToday.weather_state_name}</p>
                 <p className="weather--date">Today: {dateToday}</p>
                 <div className="weaterTod--title--wrapper">
                   <h3 className="heading3 weather--city">{woeid.title}</h3>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#88869D"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                 </div>
                </div>
              </div>
              : <SearchCity/>
            }
          </div>
        }
    </section>
  )
}

export default weather
