// Field.tsx
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Zone from '../zone/zone'; // Import your Zone component
import './field.css'; // Import your CSS for styling

// Optionally, if you have defined specific zone types
import { ZoneType } from '../zone/zoneTypes'; // Adjust path as necessary

const Field: React.FC = () => {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="yu-gi-oh-field">
          {/* First Row: Extra Deck, Pendulum Zones, Spell Zones, Pendulum Zone, Deck */}
          <div className="field-row">
            <Zone type="deck" label="D" />
            <Zone type="pendulum" label="P/S" />
            <Zone type="spell-trap" label="S" />
            <Zone type="spell-trap" label="S" />
            <Zone type="spell-trap" label="S" />
            <Zone type="pendulum" label="P/S" />
            <Zone type="extra-deck" label="E" />
          </div>
  
          {/* Second Row: Graveyard, Monster Zones, Field Zone */}
          <div className="field-row">
            <Zone type="graveyard" label="G" />
            <Zone type="monster" label="M" />
            <Zone type="monster" label="M" />
            <Zone type="monster" label="M" />
            <Zone type="monster" label="M" />
            <Zone type="monster" label="M" />
            <Zone type="field-spell" label="F" />
          </div>
  
          {/* Third Row: Banished, Extra Monster Zones */}
          <div className="field-row">
            <Zone type="banished" label="B" />
            <div className="zone">X</div> {/* Placeholder for alignment */}
            <Zone type="extra-monster" label="EM" />
            <div className="zone">X</div> {/* Placeholder for alignment */}
            <Zone type="extra-monster" label="EM" />
            <div className="zone">X</div> {/* Placeholder for alignment */}
            <Zone type="banished" label="B" />
          </div>
  
          {/* Fourth Row: Mirror of Second Row for Player 2 */}
          <div className="field-row">
            <Zone type="field-spell" label="F" />
            <Zone type="monster" label="M" />
            <Zone type="monster" label="M" />
            <Zone type="monster" label="M" />
            <Zone type="monster" label="M" />
            <Zone type="monster" label="M" />
            <Zone type="graveyard" label="G" />
          </div>
  
          {/* Fifth Row: Mirror of First Row for Player 2 */}
          <div className="field-row">
            <Zone type="extra-deck" label="E" />
            <Zone type="pendulum" label="P/S" />
            <Zone type="spell-trap" label="S" />
            <Zone type="spell-trap" label="S" />
            <Zone type="spell-trap" label="S" />
            <Zone type="pendulum" label="P/S" />
            <Zone type="deck" label="D" />
          </div>
        </div>
      </DndProvider>
    );
  };
  
  export default Field;
