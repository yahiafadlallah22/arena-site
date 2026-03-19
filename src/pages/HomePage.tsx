import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users, Globe, Shield, Award, TrendingUp, Hotel, Car, Briefcase, GraduationCap, Tag, Plane, Wallet, LineChart } from 'lucide-react';
import HeroSearch from '../components/search/HeroSearch';
import PropertyCard from '../components/ui/PropertyCard';
import ActivityCard from '../components/ui/ActivityCard';
import HotelCard from '../components/ui/HotelCard';
import { getFeaturedProperties } from '../data/properties';
import { sampleActivities } from '../data/activities';
import { sampleHotels } from '../data/hotels';
import { countries, getCountryFlagBySlug } from '../data/geo';
import { getFounderSettings } from '../data/portal-settings';
import FounderSpot from '../components/ui/FounderSpot';

const HomePage: React.FC = () => {
  const featuredProperties = getFeaturedProperties().slice(0, 3);
  const featuredActivities = sampleActivities.slice(0, 4);
  const featuredHotels = sampleHotels.slice(0, 3);
  const founder = getFounderSettings();

  const verticals = [
    { icon: Building2, label: 'Real Estate', description: 'UAE off-plan and premium projects', href: '/real-estate', color: 'bg-blue-500' },
    { icon: Tag, label: 'Activities', description: 'Tours and attractions worldwide', href: '/activities', color: 'bg-green-500' },
    { icon: Hotel, label: 'Hotels', description: 'Global stays with strong conversion pages', href: '/hotels', color: 'bg-purple-500' },
    { icon: Car, label: 'Car Rental', description: 'Country-city routing for rentals', href: '/cars-chauffeurs?tab=car-rental', color: 'bg-orange-500' },
    { icon: Users, label: 'Chauffeurs', description: 'VIP and premium chauffeur flows', href: '/cars-chauffeurs?tab=chauffeur', color: 'bg-amber-600' },
    { icon: Plane, label: 'Flights', description: 'Redirect to existing flight engine', href: '/flights', color: 'bg-cyan-600' },
    { icon: Briefcase, label: 'Business Setup', description: 'Mainland and Freezone services', href: '/business-setup', color: 'bg-indigo-500' },
    { icon: Wallet, label: 'Mortgage / Credit', description: 'Finance advisory funnels', href: '/mortgage', color: 'bg-teal-700' },
    { icon: GraduationCap, label: 'Training', description: 'Founder-led investor training', href: '/training', color: 'bg-pink-500' },
    { icon: LineChart, label: 'Market Insights', description: 'Data reports and investor intelligence', href: '/market-insights', color: 'bg-emerald-700' },
  ];

  const stats = [
    { value: '22+', label: 'Years Experience' },
    { value: '50K+', label: 'Happy Clients' },
    { value: '100+', label: 'Global Partners' },
    { value: '9+', label: 'Countries' },
  ];

  const developers = [
    'Emaar Properties',
    'Damac Properties',
    'Sobha Realty',
    'Aldar Properties',
    'Meraas',
    'Nakheel',
    'Dubai Properties',
    'MAG Property',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-[#19A880]/5 py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#19A880] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#19A880] rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#19A880]/10 text-[#19A880] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe size={16} />
              <span>Your Premium Global Portal</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover Premium
              <span className="text-[#19A880]"> Opportunities</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Access real discounts, valuable investments, and exclusive services through 
              <span className="font-semibold text-gray-800"> Yahia Fadlallah's</span> 22 years of connections and market expertise.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { icon: Shield, text: 'Trusted Platform' },
                { icon: Award, text: 'Premium Quality' },
                { icon: TrendingUp, text: 'Best Value' },
                { icon: Users, text: 'Expert Support' },
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  <badge.icon size={18} className="text-[#19A880]" />
                  <span className="text-sm">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Search Component */}
          <HeroSearch />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#19A880]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need, <span className="text-[#19A880]">One Platform</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From premium real estate to global travel experiences, we connect you to the best opportunities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {verticals.map((vertical, index) => (
              <Link
                key={index}
                to={vertical.href}
                className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-[#19A880] hover:shadow-xl transition-all text-center"
              >
                <div className={`w-14 h-14 ${vertical.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform yd-icon-float`}>
                  <vertical.icon size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{vertical.label}</h3>
                <p className="text-xs text-gray-500">{vertical.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">UAE-first, built for global discovery</h2>
              <p className="mt-3 text-gray-600">Yahia Dubai puts UAE opportunities at the center while scaling activities, hotels, chauffeur services, and car rentals across many countries.</p>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {countries.slice(0, 8).map((country) => (
                  <Link key={country.slug} to={`/activities/country/${country.slug}`} className="rounded-xl border border-gray-200 px-3 py-3 text-sm text-gray-700 transition hover:border-[#19A880] hover:text-[#19A880]">
                    <span className="yd-icon-float inline-block">{getCountryFlagBySlug(country.slug)}</span> {country.name}
                  </Link>
                ))}
              </div>
            </div>
            <FounderSpot category="homepage" title="Yahia Mascot Slot" description="Keep a dedicated PNG slot for your Yahia character, category by category, in the style of a consistent brand mascot system." />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Featured <span className="text-[#19A880]">Properties</span>
              </h2>
              <p className="text-gray-600">Discover premium off-plan opportunities in UAE</p>
            </div>
            <Link
              to="/real-estate"
              className="hidden md:flex items-center gap-2 text-[#19A880] font-medium hover:gap-3 transition-all"
            >
              View All Properties
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} featured={index === 0} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/real-estate"
              className="inline-flex items-center gap-2 bg-[#19A880] hover:bg-[#158969] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View All Properties
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Popular <span className="text-[#19A880]">Activities</span>
              </h2>
              <p className="text-gray-600">Unforgettable experiences around the world</p>
            </div>
            <Link
              to="/activities"
              className="hidden md:flex items-center gap-2 text-[#19A880] font-medium hover:gap-3 transition-all"
            >
              View All Activities
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredActivities.map((activity, index) => (
              <ActivityCard key={activity.id} activity={activity} featured={index === 0} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 bg-[#19A880] hover:bg-[#158969] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View All Activities
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Top-Rated <span className="text-[#19A880]">Hotels</span>
              </h2>
              <p className="text-gray-600">Luxury accommodations worldwide</p>
            </div>
            <Link
              to="/hotels"
              className="hidden md:flex items-center gap-2 text-[#19A880] font-medium hover:gap-3 transition-all"
            >
              View All Hotels
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredHotels.map((hotel, index) => (
              <HotelCard key={hotel.id} hotel={hotel} featured={index === 0} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/hotels"
              className="inline-flex items-center gap-2 bg-[#19A880] hover:bg-[#158969] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View All Hotels
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Developer Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted <span className="text-[#19A880]">Developer Partners</span>
            </h2>
            <p className="text-gray-600">We work with the UAE's leading developers</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {developers.map((developer, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#19A880] hover:shadow-lg transition-all cursor-pointer"
              >
                <span className="font-medium text-gray-700">{developer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UAE Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore <span className="text-[#19A880]">Destinations</span>
            </h2>
            <p className="text-gray-600">Discover amazing places around the world</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {countries.slice(0, 8).map((country) => (
              <Link
                key={country.slug}
                to={`/activities?country=${country.slug}`}
                className="group relative h-40 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-[#19A880]/80 group-hover:to-[#19A880]/40 transition-all"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="mb-2 text-2xl yd-icon-float">{getCountryFlagBySlug(country.slug)}</span>
                  <span className="font-semibold text-lg">{country.name}</span>
                  <span className="text-sm opacity-80">{country.cities.length} cities</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Yahia Fadlallah Trust Section */}
      <section className="py-20 bg-[#19A880]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-8 flex items-center justify-center">
              {founder.founderPhotoUrl ? (
                <img src={founder.founderPhotoUrl} alt="Yahia Fadlallah" className="h-24 w-24 rounded-full object-cover" />
              ) : (
                <span className="text-[#19A880] text-4xl font-bold">YF</span>
              )}
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Founded by Yahia Fadlallah
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              With 22 years of industry expertise, connections, and partnerships, 
              Yahia Fadlallah brings you exclusive access to premium opportunities 
              in real estate, travel, and business.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[
                'Real Discounts',
                'Real Investments',
                'Valuable Services',
                'Premium Training',
                'Global Network',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-white text-[#19A880] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More About Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're looking for premium real estate, unforgettable travel experiences, 
              or business setup assistance, we're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-[#19A880] hover:bg-[#158969] text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/real-estate"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors backdrop-blur"
              >
                Browse Properties
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
