import React, {useState, useContext} from 'react';
import {Context} from '../GlobalContextProvider';

function searchCity() {

  const {location, isClicked, setLocation, submitWeather} = useContext(Context);
  const [isShowedCity, setIsShowedCity] = useState(false);

  // Toggle the button that will show the city which are searched

  function toggleButton(e) {
    e.preventDefault();
    setIsShowedCity(true);
  }

  return (
    <div className="search--weather--app">
      {isClicked &&
        <form className="form" onSubmit={toggleButton}>
          <div className="form--container">
            <fieldset className="form__fieldset">
              <input type="search"
                    className="form__input"
                    placeholder="Search for places"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}/>
            </fieldset>
            <button className="form__btn">search</button>
          </div>
        </form>
      }
      <div>
        {isShowedCity ? <button onClick={submitWeather}>{location}</button> : null}
      </div>
    </div>
  )
}

export default searchCity
