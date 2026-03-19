import { Activity } from '../types';

export const sampleActivities: Activity[] = [
  {
    id: '1',
    title: 'Dubai Frame Tickets with Round-Trip Hotel Transfers',
    destination: {
      country: 'UAE',
      city: 'Dubai'
    },
    category: 'Landmarks',
    pricing: {
      currency: 'AED',
      price: 150,
      originalPrice: 200
    },
    ratings: {
      score: 4.8,
      reviewCount: 12450
    },
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8c5?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1582672060674-bc2bd808a8c5?w=800',
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800'
      ]
    },
    content: {
      highlights: [
        'Skip the line with priority entry',
        'Hotel pickup and drop-off included',
        'See Old Dubai and New Dubai from the Sky Deck',
        'Experience the immersive museum'
      ],
      description: 'Visit the iconic Dubai Frame, a 150-meter tall structure that frames views of both old and new Dubai. Enjoy skip-the-line entry and convenient hotel transfers.',
      inclusions: ['Skip-the-line entry ticket', 'Hotel pickup and drop-off', 'Air-conditioned transport', 'Bottled water'],
      exclusions: ['Food and beverages', 'Personal expenses', 'Tips'],
      faq: [
        { question: 'What are the opening hours?', answer: 'Dubai Frame is open daily from 9:00 AM to 9:00 PM.' },
        { question: 'How long is the visit?', answer: 'The average visit duration is 1-2 hours.' }
      ]
    },
    logistics: {
      duration: '2-3 hours',
      meetingPoint: 'Hotel pickup'
    },
    affiliate: {
      type: 'klook',
      url: 'https://affiliate.klook.com/redirect?aid=115387&aff_adid=1240159&k_site=https%3A%2F%2Fwww.klook.com%2Factivity%2F30552-dubai-frame-tickets-round-trip-hotel-transfers%2F'
    }
  },
  {
    id: '2',
    title: 'Burj Khalifa At the Top Tickets - 124th & 125th Floor',
    destination: {
      country: 'UAE',
      city: 'Dubai'
    },
    category: 'Landmarks',
    pricing: {
      currency: 'AED',
      price: 175,
      originalPrice: 220
    },
    ratings: {
      score: 4.9,
      reviewCount: 28500
    },
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800'
      ]
    },
    content: {
      highlights: [
        'Access floors 124 and 125',
        'Fast track entry available',
        'Stunning 360° views of Dubai',
        'World\'s tallest building experience'
      ],
      description: 'Ascend to the observation decks on floors 124 and 125 of the Burj Khalifa, the world\'s tallest building. Marvel at breathtaking views of Dubai\'s skyline, desert, and ocean.',
      inclusions: ['Entry ticket to 124th & 125th floor', 'High-speed elevator ride', 'Access to outdoor terrace'],
      exclusions: ['Hotel transfers', 'Food and beverages', 'Souvenir photos'],
      faq: [
        { question: 'What is the best time to visit?', answer: 'Sunset hours (4-6 PM) offer the most spectacular views but are busiest. Early morning is less crowded.' }
      ]
    },
    logistics: {
      duration: '1-1.5 hours',
      meetingPoint: 'Dubai Mall, Lower Ground Floor'
    },
    affiliate: {
      type: 'klook',
      url: 'https://affiliate.klook.com/redirect?aid=115387&aff_adid=1240159&k_site=https%3A%2F%2Fwww.klook.com%2Factivity%2F2102-burj-khalifa-at-the-top-dubai%2F'
    }
  },
  {
    id: '3',
    title: 'Desert Safari with BBQ Dinner & Entertainment',
    destination: {
      country: 'UAE',
      city: 'Dubai'
    },
    category: 'Adventure',
    pricing: {
      currency: 'AED',
      price: 200,
      originalPrice: 350
    },
    ratings: {
      score: 4.7,
      reviewCount: 35200
    },
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800'
      ]
    },
    content: {
      highlights: [
        'Thrilling dune bashing experience',
        'Camel riding and sandboarding',
        'BBQ dinner under the stars',
        'Live entertainment shows'
      ],
      description: 'Experience the magic of the Arabian desert with an unforgettable evening safari. Enjoy dune bashing, camel rides, and a traditional BBQ dinner with live entertainment.',
      inclusions: ['Hotel pickup and drop-off', 'Dune bashing (45 mins)', 'Camel ride', 'Sandboarding', 'BBQ dinner', 'Live shows', 'Soft drinks and water'],
      exclusions: ['Alcoholic beverages', 'Quad biking (available for purchase)', 'Professional photos'],
      faq: [
        { question: 'Is it safe for children?', answer: 'Yes, children above 3 years can join. Dune bashing is optional for families with young kids.' }
      ]
    },
    logistics: {
      duration: '6 hours',
      meetingPoint: 'Hotel pickup'
    },
    affiliate: {
      type: 'klook',
      url: 'https://affiliate.klook.com/redirect?aid=115387&aff_adid=1240159&k_site=https%3A%2F%2Fwww.klook.com%2Factivity%2F1166-desert-safari-dubai%2F'
    }
  },
  {
    id: '4',
    title: 'Abu Dhabi Grand Mosque & Louvre Museum Tour',
    destination: {
      country: 'UAE',
      city: 'Abu Dhabi'
    },
    category: 'Culture',
    pricing: {
      currency: 'AED',
      price: 350,
      originalPrice: 450
    },
    ratings: {
      score: 4.9,
      reviewCount: 8900
    },
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800'
      ]
    },
    content: {
      highlights: [
        'Visit the stunning Sheikh Zayed Grand Mosque',
        'Explore Louvre Abu Dhabi',
        'Professional guide included',
        'Luxury transport from Dubai'
      ],
      description: 'Discover Abu Dhabi\'s most iconic landmarks on this full-day tour from Dubai. Visit the magnificent Sheikh Zayed Grand Mosque and the world-renowned Louvre Abu Dhabi.',
      inclusions: ['Hotel pickup and drop-off', 'Professional guide', 'Entry to Louvre Abu Dhabi', 'Bottled water'],
      exclusions: ['Food and beverages', 'Tips', 'Personal expenses'],
      faq: [
        { question: 'Is there a dress code?', answer: 'Yes, modest clothing is required for the mosque. Abayas are provided for women.' }
      ]
    },
    logistics: {
      duration: '8-9 hours',
      meetingPoint: 'Hotel pickup'
    },
    affiliate: {
      type: 'klook',
      url: 'https://affiliate.klook.com/redirect?aid=115387&aff_adid=1240159&k_site=https%3A%2F%2Fwww.klook.com%2Factivity%2F15478-abu-dhabi-city-tour%2F'
    }
  },
  {
    id: '5',
    title: 'London Eye Standard Entry Ticket',
    destination: {
      country: 'UK',
      city: 'London'
    },
    category: 'Landmarks',
    pricing: {
      currency: 'GBP',
      price: 32,
      originalPrice: 40
    },
    ratings: {
      score: 4.6,
      reviewCount: 18700
    },
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800'
      ]
    },
    content: {
      highlights: [
        '30-minute rotation experience',
        'Views up to 40km on clear days',
        'See Big Ben, Houses of Parliament & more',
        'Interactive touchscreen guides'
      ],
      description: 'Experience breathtaking 360-degree views of London from the iconic London Eye. See the city\'s most famous landmarks from 135 meters above.',
      inclusions: ['Standard entry ticket', 'Interactive guide'],
      exclusions: ['Fast track entry', 'Hotel transfers', 'Food and beverages'],
      faq: [
        { question: 'How long is the queue?', answer: 'Standard queue can be 30-45 minutes. Fast track tickets are recommended during peak season.' }
      ]
    },
    logistics: {
      duration: '30 minutes',
      meetingPoint: 'London Eye, County Hall'
    },
    affiliate: {
      type: 'klook',
      url: 'https://affiliate.klook.com/redirect?aid=115387&aff_adid=1240159&k_site=https%3A%2F%2Fwww.klook.com%2Factivity%2F1258-london-eye-london%2F'
    }
  },
  {
    id: '6',
    title: 'Paris Eiffel Tower Summit Access Ticket',
    destination: {
      country: 'France',
      city: 'Paris'
    },
    category: 'Landmarks',
    pricing: {
      currency: 'EUR',
      price: 35,
      originalPrice: 45
    },
    ratings: {
      score: 4.8,
      reviewCount: 22100
    },
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce65f4?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce65f4?w=800'
      ]
    },
    content: {
      highlights: [
        'Access to the Summit (top floor)',
        'Stunning views of Paris',
        'Skip-the-line option available',
        'Iconic Parisian experience'
      ],
      description: 'Reach the summit of the Eiffel Tower for unparalleled views of Paris. This ticket grants access to all three levels including the iconic top floor.',
      inclusions: ['Summit access ticket', 'Elevator to all floors'],
      exclusions: ['Skip-the-line (unless selected)', 'Guided tour', 'Food and beverages'],
      faq: [
        { question: 'Can I take the stairs?', answer: 'Stairs are available to the 2nd floor only. Elevator is required for summit access.' }
      ]
    },
    logistics: {
      duration: '1.5-2 hours',
      meetingPoint: 'Eiffel Tower, South Pillar'
    },
    affiliate: {
      type: 'klook',
      url: 'https://affiliate.klook.com/redirect?aid=115387&aff_adid=1240159&k_site=https%3A%2F%2Fwww.klook.com%2Factivity%2F1591-eiffel-tower-paris%2F'
    }
  }
];

export const getActivitiesByCity = (city: string) => 
  sampleActivities.filter(a => a.destination.city.toLowerCase() === city.toLowerCase());

export const getActivitiesByCountry = (country: string) => 
  sampleActivities.filter(a => a.destination.country.toLowerCase() === country.toLowerCase());

export const getActivityById = (id: string) => 
  sampleActivities.find(a => a.id === id);

export const getActivitiesByCategory = (category: string) => 
  sampleActivities.filter(a => a.category.toLowerCase() === category.toLowerCase());
