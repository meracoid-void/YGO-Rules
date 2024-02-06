export interface CardType {
    id: string;
    cardId: string;
    type: 'monster' | 'spell' | 'trap' | 'pendulum' | 'extra'; // Specified types
    content: string;
}