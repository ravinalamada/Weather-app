import React, {useContext} from 'react';
import WeatherToday from '../components/weatherToday';
import Weather from '../components/weather';
import Header from '../components/Header';
import { Context } from '../GlobalContextProvider';

function App() {

  const {isClicked} = useContext(Context);

  return (
    <article className="App">
      <div className="App--container">
        <div className="App--wrapper">
          {!isClicked && <Header />}
          <WeatherToday />
        </div>
        <Weather />
      </div>
    </article>
  )
}

export default App
