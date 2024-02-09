// Zone.tsx

import React, { useEffect, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { CardType } from '../card/cardObj';
import './zone.css';
import axios from 'axios';

interface ZoneProps {
    type: 'graveyard' | 'banished' | 'monster' | 'spell-trap' | 'field-spell' | 'extra-monster' | 'deck' | 'pendulum' | 'extra-deck'; // Extend as needed
    label: string;
    onCardDrop: () => void; // Function to increment card ID
  }
  
  const Zone: React.FC<ZoneProps> = ({ type, label, onCardDrop }) => {
    // Adjusting state to hold an array of CardType
    const [cardsInZone, setCardsInZone] = useState<CardType[]>([]);

    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (cardRef.current) {
        cardRef.current.style.setProperty('--index', `${cardsInZone.length - 1}`);
      }
    }, [cardsInZone.length]);
  
    const [{ isOver }, drop] = useDrop(() => ({
      accept: 'CARD', // You might adjust this based on the type to accept specific cards
      drop: async (item: CardType) => {
        onCardDrop();
        console.log(item);
        // Adding the dropped card to the array of cards in the zone
        setCardsInZone((prevCards) => [...prevCards, item]);
        const cardName = item.misc_info[0].konami_id; // or item.id, depending on the API requirement

        try {
          const rulingsResponse = await axios.get(`https://db.ygorganization.com/data/card/${cardName}`);
          // Process and display rulings here or set state to hold rulings data
          console.log(rulingsResponse.data); // Example: log fetched data
        } catch (error) {
          console.error('Error fetching rulings:', error);
        }
      },
      collect: monitor => ({
        isOver: !!monitor.isOver(),
      }),
    }));
   
    return (
      <div ref={drop} className={`zone ${type}`}>
        {cardsInZone.length > 0 ? (
          <>
            <div className="card-in-zone" ref={cardRef}>
              {cardsInZone[cardsInZone.length - 1].name}
            </div>
            {cardsInZone.length > 1 && (
              <div
                className="card-stack-indicator"
                title={cardsInZone.slice(0, -1).map(card => card.name).join(', ')}
              >
                +{cardsInZone.length - 1}
              </div>
            )}
          </>
        ) : (
          label
        )}
      </div>
    );
  };
  
export default Zone;
