import React, {useContext} from 'react';
import {Context} from '../GlobalContextProvider';

// This will display the loading context while the data is loading
function weatherLoading() {
  const {state} = useContext(Context);
  const {loading} = state

  return (
      <div className="container">
        {loading &&
            <div className="laoding-wrapper">
            <div className="loading">Loading</div>
            <div className="lds-ellipsis"><div></div><div></div><div></div></div>
          </div>
        }
      </div>
  )
}

export default weatherLoading
