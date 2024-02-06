import React from 'react';
import './field.css'; // Assuming you have a CSS file for styling

const Field = () => {
    const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault(); // Necessary to allow dropping
      };
    
      const drop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        // Ensure the target is the intended drop zone to avoid dropping inside a child element
        const dropZone = e.target as HTMLDivElement; // Cast the target to be more specific if needed
        const card = document.getElementById(card_id);
        if (card && dropZone.classList.contains('zone')) {
          dropZone.appendChild(card); // Append the card to the zone
        }
      };

  return (
    <div className="yu-gi-oh-field">
        <div className="zone deck" onDragOver={allowDrop} onDrop={drop}>D</div>
        <div className="zone pendulum" onDragOver={allowDrop} onDrop={drop}>P/S</div>
        <div className="zone spell" onDragOver={allowDrop} onDrop={drop}>S</div>
        <div className="zone spell" onDragOver={allowDrop} onDrop={drop}>S</div>
        <div className="zone spell" onDragOver={allowDrop} onDrop={drop}>S</div>
        <div className="zone pendulum" onDragOver={allowDrop} onDrop={drop}>P/S</div>
        <div className="zone extra" onDragOver={allowDrop} onDrop={drop}>E</div>
        
        <div className="zone graveyard" onDragOver={allowDrop} onDrop={drop}>G</div>
        <div className="zone monster" onDragOver={allowDrop} onDrop={drop}>M</div>
        <div className="zone monster" onDragOver={allowDrop} onDrop={drop}>M</div>
        <div className="zone monster" onDragOver={allowDrop} onDrop={drop}>M</div>
        <div className="zone monster" onDragOver={allowDrop} onDrop={drop}>M</div>
        <div className="zone monster" onDragOver={allowDrop} onDrop={drop}>M</div>
        <div className="zone field" onDragOver={allowDrop} onDrop={drop}>F</div>
        
        <div className="zone banished" onDragOver={allowDrop} onDrop={drop}>B</div>
        <div className="zone placeholder">X</div>
        <div className="zone extra-monster" onDragOver={allowDrop} onDrop={drop}>EM</div>
        <div className="zone placeholder">X</div>
        <div className="zone extra-monster" onDragOver={allowDrop} onDrop={drop}>EM</div>
        <div className="zone placeholder">X</div>
        <div className="zone banished" onDragOver={allowDrop} onDrop={drop}>B</div>
        
        <div className="zone field" onDragOver={allowDrop} onDrop={drop}>F</div>
        <div className="zone monster" onDragOver={allowDrop} onDrop={drop}>M</div>
        <div className="zone monster" onDragOver={allowDrop} onDrop={drop}>M</div>
        <div className="zone monster" onDragOver={allowDrop} onDrop={drop}>M</div>
        <div className="zone monster" onDragOver={allowDrop} onDrop={drop}>M</div>
        <div className="zone monster" onDragOver={allowDrop} onDrop={drop}>M</div>
        <div className="zone graveyard" onDragOver={allowDrop} onDrop={drop}>G</div>
        
        <div className="zone extra" onDragOver={allowDrop} onDrop={drop}>E</div>
        <div className="zone pendulum" onDragOver={allowDrop} onDrop={drop}>P/S</div>
        <div className="zone spell" onDragOver={allowDrop} onDrop={drop}>S</div>
        <div className="zone spell" onDragOver={allowDrop} onDrop={drop}>S</div>
        <div className="zone spell" onDragOver={allowDrop} onDrop={drop}>S</div>
        <div className="zone pendulum" onDragOver={allowDrop} onDrop={drop}>P/S</div>
        <div className="zone deck" onDragOver={allowDrop} onDrop={drop}>D</div>
    </div>
  );
};

export default Field;
