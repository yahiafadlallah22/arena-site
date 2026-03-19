import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Real Estate': [
      { label: 'Off-Plan Properties', href: '/real-estate?status=off-plan' },
      { label: 'Dubai Properties', href: '/real-estate?emirate=dubai' },
      { label: 'Abu Dhabi Properties', href: '/real-estate?emirate=abu-dhabi' },
      { label: 'Apartments', href: '/real-estate?type=apartment' },
      { label: 'Villas', href: '/real-estate?type=villa' },
      { label: 'Townhouses', href: '/real-estate?type=townhouse' },
    ],
    'Travel': [
      { label: 'Activities', href: '/activities' },
      { label: 'Hotels', href: '/hotels' },
      { label: 'Car Rental', href: '/cars-chauffeurs' },
      { label: 'Chauffeur Service', href: '/cars-chauffeurs?tab=chauffeur' },
      { label: 'Flights', href: '/flights' },
    ],
    'Business': [
      { label: 'Freezone Setup', href: '/business-setup/freezone' },
      { label: 'Mainland Setup', href: '/business-setup/mainland' },
      { label: 'Offshore Setup', href: '/business-setup/offshore' },
      { label: 'Mortgage Services', href: '/mortgage' },
      { label: 'Training', href: '/training' },
    ],
    'Company': [
      { label: 'About Us', href: '/about' },
      { label: 'Our Story', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#19A880] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Y</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Yahia Dubai</h2>
                <p className="text-xs text-gray-400">Premium Global Portal</p>
              </div>
            </Link>
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Your trusted gateway to premium real estate, travel experiences, and business opportunities in the UAE and beyond. Founded by Yahia Fadlallah with 22 years of industry expertise.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="bg-gray-800 px-3 py-2 rounded-lg text-xs">
                <span className="text-[#19A880] font-bold">22+</span> Years Experience
              </div>
              <div className="bg-gray-800 px-3 py-2 rounded-lg text-xs">
                <span className="text-[#19A880] font-bold">50K+</span> Happy Clients
              </div>
              <div className="bg-gray-800 px-3 py-2 rounded-lg text-xs">
                <span className="text-[#19A880] font-bold">100+</span> Partners
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-[#19A880] rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-[#19A880] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a href="tel:+97141234567" className="flex items-center gap-2 text-gray-400 hover:text-[#19A880] transition-colors">
                <Phone size={16} />
                <span>+971 4 123 4567</span>
              </a>
              <a href="mailto:info@yahiadubai.com" className="flex items-center gap-2 text-gray-400 hover:text-[#19A880] transition-colors">
                <Mail size={16} />
                <span>info@yahiadubai.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span>Dubai, United Arab Emirates</span>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              © {currentYear} Yahia Dubai. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Founder Credit */}
      <div className="bg-[#19A880]/10 border-t border-[#19A880]/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-center">
            <span className="text-gray-400">Founded by</span>
            <span className="text-[#19A880] font-semibold">Yahia Fadlallah</span>
            <span className="text-gray-400">— 22 years of connections, partnerships, and market expertise</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
