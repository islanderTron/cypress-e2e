import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [clicked, setClicked] = useState(0);

  function clickHandler() {
    return setClicked(clicked + 1);
  }

  return (
    <div className="App">
      <button onClick={() => clickHandler()}>Test</button>
      <p> {clicked} Time Clicked</p>
    </div>
  );
}

export default App;