export interface CardType {
    id: number;
    name: string;
    type: string;
    frameType: string;
    desc: string;
    atk: number;
    def: number;
    level: number;
    race: string;
    attribute: string;
    card_sets: CardSet[];
    card_images: CardImage[];
    card_prices: CardPrice[];
    misc_info: MiscInfo[];
  }
  
  interface CardSet {
    set_name: string;
    set_code: string;
    set_rarity: string;
    set_rarity_code: string;
    set_price: string;
  }
  
  interface CardImage {
    id: number;
    image_url: string;
    image_url_small: string;
    image_url_cropped: string;
  }
  
  interface CardPrice {
    cardmarket_price: string;
    tcgplayer_price: string;
    ebay_price: string;
    amazon_price: string;
    coolstuffinc_price: string;
  }
  
  interface MiscInfo {
    views: number;
    viewsweek: number;
    upvotes: number;
    downvotes: number;
    formats: string[];
    beta_id: number;
    tcg_date: string;
    ocg_date: string;
    konami_id: number;
    has_effect: number;
  }