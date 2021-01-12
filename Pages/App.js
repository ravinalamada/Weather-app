import React from 'react';
import Header from '../components/Header';
import Weather from '../components/weather';

function App() {
  return (
    <article className="App">
      <div>
        <Header />
        <Weather />
      </div>
    </article>
  )
}

export default App
