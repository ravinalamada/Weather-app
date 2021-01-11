import {useReducer, useEffect} from 'react';
import axios from 'axios';

// The API that I am going to fetch
const endpoint = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/";

function useReduce() {
  const [state, dispatch] = useReducer((state, action) => {
      switch (action.type) {
        case "FETCH_WEATHER": {
          return {...state, loading: false, weather: action.weather}
        }
        default:
          return state
       }
     }, {
      loading: true,
      weather: [],
    })

    // Fetch the jobs data
    async function getWeather() {
      const fetchWeather = await axios(endpoint);
      dispatch({type:"FETCH_WEATHER", weather: fetchWeather.data})
    }

    // This dispatched the type of fetch jobs
     useEffect(() => {
       setTimeout(() => {
         dispatch({type:"FETCH_WEATHER"})
         getWeather()
       }, 500)
     }, [])

     // return the state and dispatch that I am going to use
    return {state, dispatch}
}

export default useReduce
