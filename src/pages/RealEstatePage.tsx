import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Building2, ChevronDown, Download, Grid, List, Map, MessageCircle, X } from 'lucide-react';
import PropertyCard from '../components/ui/PropertyCard';
import { sampleProperties } from '../data/properties';
import { getDiscountOverride } from '../data/portal-settings';

const RealEstatePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get filter values from URL
  const emirate = searchParams.get('emirate') || '';
  const propertyType = searchParams.get('type') || '';
  const status = searchParams.get('status') || '';
  const bedrooms = searchParams.get('bedrooms') || '';
  const delivery = searchParams.get('delivery') || '';
  const discount = searchParams.get('discount') || '';
  const searchQuery = searchParams.get('search') || '';

  // Filter properties
  const filteredProperties = useMemo(() => {
    return sampleProperties.filter((property) => {
      if (emirate && property.location.emirate.toLowerCase() !== emirate.toLowerCase()) return false;
      if (propertyType && property.propertyType !== propertyType) return false;
      if (status && property.details.status !== status) return false;
      if (bedrooms && property.details.bedrooms !== bedrooms) return false;
      if (delivery) {
        const deliveryText = `${property.details.deliveryDate || property.details.handoverDate || ''}`.toLowerCase();
        if (!deliveryText.includes(delivery.toLowerCase())) return false;
      }
      if (discount === 'yes' && !getDiscountOverride(property.id)) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const searchableText = `${property.title} ${property.location.area} ${property.location.city} ${property.developer}`.toLowerCase();
        if (!searchableText.includes(query)) return false;
      }
      return true;
    });
  }, [emirate, propertyType, status, bedrooms, delivery, discount, searchQuery]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearAllFilters = () => {
    setSearchParams({});
  };

  const activeFiltersCount = [emirate, propertyType, status, bedrooms, delivery, discount, searchQuery].filter(Boolean).length;

  const filters = [
    {
      id: 'emirate',
      label: 'Emirate',
      value: emirate,
      options: [
        { value: 'dubai', label: 'Dubai' },
        { value: 'abu-dhabi', label: 'Abu Dhabi' },
        { value: 'sharjah', label: 'Sharjah' },
        { value: 'ras-al-khaimah', label: 'Ras Al Khaimah' },
      ]
    },
    {
      id: 'type',
      label: 'Property Type',
      value: propertyType,
      options: [
        { value: 'apartment', label: 'Apartment' },
        { value: 'villa', label: 'Villa' },
        { value: 'townhouse', label: 'Townhouse' },
        { value: 'penthouse', label: 'Penthouse' },
        { value: 'studio', label: 'Studio' },
      ]
    },
    {
      id: 'status',
      label: 'Status',
      value: status,
      options: [
        { value: 'off-plan', label: 'Off-Plan' },
        { value: 'ready', label: 'Ready' },
        { value: 'under-construction', label: 'Under Construction' },
      ]
    },
    {
      id: 'bedrooms',
      label: 'Bedrooms',
      value: bedrooms,
      options: [
        { value: 'Studio', label: 'Studio' },
        { value: '1BR', label: '1 Bedroom' },
        { value: '2BR', label: '2 Bedrooms' },
        { value: '3BR', label: '3 Bedrooms' },
        { value: '4BR', label: '4 Bedrooms' },
        { value: '5BR+', label: '5+ Bedrooms' },
      ]
    },
    {
      id: 'delivery',
      label: 'Delivery Date',
      value: delivery,
      options: [
        { value: 'Q1 2026', label: 'Q1 2026' },
        { value: 'Q2 2026', label: 'Q2 2026' },
        { value: 'Q3 2026', label: 'Q3 2026' },
        { value: 'Q4 2026', label: 'Q4 2026' },
        { value: 'Q1 2027', label: 'Q1 2027' },
        { value: 'Q4 2027', label: 'Q4 2027' },
        { value: 'Completed', label: 'Ready / Completed' },
      ]
    },
      {
        id: 'discount',
        label: 'Discount',
        value: discount,
        options: [
          { value: 'yes', label: 'Discounted projects only' },
        ]
      },
  ];

  const averagePrice = Math.round(filteredProperties.reduce((sum, item) => sum + item.pricing.startingPrice, 0) / Math.max(filteredProperties.length, 1));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#19A880] rounded-xl flex items-center justify-center">
              <Building2 size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Real Estate</h1>
              <p className="text-gray-600">Premium off-plan properties in the UAE</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 xl:grid-cols-3">
            <Link to="/real-estate/map" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#19A880] hover:text-[#19A880]">
              <Map size={16} /> Interactive map
            </Link>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#19A880] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#128768]">
              <MessageCircle size={16} /> RECEIVE A CALLBACK IN 55 SECONDS
            </button>
            <a href="https://wa.me/971501234567?text=Hello%2C%20I%20need%20live%20real%20estate%20assistance%20now%20on%20Yahia%20Dubai." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#19A880] hover:text-[#19A880]">
              <MessageCircle size={16} /> GET LIVE ASSISTANCE ON WHATSAPP
            </a>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#19A880] hover:text-[#19A880]">
              <Download size={16} /> Download stock / brochure
            </button>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 flex-1">
              {filters.map((filter) => (
                <div key={filter.id} className="relative">
                  <select
                    value={filter.value}
                    onChange={(e) => updateFilter(filter.id, e.target.value)}
                    className={`appearance-none px-4 py-2.5 pr-10 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                      filter.value
                        ? 'border-[#19A880] bg-[#19A880]/10 text-[#19A880]'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <option value="">{filter.label}</option>
                    {filter.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              ))}

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
                <span className="font-semibold text-gray-900">{filteredProperties.length}</span> properties found
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

            <div className="grid w-full gap-3 md:grid-cols-3 xl:w-auto xl:grid-cols-3">
              {[
                { label: 'Average price', value: `AED ${averagePrice.toLocaleString()}` },
                { label: 'Delivery date filter', value: 'Enabled everywhere' },
                { label: 'Discount filter', value: 'Available' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
                  <div className="mt-1 text-sm font-semibold text-[#19A880]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-8">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 size={24} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
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
            {filteredProperties.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                featured={index === 0 && viewMode === 'grid'}
              />
            ))}
          </div>
        )}
      </div>

      {/* SEO Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why Invest in UAE Real Estate?
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-4">
                The UAE offers one of the most attractive real estate markets in the world, with strong rental yields, 
                tax-free returns, and a thriving economy. Whether you're looking for an off-plan investment opportunity 
                or a ready-to-move property, Yahia Dubai connects you with the best developers and projects.
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">High ROI</h3>
                  <p className="text-sm text-gray-600">Average rental yields of 6-8% in prime locations</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Tax Benefits</h3>
                  <p className="text-sm text-gray-600">0% property tax and 0% capital gains tax</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Residency Visa</h3>
                  <p className="text-sm text-gray-600">Property investment can qualify you for UAE residency</p>
                </div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <Link to="/destination/uae?tab=real-estate" className="rounded-3xl border border-slate-200 p-6 transition hover:border-[#19A880] hover:shadow-lg">
                  <div className="text-sm font-semibold text-[#19A880]">UAE</div>
                  <div className="mt-2 text-xl font-semibold text-slate-950">Country page</div>
                </Link>
                <Link to="/destination/uae/dubai?tab=real-estate" className="rounded-3xl border border-slate-200 p-6 transition hover:border-[#19A880] hover:shadow-lg">
                  <div className="text-sm font-semibold text-[#19A880]">Dubai</div>
                  <div className="mt-2 text-xl font-semibold text-slate-950">City page</div>
                </Link>
                <Link to="/real-estate/map" className="rounded-3xl border border-slate-200 p-6 transition hover:border-[#19A880] hover:shadow-lg">
                  <div className="text-sm font-semibold text-[#19A880]">Map</div>
                  <div className="mt-2 text-xl font-semibold text-slate-950">Interactive explorer</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Callback CTA</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950">RECEIVE A CALLBACK IN 55 SECONDS</h2>
                <p className="mt-3 max-w-2xl text-slate-600">We can call back interested buyers quickly, send brochures, and support free investment training.</p>
              </div>
              <div className="flex gap-3">
                <a href="tel:+97141234567" className="rounded-2xl bg-[#19A880] px-5 py-3 font-medium text-white">Call now</a>
                <a href="https://wa.me/971501234567?text=I%20want%20a%20real%20estate%20callback%20in%2055%20seconds" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 px-5 py-3 font-medium text-slate-700">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstatePage;
