import React, {createContext} from 'react';
import useReduce from './useReduce';

const Context = createContext();

// This will provide data to all the consumer
function GlobalContextProvider({children}) {
  const {state, dispatch} = useReduce()

  return (
    <Context.Provider value={{state, dispatch}}>
       {children}
    </Context.Provider>
  )
}

export{ GlobalContextProvider, Context}
