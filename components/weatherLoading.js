import React, { useContext } from 'react'
import { Context } from '../GlobalContextProvider'

// This will display the loading context while the data is loading
function weatherLoading() {
  const { isLoading } = useContext(Context)

  return (
    <>
      {isLoading && (
        <div className='loading--wrapper'>
          <div className='lds-ring'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  )
}

export default weatherLoading
