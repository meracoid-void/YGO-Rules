// CardSearchComponent.tsx
import React, { useState } from 'react';
import { useCardSearch } from './useCardSearch';
import Card from '../card/card';

const CardSearchComponent: React.FC = () => {
  const [query, setQuery] = useState('');
  const { cards, loading, error } = useCardSearch(query);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a card"
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
        {cards.map((card) => (
            <Card key={card.id} card={card} />
        ))}
    </div>
  );
};

export default CardSearchComponent;
