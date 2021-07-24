import React, { useContext } from 'react'
import WeatherWeekly from './weatherWeekly'
import WeatherDaily from './weatherTodayDetails'
import WeatherDetails from './weatherDetails'
import { Switch, Route } from 'react-router-dom'
import WeatherLoading from './weatherLoading'
import { Context } from '../GlobalContextProvider'

export default function Weather() {
  const { isLoading } = useContext(Context)

  return (
    <div className='weather--container'>
      <WeatherLoading />
      {!isLoading && (
        <div className='weather--wrapper'>
          <WeatherWeekly />
          <Switch>
            <Route exact path='/'>
              <WeatherDaily />
            </Route>
            <Route exact path='/:id'>
              <WeatherDetails />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  )
}
