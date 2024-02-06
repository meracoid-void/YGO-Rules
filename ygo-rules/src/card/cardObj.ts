export interface CardType {
    id: string;
    type: 'monster' | 'spell' | 'trap' | 'pendulum' | 'extra'; // Specified types
    content: string;
}