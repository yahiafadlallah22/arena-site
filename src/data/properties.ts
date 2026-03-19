import { Property } from '../types';

export const sampleProperties: Property[] = [
  {
    id: '1',
    title: 'Sobha Siniya Island',
    developer: 'Sobha Realty',
    propertyType: 'villa',
    unitTypes: ['4BR Villa', '5BR Villa', '6BR Villa'],
    location: {
      country: 'UAE',
      emirate: 'Umm Al Quwain',
      city: 'Umm Al Quwain',
      area: 'Siniya Island',
      lat: 25.5656,
      lng: 55.5555
    },
    pricing: {
      currency: 'AED',
      startingPrice: 6500000,
      labelBefore: 'Starting from'
    },
    details: {
      bedrooms: '4BR',
      bathrooms: 5,
      size: 4500,
      status: 'off-plan',
      handoverDate: 'Q4 2027'
    },
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
      ],
      floorPlans: []
    },
    content: {
      summary: 'Exclusive island living with luxury villas featuring private beaches and world-class amenities.',
      description: 'Sobha Siniya Island represents the pinnacle of island luxury living in the UAE. This exclusive development offers a collection of premium villas with stunning waterfront views, private beach access, and an unparalleled lifestyle experience. Each villa is meticulously designed with the finest finishes and smart home technology.',
      amenities: ['Private Beach', 'Infinity Pool', 'Smart Home', 'Private Garden', 'Maid\'s Room', 'Parking', 'Gym', 'Spa'],
      faq: [
        { question: 'What is the payment plan?', answer: '60/40 payment plan with 20% on booking, 40% during construction, and 40% on handover.' },
        { question: 'Is there a private beach?', answer: 'Yes, all villas come with private beach access.' }
      ],
      paymentPlan: [
        { milestone: 'Booking', percentage: 20, date: 'On Booking' },
        { milestone: 'Construction', percentage: 40, date: 'During Construction' },
        { milestone: 'Handover', percentage: 40, date: 'On Handover Q4 2027' }
      ]
    },
    compliance: {
      reraPermit: '12345678'
    },
    featured: true
  },
  {
    id: '2',
    title: 'Emaar The Heights',
    developer: 'Emaar Properties',
    propertyType: 'apartment',
    unitTypes: ['1BR Apartment', '2BR Apartment', '3BR Apartment'],
    location: {
      country: 'UAE',
      emirate: 'Dubai',
      city: 'Dubai',
      area: 'Dubai Hills Estate',
      lat: 25.1123,
      lng: 55.2445
    },
    pricing: {
      currency: 'AED',
      startingPrice: 1200000,
      labelBefore: 'Starting from'
    },
    details: {
      bedrooms: '1BR',
      bathrooms: 1,
      size: 750,
      status: 'off-plan',
      handoverDate: 'Q2 2026'
    },
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
      ],
      floorPlans: []
    },
    content: {
      summary: 'Modern apartments in the heart of Dubai Hills Estate with stunning golf course views.',
      description: 'The Heights at Dubai Hills Estate offers contemporary living spaces designed for the modern lifestyle. Residents enjoy panoramic views of the championship golf course, access to premium amenities, and proximity to Dubai Hills Mall.',
      amenities: ['Golf Course View', 'Pool', 'Gym', 'Concierge', 'Parking', 'Balcony', 'Central AC'],
      faq: [
        { question: 'What facilities are nearby?', answer: 'Dubai Hills Mall, championship golf course, parks, and schools are all within the community.' }
      ],
      paymentPlan: [
        { milestone: 'Booking', percentage: 10, date: 'On Booking' },
        { milestone: 'Construction', percentage: 50, date: 'During Construction' },
        { milestone: 'Handover', percentage: 40, date: 'On Handover' }
      ]
    },
    compliance: {
      reraPermit: '87654321'
    },
    featured: true
  },
  {
    id: '3',
    title: 'Damac Lagoons',
    developer: 'Damac Properties',
    propertyType: 'townhouse',
    unitTypes: ['3BR Townhouse', '4BR Townhouse', '5BR Townhouse'],
    location: {
      country: 'UAE',
      emirate: 'Dubai',
      city: 'Dubai',
      area: 'Damac Lagoons',
      lat: 25.0890,
      lng: 55.2890
    },
    pricing: {
      currency: 'AED',
      startingPrice: 1800000,
      labelBefore: 'Starting from'
    },
    details: {
      bedrooms: '3BR',
      bathrooms: 4,
      size: 2200,
      status: 'off-plan',
      handoverDate: 'Q3 2026'
    },
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'
      ],
      floorPlans: []
    },
    content: {
      summary: 'Mediterranean-inspired waterfront townhouses with crystal lagoon living.',
      description: 'Damac Lagoons brings the charm of Mediterranean waterfront living to Dubai. These beautifully designed townhouses surround crystal-clear lagoons, offering residents a resort-style lifestyle with water activities, sandy beaches, and lush landscapes.',
      amenities: ['Crystal Lagoon', 'Beach', 'Water Sports', 'Clubhouse', 'Pool', 'Gym', 'Kids Play Area'],
      faq: [
        { question: 'What is the lagoon size?', answer: 'The community features over 4 kilometers of lagoons and beaches.' }
      ],
      paymentPlan: [
        { milestone: 'Booking', percentage: 20, date: 'On Booking' },
        { milestone: 'Construction', percentage: 40, date: 'During Construction' },
        { milestone: 'Handover', percentage: 40, date: 'On Handover' }
      ]
    },
    compliance: {},
    featured: true
  },
  {
    id: '4',
    title: 'Aldar Yas Acres',
    developer: 'Aldar Properties',
    propertyType: 'villa',
    unitTypes: ['3BR Villa', '4BR Villa', '5BR Villa', '6BR Villa'],
    location: {
      country: 'UAE',
      emirate: 'Abu Dhabi',
      city: 'Abu Dhabi',
      area: 'Yas Island',
      lat: 24.4987,
      lng: 54.6088
    },
    pricing: {
      currency: 'AED',
      startingPrice: 4200000,
      labelBefore: 'Starting from'
    },
    details: {
      bedrooms: '3BR',
      bathrooms: 4,
      size: 3500,
      status: 'off-plan',
      handoverDate: 'Q1 2027'
    },
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
      ],
      floorPlans: []
    },
    content: {
      summary: 'Premium villas on Yas Island with access to world-class entertainment and leisure.',
      description: 'Yas Acres offers luxurious family living on the prestigious Yas Island. Residents enjoy proximity to Ferrari World, Yas Waterworld, and Yas Mall, along with championship golf courses and pristine beaches.',
      amenities: ['Golf Course', 'Pool', 'Beach Access', 'Parks', 'Community Center', 'Retail'],
      faq: [
        { question: 'What entertainment is nearby?', answer: 'Ferrari World, Yas Waterworld, Warner Bros World, and Yas Mall are all within 5 minutes.' }
      ],
      paymentPlan: [
        { milestone: 'Booking', percentage: 10, date: 'On Booking' },
        { milestone: 'Construction', percentage: 40, date: 'During Construction' },
        { milestone: 'Handover', percentage: 50, date: 'On Handover' }
      ]
    },
    compliance: {},
    featured: false
  },
  {
    id: '5',
    title: 'Meraas Bluewaters',
    developer: 'Meraas',
    propertyType: 'apartment',
    unitTypes: ['1BR Apartment', '2BR Apartment', '3BR Apartment', 'Penthouse'],
    location: {
      country: 'UAE',
      emirate: 'Dubai',
      city: 'Dubai',
      area: 'Bluewaters Island',
      lat: 25.0789,
      lng: 55.1234
    },
    pricing: {
      currency: 'AED',
      startingPrice: 2100000,
      labelBefore: 'Starting from'
    },
    details: {
      bedrooms: '1BR',
      bathrooms: 2,
      size: 950,
      status: 'ready',
      handoverDate: 'Completed'
    },
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800'
      ],
      floorPlans: []
    },
    content: {
      summary: 'Iconic waterfront living next to Ain Dubai with stunning sea views.',
      description: 'Bluewaters Residences offers a unique island lifestyle next to the world\'s largest observation wheel, Ain Dubai. The development features premium apartments with panoramic views of the Arabian Gulf and Dubai Marina skyline.',
      amenities: ['Ain Dubai View', 'Beach', 'Pool', 'Gym', 'Retail', 'Dining', 'Valet Parking'],
      faq: [
        { question: 'Is the property ready to move in?', answer: 'Yes, Bluewaters Residences is fully completed and ready for immediate occupancy.' }
      ]
    },
    compliance: {},
    featured: true
  }
];

export const getPropertiesByEmirate = (emirate: string) => 
  sampleProperties.filter(p => p.location.emirate.toLowerCase() === emirate.toLowerCase());

export const getPropertiesByType = (type: string) => 
  sampleProperties.filter(p => p.propertyType === type);

export const getFeaturedProperties = () => 
  sampleProperties.filter(p => p.featured);

export const getPropertyById = (id: string) => 
  sampleProperties.find(p => p.id === id);
