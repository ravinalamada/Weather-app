import React, {useContext} from 'react';
import {Context} from '../GlobalContextProvider';

// This will display the loading context while the data is loading
function weatherLoading() {
  const {isLoading} = useContext(Context);

  return (
      <div className="container">
        {isLoading &&
          <div className="laoding-wrapper">
            <div className="loading">Loading...</div>
            <div className="lds-ellipsis"><div></div><div></div><div></div></div>
          </div>
        }
      </div>
  )
}

export default weatherLoading
