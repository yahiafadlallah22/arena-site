import { Hotel } from '../types';

export const sampleHotels: Hotel[] = [
  {
    id: '1',
    hotelName: 'Atlantis The Royal',
    destination: {
      country: 'UAE',
      city: 'Dubai'
    },
    pricing: {
      currency: 'AED',
      price: 2500
    },
    ratings: {
      score: 4.9,
      reviewScore: 9.4,
      reviewCount: 5200
    },
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800'
      ]
    },
    content: {
      summary: 'Ultra-luxury resort on Palm Jumeirah with celebrity chef restaurants and world-class entertainment.',
      description: 'Atlantis The Royal is Dubai\'s newest ultra-luxury resort, featuring stunning architecture, celebrity chef restaurants, and unparalleled amenities on the iconic Palm Jumeirah.',
      amenities: ['Private Beach', 'Infinity Pool', 'Spa', '17 Restaurants', 'Kids Club', 'Waterpark Access', 'Butler Service', 'Gym'],
      nearbyPlaces: ['Aquaventure Waterpark', 'The Pointe', 'Nakheel Mall']
    },
    affiliate: {
      type: 'klook',
      url: 'https://www.klook.com/en-US/hotels/detail/1085372-atlantis-the-royal/',
      fallbackUrl: 'https://www.klook.com/en-US/hotels/city/78-dubai-hotels/'
    }
  },
  {
    id: '2',
    hotelName: 'Address Downtown',
    destination: {
      country: 'UAE',
      city: 'Dubai'
    },
    pricing: {
      currency: 'AED',
      price: 1800
    },
    ratings: {
      score: 4.8,
      reviewScore: 9.2,
      reviewCount: 8900
    },
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800'
      ]
    },
    content: {
      summary: 'Iconic Downtown Dubai hotel with direct views of Burj Khalifa and Dubai Fountain.',
      description: 'Address Downtown offers luxury accommodation in the heart of Downtown Dubai, with stunning views of the Burj Khalifa and direct access to Dubai Mall.',
      amenities: ['Burj Khalifa View', 'Rooftop Pool', 'Spa', 'Multiple Restaurants', 'Fitness Center', 'Concierge'],
      nearbyPlaces: ['Dubai Mall', 'Burj Khalifa', 'Dubai Fountain', 'Dubai Opera']
    },
    affiliate: {
      type: 'klook',
      url: 'https://www.klook.com/en-US/hotels/city/78-dubai-hotels/',
      fallbackUrl: 'https://www.klook.com/en-US/hotels/city/78-dubai-hotels/'
    }
  },
  {
    id: '3',
    hotelName: 'Burj Al Arab Jumeirah',
    destination: {
      country: 'UAE',
      city: 'Dubai'
    },
    pricing: {
      currency: 'AED',
      price: 5500
    },
    ratings: {
      score: 5.0,
      reviewScore: 9.8,
      reviewCount: 4100
    },
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800'
      ]
    },
    content: {
      summary: 'The world\'s most luxurious hotel, an iconic symbol of Dubai offering unparalleled service.',
      description: 'Burj Al Arab Jumeirah is the world\'s most luxurious hotel, standing on its own island. Every suite offers panoramic sea views, personal butler service, and access to exclusive amenities.',
      amenities: ['Private Beach', 'Helipad', '9 Restaurants', 'Talise Spa', 'Pool Terrace', 'Butler Service', 'Rolls Royce Fleet'],
      nearbyPlaces: ['Madinat Jumeirah', 'Wild Wadi Waterpark', 'Souk Madinat']
    },
    affiliate: {
      type: 'klook',
      url: 'https://www.klook.com/en-US/hotels/detail/410284-jumeirah-burj-al-arab-dubai/',
      fallbackUrl: 'https://www.klook.com/en-US/hotels/city/78-dubai-hotels/'
    }
  },
  {
    id: '4',
    hotelName: 'The Ritz-Carlton Abu Dhabi',
    destination: {
      country: 'UAE',
      city: 'Abu Dhabi'
    },
    pricing: {
      currency: 'AED',
      price: 1200
    },
    ratings: {
      score: 4.8,
      reviewScore: 9.1,
      reviewCount: 6300
    },
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800'
      ]
    },
    content: {
      summary: 'Luxurious beachfront resort overlooking the Grand Canal and Sheikh Zayed Grand Mosque.',
      description: 'The Ritz-Carlton Abu Dhabi offers Mediterranean-inspired luxury with stunning views of the Grand Canal and Sheikh Zayed Grand Mosque, featuring lush gardens and a private beach.',
      amenities: ['Private Beach', 'Pool', 'Spa', 'Multiple Restaurants', 'Club Lounge', 'Kids Club', 'Tennis Courts'],
      nearbyPlaces: ['Sheikh Zayed Grand Mosque', 'Yas Mall', 'Ferrari World']
    },
    affiliate: {
      type: 'klook',
      url: 'https://www.klook.com/en-US/hotels/detail/426541-the-ritzcarlton-abu-dhabi-grand-canal/',
      fallbackUrl: 'https://www.klook.com/en-US/hotels/city/131-abu-dhabi-hotels/'
    }
  },
  {
    id: '5',
    hotelName: 'The Savoy London',
    destination: {
      country: 'UK',
      city: 'London'
    },
    pricing: {
      currency: 'GBP',
      price: 450
    },
    ratings: {
      score: 4.9,
      reviewScore: 9.5,
      reviewCount: 12400
    },
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'
      ]
    },
    content: {
      summary: 'Iconic British luxury hotel on the Strand, home of the legendary American Bar.',
      description: 'The Savoy is one of London\'s most iconic hotels, offering timeless British elegance on the Strand. Famous for its afternoon tea, American Bar, and impeccable service.',
      amenities: ['River Views', 'Spa', 'Indoor Pool', 'Fitness Center', 'Multiple Restaurants', 'Afternoon Tea', 'Concierge'],
      nearbyPlaces: ['Covent Garden', 'Trafalgar Square', 'British Museum', 'West End Theatres']
    },
    affiliate: {
      type: 'klook',
      url: 'https://www.klook.com/en-US/hotels/city/106-london-hotels/',
      fallbackUrl: 'https://www.klook.com/en-US/hotels/city/106-london-hotels/'
    }
  },
  {
    id: '6',
    hotelName: 'Park Hyatt Paris-Vendôme',
    destination: {
      country: 'France',
      city: 'Paris'
    },
    pricing: {
      currency: 'EUR',
      price: 850
    },
    ratings: {
      score: 4.9,
      reviewScore: 9.6,
      reviewCount: 4800
    },
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800'
      ]
    },
    content: {
      summary: 'Elegant luxury hotel in the heart of Paris, steps from Place Vendôme and the Louvre.',
      description: 'Park Hyatt Paris-Vendôme is a masterpiece of contemporary luxury in a historic Haussmanian building, offering exceptional service and world-class dining in the heart of Paris.',
      amenities: ['Spa', 'Fine Dining', 'Fitness Center', 'Concierge', 'Room Service', 'Business Center'],
      nearbyPlaces: ['Place Vendôme', 'Louvre Museum', 'Opéra Garnier', 'Tuileries Garden']
    },
    affiliate: {
      type: 'klook',
      url: 'https://www.klook.com/en-US/hotels/city/107-paris-hotels/',
      fallbackUrl: 'https://www.klook.com/en-US/hotels/city/107-paris-hotels/'
    }
  }
];

export const getHotelsByCity = (city: string) => 
  sampleHotels.filter(h => h.destination.city.toLowerCase() === city.toLowerCase());

export const getHotelsByCountry = (country: string) => 
  sampleHotels.filter(h => h.destination.country.toLowerCase() === country.toLowerCase());

export const getHotelById = (id: string) => 
  sampleHotels.find(h => h.id === id);
