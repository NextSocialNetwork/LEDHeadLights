export type SocketType = 'H1' | 'H3' | 'H4' | 'H7' | '9005' | 'H8' | 'H11' | 'H12';

export type LanguageCode = 'en' | 'es' | 'pl' | 'lt' | 'uk' | 'ru';

export interface BulbListing {
  id: SocketType;
  name: string;
  socketCode: string;
  aliases: string[];
  beamType: 'Single High/Low' | 'Dual Hi/Low' | 'Fog / Low Beam' | 'High Beam / Fog' | 'Low / Fog';
  price: number; // $35.00
  colorTemp: string; // "6000K Diamond White"
  lumens: string; // "16,000 Lumens / Pair"
  wattage: string; // "60W / Pair"
  cooling: string; // "12,000 RPM Silent Turbo Fan"
  lifespan: string; // "50,000+ Hours"
  voltage: string; // "9V - 32V (Fits 12V & 24V)"
  waterproof: string; // "IP68 Rated"
  popularVehicles: string[];
  description: Record<LanguageCode, string>;
  features: Record<LanguageCode, string[]>;
  inStock: boolean;
  image: string;
}

export interface CartItem {
  bulb: BulbListing;
  quantity: number;
}

export interface DeliveryOptions {
  method: 'shipping' | 'pickup';
  shippingCost: number; // $10 for shipping (7-14 Business Days), $0 for Chicago pickup
}

export interface OrderForm {
  name: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  vehicleNotes: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: 5;
  vehicle: string;
  switchedFrom: string;
  socket: SocketType;
  title: string;
  comment: string;
  date: string;
  verifiedBuyer: boolean;
  fulfillmentMethod: 'Shipping' | 'Chicago Pickup';
}

