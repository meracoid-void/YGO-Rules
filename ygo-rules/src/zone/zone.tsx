// Zone.tsx

import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { CardType } from '../card/cardObj';

interface ZoneProps {
    type: string; // Consider using a more specific type or enum
    label: string;
}
  
  const Zone: React.FC<ZoneProps> = ({ type, label }) => {
    const [cardInZone, setCardInZone] = useState<CardType | null>(null);
  
    const [{ isOver }, drop] = useDrop(() => ({
      accept: 'CARD', // Make sure this matches what your Card component uses in useDrag
      drop: (item: CardType, monitor) => {
        setCardInZone(item); // Update the state with the dropped card
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
  
    return (
      <div ref={drop} className="zone" style={{ opacity: isOver ? 0.5 : 1 }}>
        {cardInZone ? <div>{cardInZone.id}</div> : label}
      </div>
    );
  };
export default Zone;
