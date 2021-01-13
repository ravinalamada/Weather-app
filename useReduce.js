// import {useReducer, useEffect, useState} from 'react';
// import axios from 'axios';

// // cors API
// const CORS_API = 'https://cors-anywhere.herokuapp.com/';

// // The API that I am going to fetch
// function useReduce() {
//   const [location, setLocation] = useState('london');// Default location
//   const [woeid, setWoeid] = useState('44418'); // Default woeid
//   const [state, dispatch] = useReducer((state, action) => {
//       switch (action.type) {
//         case "FETCH_WEATHER": {
//           return {...state, loading: false, weather: action.weather}
//         }
//         case "FECTH_WEATHER_DATA": {
//           return {...state, loading: false, weather: action.weather}
//         }
//         default:
//           return state
//        }
//      }, {
//       loading: true,
//       weather: [],
//     })

//     // Fetch the jobs data
//     async function getWeather() {
//       const LOC_URL = `${CORS_API}https://www.metaweather.com/api/location/search/?query=${location}`
//       const fetchWeatherLoc = await axios(LOC_URL);
//       dispatch({type:"FETCH_WEATHER", weather: fetchWeatherLoc.data})
//       if(fetchWeatherLoc.length) {
//         console.log('kjkjwh');
//         const API_URL = `${CORS_API}https://www.metaweather.com/api/location/${fetchWeatherLoc[0].woeid}/`;
//         const weatherData = await axios(API_URL);
//         console.log(weatherData);
//         dispatch({type: "FECTH_WEATHER_DATA", weather: weatherData.data})
//       }
//     }

//     function getWeatherData() {

//     }

//     // This dispatched the type of fetch jobs
//      useEffect(() => {
//        setTimeout(() => {
//          dispatch({type:"FETCH_WEATHER"})
//          dispatch({type: "FECTH_WEATHER_DATA"})
//          getWeather()
//        }, 500)
//      }, [])

//     console.log(state);
//      // return the state and dispatch that I am going to use
//     return {state, dispatch}
// }

// export default useReduce
