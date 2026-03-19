import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, MessageCircle, Star } from 'lucide-react';
import { Activity } from '../../types';
import { buildKlookAffiliateUrl, buildWhatsappUrl } from '../../utils/affiliate';
import { getCountryFlagByName } from '../../data/geo';

interface ActivityCardProps {
  activity: Activity;
  featured?: boolean;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, featured = false }) => {
  const formatPrice = (price: number, currency: string) => {
    const symbols: Record<string, string> = { AED: 'AED', GBP: '£', EUR: '€', USD: '$' };
    return `${symbols[currency] || currency} ${price}`;
  };

  const affiliateUrl = buildKlookAffiliateUrl(activity.affiliate.url);
  const whatsappUrl = buildWhatsappUrl('+971501234567', `Hello, I need live assistance to choose this activity now: ${activity.title}`);
  const flag = getCountryFlagByName(activity.destination.country);

  return (
    <article className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl ${featured ? 'md:col-span-2 md:flex' : ''}`}>
      <div className={`relative overflow-hidden ${featured ? 'md:w-1/2' : ''}`}>
        <div className={`${featured ? 'h-64 md:h-full' : 'h-56'}`}>
          <img src={activity.media.featuredImage} alt={activity.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>

        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-sm">{activity.category}</span>
        </div>

        {activity.pricing.originalPrice && activity.pricing.originalPrice > activity.pricing.price && (
          <div className="absolute right-4 top-4">
            <span className="rounded-full bg-red-500 px-3 py-1.5 text-xs font-bold text-white">{Math.round((1 - activity.pricing.price / activity.pricing.originalPrice) * 100)}% OFF</span>
          </div>
        )}
      </div>

      <div className={`p-5 ${featured ? 'md:w-1/2 md:p-8' : ''}`}>
        <div className="mb-2 flex items-center gap-1 text-sm text-slate-500">
          <MapPin size={14} />
          <span>
            {flag} {activity.destination.city}, {activity.destination.country}
          </span>
        </div>

        <h3 className={`font-bold text-slate-950 transition-colors group-hover:text-[#19A880] ${featured ? 'mb-3 text-xl' : 'mb-2 text-lg'}`}>
          {activity.title}
        </h3>

        {featured && activity.content.highlights.length > 0 && (
          <ul className="mb-4 space-y-1">
            {activity.content.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="mt-0.5 text-[#19A880]">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mb-4 flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-500 text-yellow-500" />
            <span className="font-medium text-slate-700">{activity.ratings.score}</span>
            <span className="text-slate-400">({activity.ratings.reviewCount.toLocaleString()})</span>
          </div>
          {activity.logistics.duration && (
            <div className="flex items-center gap-1 text-slate-500">
              <Clock size={14} />
              <span>{activity.logistics.duration}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            {activity.pricing.originalPrice && activity.pricing.originalPrice > activity.pricing.price && <span className="text-sm text-slate-400 line-through">{formatPrice(activity.pricing.originalPrice, activity.pricing.currency)}</span>}
            <div className="text-xl font-bold text-[#19A880]">
              {formatPrice(activity.pricing.price, activity.pricing.currency)}
              <span className="ml-1 text-xs font-normal text-slate-500">/ person</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href={affiliateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#19A880] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#158969]">
              Book Now
              <ArrowRight size={16} />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-[#19A880] hover:text-[#19A880]" aria-label="Live assistance on WhatsApp">
              <MessageCircle size={16} />
            </a>
            <Link to={`/activities/${activity.id}`} className="text-sm font-medium text-[#19A880]">
              Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ActivityCard;
