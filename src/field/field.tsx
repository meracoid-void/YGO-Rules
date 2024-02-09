// Field.tsx
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Zone from '../zone/zone'; // Import your Zone component
import './field.css'; // Import your CSS for styling

// Optionally, if you have defined specific zone types
import { ZoneType } from '../zone/zoneTypes'; // Adjust path as necessary

interface FieldProps {
    onCardDrop: () => void; // Function to increment card ID
}

const Field: React.FC<FieldProps> = ({ onCardDrop }) => {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="yu-gi-oh-field">
          {/* First Row: Extra Deck, Pendulum Zones, Spell Zones, Pendulum Zone, Deck */}
          <div className="field-row">
            <Zone type="deck" label="D" onCardDrop={onCardDrop} />
            <Zone type="pendulum" label="P/S" onCardDrop={onCardDrop} />
            <Zone type="spell-trap" label="S" onCardDrop={onCardDrop} />
            <Zone type="spell-trap" label="S" onCardDrop={onCardDrop} />
            <Zone type="spell-trap" label="S" onCardDrop={onCardDrop} />
            <Zone type="pendulum" label="P/S" onCardDrop={onCardDrop} />
            <Zone type="extra-deck" label="E" onCardDrop={onCardDrop} />
          </div>
  
          {/* Second Row: Graveyard, Monster Zones, Field Zone */}
          <div className="field-row">
            <Zone type="graveyard" label="G" onCardDrop={onCardDrop} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} />
            <Zone type="field-spell" label="F" onCardDrop={onCardDrop} />
          </div>
  
          {/* Third Row: Banished, Extra Monster Zones */}
          <div className="field-row">
            <Zone type="banished" label="B" onCardDrop={onCardDrop} />
            <div className="zone">X</div> {/* Placeholder for alignment */}
            <Zone type="extra-monster" label="EM" onCardDrop={onCardDrop} />
            <div className="zone">X</div> {/* Placeholder for alignment */}
            <Zone type="extra-monster" label="EM" onCardDrop={onCardDrop} />
            <div className="zone">X</div> {/* Placeholder for alignment */}
            <Zone type="banished" label="B" onCardDrop={onCardDrop} />
          </div>
  
          {/* Fourth Row: Mirror of Second Row for Player 2 */}
          <div className="field-row">
            <Zone type="field-spell" label="F" onCardDrop={onCardDrop} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} />
            <Zone type="graveyard" label="G" onCardDrop={onCardDrop} />
          </div>
  
          {/* Fifth Row: Mirror of First Row for Player 2 */}
          <div className="field-row">
            <Zone type="extra-deck" label="E" onCardDrop={onCardDrop} />
            <Zone type="pendulum" label="P/S" onCardDrop={onCardDrop} />
            <Zone type="spell-trap" label="S" onCardDrop={onCardDrop} />
            <Zone type="spell-trap" label="S" onCardDrop={onCardDrop} />
            <Zone type="spell-trap" label="S" onCardDrop={onCardDrop} />
            <Zone type="pendulum" label="P/S" onCardDrop={onCardDrop} />
            <Zone type="deck" label="D" onCardDrop={onCardDrop} />
          </div>
        </div>
      </DndProvider>
    );
  };
  
  export default Field;
