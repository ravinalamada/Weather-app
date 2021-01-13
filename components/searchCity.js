import React, {useState, useEffect, useContext} from 'react';
import {Context} from '../GlobalContextProvider';

function searchCity() {

  const {location, isLoading, isClicked, setLocation, submitWeather} = useContext(Context);

  return (
    <div>
      {isClicked &&
        <form className="form" onSubmit={submitWeather}>
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
    </div>
  )
}

export default searchCity
