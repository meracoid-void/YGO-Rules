// Field.tsx
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Zone from '../zone/zone'; // Import your Zone component
import './field.css'; // Import your CSS for styling
import { RulingsResponse } from '../rulings/rulingsResponse';
import axios from 'axios';
import RulingsComponent from '../rulings/rulings';

interface FieldProps {
    onCardDrop: () => void; // Function to increment card ID
}

const Field: React.FC<FieldProps> = ({ onCardDrop }) => {
  const [rulings, setRulings] = useState<RulingsResponse | null>(null);

  const fetchRulingsForCard = async (cardId: number) => {
    try {
      const response = await axios.get(`https://db.ygorganization.com/data/qa/${cardId}`);
      setRulings(response.data); // Assuming response structure matches your RulingsResponse type
    } catch (error) {
      console.error('Error fetching rulings:', error);
    }
  };

    return (
      <DndProvider backend={HTML5Backend}>
        <div className="yu-gi-oh-field">
          {/* First Row: Extra Deck, Pendulum Zones, Spell Zones, Pendulum Zone, Deck */}
          <div className="field-row">
            <Zone type="deck" label="D" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="pendulum" label="P/S" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="spell-trap" label="S" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="spell-trap" label="S" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="spell-trap" label="S" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="pendulum" label="P/S" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="extra-deck" label="E" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
          </div>
  
          {/* Second Row: Graveyard, Monster Zones, Field Zone */}
          <div className="field-row">
            <Zone type="graveyard" label="G" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="field-spell" label="F" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
          </div>
  
          {/* Third Row: Banished, Extra Monster Zones */}
          <div className="field-row">
            <Zone type="banished" label="B" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <div className="zone">X</div> {/* Placeholder for alignment */}
            <Zone type="extra-monster" label="EM" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <div className="zone">X</div> {/* Placeholder for alignment */}
            <Zone type="extra-monster" label="EM" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <div className="zone">X</div> {/* Placeholder for alignment */}
            <Zone type="banished" label="B" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
          </div>
  
          {/* Fourth Row: Mirror of Second Row for Player 2 */}
          <div className="field-row">
            <Zone type="field-spell" label="F" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="monster" label="M" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="graveyard" label="G" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
          </div>
  
          {/* Fifth Row: Mirror of First Row for Player 2 */}
          <div className="field-row">
            <Zone type="extra-deck" label="E" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="pendulum" label="P/S" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="spell-trap" label="S" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="spell-trap" label="S" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="spell-trap" label="S" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="pendulum" label="P/S" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
            <Zone type="deck" label="D" onCardDrop={onCardDrop} fetchRulingsForCard={fetchRulingsForCard} />
          </div>
        </div>
        {rulings && <RulingsComponent rulings={rulings} />}
      </DndProvider>
    );
  };
  
  export default Field;
