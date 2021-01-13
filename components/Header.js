import React, {useState, useEffect, useContext} from 'react';
import {Context} from '../GlobalContextProvider';

function Header() {
  const {handleClick} = useContext(Context);

  return (
    <header>
      <h1>Weather App</h1>
      <div>
        <button onClick={handleClick}>Search for places</button>
        <button className="form__btn">search</button>
      </div>
    </header>
  )
}

export default Header
