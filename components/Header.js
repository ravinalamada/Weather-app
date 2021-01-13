import React, {useState, useEffect, useContext} from 'react';
import {Context} from '../GlobalContextProvider';

function Header() {
  const {woeid, isLoading, submitWeather} = useContext(Context);
  const [searchWeather, setSearchWeather] = useState('');
  return (
    <header>
      <h1>Weather App</h1>
      <form className="form" onSubmit={submitWeather}>
        <div className="form--container">
          <fieldset className="form__fieldset">
            <label></label>
            <input type="search"
                   className="form__input"
                   placeholder="Search for places"
                   value={searchWeather}
                   onChange={(e) => setSearchWeather(e.target.value)}/>
          </fieldset>
          <button className="form__btn">search</button>
        </div>
      </form>
    </header>
  )
}

export default Header
