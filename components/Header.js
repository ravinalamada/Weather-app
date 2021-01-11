import React from 'react'

function Header() {
  return (
    <header>
      <h1>Weather App</h1>
      <form className="form">
        <div className="form--container">
          <fieldset className="form__fieldset">
            <label></label>
            <input type="search"
                   className="form__input"
                   placeholder="Search for places"/>
          </fieldset>
          <button className="form__btn">search</button>
        </div>
      </form>
    </header>
  )
}

export default Header
