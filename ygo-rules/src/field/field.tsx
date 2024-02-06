import React from 'react';
import './field.css'; // Assuming you have a CSS file for styling

const Field = () => {
  return (
    <div className="yu-gi-oh-field">
        <div className="zone deck">D</div>
        <div className="zone pendulum">P/S</div>
        <div className="zone spell">S</div>
        <div className="zone spell">S</div>
        <div className="zone spell">S</div>
        <div className="zone pendulum">P/S</div>
        <div className="zone extra">E</div>
        
        <div className="zone graveyard">G</div>
        <div className="zone monster">M</div>
        <div className="zone monster">M</div>
        <div className="zone monster">M</div>
        <div className="zone monster">M</div>
        <div className="zone monster">M</div>
        <div className="zone field">F</div>
        
        <div className="zone banished">B</div>
        <div className="zone placeholder">X</div>
        <div className="zone extra-monster">EM</div>
        <div className="zone placeholder">X</div>
        <div className="zone extra-monster">EM</div>
        <div className="zone placeholder">X</div>
        <div className="zone banished">B</div>
        
        <div className="zone field">F</div>
        <div className="zone monster">M</div>
        <div className="zone monster">M</div>
        <div className="zone monster">M</div>
        <div className="zone monster">M</div>
        <div className="zone monster">M</div>
        <div className="zone graveyard">G</div>
        
        <div className="zone extra">E</div>
        <div className="zone pendulum">P/S</div>
        <div className="zone spell">S</div>
        <div className="zone spell">S</div>
        <div className="zone spell">S</div>
        <div className="zone pendulum">P/S</div>
        <div className="zone deck">D</div>
    </div>
  );
};

export default Field;
