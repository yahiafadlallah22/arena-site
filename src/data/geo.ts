import { Country } from '../types';

export const countries: Country[] = [
  {
    slug: 'uae',
    name: 'United Arab Emirates',
    code: 'AE',
    cities: [
      { slug: 'dubai', name: 'Dubai', country: 'UAE' },
      { slug: 'abu-dhabi', name: 'Abu Dhabi', country: 'UAE' },
      { slug: 'sharjah', name: 'Sharjah', country: 'UAE' },
      { slug: 'ajman', name: 'Ajman', country: 'UAE' },
      { slug: 'ras-al-khaimah', name: 'Ras Al Khaimah', country: 'UAE' },
      { slug: 'fujairah', name: 'Fujairah', country: 'UAE' },
      { slug: 'umm-al-quwain', name: 'Umm Al Quwain', country: 'UAE' }
    ],
    tabs: ['real-estate', 'activities', 'hotels', 'cars-chauffeurs', 'business-setup', 'mortgage', 'training']
  },
  {
    slug: 'morocco',
    name: 'Morocco',
    code: 'MA',
    cities: [
      { slug: 'casablanca', name: 'Casablanca', country: 'Morocco' },
      { slug: 'marrakech', name: 'Marrakech', country: 'Morocco' },
      { slug: 'rabat', name: 'Rabat', country: 'Morocco' }
    ],
    tabs: ['activities', 'hotels', 'cars-chauffeurs', 'flights']
  },
  {
    slug: 'uk',
    name: 'United Kingdom',
    code: 'GB',
    cities: [
      { slug: 'london', name: 'London', country: 'UK' },
      { slug: 'manchester', name: 'Manchester', country: 'UK' },
      { slug: 'edinburgh', name: 'Edinburgh', country: 'UK' },
      { slug: 'birmingham', name: 'Birmingham', country: 'UK' }
    ],
    tabs: ['activities', 'hotels', 'cars-chauffeurs', 'flights']
  },
  {
    slug: 'france',
    name: 'France',
    code: 'FR',
    cities: [
      { slug: 'paris', name: 'Paris', country: 'France' },
      { slug: 'nice', name: 'Nice', country: 'France' },
      { slug: 'lyon', name: 'Lyon', country: 'France' },
      { slug: 'marseille', name: 'Marseille', country: 'France' }
    ],
    tabs: ['activities', 'hotels', 'cars-chauffeurs', 'flights']
  },
  {
    slug: 'usa',
    name: 'United States',
    code: 'US',
    cities: [
      { slug: 'new-york', name: 'New York', country: 'USA' },
      { slug: 'los-angeles', name: 'Los Angeles', country: 'USA' },
      { slug: 'miami', name: 'Miami', country: 'USA' },
      { slug: 'las-vegas', name: 'Las Vegas', country: 'USA' },
      { slug: 'san-francisco', name: 'San Francisco', country: 'USA' }
    ],
    tabs: ['activities', 'hotels', 'cars-chauffeurs', 'flights']
  },
  {
    slug: 'thailand',
    name: 'Thailand',
    code: 'TH',
    cities: [
      { slug: 'bangkok', name: 'Bangkok', country: 'Thailand' },
      { slug: 'phuket', name: 'Phuket', country: 'Thailand' },
      { slug: 'chiang-mai', name: 'Chiang Mai', country: 'Thailand' },
      { slug: 'pattaya', name: 'Pattaya', country: 'Thailand' }
    ],
    tabs: ['activities', 'hotels', 'cars-chauffeurs', 'flights']
  },
  {
    slug: 'japan',
    name: 'Japan',
    code: 'JP',
    cities: [
      { slug: 'tokyo', name: 'Tokyo', country: 'Japan' },
      { slug: 'osaka', name: 'Osaka', country: 'Japan' },
      { slug: 'kyoto', name: 'Kyoto', country: 'Japan' },
      { slug: 'nagoya', name: 'Nagoya', country: 'Japan' }
    ],
    tabs: ['activities', 'hotels', 'cars-chauffeurs', 'flights']
  },
  {
    slug: 'singapore',
    name: 'Singapore',
    code: 'SG',
    cities: [
      { slug: 'singapore', name: 'Singapore', country: 'Singapore' }
    ],
    tabs: ['activities', 'hotels', 'cars-chauffeurs', 'flights']
  },
  {
    slug: 'malaysia',
    name: 'Malaysia',
    code: 'MY',
    cities: [
      { slug: 'kuala-lumpur', name: 'Kuala Lumpur', country: 'Malaysia' },
      { slug: 'penang', name: 'Penang', country: 'Malaysia' },
      { slug: 'langkawi', name: 'Langkawi', country: 'Malaysia' }
    ],
    tabs: ['activities', 'hotels', 'cars-chauffeurs', 'flights']
  }
];

