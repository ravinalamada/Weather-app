import {useReducer, useEffect} from 'react';
import axios from 'axios';

// The API that I am going to fetch
const API_CORS = "https://cors-anywhere.herokuapp.com/";
const endpoint1 = "https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02";
const endpoint2 = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2488042/";

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
      const fetchWeather = await axios(API_CORS + endpoint2);
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
