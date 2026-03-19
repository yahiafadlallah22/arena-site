import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, Building2, Car, Briefcase, GraduationCap, Plane, Hotel, Tag, ChevronDown, Loader2, TrendingUp } from 'lucide-react';
import { searchDestinations } from '../../data/geo';

interface SearchTab {
  id: string;
  label: string;
  icon: React.ReactNode;
  placeholder: string;
  fields: SearchField[];
  route: string;
}

interface SearchField {
  id: string;
  label: string;
  type: 'text' | 'select' | 'date' | 'number';
  icon: React.ReactNode;
  options?: { value: string; label: string }[];
  placeholder?: string;
}

const HeroSearch: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('activities');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({});
  const searchRef = useRef<HTMLDivElement>(null);

  const tabs: SearchTab[] = [
    {
      id: 'activities',
      label: 'Activities',
      icon: <Tag size={18} />,
      placeholder: 'Search activities, tours, experiences...',
      route: '/activities',
      fields: [
        { id: 'destination', label: 'Destination', type: 'text', icon: <MapPin size={16} />, placeholder: 'Where are you going?' },
        { id: 'date', label: 'Date', type: 'date', icon: <Calendar size={16} /> },
        { id: 'people', label: 'People', type: 'select', icon: <Users size={16} />, options: [
          { value: '1', label: '1 Person' },
          { value: '2', label: '2 People' },
          { value: '3', label: '3 People' },
          { value: '4', label: '4 People' },
          { value: '5+', label: '5+ People' },
        ]},
      ]
    },
    {
      id: 'real-estate',
      label: 'Real Estate',
      icon: <Building2 size={18} />,
      placeholder: 'Search properties, areas, developers...',
      route: '/real-estate',
      fields: [
        { id: 'emirate', label: 'Emirate', type: 'select', icon: <MapPin size={16} />, options: [
          { value: 'dubai', label: 'Dubai' },
          { value: 'abu-dhabi', label: 'Abu Dhabi' },
          { value: 'sharjah', label: 'Sharjah' },
          { value: 'ras-al-khaimah', label: 'Ras Al Khaimah' },
        ]},
        { id: 'area', label: 'Area', type: 'text', icon: <MapPin size={16} />, placeholder: 'All Areas' },
        { id: 'type', label: 'Type', type: 'select', icon: <Building2 size={16} />, options: [
          { value: 'apartment', label: 'Apartment' },
          { value: 'villa', label: 'Villa' },
          { value: 'townhouse', label: 'Townhouse' },
          { value: 'penthouse', label: 'Penthouse' },
        ]},
        { id: 'bedrooms', label: 'Bedrooms', type: 'select', icon: <Building2 size={16} />, options: [
          { value: 'studio', label: 'Studio' },
          { value: '1BR', label: '1 BR' },
          { value: '2BR', label: '2 BR' },
          { value: '3BR', label: '3 BR' },
          { value: '4BR+', label: '4+ BR' },
        ]},
        { id: 'status', label: 'Status', type: 'select', icon: <Tag size={16} />, options: [
          { value: 'off-plan', label: 'Off-Plan' },
          { value: 'ready', label: 'Ready' },
        ]},
        { id: 'delivery', label: 'Delivery Date', type: 'select', icon: <Calendar size={16} />, options: [
          { value: 'Q4 2026', label: 'Q4 2026' },
          { value: 'Q1 2027', label: 'Q1 2027' },
          { value: 'Q4 2027', label: 'Q4 2027' },
          { value: 'Completed', label: 'Completed / Ready' },
        ]},
      ]
    },
    {
      id: 'cars-chauffeurs',
      label: 'Cars & Chauffeurs',
      icon: <Car size={18} />,
      placeholder: 'Search car rental or chauffeur service...',
      route: '/cars-chauffeurs',
      fields: [
        { id: 'country', label: 'Country', type: 'select', icon: <MapPin size={16} />, options: [
          { value: 'uae', label: 'UAE' },
          { value: 'uk', label: 'United Kingdom' },
          { value: 'france', label: 'France' },
          { value: 'usa', label: 'USA' },
          { value: 'thailand', label: 'Thailand' },
          { value: 'japan', label: 'Japan' },
        ]},
        { id: 'city', label: 'City', type: 'select', icon: <MapPin size={16} />, options: [
          { value: 'dubai', label: 'Dubai' },
          { value: 'abu-dhabi', label: 'Abu Dhabi' },
          { value: 'london', label: 'London' },
          { value: 'paris', label: 'Paris' },
          { value: 'new-york', label: 'New York' },
        ]},
      ]
    },
    {
      id: 'flights',
      label: 'Flights',
      icon: <Plane size={18} />,
      placeholder: 'Search flights...',
      route: '/flights',
      fields: [
        { id: 'from', label: 'From', type: 'text', icon: <MapPin size={16} />, placeholder: 'Departure city' },
        { id: 'to', label: 'To', type: 'text', icon: <MapPin size={16} />, placeholder: 'Destination city' },
        { id: 'date', label: 'Departure', type: 'date', icon: <Calendar size={16} /> },
      ]
    },
    {
      id: 'hotels',
      label: 'Hotels',
      icon: <Hotel size={18} />,
      placeholder: 'Search hotels, resorts, accommodations...',
      route: '/hotels',
      fields: [
        { id: 'destination', label: 'Destination', type: 'text', icon: <MapPin size={16} />, placeholder: 'City or hotel name' },
        { id: 'checkin', label: 'Check-in', type: 'date', icon: <Calendar size={16} /> },
        { id: 'checkout', label: 'Check-out', type: 'date', icon: <Calendar size={16} /> },
        { id: 'guests', label: 'Guests', type: 'select', icon: <Users size={16} />, options: [
          { value: '1', label: '1 Guest' },
          { value: '2', label: '2 Guests' },
          { value: '3', label: '3 Guests' },
          { value: '4+', label: '4+ Guests' },
        ]},
      ]
    },
    {
      id: 'business-setup',
      label: 'Business Setup',
      icon: <Briefcase size={18} />,
      placeholder: 'Search business setup services...',
      route: '/business-setup',
      fields: [
        { id: 'type', label: 'Type', type: 'select', icon: <Building2 size={16} />, options: [
          { value: 'freezone', label: 'Freezone' },
          { value: 'mainland', label: 'Mainland' },
          { value: 'offshore', label: 'Offshore' },
        ]},
      ]
    },
    {
      id: 'mortgage',
      label: 'Mortgage',
      icon: <Building2 size={18} />,
      placeholder: 'Search mortgage services...',
      route: '/mortgage',
      fields: [
        { id: 'type', label: 'Type', type: 'select', icon: <Building2 size={16} />, options: [
          { value: 'home', label: 'Home Mortgage' },
          { value: 'commercial', label: 'Commercial Mortgage' },
          { value: 'personal', label: 'Personal Loan' },
        ]},
      ]
    },
    {
      id: 'training',
      label: 'Training',
      icon: <GraduationCap size={18} />,
      placeholder: 'Search training courses...',
      route: '/training',
      fields: [
        { id: 'category', label: 'Category', type: 'select', icon: <Tag size={16} />, options: [
          { value: 'real-estate', label: 'Real Estate' },
          { value: 'investment', label: 'Investment' },
        ]},
      ]
    },
    {
      id: 'investment',
      label: 'Investment',
      icon: <TrendingUp size={18} />,
      placeholder: 'Search by budget, ROI, and duration...',
      route: '/real-estate',
      fields: [
        { id: 'budget', label: 'Budget', type: 'select', icon: <Building2 size={16} />, options: [
          { value: '1000000', label: 'Up to AED 1M' },
          { value: '2000000', label: 'Up to AED 2M' },
          { value: '5000000', label: 'Up to AED 5M' },
        ]},
        { id: 'roi', label: 'ROI target', type: 'select', icon: <TrendingUp size={16} />, options: [
          { value: '6', label: '6%+' },
          { value: '8', label: '8%+' },
          { value: '10', label: '10%+' },
        ]},
      ]
    },
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (value.length > 1) {
      const results = searchDestinations(value);
      setSuggestions(results);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: any) => {
    setSearchQuery(suggestion.name);
    setShowSuggestions(false);
    
    if (activeTab === 'activities' || activeTab === 'hotels') {
      if (suggestion.type === 'city') {
        navigate(`${currentTab.route}?city=${suggestion.slug}&country=${suggestion.countrySlug}`);
      } else {
        navigate(`${currentTab.route}?country=${suggestion.slug}`);
      }
    } else if (activeTab === 'real-estate') {
      if (suggestion.type === 'city' && suggestion.countrySlug === 'uae') {
        navigate(`/real-estate?emirate=${suggestion.slug}`);
      }
    } else if (activeTab === 'cars-chauffeurs') {
      navigate(`/cars-chauffeurs?country=${suggestion.countrySlug || suggestion.slug}&city=${suggestion.type === 'city' ? suggestion.slug : ''}`);
    }
  };

  const handleSearch = () => {
    setIsSearching(true);

    if (activeTab === 'cars-chauffeurs') {
      const country = selectedValues.country || 'uae';
      const params = new URLSearchParams();
      params.set('tab', 'car-rental');
      if (selectedValues.city) {
        params.set('city', selectedValues.city);
      }
      navigate(`/destination/${country}?${params.toString()}`);
      setIsSearching(false);
      return;
    }

    if (activeTab === 'business-setup') {
      navigate(selectedValues.type ? `/business-setup?type=${selectedValues.type}` : '/business-setup');
      setIsSearching(false);
      return;
    }

    if (activeTab === 'mortgage') {
      navigate('/mortgage');
      setIsSearching(false);
      return;
    }

    if (activeTab === 'training') {
      navigate('/training');
      setIsSearching(false);
      return;
    }

    if (activeTab === 'investment') {
      const params = new URLSearchParams();
      params.set('intent', 'investment');
      if (selectedValues.budget) {
        params.set('budget', selectedValues.budget);
      }
      if (selectedValues.roi) {
        params.set('roi', selectedValues.roi);
      }
      navigate(`/real-estate?${params.toString()}`);
      setIsSearching(false);
      return;
    }
    
    // Smart routing based on query
    const query = searchQuery.toLowerCase();
    
    setTimeout(() => {
      // Intent detection
      if (query.includes('car') || query.includes('rent') || query.includes('chauffeur')) {
        navigate('/cars-chauffeurs');
      } else if (query.includes('hotel') || query.includes('stay') || query.includes('accommodation')) {
        navigate(`/hotels?search=${encodeURIComponent(searchQuery)}`);
      } else if (query.includes('apartment') || query.includes('villa') || query.includes('property') || query.includes('real estate')) {
        navigate(`/real-estate?search=${encodeURIComponent(searchQuery)}`);
      } else if (query.includes('business') || query.includes('company') || query.includes('freezone')) {
        navigate('/business-setup');
      } else if (query.includes('mortgage') || query.includes('loan') || query.includes('finance')) {
        navigate('/mortgage');
      } else if (query.includes('training') || query.includes('course')) {
        navigate('/training');
      } else if (query.includes('flight') || query.includes('fly')) {
        navigate('/flights');
      } else if (searchQuery && suggestions.length > 0) {
        handleSuggestionClick(suggestions[0]);
      } else {
        // Default: navigate to current tab with query
        navigate(`${currentTab.route}?search=${encodeURIComponent(searchQuery)}`);
      }
      setIsSearching(false);
    }, 500);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setSearchQuery('');
    setSelectedValues({});
    setShowSuggestions(false);
  };

  const handleFieldChange = (fieldId: string, value: string) => {
    setSelectedValues(prev => ({ ...prev, [fieldId]: value }));
  };

  return (
    <div ref={searchRef} className="w-full max-w-5xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-[#19A880] text-white shadow-lg shadow-[#19A880]/30'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Search Box */}
      <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6">
        {/* Main Search Input */}
        <div className="relative mb-4">
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border-2 border-transparent focus-within:border-[#19A880] transition-colors">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              onFocus={() => searchQuery.length > 1 && setShowSuggestions(true)}
              placeholder={currentTab.placeholder}
              className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
            />
            <button
              onClick={handleSearch}
              disabled={isSearching}
              className="bg-[#19A880] hover:bg-[#158969] text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              {isSearching ? <Loader2 size={18} className="animate-spin" /> : <Search size={18} />}
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#19A880]/10 transition-colors text-left"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    suggestion.type === 'city' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                  }`}>
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{suggestion.name}</div>
                    <div className="text-xs text-gray-500">
                      {suggestion.type === 'city' ? `City in ${suggestion.countrySlug?.toUpperCase()}` : 'Country'}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Additional Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {currentTab.fields.map((field) => (
            <div key={field.id} className="relative">
              {field.type === 'select' ? (
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {field.icon}
                  </div>
                  <select
                    value={selectedValues[field.id] || ''}
                    onChange={(e) => handleFieldChange(field.id, e.target.value)}
                    className="w-full bg-gray-50 rounded-lg pl-10 pr-8 py-3 text-sm text-gray-700 outline-none border-2 border-transparent focus:border-[#19A880] appearance-none cursor-pointer transition-colors"
                  >
                    <option value="">{field.label}</option>
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              ) : field.type === 'date' ? (
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {field.icon}
                  </div>
                  <input
                    type="date"
                    value={selectedValues[field.id] || ''}
                    onChange={(e) => handleFieldChange(field.id, e.target.value)}
                    className="w-full bg-gray-50 rounded-lg pl-10 pr-4 py-3 text-sm text-gray-700 outline-none border-2 border-transparent focus:border-[#19A880] transition-colors"
                  />
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {field.icon}
                  </div>
                  <input
                    type="text"
                    value={selectedValues[field.id] || ''}
                    onChange={(e) => handleFieldChange(field.id, e.target.value)}
                    placeholder={field.placeholder || field.label}
                    className="w-full bg-gray-50 rounded-lg pl-10 pr-4 py-3 text-sm text-gray-700 outline-none border-2 border-transparent focus:border-[#19A880] transition-colors"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-gray-500">Popular:</span>
            {activeTab === 'activities' && (
              <>
                <button onClick={() => { setSearchQuery('Dubai'); handleSearch(); }} className="px-3 py-1 bg-gray-100 hover:bg-[#19A880]/10 text-gray-600 hover:text-[#19A880] rounded-full transition-colors">Dubai</button>
                <button onClick={() => { setSearchQuery('London'); handleSearch(); }} className="px-3 py-1 bg-gray-100 hover:bg-[#19A880]/10 text-gray-600 hover:text-[#19A880] rounded-full transition-colors">London</button>
                <button onClick={() => { setSearchQuery('Paris'); handleSearch(); }} className="px-3 py-1 bg-gray-100 hover:bg-[#19A880]/10 text-gray-600 hover:text-[#19A880] rounded-full transition-colors">Paris</button>
              </>
            )}
            {activeTab === 'real-estate' && (
              <>
                <button onClick={() => { setSelectedValues({ status: 'off-plan' }); navigate('/real-estate?status=off-plan'); }} className="px-3 py-1 bg-gray-100 hover:bg-[#19A880]/10 text-gray-600 hover:text-[#19A880] rounded-full transition-colors">Off-Plan</button>
                <button onClick={() => { setSelectedValues({ emirate: 'dubai' }); navigate('/real-estate?emirate=dubai'); }} className="px-3 py-1 bg-gray-100 hover:bg-[#19A880]/10 text-gray-600 hover:text-[#19A880] rounded-full transition-colors">Dubai</button>
                <button onClick={() => { setSelectedValues({ type: 'villa' }); navigate('/real-estate?type=villa'); }} className="px-3 py-1 bg-gray-100 hover:bg-[#19A880]/10 text-gray-600 hover:text-[#19A880] rounded-full transition-colors">Villas</button>
              </>
            )}
            {activeTab === 'hotels' && (
              <>
                <button onClick={() => { setSearchQuery('Dubai'); handleSearch(); }} className="px-3 py-1 bg-gray-100 hover:bg-[#19A880]/10 text-gray-600 hover:text-[#19A880] rounded-full transition-colors">Dubai Hotels</button>
                <button onClick={() => { setSearchQuery('London'); handleSearch(); }} className="px-3 py-1 bg-gray-100 hover:bg-[#19A880]/10 text-gray-600 hover:text-[#19A880] rounded-full transition-colors">London Hotels</button>
                <button onClick={() => { setSearchQuery('Paris'); handleSearch(); }} className="px-3 py-1 bg-gray-100 hover:bg-[#19A880]/10 text-gray-600 hover:text-[#19A880] rounded-full transition-colors">Paris Hotels</button>
              </>
            )}
            {activeTab === 'investment' && (
              <>
                <button onClick={() => { setSelectedValues({ budget: '2000000', roi: '8' }); navigate('/real-estate?intent=investment&budget=2000000&roi=8'); }} className="px-3 py-1 bg-gray-100 hover:bg-[#19A880]/10 text-gray-600 hover:text-[#19A880] rounded-full transition-colors">ROI 8%+</button>
                <button onClick={() => { setSelectedValues({ budget: '5000000' }); navigate('/real-estate?intent=investment&budget=5000000'); }} className="px-3 py-1 bg-gray-100 hover:bg-[#19A880]/10 text-gray-600 hover:text-[#19A880] rounded-full transition-colors">AED 5M</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
