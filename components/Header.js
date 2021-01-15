import React, {useState, useEffect, useContext} from 'react';
import {Context} from '../GlobalContextProvider';

function Header() {
  const {handleClick} = useContext(Context);

  return (
    <header className="header">
      <div className="header--container">
        <button className="header__btn--search" onClick={handleClick}>Search for places</button>
        <button className="header__btn">
          <svg stroke="#E7E7EB" fill="#E7E7EB" strokeWidth="0" viewBox="0 0 24 24" height="22px" width="22px" xmlns="http://www.w3.org/2000/svg"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>
        </button>
      </div>
    </header>
  )
}

export default Header
