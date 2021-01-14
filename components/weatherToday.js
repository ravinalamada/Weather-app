import React, {useContext, useState} from 'react';
import {Context} from '../GlobalContextProvider';
import SearchCity from './searchCity';
import WeatherLoading from './weatherLoading';
import Header from './Header';

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
    <section>
      <WeatherLoading />
      {
        !isLoading && weatherToday &&
          <div className="weather--container">
            {!isClicked ?
              <div className="weather--today--container">
                <Header />
               <div className="weather--today--wrapper">
                 <img className="weather__img--today" src={`https://www.metaweather.com//static/img/weather/${weatherToday.weather_state_abbr}.svg`} alt="photo"/>
                 {isCeluis ? <h3 className="weather--temp"> {Math.floor((weatherToday.the_temp)* 1.8 + 32)}  &deg;F</h3>: <h3 className="weather--temp">{Math.floor(weatherToday.the_temp)} &deg;C</h3>}
                 <p className="weather--name">{weatherToday.weather_state_name}</p>
                 <p className="weather--date">Today: {dateToday}</p>
                 <h3 className="heading3 weather--city">{woeid.title}</h3>
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
