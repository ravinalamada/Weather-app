import React, { useContext } from 'react'
import { Context } from '../GlobalContextProvider'
import WeatherLoading from './weatherLoading'

function weather() {
  const {
    woeid,
    isLoading,
    isCeluis,
    convertFarUnitIntoCeluis,
    convertUnitCeluisIntoFar,
  } = useContext(Context)

  // Get the weather today and its detail
  const weatherToday =
    !isLoading &&
    woeid &&
    woeid.consolidated_weather &&
    woeid.consolidated_weather[0]

  // Gets date tommorow
  const weatherTom =
    !isLoading &&
    woeid &&
    woeid.consolidated_weather &&
    woeid.consolidated_weather[1]
  const dateTom = !isLoading && weatherTom && weatherTom.applicable_date
  const weather3 =
    !isLoading &&
    woeid &&
    woeid.consolidated_weather &&
    woeid.consolidated_weather[2]
  const weather4 =
    !isLoading &&
    woeid &&
    woeid.consolidated_weather &&
    woeid.consolidated_weather[3]
  const weather5 =
    !isLoading &&
    woeid &&
    woeid.consolidated_weather &&
    woeid.consolidated_weather[4]
  const weather6 =
    !isLoading &&
    woeid &&
    woeid.consolidated_weather &&
    woeid.consolidated_weather[5]

  // Put all of the weathers which are not today and map them after
  const weathers = [weatherTom, weather3, weather4, weather5, weather6]

  return (
    <div className='weather--container'>
      <WeatherLoading />
      {!isLoading && weatherToday && (
        <div className='weather--wrapper'>
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
              weathers &&
              weathers.map((weather) => (
                <div key={weather.id} className='weather--wrapper--contents'>
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
                </div>
              ))}
          </div>
          <div>
            <h2 className='heading2'>Today's Highlights</h2>
            <div className='weather--highlight--container'>
              <div className='weather--highlight--wrapper'>
                <p className='weather__headings'>Wind status</p>
                <p className='weather--value--wrapper'>
                  <span className='weather--value'>
                    {weatherToday.wind_speed.toFixed(2)}
                  </span>
                  mph
                </p>
                <div className='weather--direction--wrapper'>
                  <h4 className='weather--speed--direction'>
                    {weatherToday.wind_direction_compass}
                  </h4>
                  <div className='weather--direction--icons--wrapper'>
                    <svg
                      className={`compass-icon compass-${weatherToday.wind_direction_compass}`}
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='#E7E7EB'
                      width='18px'
                      height='18px'>
                      <path d='M0 0h24v24H0z' fill='none' />
                      <path d='M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z' />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='weather--highlight--wrapper'>
                <p className='weather__headings'>Humidity</p>
                <p className='weather--value--wrapper'>
                  <span className='weather--value'>79</span>%
                </p>
                <div className='progress--wrapper'>
                  <div className='progress--value'>
                    <label className='weather__label'>01</label>
                    <label className='weather__label'>50</label>
                    <label className='weather__label'>100</label>
                  </div>
                  <div className='progress__image--wrapper'>
                    <div
                      className='progress-bar'
                      style={{ width: weatherToday.humidity }}></div>
                    <p className='percentage'>%</p>
                  </div>
                </div>
              </div>
              <div className='weather--highlight--wrapper'>
                <p className='weather__headings'>Visibility</p>
                <p className='weather--value--wrapper'>
                  <span className='weather--value'>
                    {weatherToday.visibility.toFixed(2)}
                  </span>
                  miles
                </p>
              </div>
              <div className='weather--highlight--wrapper'>
                <p className='weather__headings'>Air Pressure</p>
                <p className='weather--value--wrapper'>
                  <span className='weather--value'>
                    {weatherToday.air_pressure}
                  </span>{' '}
                  mb
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default weather
