import React, { useContext } from 'react'
import { Context } from '../GlobalContextProvider'
import { useParams } from 'react-router-dom'

export default function weatherDetails() {
  const { id } = useParams()
  const { woeid, weathersData, isLoading } = useContext(Context)
  const weatherDetailToDisplay =
    weathersData && weathersData.find((w) => w.id === Number(id))

  const weatherTom =
    !isLoading &&
    woeid &&
    woeid.consolidated_weather &&
    woeid.consolidated_weather[1]
  const dateTom = !isLoading && weatherTom && weatherTom.applicable_date

  return (
    <div>
      <h2 className='heading2'>
        {weatherDetailToDisplay?.applicable_date === dateTom
          ? 'Tommorow'
          : new Date(
              weatherDetailToDisplay?.applicable_date
            ).toLocaleDateString('en-us', {
              weekday: 'long',
            })}
        's highlights
      </h2>
      <div className='weather--highlight--container'>
        <div className='weather--highlight--wrapper'>
          <p className='weather__headings'>Wind status</p>
          <p className='weather--value--wrapper'>
            <span className='weather--value'>
              {weatherDetailToDisplay?.wind_speed.toFixed(2)}
            </span>
            mph
          </p>
          <div className='weather--direction--wrapper'>
            <h4 className='weather--speed--direction'>
              {weatherDetailToDisplay?.wind_direction_compass}
            </h4>
            <div className='weather--direction--icons--wrapper'>
              <svg
                className={`compass-icon compass-${weatherDetailToDisplay?.wind_direction_compass}`}
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
                style={{ width: weatherDetailToDisplay?.humidity }}></div>
              <p className='percentage'>%</p>
            </div>
          </div>
        </div>
        <div className='weather--highlight--wrapper'>
          <p className='weather__headings'>Visibility</p>
          <p className='weather--value--wrapper'>
            <span className='weather--value'>
              {weatherDetailToDisplay?.visibility.toFixed(2)}
            </span>
            miles
          </p>
        </div>
        <div className='weather--highlight--wrapper'>
          <p className='weather__headings'>Air Pressure</p>
          <p className='weather--value--wrapper'>
            <span className='weather--value'>
              {weatherDetailToDisplay?.air_pressure}
            </span>{' '}
            mb
          </p>
        </div>
      </div>
    </div>
  )
}
