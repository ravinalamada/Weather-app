import React, { useContext } from 'react'
import { Context } from '../GlobalContextProvider'
import { Link } from 'react-router-dom'

function weather() {
  const {
    woeid,
    isLoading,
    isCeluis,
    weathersData,
    convertFarUnitIntoCeluis,
    convertUnitCeluisIntoFar,
  } = useContext(Context)

  const weathers = weathersData?.slice(1, 6)
  // Gets date tommorow
  const weatherTom =
    !isLoading &&
    woeid &&
    woeid.consolidated_weather &&
    woeid.consolidated_weather[1]
  const dateTom = !isLoading && weatherTom && weatherTom.applicable_date

  return (
    <>
      {!isLoading && (
        <>
          <div className='temp--units--wrapper'>
            <button
              className={`${
                !isCeluis ? 'bg-light-gray' : 'bg-dark-gray'
              } weather__btn`}
              onClick={convertFarUnitIntoCeluis}>
              &deg;C
            </button>
            <button
              className={isCeluis ? 'bg-light-gray' : 'bg-dark-gray'}
              onClick={convertUnitCeluisIntoFar}>
              &deg;F
            </button>
          </div>
          <div className='weather--subWrapper'>
            {!isLoading &&
              weathers?.map((weather) => (
                <div key={weather.id} className='weather--wrapper--contents'>
                  <Link to={`/${weather.id}`}>
                    <p className='weather--date'>
                      {weather.applicable_date === dateTom
                        ? 'Tommorow'
                        : new Date(weather.applicable_date).toLocaleDateString(
                            'en-us',
                            { day: 'numeric', weekday: 'short', month: 'short' }
                          )}
                    </p>
                    <img
                      className='weather--images'
                      src={`https://www.metaweather.com//static/img/weather/${weather.weather_state_abbr}.svg`}
                      alt='photo'
                    />
                    <div className='weather--temp--wrapper'>
                      {isCeluis ? (
                        <p className='weather--unit'>
                          {' '}
                          {Math.floor(weather.max_temp * 1.8 + 32)} &deg;F
                        </p>
                      ) : (
                        <p>{Math.floor(weather.max_temp)} &deg;C</p>
                      )}
                      {isCeluis ? (
                        <p className='weather--unit'>
                          {' '}
                          {Math.floor(weather.min_temp * 1.8 + 32)} &deg;F
                        </p>
                      ) : (
                        <p>{Math.floor(weather.min_temp)} &deg;C</p>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  )
}

export default weather
