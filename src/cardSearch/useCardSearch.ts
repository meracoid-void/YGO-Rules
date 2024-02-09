import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { CardType } from '../card/cardObj'; // Assuming this is where you've defined your card types

// Assuming your API returns an array of cards
interface ApiResponse {
  data: CardType[]; // Adjust according to the actual API response structure
}

export const useCardSearch = (query: string) => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) {
      setCards([]);
      return;
    }
    if(query.length < 3){
        setCards([]);
        return;
    }

    setLoading(true);
    axios.get<ApiResponse>(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${query}&misc=yes`)
      .then(response => {
        setError(null);
        setCards(response.data.data); // Adjust based on your API's response structure
      })
      .catch((err: AxiosError) => {
        setError(err.message);
        setCards([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  return { cards, loading, error };
};
