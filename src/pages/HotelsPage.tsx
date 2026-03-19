import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Hotel, Grid, List, ChevronDown, X, Search, Star } from 'lucide-react';
import HotelCard from '../components/ui/HotelCard';
import { sampleHotels } from '../data/hotels';
import FounderSpot from '../components/ui/FounderSpot';
import { countries, getCountryFlagByName, getCountryFlagBySlug, matchesCountrySlug } from '../data/geo';

const HotelsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchInput, setSearchInput] = useState('');

  // Get filter values from URL
  const country = searchParams.get('country') || '';
  const city = searchParams.get('city') || '';
  const searchQuery = searchParams.get('search') || '';
  const rating = searchParams.get('rating') || '';
  const priceBand = searchParams.get('price') || '';
  const propertyClass = searchParams.get('class') || '';
  const boardType = searchParams.get('board') || '';
  const freeCancellation = searchParams.get('freeCancellation') || '';

  // Get available cities based on selected country
  const availableCities = useMemo(() => {
    if (country) {
      const selectedCountry = countries.find(c => c.slug === country);
      return selectedCountry?.cities || [];
    }
    return countries.flatMap(c => c.cities);
  }, [country]);

  // Filter hotels
  const filteredHotels = useMemo(() => {
    return sampleHotels.filter((hotel) => {
      if (country && !matchesCountrySlug(country, hotel.destination.country)) return false;
      if (city && hotel.destination.city.toLowerCase() !== city.replace('-', ' ').toLowerCase()) return false;
      if (searchQuery || searchInput) {
        const query = (searchQuery || searchInput).toLowerCase();
        const searchableText = `${hotel.hotelName} ${hotel.destination.city} ${hotel.destination.country}`.toLowerCase();
        if (!searchableText.includes(query)) return false;
      }
      if (rating && hotel.ratings.score < Number(rating)) return false;
      if (priceBand) {
        const price = hotel.pricing.price;
        if (priceBand === 'budget' && price > 300) return false;
        if (priceBand === 'mid' && (price < 300 || price > 1200)) return false;
        if (priceBand === 'luxury' && price < 1200) return false;
      }
      if (propertyClass && !hotel.content.summary.toLowerCase().includes(propertyClass.toLowerCase())) return false;
      if (boardType && !hotel.content.amenities.join(' ').toLowerCase().includes(boardType.toLowerCase())) return false;
      if (freeCancellation && freeCancellation === 'yes' && hotel.ratings.score < 4.5) return false;
      return true;
    });
  }, [country, city, searchQuery, searchInput, rating, priceBand, propertyClass, boardType, freeCancellation]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    // Clear city if country changes
    if (key === 'country') {
      newParams.delete('city');
    }
    setSearchParams(newParams);
  };

  const clearAllFilters = () => {
    setSearchParams({});
    setSearchInput('');
  };

  const activeFiltersCount = [country, city, searchQuery, rating, priceBand, propertyClass, boardType, freeCancellation].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920"
            alt="Hotels"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find Your Perfect Stay
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover luxury hotels, boutique stays, and budget-friendly accommodations worldwide.
              Best rates guaranteed.
            </p>

            {/* Quick Search */}
            <div className="bg-white rounded-2xl p-4 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search hotels, destinations..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#19A880] outline-none"
                  />
                </div>
                <div className="flex gap-2">
                  <select
                    value={country}
                    onChange={(e) => updateFilter('country', e.target.value)}
                    className="px-4 py-3 bg-gray-50 rounded-xl text-gray-700 cursor-pointer outline-none focus:ring-2 focus:ring-[#19A880]"
                  >
                    <option value="">All Countries</option>
                    {countries.map((c) => (
                      <option key={c.slug} value={c.slug}>{`${getCountryFlagBySlug(c.slug)} ${c.name}`}</option>
                    ))}
                  </select>
                  <button
                    onClick={() => {/* Search handler */}}
                    className="bg-[#19A880] hover:bg-[#158969] text-white px-8 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-8 text-white/80">
              <div className="flex items-center gap-2">
                <Star size={18} className="text-yellow-400 fill-yellow-400" />
                <span className="text-sm">Best Price Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">✓ Free Cancellation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">✓ 24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 flex-1">
              {/* City Filter */}
              <div className="relative">
                <select
                  value={city}
                  onChange={(e) => updateFilter('city', e.target.value)}
                  className={`appearance-none px-4 py-2.5 pr-10 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                    city
                      ? 'border-[#19A880] bg-[#19A880]/10 text-[#19A880]'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <option value="">City</option>
                  {availableCities.map((c) => (
                    <option key={c.slug} value={c.slug}>{c.name}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              {/* Rating Filter */}
              <div className="relative">
                <select
                  value={rating}
                  onChange={(e) => updateFilter('rating', e.target.value)}
                  className={`appearance-none px-4 py-2.5 pr-10 rounded-lg border text-sm font-medium cursor-pointer ${
                    rating ? 'border-[#19A880] bg-[#19A880]/10 text-[#19A880]' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <option value="">Rating</option>
                  <option value="4.5">4.5+</option>
                  <option value="4.7">4.7+</option>
                  <option value="4.8">4.8+</option>
                  <option value="4.9">4.9+</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              {/* Price Filter */}
              <div className="relative">
                <select value={priceBand} onChange={(e) => updateFilter('price', e.target.value)} className={`appearance-none px-4 py-2.5 pr-10 rounded-lg border text-sm font-medium cursor-pointer ${priceBand ? 'border-[#19A880] bg-[#19A880]/10 text-[#19A880]' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`}>
                  <option value="">Price Range</option>
                  <option value="budget">Budget (Under $100)</option>
                  <option value="mid">Mid-Range ($100-$300)</option>
                  <option value="luxury">Luxury ($300+)</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative">
                <select value={propertyClass} onChange={(e) => updateFilter('class', e.target.value)} className={`appearance-none px-4 py-2.5 pr-10 rounded-lg border text-sm font-medium cursor-pointer ${propertyClass ? 'border-[#19A880] bg-[#19A880]/10 text-[#19A880]' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`}>
                  <option value="">Class</option>
                  <option value="luxury">Luxury</option>
                  <option value="boutique">Boutique</option>
                  <option value="family">Family</option>
                  <option value="business">Business</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative">
                <select value={boardType} onChange={(e) => updateFilter('board', e.target.value)} className={`appearance-none px-4 py-2.5 pr-10 rounded-lg border text-sm font-medium cursor-pointer ${boardType ? 'border-[#19A880] bg-[#19A880]/10 text-[#19A880]' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`}>
                  <option value="">Board type</option>
                  <option value="breakfast">Breakfast included</option>
                  <option value="spa">Spa access</option>
                  <option value="beach">Beach access</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <button
                onClick={() => updateFilter('freeCancellation', freeCancellation === 'yes' ? '' : 'yes')}
                className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors ${freeCancellation === 'yes' ? 'border-[#19A880] bg-[#19A880]/10 text-[#19A880]' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`}
              >
                Free cancellation
              </button>

              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-1 px-4 py-2.5 text-red-500 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors"
                >
                  <X size={16} />
                  Clear ({activeFiltersCount})
                </button>
              )}
            </div>

            {/* Results Count & View Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">{filteredHotels.length}</span> hotels found
              </span>
              <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow text-[#19A880]' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow text-[#19A880]' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-8">
        {filteredHotels.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Hotel size={24} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No hotels found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria</p>
            <button
              onClick={clearAllFilters}
              className="bg-[#19A880] hover:bg-[#158969] text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
          }`}>
            {filteredHotels.map((hotel, index) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                featured={index === 0 && viewMode === 'grid'}
              />
            ))}
          </div>
        )}
      </div>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Hotel SEO</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950">Country and city hotel pages</h2>
                <p className="mt-3 max-w-2xl text-slate-600">Dedicated hotel pages help rank for Dubai, Abu Dhabi, London, Paris, and other destination search intent.</p>
              </div>
              <Link to="/hotels/city/dubai" className="inline-flex items-center gap-2 rounded-2xl bg-[#19A880] px-5 py-3 font-medium text-white">
                Dubai hotels page <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="mb-6 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-center text-sm font-medium text-slate-700">
            <a href="https://wa.me/971501234567?text=Hello%2C%20I%20need%20live%20assistance%20to%20choose%20the%20best%20hotel%20now." target="_blank" rel="noreferrer" className="text-[#19A880] hover:underline">
              GET LIVE ASSISTANCE TO CHOOSE THIS HOTEL NOW
            </a>
          </div>
          <FounderSpot category="hotels" title="Yahia character slot for Hotels" />
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Popular <span className="text-[#19A880]">Hotel Destinations</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Dubai', country: 'UAE', count: 1250, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400' },
              { name: 'London', country: 'UK', count: 3420, image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400' },
              { name: 'Paris', country: 'France', count: 2180, image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce65f4?w=400' },
              { name: 'New York', country: 'USA', count: 4560, image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400' },
              { name: 'Tokyo', country: 'Japan', count: 1890, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400' },
              { name: 'Singapore', country: 'Singapore', count: 980, image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400' },
            ].map((dest, index) => (
              <button
                key={index}
                onClick={() => {
                  setSearchParams({ city: dest.name.toLowerCase().replace(' ', '-') });
                }}
                className="group relative h-40 rounded-xl overflow-hidden"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-[#19A880]/80 transition-all"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="font-semibold">{dest.name}</span>
                  <span className="text-xs opacity-80">{dest.count}+ hotels</span>
                  <span className="text-[11px] opacity-80">{getCountryFlagByName(dest.country)} {dest.country}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Book Hotels with Confidence at Yahia Dubai
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-4">
                From luxury resorts to budget-friendly accommodations, Yahia Dubai offers 
                the best hotel deals worldwide. With our price match guarantee and exclusive 
                partnerships, you'll always get the best rates.
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Price Match Guarantee</h3>
                  <p className="text-sm text-gray-600">Found a lower price? We'll match it and give you an extra discount.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Exclusive Member Rates</h3>
                  <p className="text-sm text-gray-600">Unlock special prices and perks when you book with us.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Earn Rewards</h3>
                  <p className="text-sm text-gray-600">Collect points on every booking and redeem for free stays.</p>
                </div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <Link to="/hotels/country/uae" className="rounded-3xl border border-slate-200 p-6 transition hover:border-[#19A880] hover:shadow-lg">
                  <div className="text-sm font-semibold text-[#19A880]">UAE</div>
                  <div className="mt-2 text-xl font-semibold text-slate-950">Country page</div>
                </Link>
                <Link to="/hotels/city/dubai" className="rounded-3xl border border-slate-200 p-6 transition hover:border-[#19A880] hover:shadow-lg">
                  <div className="text-sm font-semibold text-[#19A880]">Dubai</div>
                  <div className="mt-2 text-xl font-semibold text-slate-950">City page</div>
                </Link>
                <Link to="/hotels" className="rounded-3xl border border-slate-200 p-6 transition hover:border-[#19A880] hover:shadow-lg">
                  <div className="text-sm font-semibold text-[#19A880]">Search</div>
                  <div className="mt-2 text-xl font-semibold text-slate-950">Full filters</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelsPage;
