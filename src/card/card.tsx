// Card.tsx
import React, { useEffect, useState  } from 'react';
import { useDrag } from 'react-dnd';
import { CardType } from './cardObj'; // Import the Card interface

interface CardProps {
    card: CardType;
}
  
const Card: React.FC<CardProps> = ({ card }) => {
    useEffect(() => {
        // Perform actions using card data, like setting state
        // This ensures actions are re-run when the card prop changes
      }, [card]); // Dependency array includes card to trigger effect on card change

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'CARD', // This should match the 'accept' in Zone's useDrop
        item: { type: card.type, id: card.id, name: card.name },
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));

    return (
        <div
        ref={drag}
        style={{
            opacity: isDragging ? 0.5 : 1,
            border: '1px solid black',
            padding: '10px',
            cursor: 'move',
        }}
        >
        {card.name}
        </div>
    );
};

export default Card;