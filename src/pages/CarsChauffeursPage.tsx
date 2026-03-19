import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Car, MapPin, Shield, Clock, Star, ChevronDown, Users, ArrowRight, Check } from 'lucide-react';
import FounderSpot from '../components/ui/FounderSpot';
import { countries, getCountryFlagByName, getCountryFlagBySlug } from '../data/geo';

const CarsChauffeursPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'car-rental' | 'chauffeur' | 'vip-chauffeur'>(
    (searchParams.get('tab') as 'car-rental' | 'chauffeur' | 'vip-chauffeur') || 'car-rental'
  );
  const [selectedCountry, setSelectedCountry] = useState(searchParams.get('country') || '');
  const [selectedCity, setSelectedCity] = useState(searchParams.get('city') || '');

  const availableCities = selectedCountry
    ? countries.find(c => c.slug === selectedCountry)?.cities || []
    : countries.flatMap(c => c.cities);

  const handleSearch = () => {
    if (selectedCountry) {
      const params = new URLSearchParams();
      params.set('tab', activeTab);
      if (selectedCity) {
        params.set('city', selectedCity);
      }
      navigate(`/destination/${selectedCountry}?${params.toString()}`);
    }
  };

  const tabs = [
    { id: 'car-rental', label: 'Car Rental', icon: Car },
    { id: 'chauffeur', label: 'Chauffeur', icon: Users },
    { id: 'vip-chauffeur', label: 'VIP Chauffeur', icon: Star },
  ];

  const features = {
    'car-rental': [
      { icon: Car, title: 'Wide Selection', description: 'Economy to luxury vehicles' },
      { icon: Shield, title: 'Full Insurance', description: 'Comprehensive coverage included' },
      { icon: Clock, title: 'Flexible Pickup', description: '24/7 airport & hotel delivery' },
      { icon: MapPin, title: 'Global Coverage', description: 'Available in 190+ countries' },
    ],
    'chauffeur': [
      { icon: Users, title: 'Professional Drivers', description: 'Licensed, vetted chauffeurs' },
      { icon: Clock, title: 'Punctual Service', description: 'On-time pickup guaranteed' },
      { icon: Star, title: 'Premium Vehicles', description: 'Mercedes, BMW, Audi fleet' },
      { icon: Shield, title: 'Safe & Secure', description: 'Fully insured journeys' },
    ],
    'vip-chauffeur': [
      { icon: Star, title: 'Luxury Fleet', description: 'Rolls Royce, Bentley, Maybach' },
      { icon: Users, title: 'Elite Chauffeurs', description: 'Highest trained professionals' },
      { icon: Shield, title: 'VIP Treatment', description: 'Red carpet service' },
      { icon: Clock, title: 'Concierge Service', description: 'Personalized arrangements' },
    ],
  };

  const popularDestinations = [
    { city: 'Dubai', country: 'UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400' },
    { city: 'Abu Dhabi', country: 'UAE', image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=400' },
    { city: 'London', country: 'UK', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400' },
    { city: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce65f4?w=400' },
    { city: 'New York', country: 'USA', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400' },
    { city: 'Tokyo', country: 'Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920"
            alt="Car Rental"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cars & Chauffeur Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From self-drive adventures to VIP chauffeur experiences, 
              we connect you with the world's leading car rental and transport services.
            </p>

            {/* Tab Navigation */}
            <div className="flex justify-center gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#19A880] text-white shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <tab.icon size={20} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-4">
                {/* Country */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Country</label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                      value={selectedCountry}
                      onChange={(e) => {
                        setSelectedCountry(e.target.value);
                        setSelectedCity('');
                      }}
                      className="w-full pl-12 pr-10 py-3 bg-gray-50 rounded-xl text-gray-700 outline-none focus:ring-2 focus:ring-[#19A880] appearance-none cursor-pointer"
                    >
                      <option value="">Select Country</option>
                        {countries.map((c) => (
                          <option key={c.slug} value={c.slug}>{`${getCountryFlagBySlug(c.slug)} ${c.name}`}</option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* City */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">City</label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full pl-12 pr-10 py-3 bg-gray-50 rounded-xl text-gray-700 outline-none focus:ring-2 focus:ring-[#19A880] appearance-none cursor-pointer"
                    >
                      <option value="">All Cities</option>
                      {availableCities.map((c) => (
                        <option key={c.slug} value={c.slug}>{c.name}</option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                  <button
                    onClick={handleSearch}
                    disabled={!selectedCountry}
                    className="w-full bg-[#19A880] hover:bg-[#158969] disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    Search
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Info Text */}
              <p className="text-sm text-gray-500 mt-4 text-left">
                {activeTab === 'car-rental' && 'Select a destination to view available cars and best rates.'}
                {activeTab === 'chauffeur' && 'Professional drivers for airport transfers, city tours, and business travel.'}
                {activeTab === 'vip-chauffeur' && 'Ultra-luxury vehicles with elite chauffeurs for VIP experiences.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Book with <span className="text-[#19A880]">Yahia Dubai</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We partner with the world's leading providers to bring you the best service and rates.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {features[activeTab].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#19A880]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={24} className="text-[#19A880]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-[#19A880]">Service</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Car Rental */}
            <div className={`bg-white rounded-2xl p-8 border-2 transition-all ${
              activeTab === 'car-rental' ? 'border-[#19A880] shadow-xl' : 'border-transparent shadow-lg'
            }`}>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Car size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Car Rental</h3>
              <p className="text-gray-600 mb-6">
                Freedom to explore at your own pace. Choose from economy to luxury vehicles.
              </p>
              <ul className="space-y-3 mb-6">
                {['Self-drive flexibility', 'Wide vehicle selection', 'Unlimited mileage options', 'GPS navigation included'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check size={16} className="text-[#19A880]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setActiveTab('car-rental')}
                className="w-full py-3 border-2 border-[#19A880] text-[#19A880] rounded-xl font-medium hover:bg-[#19A880] hover:text-white transition-colors"
              >
                Browse Cars
              </button>
            </div>

            {/* Chauffeur */}
            <div className={`bg-white rounded-2xl p-8 border-2 transition-all ${
              activeTab === 'chauffeur' ? 'border-[#19A880] shadow-xl' : 'border-transparent shadow-lg'
            }`}>
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Users size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chauffeur Service</h3>
              <p className="text-gray-600 mb-6">
                Sit back and relax while our professional drivers take care of everything.
              </p>
              <ul className="space-y-3 mb-6">
                {['Professional drivers', 'Airport transfers', 'City tours', 'Business travel'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check size={16} className="text-[#19A880]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setActiveTab('chauffeur')}
                className="w-full py-3 border-2 border-[#19A880] text-[#19A880] rounded-xl font-medium hover:bg-[#19A880] hover:text-white transition-colors"
              >
                Book Chauffeur
              </button>
            </div>

            {/* VIP Chauffeur */}
            <div className={`bg-white rounded-2xl p-8 border-2 transition-all ${
              activeTab === 'vip-chauffeur' ? 'border-[#19A880] shadow-xl' : 'border-transparent shadow-lg'
            }`}>
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <Star size={32} className="text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">VIP Chauffeur</h3>
              <p className="text-gray-600 mb-6">
                Ultimate luxury experience with premium vehicles and elite service.
              </p>
              <ul className="space-y-3 mb-6">
                {['Luxury fleet', 'Elite chauffeurs', 'Red carpet service', 'Concierge included'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check size={16} className="text-[#19A880]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setActiveTab('vip-chauffeur')}
                className="w-full py-3 border-2 border-[#19A880] text-[#19A880] rounded-xl font-medium hover:bg-[#19A880] hover:text-white transition-colors"
              >
                Request VIP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Popular <span className="text-[#19A880]">Destinations</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularDestinations.map((dest, index) => (
              <button
                key={index}
                onClick={() => {
                  const countrySlug = countries.find(c => c.name === dest.country)?.slug || '';
                  setSelectedCountry(countrySlug);
                  setSelectedCity(dest.city.toLowerCase().replace(' ', '-'));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative h-32 rounded-xl overflow-hidden"
              >
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-[#19A880]/80 transition-all"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="font-semibold">{dest.city}</span>
                  <span className="text-xs opacity-80">{getCountryFlagByName(dest.country)} {dest.country}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-center text-sm font-medium text-slate-700">
            <a href="https://wa.me/971501234567?text=Hello%2C%20I%20need%20live%20assistance%20for%20car%20rental%20or%20chauffeur%20service%20now." target="_blank" rel="noreferrer" className="text-[#19A880] hover:underline">
              GET LIVE ASSISTANCE FOR CAR RENTAL AND CHAUFFEUR SERVICE NOW
            </a>
          </div>
          <FounderSpot category="cars-chauffeurs" title="Yahia character slot for Car Rental and Chauffeur" />
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Trusted by <span className="text-[#19A880]">50,000+</span> Travelers
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { value: '190+', label: 'Countries' },
                { value: '10,000+', label: 'Vehicles' },
                { value: '4.8/5', label: 'Rating' },
                { value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-[#19A880] mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarsChauffeursPage;