export const getCountryBySlug = (slug: string) => 
  countries.find(c => c.slug === slug);

export const countryCodeToFlag = (code: string) =>
  code
    .toUpperCase()
    .split('')
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join('');

const countryAliasMap: Record<string, string[]> = {
  uae: ['uae', 'united arab emirates', 'ae'],
  morocco: ['morocco', 'ma', 'maroc'],
  uk: ['uk', 'united kingdom', 'great britain', 'gb'],
  france: ['france', 'fr'],
  usa: ['usa', 'united states', 'us', 'united states of america'],
  thailand: ['thailand', 'th'],
  japan: ['japan', 'jp'],
  singapore: ['singapore', 'sg'],
  malaysia: ['malaysia', 'my'],
};

export const getCountryFlagByName = (countryName: string) => {
  const normalized = countryName.toLowerCase().trim();
  const match = countries.find((item) => {
    const aliases = countryAliasMap[item.slug] || [];
    return aliases.includes(normalized) || item.name.toLowerCase() === normalized || item.code.toLowerCase() === normalized;
  });
  if (!match?.code) {
    return '🌍';
  }
  return countryCodeToFlag(match.code);
};

export const getCountryFlagBySlug = (slug: string) => {
  const country = getCountryBySlug(slug);
  if (!country?.code) {
    return '🌍';
  }
  return countryCodeToFlag(country.code);
};

export const matchesCountrySlug = (slug: string, value: string) => {
  if (!slug) {
    return true;
  }
  const normalized = value.toLowerCase().trim();
  const aliases = countryAliasMap[slug] || [];
  const country = getCountryBySlug(slug);
  return aliases.includes(normalized) || country?.name.toLowerCase() === normalized || country?.code.toLowerCase() === normalized;
};

export const getCityBySlug = (countrySlug: string, citySlug: string) => {
  const country = getCountryBySlug(countrySlug);
  return country?.cities.find(c => c.slug === citySlug);
};

export const getAllCities = () => 
  countries.flatMap(c => c.cities);

export const searchDestinations = (query: string) => {
  const q = query.toLowerCase();
  const results: { type: 'country' | 'city'; name: string; slug: string; countrySlug?: string }[] = [];
  
  countries.forEach(country => {
    if (country.name.toLowerCase().includes(q)) {
      results.push({ type: 'country', name: country.name, slug: country.slug });
    }
    country.cities.forEach(city => {
      if (city.name.toLowerCase().includes(q)) {
        results.push({ type: 'city', name: city.name, slug: city.slug, countrySlug: country.slug });
      }
    });
  });
  
  return results.slice(0, 10);
};

export const dubaiAreas = [
  'Downtown Dubai',
  'Dubai Marina',
  'Palm Jumeirah',
  'Jumeirah Beach Residence',
  'Business Bay',
  'Dubai Hills Estate',
  'Dubai Creek Harbour',
  'Dubai South',
  'Jumeirah Village Circle',
  'Dubai Sports City',
  'Arabian Ranches',
  'Emirates Hills',
  'The Springs',
  'The Meadows',
  'Jumeirah Lake Towers',
  'Dubai Silicon Oasis',
  'International City',
  'Discovery Gardens',
  'Dubai Investment Park',
  'Dubai Land'
];

export const abuDhabiAreas = [
  'Yas Island',
  'Saadiyat Island',
  'Al Reem Island',
  'Al Raha Beach',
  'Masdar City',
  'Al Reef',
  'Al Ghadeer',
  'Mohammed Bin Zayed City',
  'Khalifa City',
  'Al Shamkha'
];
