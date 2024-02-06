// Card.tsx
import React from 'react';
import { useDrag } from 'react-dnd';
import { CardType } from './cardObj'; // Import the Card interface

interface CardProps {
    card: CardType;
}
  
const Card: React.FC<CardProps> = ({ card }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'CARD', // This should match the 'accept' in Zone's useDrop
        item: { id: card.id, type: card.type },
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
        {card.content}
        </div>
    );
};

export default Card;