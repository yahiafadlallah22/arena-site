import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    {
      label: 'Real Estate',
      href: '/real-estate',
      dropdown: [
        { label: 'All Properties', href: '/real-estate' },
        { label: 'Off-Plan Dubai', href: '/real-estate?status=off-plan&emirate=dubai' },
        { label: 'Off-Plan Abu Dhabi', href: '/real-estate?status=off-plan&emirate=abu-dhabi' },
        { label: 'Apartments', href: '/real-estate?type=apartment' },
        { label: 'Villas', href: '/real-estate?type=villa' },
        { label: 'Townhouses', href: '/real-estate?type=townhouse' },
      ]
    },
    {
      label: 'Activities',
      href: '/activities',
      dropdown: [
        { label: 'All Activities', href: '/activities' },
        { label: 'Dubai Activities', href: '/activities?city=dubai' },
        { label: 'Abu Dhabi Activities', href: '/activities?city=abu-dhabi' },
        { label: 'London Activities', href: '/activities?city=london' },
        { label: 'Paris Activities', href: '/activities?city=paris' },
      ]
    },
    {
      label: 'Hotels',
      href: '/hotels',
      dropdown: [
        { label: 'All Hotels', href: '/hotels' },
        { label: 'Dubai Hotels', href: '/hotels?city=dubai' },
        { label: 'Abu Dhabi Hotels', href: '/hotels?city=abu-dhabi' },
        { label: 'London Hotels', href: '/hotels?city=london' },
        { label: 'Paris Hotels', href: '/hotels?city=paris' },
      ]
    },
    {
      label: 'Car Rental',
      href: '/cars-chauffeurs?tab=car-rental',
      dropdown: [
        { label: 'Car Rental', href: '/cars-chauffeurs?tab=car-rental' },
        { label: 'Country Pages', href: '/destination/uae?tab=cars-chauffeurs&mode=car-rental' },
      ]
    },
    {
      label: 'Chauffeurs & Taxis',
      href: '/cars-chauffeurs?tab=chauffeur',
      dropdown: [
        { label: 'Chauffeur', href: '/cars-chauffeurs?tab=chauffeur' },
        { label: 'VIP Chauffeur', href: '/cars-chauffeurs?tab=vip-chauffeur' },
      ]
    },
    {
      label: 'Business Setup',
      href: '/business-setup',
      dropdown: [
        { label: 'Overview', href: '/business-setup' },
        { label: 'Freezone Setup', href: '/business-setup/freezone' },
        { label: 'Mainland Setup', href: '/business-setup/mainland' },
        { label: 'Offshore Setup', href: '/business-setup/offshore' },
      ]
    },
    {
      label: 'Mortgage',
      href: '/mortgage',
    },
    {
      label: 'Training',
      href: '/training',
    },
    {
      label: 'Insights',
      href: '/blog',
      dropdown: [
        { label: 'Blog', href: '/blog' },
        { label: 'Market Insights', href: '/market-insights' },
      ]
    },
    {
      label: 'Admin',
      href: '/admin',
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+97141234567" className="flex items-center gap-2 hover:text-[#19A880] transition-colors">
              <Phone size={14} />
              <span>+971 4 123 4567</span>
            </a>
            <a href="mailto:info@yahiadubai.com" className="flex items-center gap-2 hover:text-[#19A880] transition-colors">
              <Mail size={14} />
              <span>info@yahiadubai.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">22 Years of Excellence</span>
            <span className="text-[#19A880] font-medium">|</span>
            <span className="text-gray-400">Trusted by 50,000+ Clients</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#19A880] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Y</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Yahia Dubai</h1>
                <p className="text-xs text-gray-500 -mt-1">Premium Global Portal</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname.startsWith(item.href)
                        ? 'text-[#19A880] bg-[#19A880]/10'
                        : 'text-gray-700 hover:text-[#19A880] hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#19A880]/10 hover:text-[#19A880] transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="bg-[#19A880] hover:bg-[#158969] text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 last:border-0">
                  <Link
                    to={item.href}
                    className="block py-3 text-gray-700 font-medium hover:text-[#19A880]"
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="pb-3 pl-4 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block text-sm text-gray-500 hover:text-[#19A880]"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4">
                <Link
                  to="/contact"
                  className="block w-full bg-[#19A880] hover:bg-[#158969] text-white text-center px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
