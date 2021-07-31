import React, { useState, useEffect, createContext } from 'react'
const Context = createContext()

// cors API
const CORS_API = 'https://cors-anywhere.herokuapp.com/'
const API_URL_LOC = `${CORS_API}https://www.metaweather.com/api/location/`

// This will provide data to all the consumer
function GlobalContextProvider({ children }) {
  const [location, setLocation] = useState('') // Default location
  const [query, setQuery] = useState([])
  const [woeid, setWoeid] = useState('44418') // Default woeid
  const [isLoading, setIsLoading] = useState(true) // Loading the page
  const [isClicked, setIsClicked] = useState(false)
  const [isCeluis, setIsCeluis] = useState(false)
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [nearestLoc, setNearestData] = useState([])
  const [isNearestLoc, setIsNearestLoc] = useState(false)

  // Fetch the weather data
  async function getWeatherFromWoeid() {
    const API_URL_WOEID = `${API_URL_LOC}${woeid}/`
    const fetchWeatherWoeid = await fetch(API_URL_WOEID)
    const weatherData = await fetchWeatherWoeid.json()
    setIsLoading(false)
    setIsNearestLoc(false)
    setWoeid(weatherData)
  }

  async function getWeather() {
    setIsNearestLoc(false)
    // Fetch weather location
    const fetchWeatherLocData = await fetch(
      `${API_URL_LOC}search/?query=${location ? location : null}`
    )
    const data = await fetchWeatherLocData.json()
    setQuery(data)
    // Check if there something inside of the data location
    if (data.length) {
      const findWoeid = data.find((data) => data.woeid)
      setIsLoading(false)
      const API_URL_WOEID = `${API_URL_LOC}${findWoeid?.woeid}/`
      const fetchWeatherWoeid = await fetch(API_URL_WOEID)
      const weatherData = await fetchWeatherWoeid.json()
      setWoeid(weatherData)
    }
  }

  const fetchNearestLoc = async () => {
    setIsNearestLoc(true)
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    })
    setIsLoading(false)
    await fetch(`${API_URL_LOC}search/?lattlong=${lat},${long}`)
      .then((res) => res.json())
      .then((result) => {
        setNearestData(result)
      })
  }

  // get the data
  useEffect(() => {
    location ? getWeather() : getWeatherFromWoeid()
    isNearestLoc && fetchNearestLoc()
  }, [location, lat, long])

  // // Submit the data
  function submitWeather(e) {
    e.preventDefault()
    getWeather()
    setIsClicked(false)
  }

  // Show the pannel
  function handleClick() {
    setIsClicked(true)
  }

  // Toggle the units
  function convertUnitCeluisIntoFar() {
    setIsCeluis(true)
  }

  function convertFarUnitIntoCeluis() {
    setIsCeluis(false)
  }

  return (
    <Context.Provider
      value={{
        location,
        woeid,
        isLoading,
        isClicked,
        isCeluis,
        query,
        nearestLoc,
        weathersData: woeid.consolidated_weather,
        nearestLoc,
        isNearestLoc,
        convertFarUnitIntoCeluis,
        convertUnitCeluisIntoFar,
        submitWeather,
        fetchNearestLoc,
        setLocation,
        handleClick,
      }}>
      {children}
    </Context.Provider>
  )
}

export { GlobalContextProvider, Context }
