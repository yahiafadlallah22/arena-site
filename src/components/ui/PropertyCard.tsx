import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bath, Bed, Heart, Maximize, MessageCircle, MapPin } from 'lucide-react';
import { Property } from '../../types';
import { buildWhatsappUrl } from '../../utils/affiliate';
import { getDiscountOverride } from '../../data/portal-settings';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, featured = false }) => {
  const formatPrice = (price: number, currency: string) => `${currency} ${price.toLocaleString()}`;
  const discount = getDiscountOverride(property.id);
  const discountedPrice = discount?.discountedPrice || (discount ? Math.round(property.pricing.startingPrice * (1 - discount.discountPercent / 100)) : property.pricing.startingPrice);
  const whatsappLink = buildWhatsappUrl(
    property.agent?.whatsapp || '+971501234567',
    `Hello, I am interested in ${property.title} on Yahia Dubai. Please send brochure and availability.`
  );

  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl ${
        featured ? 'md:col-span-2 md:flex' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'md:w-1/2' : ''}`}>
        <div className={`${featured ? 'h-64 md:h-full' : 'h-56'}`}>
          <img
            src={property.media.featuredImage}
            alt={property.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {property.details.status === 'off-plan' && <span className="rounded-full bg-[#19A880] px-3 py-1 text-xs font-medium text-white">Off-Plan</span>}
          {property.featured && <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-medium text-white">Featured</span>}
        </div>

        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg transition-colors hover:bg-white">
          <Heart size={18} className="text-slate-400 hover:text-red-500" />
        </button>

        <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-sm">
          {property.developer}
        </div>

        {property.details.deliveryDate && (
          <div className="absolute bottom-4 right-4 rounded-full bg-[#19A880] px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
            Delivery {property.details.deliveryDate}
          </div>
        )}
      </div>

      <div className={`p-5 ${featured ? 'md:w-1/2 md:p-8' : ''}`}>
        <div className="mb-2 flex items-center gap-1 text-sm text-slate-500">
          <MapPin size={14} />
          <span>
            {property.location.area}, {property.location.city}
          </span>
        </div>

        <h3 className={`font-bold text-slate-950 transition-colors group-hover:text-[#19A880] ${featured ? 'mb-3 text-xl' : 'mb-2 text-lg'}`}>
          {property.title}
        </h3>

        {featured && <p className="mb-4 text-sm leading-7 text-slate-600 line-clamp-2">{property.content.summary}</p>}

        <div className="mb-4 flex items-center justify-between gap-3 rounded-2xl bg-slate-50 p-3">
          <div className="flex items-center gap-3">
            <img
              src={property.agent?.photo || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300'}
              alt={property.agent?.name || 'Property advisor'}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-white"
            />
            <div>
              <div className="text-sm font-semibold text-slate-950">{property.agent?.name || 'Yahia Dubai Advisor'}</div>
              <div className="text-xs text-slate-500">{property.agent?.title || 'Property Advisor'}</div>
            </div>
          </div>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#19A880] text-white transition hover:bg-[#128768]" aria-label="WhatsApp">
            <MessageCircle size={18} />
          </a>
        </div>

        <div className="mb-4 flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-1">
            <Bed size={16} className="text-[#19A880]" />
            <span>{property.details.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={16} className="text-[#19A880]" />
            <span>{property.details.bathrooms}</span>
          </div>
          {property.details.size && (
            <div className="flex items-center gap-1">
              <Maximize size={16} className="text-[#19A880]" />
              <span>{property.details.size} sqft</span>
            </div>
          )}
        </div>

        {(property.details.deliveryDate || property.details.handoverDate) && (
          <div className="mb-4 text-xs text-slate-500">
            Delivery date: <span className="font-medium text-slate-700">{property.details.deliveryDate || property.details.handoverDate}</span>
          </div>
        )}

        {discount && (
          <div className="mb-4 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">Limited-time discount {discount.discountPercent}%</div>
        )}

        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            {property.pricing.labelBefore && <span className="text-xs text-slate-500">{property.pricing.labelBefore}</span>}
            <div className="text-xl font-bold text-[#19A880]">{formatPrice(discountedPrice, property.pricing.currency)}</div>
            {discount && <div className="text-xs text-slate-500 line-through">{formatPrice(property.pricing.startingPrice, property.pricing.currency)}</div>}
          </div>
          <div className="flex items-center gap-2">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#19A880] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#128768]">
              WhatsApp
              <MessageCircle size={16} />
            </a>
            <Link to={`/real-estate/${property.id}`} className="inline-flex items-center gap-1 text-sm font-medium text-[#19A880] transition hover:gap-2">
              <span>View</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
