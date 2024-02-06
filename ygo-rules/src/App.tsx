import React from 'react';
import logo from './logo.svg';
import './App.css';
import Field from './field/field';
import Card from './card/card';

function App() {
  return (
    <div className="App">
      <Field />
      <Card id="card1" content="Monster Card" />
    </div>
  );
}

export default App;
