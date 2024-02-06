// Card.js or Card.tsx
import React from 'react';

// Define an interface for the component props
interface CardProps {
  id: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ id, content }) => {
  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('card_id', id);
  };

  return (
    <div
      id={id}
      draggable="true"
      onDragStart={dragStart}
      className="card"
      style={{ padding: '10px', margin: '10px', border: '1px solid black', cursor: 'move' }}
    >
      {content}
    </div>
  );
};

export default Card;