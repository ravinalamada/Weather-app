import React, { useState, useContext } from 'react'
import { Context } from '../GlobalContextProvider'

function searchCity() {
  const { location, query, isClicked, setLocation, submitWeather } =
    useContext(Context)
  const [isShowedCity, setIsShowedCity] = useState(false)

  // Toggle the button that will show the city which are searched
  function toggleButton(e) {
    e.preventDefault()
    setIsShowedCity(true)
  }

  return (
    <div className={isClicked ? 'show-panel' : 'hide-panel'}>
      <button className='close--pannel' onClick={submitWeather}>
        X
      </button>
      <form className='form' onSubmit={toggleButton}>
        <div className='form--container'>
          <fieldset className='form__fieldset'>
            <input
              type='search'
              className='form__input'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </fieldset>
          <button className='form__btn'>search</button>
        </div>
      </form>
      <div className='cities--wrapper'>
        {isShowedCity &&
          query?.map((loc) => (
            <button
              key={loc.woeid}
              onClick={() => {
                setLocation(loc.title)
                submitWeather()
              }}
              className='btn--seacrh--city'>
              {loc.title}
            </button>
          ))}
      </div>
    </div>
  )
}

export default searchCity
