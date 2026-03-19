import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, MapPin, MessageCircle, Star } from 'lucide-react';
import { Hotel } from '../../types';
import { buildKlookHotelAffiliateUrl, buildWhatsappUrl } from '../../utils/affiliate';
import { getCountryFlagByName } from '../../data/geo';

interface HotelCardProps {
  hotel: Hotel;
  featured?: boolean;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel, featured = false }) => {
  const formatPrice = (price: number, currency: string) => {
    const symbols: Record<string, string> = { AED: 'AED', GBP: '£', EUR: '€', USD: '$' };
    return `${symbols[currency] || currency} ${price.toLocaleString()}`;
  };

  const affiliateUrl = buildKlookHotelAffiliateUrl(hotel.affiliate.url, hotel.affiliate.fallbackUrl);
  const whatsappUrl = buildWhatsappUrl('+971501234567', `Hello, I need live assistance to choose this hotel now: ${hotel.hotelName}`);
  const cityPage = `/hotels/city/${hotel.destination.city.toLowerCase().replace(/\s+/g, '-')}`;
  const flag = getCountryFlagByName(hotel.destination.country);

  return (
    <article className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl ${featured ? 'md:col-span-2 md:flex' : ''}`}>
      <div className={`relative overflow-hidden ${featured ? 'md:w-1/2' : ''}`}>
        <div className={`${featured ? 'h-64 md:h-full' : 'h-56'}`}>
          <img src={hotel.media.featuredImage} alt={hotel.hotelName} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>

        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg bg-white/95 px-3 py-1.5 backdrop-blur-sm">
          <Star size={14} className="fill-yellow-500 text-yellow-500" />
          <span className="font-bold text-slate-800">{hotel.ratings.score}</span>
          <span className="text-xs text-slate-500">({hotel.ratings.reviewCount.toLocaleString()})</span>
        </div>

        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg transition-colors hover:bg-white">
          <Heart size={18} className="text-slate-400 hover:text-red-500" />
        </button>
      </div>

      <div className={`p-5 ${featured ? 'md:w-1/2 md:p-8' : ''}`}>
        <div className="mb-2 flex items-center gap-1 text-sm text-slate-500">
          <MapPin size={14} />
          <span>
            {flag} {hotel.destination.city}, {hotel.destination.country}
          </span>
        </div>

        <h3 className={`font-bold text-slate-950 transition-colors group-hover:text-[#19A880] ${featured ? 'mb-3 text-xl' : 'mb-2 text-lg'}`}>
          {hotel.hotelName}
        </h3>

        {featured && <p className="mb-4 text-sm leading-7 text-slate-600 line-clamp-2">{hotel.content.summary}</p>}

        <div className="mb-4 flex flex-wrap gap-2">
          {hotel.content.amenities.slice(0, 5).map((amenity) => (
            <span key={amenity} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
              {amenity}
            </span>
          ))}
          {hotel.content.amenities.length > 5 && <span className="text-xs text-[#19A880]">+{hotel.content.amenities.length - 5} more</span>}
        </div>

        {featured && hotel.content.nearbyPlaces.length > 0 && <div className="mb-4 text-xs text-slate-500"><span className="font-medium">Nearby:</span> {hotel.content.nearbyPlaces.join(' • ')}</div>}

        <div className="mb-4 flex items-center justify-between rounded-2xl bg-slate-50 p-3">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Destination</div>
            <div className="mt-1 text-sm font-medium text-slate-950">{hotel.destination.city}</div>
          </div>
          <Link to={cityPage} className="text-sm font-medium text-[#19A880]">
            City page
          </Link>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <span className="text-xs text-slate-500">From</span>
            <div className="text-xl font-bold text-[#19A880]">
              {formatPrice(hotel.pricing.price, hotel.pricing.currency)}
              <span className="ml-1 text-xs font-normal text-slate-500">/ night</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href={affiliateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#19A880] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#158969]">
              View Deals
              <ArrowRight size={16} />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-[#19A880] hover:text-[#19A880]" aria-label="Live assistance on WhatsApp">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HotelCard;
