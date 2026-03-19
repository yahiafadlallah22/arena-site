import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Tag, Grid, List, ChevronDown, X, Search } from 'lucide-react';
import ActivityCard from '../components/ui/ActivityCard';
import { sampleActivities } from '../data/activities';
import FounderSpot from '../components/ui/FounderSpot';
import { countries, getCountryFlagByName, getCountryFlagBySlug, matchesCountrySlug } from '../data/geo';

const ActivitiesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchInput, setSearchInput] = useState('');

  // Get filter values from URL
  const country = searchParams.get('country') || '';
  const city = searchParams.get('city') || '';
  const category = searchParams.get('category') || '';
  const duration = searchParams.get('duration') || '';
  const rating = searchParams.get('rating') || '';
  const searchQuery = searchParams.get('search') || '';

  // Get available cities based on selected country
  const availableCities = useMemo(() => {
    if (country) {
      const selectedCountry = countries.find(c => c.slug === country);
      return selectedCountry?.cities || [];
    }
    return countries.flatMap(c => c.cities);
  }, [country]);

  // Filter activities
  const filteredActivities = useMemo(() => {
    return sampleActivities.filter((activity) => {
      if (country && !matchesCountrySlug(country, activity.destination.country)) return false;
      if (city && activity.destination.city.toLowerCase() !== city.replace('-', ' ').toLowerCase()) return false;
      if (category && activity.category.toLowerCase() !== category.toLowerCase()) return false;
      if (duration && !`${activity.logistics.duration || ''}`.toLowerCase().includes(duration.toLowerCase())) return false;
      if (rating && activity.ratings.score < Number(rating)) return false;
      if (searchQuery || searchInput) {
        const query = (searchQuery || searchInput).toLowerCase();
        const searchableText = `${activity.title} ${activity.destination.city} ${activity.destination.country} ${activity.category}`.toLowerCase();
        if (!searchableText.includes(query)) return false;
      }
      return true;
    });
  }, [country, city, category, duration, rating, searchQuery, searchInput]);

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

  const activeFiltersCount = [country, city, category, duration, rating, searchQuery].filter(Boolean).length;

  const categories = [
    { value: 'landmarks', label: 'Landmarks' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'culture', label: 'Culture' },
    { value: 'nature', label: 'Nature' },
    { value: 'food', label: 'Food & Dining' },
    { value: 'entertainment', label: 'Entertainment' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#19A880] rounded-xl flex items-center justify-center">
              <Tag size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Activities & Tours</h1>
              <p className="text-gray-600">Discover unforgettable experiences worldwide</p>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search activities..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-[#19A880] focus:ring-1 focus:ring-[#19A880] outline-none"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 flex-1">
              {/* Country Filter */}
              <div className="relative">
                <select
                  value={country}
                  onChange={(e) => updateFilter('country', e.target.value)}
                  className={`appearance-none px-4 py-2.5 pr-10 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                    country
                      ? 'border-[#19A880] bg-[#19A880]/10 text-[#19A880]'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <option value="">Country</option>
                    {countries.map((c) => (
                      <option key={c.slug} value={c.slug}>{`${getCountryFlagBySlug(c.slug)} ${c.name}`}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

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

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => updateFilter('category', e.target.value)}
                  className={`appearance-none px-4 py-2.5 pr-10 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                    category
                      ? 'border-[#19A880] bg-[#19A880]/10 text-[#19A880]'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <option value="">Category</option>
                  {categories.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={duration}
                  onChange={(e) => updateFilter('duration', e.target.value)}
                  className={`appearance-none px-4 py-2.5 pr-10 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                    duration
                      ? 'border-[#19A880] bg-[#19A880]/10 text-[#19A880]'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <option value="">Duration</option>
                  <option value="1-2 hours">1-2 hours</option>
                  <option value="2-3 hours">2-3 hours</option>
                  <option value="half day">Half day</option>
                  <option value="full day">Full day</option>
                  <option value="6 hours">6 hours</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={rating}
                  onChange={(e) => updateFilter('rating', e.target.value)}
                  className={`appearance-none px-4 py-2.5 pr-10 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                    rating
                      ? 'border-[#19A880] bg-[#19A880]/10 text-[#19A880]'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
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
                <span className="font-semibold text-gray-900">{filteredActivities.length}</span> activities found
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
        {filteredActivities.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Tag size={24} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No activities found</h3>
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
            viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'
          }`}>
            {filteredActivities.map((activity, index) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                featured={index === 0 && viewMode === 'grid'}
              />
            ))}
          </div>
        )}
      </div>

      {/* Popular Destinations */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Popular <span className="text-[#19A880]">Destinations</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Dubai', country: 'UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400' },
              { name: 'Abu Dhabi', country: 'UAE', image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=400' },
              { name: 'London', country: 'UK', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400' },
              { name: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce65f4?w=400' },
              { name: 'Tokyo', country: 'Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400' },
              { name: 'Singapore', country: 'Singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400' },
            ].map((dest, index) => (
              <button
                key={index}
                onClick={() => {
                  setSearchParams({ city: dest.name.toLowerCase().replace(' ', '-') });
                }}
                className="group relative h-32 rounded-xl overflow-hidden"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-[#19A880]/80 transition-all"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="font-semibold">{dest.name}</span>
                   <span className="text-xs opacity-80">{getCountryFlagByName(dest.country)} {dest.country}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="mb-6 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-center text-sm font-medium text-slate-700">
            <a href="https://wa.me/971501234567?text=Hello%2C%20I%20need%20live%20assistance%20to%20choose%20the%20best%20activity%20now." target="_blank" rel="noreferrer" className="text-[#19A880] hover:underline">
              GET LIVE ASSISTANCE TO CHOOSE THIS ACTIVITY NOW
            </a>
          </div>
          <FounderSpot category="activities" title="Yahia character slot for Activities" />
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Book Amazing Activities with Yahia Dubai
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-4">
                Discover the world's most exciting activities and experiences with Yahia Dubai. 
                From iconic landmarks to thrilling adventures, cultural tours to culinary experiences, 
                we curate the best activities for unforgettable memories.
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Best Price Guarantee</h3>
                  <p className="text-sm text-gray-600">Find a lower price? We'll match it and give you an extra 10% off.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Free Cancellation</h3>
                  <p className="text-sm text-gray-600">Plans change. Cancel most bookings for free up to 24 hours before.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Verified Reviews</h3>
                  <p className="text-sm text-gray-600">Real reviews from real travelers to help you choose.</p>
                </div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <Link to="/activities/country/uae" className="rounded-3xl border border-slate-200 p-6 transition hover:border-[#19A880] hover:shadow-lg">
                  <div className="text-sm font-semibold text-[#19A880]">UAE</div>
                  <div className="mt-2 text-xl font-semibold text-slate-950">Country page</div>
                </Link>
                <Link to="/activities/city/dubai" className="rounded-3xl border border-slate-200 p-6 transition hover:border-[#19A880] hover:shadow-lg">
                  <div className="text-sm font-semibold text-[#19A880]">Dubai</div>
                  <div className="mt-2 text-xl font-semibold text-slate-950">City page</div>
                </Link>
                <Link to="/activities" className="rounded-3xl border border-slate-200 p-6 transition hover:border-[#19A880] hover:shadow-lg">
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

export default ActivitiesPage;
