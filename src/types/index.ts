export type SocketType = 'H1' | 'H3' | 'H3-COB' | 'H4' | 'H7' | 'H7-WIRE' | '9005' | '9006' | 'H8' | 'H11';

export type LanguageCode = 'en' | 'es' | 'pl' | 'lt' | 'uk' | 'ru' | 'de' | 'fr' | 'it' | 'pt' | 'ar';

export interface BulbListing {
  id: SocketType;
  name: string;
  socketCode: string;
  aliases: string[];
  beamType: 'Single High/Low' | 'Dual Hi/Low' | 'Fog / Low Beam' | 'High Beam / Fog' | 'Low / Fog';
  variantNote?: string; // e.g. "Direct Plug (Wireless)" vs "With Wire Harness Extension"
  price: number; // $35
  colorTemp: string; // "6000K Diamond White"
  lumens: string; // "16,000 Lumens / Pair"
  wattage: string; // "60W / Pair"
  cooling: string; // "12,000 RPM Silent Turbo Fan"
  lifespan: string; // "50,000+ Hours"
  voltage: string; // "9V - 32V (Fits 12V & 24V)"
  waterproof: string; // "IP68 Rated"
  popularVehicles: string[];
  description: Partial<Record<LanguageCode, string>> & { en: string };
  features: Partial<Record<LanguageCode, string[]>> & { en: string[] };
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
  cashAppUsername?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Vehicle Guides' | 'Sockets & Bulbs' | '6000K & Optics' | 'Troubleshooting' | 'Installation' | 'Safety & Laws';
  snippet: string;
  content: string;
  author: string;
  readTime: string;
  date: string;
  tags: string[];
  targetSocket?: string;
  vehicleMake?: string;
}

export interface VehicleFitment {
  make: string;
  model: string;
  low: string;
  high: string;
  fog: string;
  parentGroup?: string;
  category?: 'Mainstream & Trucks' | 'Luxury & Ultra-Luxury' | 'Electric & Specialty';
}
