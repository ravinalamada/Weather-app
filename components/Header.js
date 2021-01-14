import React, {useState, useEffect, useContext} from 'react';
import {Context} from '../GlobalContextProvider';

function Header() {
  const {handleClick} = useContext(Context);

  return (
    <header className="header">
      <div className="header--container">
        <button className="header__btn--search" onClick={handleClick}>Search for places</button>
        <button className="header__btn"></button>
      </div>
    </header>
  )
}

export default Header
