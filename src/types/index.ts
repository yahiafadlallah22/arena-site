// Yahia Dubai - Type Definitions

export interface Property {
  id: string;
  title: string;
  developer: string;
  propertyType: 'apartment' | 'villa' | 'townhouse' | 'penthouse' | 'duplex' | 'studio';
  unitTypes: string[];
  agent?: {
    name: string;
    title?: string;
    photo: string;
    phone?: string;
    whatsapp?: string;
  };
  location: {
    country: string;
    emirate: string;
    city: string;
    area: string;
    address?: string;
    lat?: number;
    lng?: number;
  };
  pricing: {
    currency: string;
    startingPrice: number;
    originalPrice?: number;
    labelBefore?: string;
    labelAfter?: string;
  };
  details: {
    bedrooms: string;
    bathrooms: number;
    size?: number;
    status: 'off-plan' | 'ready' | 'under-construction';
    handoverDate?: string;
    deliveryDate?: string;
  };
  media: {
    featuredImage: string;
    gallery: string[];
    floorPlans: string[];
  };
  content: {
    summary: string;
    description: string;
    amenities: string[];
    faq: { question: string; answer: string }[];
    paymentPlan?: { milestone: string; percentage: number; date?: string }[];
  };
  compliance: {
    dldPermit?: string;
    reraPermit?: string;
    qrImage?: string;
  };
  featured: boolean;
}

export interface Activity {
  id: string;
  title: string;
  destination: {
    country: string;
    city: string;
  };
  category: string;
  pricing: {
    currency: string;
    price: number;
    originalPrice?: number;
  };
  ratings: {
    score: number;
    reviewCount: number;
  };
  media: {
    featuredImage: string;
    gallery: string[];
  };
  content: {
    highlights: string[];
    description: string;
    inclusions: string[];
    exclusions: string[];
    faq: { question: string; answer: string }[];
  };
  logistics: {
    duration?: string;
    meetingPoint?: string;
  };
  affiliate: {
    type: 'klook' | 'custom';
    url: string;
  };
}

export interface Hotel {
  id: string;
  hotelName: string;
  destination: {
    country: string;
    city: string;
  };
  pricing: {
    currency: string;
    price: number;
  };
  ratings: {
    score: number;
    reviewScore: number;
    reviewCount: number;
  };
  media: {
    featuredImage: string;
    gallery: string[];
  };
  content: {
    summary: string;
    description: string;
    amenities: string[];
    nearbyPlaces: string[];
  };
  affiliate: {
    type: 'klook' | 'custom';
    url: string;
    fallbackUrl?: string;
  };
}

export interface Country {
  slug: string;
  name: string;
  code: string;
  cities: City[];
  tabs: string[];
}

export interface City {
  slug: string;
  name: string;
  country: string;
}

export interface SearchTab {
  id: string;
  label: string;
  icon: string;
  fields: SearchField[];
}

export interface SearchField {
  id: string;
  label: string;
  type: 'text' | 'select' | 'date' | 'number';
  options?: { value: string; label: string }[];
  placeholder?: string;
}

export interface AffiliateRule {
  platform: string;
  contentType: string;
  defaultLink: string;
  campaignTag?: string;
  subId?: string;
}

export interface WidgetAssignment {
  id: string;
  vertical: string;
  countrySlug: string;
  citySlug?: string;
  tabKey: string;
  widgetType: 'iframe' | 'embed' | 'script';
  widgetCode: string;
  isActive: boolean;
}

export interface SearchRoute {
  queryPattern: string;
  intentType: string;
  destinationType: string;
  targetPageId?: string;
  targetCountrySlug?: string;
  targetCitySlug?: string;
  targetTabKey?: string;
  priority: number;
}

export interface Training {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: number;
  currency: string;
  description: string;
  highlights: string[];
  schedule: string[];
  instructor?: string;
  featured: boolean;
}

export interface BusinessSetup {
  id: string;
  type: 'mainland' | 'freezone' | 'offshore';
  title: string;
  description: string;
  pricing: {
    starting: number;
    currency: string;
  };
  timeline: string;
  features: string[];
  requirements: string[];
  faq: { question: string; answer: string }[];
}

export interface MortgageService {
  id: string;
  title: string;
  description: string;
  eligibility: string[];
  features: string[];
  faq: { question: string; answer: string }[];
}
