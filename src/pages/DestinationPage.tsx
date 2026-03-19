import { motion } from 'framer-motion';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { ArrowRight, Briefcase, Building2, Car, GraduationCap, Hotel, MapPin, Plane, Sparkles } from 'lucide-react';
import { countries, getCityBySlug, getCountryBySlug, abuDhabiAreas, dubaiAreas } from '../data/geo';
import { sampleActivities } from '../data/activities';
import { sampleHotels } from '../data/hotels';
import { sampleProperties } from '../data/properties';

const tabs = [
  { key: 'activities', label: 'Activities', icon: Sparkles },
  { key: 'real-estate', label: 'Real Estate', icon: Building2 },
  { key: 'cars-chauffeurs', label: 'Cars & Chauffeurs', icon: Car },
  { key: 'flights', label: 'Flights', icon: Plane },
  { key: 'hotels', label: 'Hotels', icon: Hotel },
  { key: 'business-setup', label: 'Business Setup', icon: Briefcase },
  { key: 'mortgage', label: 'Mortgage / Credit', icon: Building2 },
  { key: 'investment', label: 'Investment', icon: Building2 },
  { key: 'training', label: 'Training', icon: GraduationCap },
];

export default function DestinationPage() {
  const { countrySlug = '', citySlug } = useParams();
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'activities';
  const mode = searchParams.get('mode') || 'car-rental';

  const country = getCountryBySlug(countrySlug) || countries.find((item) => item.slug === 'uae');
  const city = citySlug && country ? getCityBySlug(country.slug, citySlug) : undefined;
  const title = city ? `${city.name}, ${country?.name}` : country?.name || 'Destination';
  const isUae = country?.slug === 'uae';
  const activityMatches = sampleActivities.filter((item) => item.destination.country.toLowerCase() === (country?.name || '').toLowerCase() && (!city || item.destination.city.toLowerCase() === city.name.toLowerCase()));
  const hotelMatches = sampleHotels.filter((item) => item.destination.country.toLowerCase() === (country?.name || '').toLowerCase() && (!city || item.destination.city.toLowerCase() === city.name.toLowerCase()));
  const propertyMatches = isUae ? sampleProperties.filter((item) => !city || item.location.city.toLowerCase() === city.name.toLowerCase()) : [];
  const areas = city?.slug === 'dubai' ? dubaiAreas : city?.slug === 'abu-dhabi' ? abuDhabiAreas : [];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Destination</p>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500"><MapPin size={14} className="text-[#19A880]" />{title}</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">A unified portal destination with premium travel, UAE services, and conversion-ready widget context.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.key;
              return <Link key={tab.key} to={`/destination/${countrySlug}${citySlug ? `/${citySlug}` : ''}?tab=${tab.key}${tab.key === 'cars-chauffeurs' ? `&mode=${mode}` : ''}`} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${active ? 'bg-[#19A880] text-white' : 'bg-white text-slate-600 hover:text-[#19A880]'}`}><Icon size={14} />{tab.label}</Link>;
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-10">
          {activeTab === 'activities' && <div><h2 className="text-2xl font-semibold text-slate-950">Things to do</h2><div className="mt-4 grid gap-4 md:grid-cols-2">{activityMatches.slice(0, 4).map((item) => <Link key={item.id} to={`/activities/${item.id}`} className="overflow-hidden rounded-3xl border border-slate-200 transition hover:shadow-lg"><img src={item.media.featuredImage} alt={item.title} className="h-44 w-full object-cover" /><div className="p-4"><div className="text-sm font-medium text-slate-950">{item.title}</div><div className="mt-2 text-xs text-slate-500">{item.destination.city}</div></div></Link>)}</div></div>}
          {activeTab === 'hotels' && <div><h2 className="text-2xl font-semibold text-slate-950">Stay in {title}</h2><div className="mt-4 grid gap-4 md:grid-cols-2">{hotelMatches.slice(0, 4).map((item) => <Link key={item.id} to={`/hotels/${item.id}`} className="overflow-hidden rounded-3xl border border-slate-200 transition hover:shadow-lg"><img src={item.media.featuredImage} alt={item.hotelName} className="h-44 w-full object-cover" /><div className="p-4"><div className="text-sm font-medium text-slate-950">{item.hotelName}</div><div className="mt-2 text-xs text-slate-500">{item.destination.city}</div></div></Link>)}</div></div>}
          {activeTab === 'real-estate' && isUae && <div><h2 className="text-2xl font-semibold text-slate-950">UAE properties</h2><div className="mt-4 grid gap-4 md:grid-cols-2">{propertyMatches.slice(0, 4).map((item) => <Link key={item.id} to={`/real-estate/${item.id}`} className="overflow-hidden rounded-3xl border border-slate-200 transition hover:shadow-lg"><img src={item.media.featuredImage} alt={item.title} className="h-44 w-full object-cover" /><div className="p-4"><div className="text-sm font-medium text-slate-950">{item.title}</div><div className="mt-2 text-xs text-slate-500">{item.location.area}</div></div></Link>)}</div></div>}
          {activeTab === 'cars-chauffeurs' && <div className="rounded-3xl border border-slate-200 p-6"><h2 className="text-2xl font-semibold text-slate-950">Cars and chauffeurs</h2><p className="mt-3 text-sm leading-7 text-slate-600">Country and city selection redirects here with the active tab context, preloaded widget intent, and no fake booking engine.</p><div className="mt-6 flex flex-wrap gap-3"><span className="rounded-full bg-[#19A880]/10 px-4 py-2 text-sm font-medium text-[#19A880]">Mode: {mode}</span><span className="rounded-full bg-slate-50 px-4 py-2 text-sm text-slate-600">Country: {country?.name}</span>{city ? <span className="rounded-full bg-slate-50 px-4 py-2 text-sm text-slate-600">City: {city.name}</span> : null}</div></div>}
          {activeTab === 'business-setup' && <div className="rounded-3xl border border-slate-200 p-6"><h2 className="text-2xl font-semibold text-slate-950">Business setup surface</h2><p className="mt-3 text-sm leading-7 text-slate-600">This destination can preselect Mainland or Freezone and hold Jotform embed placement with premium trust content.</p></div>}
          {activeTab === 'mortgage' && <div className="rounded-3xl border border-slate-200 p-6"><h2 className="text-2xl font-semibold text-slate-950">Mortgage surface</h2><p className="mt-3 text-sm leading-7 text-slate-600">Lead flow ready for advisory, pre-qualification, and consultation CTA blocks.</p></div>}
          {activeTab === 'training' && <div className="rounded-3xl border border-slate-200 p-6"><h2 className="text-2xl font-semibold text-slate-950">Training surface</h2><p className="mt-3 text-sm leading-7 text-slate-600">Authority-led training surface centered on Yahia Fadlallah and premium conversion.</p></div>}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-950">Destination context</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">The page routes to the correct tab, destination, and widget context without fragmenting the portal into separate websites.</p>
          </div>
          {areas.length > 0 && <div className="rounded-3xl border border-slate-200 p-6"><h3 className="font-semibold text-slate-950">Popular areas</h3><div className="mt-4 flex flex-wrap gap-2">{areas.slice(0, 10).map((item) => <span key={item} className="rounded-full bg-slate-50 px-3 py-2 text-xs text-slate-600">{item}</span>)}</div></div>}
          <Link to="/blueprint" className="flex items-center justify-center gap-2 rounded-2xl bg-[#19A880] px-5 py-4 font-medium text-white transition hover:bg-[#128768]">View platform blueprint <ArrowRight size={16} /></Link>
        </aside>
      </section>
    </motion.div>
  );
}