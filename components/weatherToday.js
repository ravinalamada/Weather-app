import React, { useContext } from 'react'
import { Context } from '../GlobalContextProvider'
import SearchCity from './searchCity'
import Header from './Header'
import { Link } from 'react-router-dom'

function weather() {
  const { woeid, isLoading, isCeluis, nearestLoc, isNearestLoc } =
    useContext(Context)

  // Get the weather today and its detail
  const weatherToday =
    !isLoading &&
    woeid &&
    woeid.consolidated_weather &&
    woeid.consolidated_weather[0]
  const date = new Date(
    !isLoading && weatherToday && weatherToday.applicable_date
  )
  const dateToday =
    !isLoading &&
    date &&
    date.toLocaleString('en-us', {
      day: 'numeric',
      weekday: 'short',
      month: 'short',
    })

  return (
    <>
      {!isLoading && weatherToday && (
        <div className='weatherToday--container'>
          <Link to='/'>
            <div className='weatherToday--wrapper'>
              <Header />
              <img
                src={`https://www.metaweather.com//static/img/weather/${weatherToday.weather_state_abbr}.svg`}
                alt='images'
                className='weatherToday__image'
              />
              <div>
                {isCeluis ? (
                  <p className='weather--temp'>
                    {Math.floor(weatherToday.the_temp * 1.8 + 32)}&deg;F
                  </p>
                ) : (
                  <p className='weather--temp'>
                    {Math.floor(weatherToday.the_temp)}&deg;C
                  </p>
                )}
                <p className='weather--name'>
                  {weatherToday.weather_state_name}
                </p>
              </div>
              <div className='weatherToday--subWrapper'>
                <div className='date--wrapper'>
                  <p>Today</p>
                  <p>.</p>
                  <p>{dateToday}</p>
                </div>
                <div className='title--wrapper'>
                  <p className='heading3 weather--city'>
                    {isNearestLoc ? nearestLoc[0]?.title : woeid?.title}
                  </p>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='24'
                    viewBox='0 0 24 24'
                    width='24'
                    fill='#88869D'>
                    <path d='M0 0h24v24H0z' fill='none' />
                    <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
          <SearchCity />
        </div>
      )}
    </>
  )
}

export default weather
