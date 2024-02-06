import React from 'react';
import logo from './logo.svg';
import './App.css';
import Field from './field/field';
import Card from './card/card';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CardType } from './card/cardObj';

// A demo card object
const demoCard: CardType = {
  id: '1',
  type: 'monster', // This now correctly matches the CardType definition
  content: 'Demo Monster Card',
};

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Field />
        {/* Pass the demoCard object as a prop to the Card */}
        <Card card={demoCard} />
      </div>
    </DndProvider>
  );
};

export default App;
