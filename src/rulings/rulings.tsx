// RulingsComponent.jsx
import React from 'react';
import { RulingsResponse } from './rulingsResponse';

interface RulingsProp {
    rulings: RulingsResponse
}

const RulingsComponent : React.FC<RulingsProp> = ({ rulings }) => {
  if (!rulings) return null;

  return (
    <div className="rulings">
      <p><strong>Question:</strong> {rulings.qaData.en.question}</p>
      <p><strong>Answer:</strong> {rulings.qaData.en.answer}</p>
      {/* Render more details as needed */}
    </div>
  );
};

export default RulingsComponent;
