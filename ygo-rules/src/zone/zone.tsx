// Zone.tsx

import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { CardType } from '../card/cardObj';
import './zone.css';

interface ZoneProps {
    type: 'graveyard' | 'banished' | 'monster' | 'spell-trap' | 'field-spell' | 'extra-monster' | 'deck' | 'pendulum' | 'extra-deck'; // Extend as needed
    label: string;
  }
  
  const Zone: React.FC<ZoneProps> = ({ type, label }) => {
    // Adjusting state to hold an array of CardType
    const [cardsInZone, setCardsInZone] = useState<CardType[]>([]);
  
    const [{ isOver }, drop] = useDrop(() => ({
      accept: 'CARD', // You might adjust this based on the type to accept specific cards
      drop: (item: CardType) => {
        // Adding the dropped card to the array of cards in the zone
        setCardsInZone((prevCards) => [...prevCards, item]);
        console.log(cardsInZone);
      },
      collect: monitor => ({
        isOver: !!monitor.isOver(),
      }),
    }));
  
    // Rendering the cards as a list for zones that can hold multiple cards
    const renderCards = (cards: CardType[]) => {
      return cards.map((card, index) => (
        <div key={card.id} className="card-in-zone">
          {card.id} {/* or any other property you wish to display */}
        </div>
      ));
    };
  
    return (
      <div ref={drop} className={`zone ${type}`} style={{ opacity: isOver ? 0.5 : 1 }}>
        {cardsInZone.length > 0 ? renderCards(cardsInZone) : label}
      </div>
    );
  };
  
export default Zone;
