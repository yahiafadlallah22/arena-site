import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CalendarDays, Check, MapPin, MessageCircle, Star } from 'lucide-react';
import { getHotelById, sampleHotels } from '../data/hotels';
import { buildKlookHotelAffiliateUrl, buildWhatsappUrl } from '../utils/affiliate';

export default function HotelDetailPage() {
  const { id } = useParams();
  const hotel = id ? getHotelById(id) : undefined;

  if (!hotel) {
    return <section className="mx-auto max-w-4xl px-4 py-24"><h1 className="text-3xl font-semibold text-slate-950">Hotel not found</h1></section>;
  }

  const related = sampleHotels.filter((item) => item.id !== hotel.id).slice(0, 3);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.35fr_0.65fr] lg:px-8 lg:py-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Hotels</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{hotel.hotelName}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"><MapPin size={14} className="text-[#19A880]" />{hotel.destination.city}, {hotel.destination.country}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"><Star size={14} className="text-[#19A880]" />{hotel.ratings.score} ({hotel.ratings.reviewCount.toLocaleString()})</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"><CalendarDays size={14} className="text-[#19A880]" />Review score {hotel.ratings.reviewScore}</span>
            </div>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{hotel.content.summary}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">From</div>
            <div className="mt-2 text-4xl font-semibold text-[#19A880]">{hotel.pricing.currency} {hotel.pricing.price}</div>
            <a href={buildKlookHotelAffiliateUrl(hotel.affiliate.url, hotel.affiliate.fallbackUrl)} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#19A880] px-5 py-3 font-medium text-white transition hover:bg-[#128768]">View deals <ArrowRight size={16} /></a>
            <a href={buildWhatsappUrl('+971501234567', `Hello, I need live assistance to choose this hotel now: ${hotel.hotelName}.`)} target="_blank" rel="noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-[#19A880] hover:text-[#19A880]">GET LIVE ASSISTANCE TO CHOOSE THIS HOTEL NOW <MessageCircle size={16} /></a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200"><img src={hotel.media.featuredImage} alt={hotel.hotelName} className="h-[420px] w-full object-cover" /></div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Description</h2>
              <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{hotel.content.description}</p>
            </div>

            {hotel.content.amenities.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">Amenities</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {hotel.content.amenities.map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full bg-[#19A880]/10 px-4 py-2 text-sm font-medium text-[#19A880]"><Check size={14} />{item}</span>)}
                </div>
              </div>
            )}

            {hotel.content.nearbyPlaces.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">Nearby places</h2>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">{hotel.content.nearbyPlaces.map((item) => <span key={item} className="rounded-full bg-slate-50 px-4 py-2">{item}</span>)}</div>
              </div>
            )}

            {related.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">Related hotels</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {related.map((item) => <Link key={item.id} to={`/hotels/${item.id}`} className="rounded-3xl border border-slate-200 p-4 transition hover:shadow-lg"><div className="text-sm font-medium text-slate-950">{item.hotelName}</div><div className="mt-2 text-xs text-slate-500">{item.destination.city}</div></Link>)}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-950">Affiliate structure</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Hotels use the Klook base affiliation flow with destination-aware deep-linking and trusted CTA presentation.</p>
            </div>
            <a href={buildKlookHotelAffiliateUrl(hotel.affiliate.url, hotel.affiliate.fallbackUrl)} target="_blank" rel="noreferrer" className="block rounded-2xl bg-[#19A880] px-5 py-4 text-center font-medium text-white transition hover:bg-[#128768]">Open partner link</a>
            <a href={buildWhatsappUrl('+971501234567', `Hello, I need live assistance to choose this hotel now: ${hotel.hotelName}.`)} target="_blank" rel="noreferrer" className="block rounded-2xl border border-slate-200 px-5 py-4 text-center text-sm font-medium text-slate-700 transition hover:border-[#19A880] hover:text-[#19A880]">GET LIVE ASSISTANCE TO CHOOSE THIS HOTEL NOW</a>
          </aside>
        </div>
      </section>
    </motion.div>
  );
}