import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Field from './field/field';
import Card from './card/card';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CardType } from './card/cardObj';
import CardSearchComponent from './cardSearch/cardSearch';

const App: React.FC = () => {
  const [lastCardId, setLastCardId] = useState(0); // Initialize card ID state

  // Function to increment the card ID
  const incrementCardId = () => {
    setLastCardId(lastId => lastId + 1);
  };



  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Field onCardDrop={incrementCardId} />
        <CardSearchComponent />
      </div>
    </DndProvider>
  );
};

export default App;
