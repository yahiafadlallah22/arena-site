import { Link, useParams } from 'react-router-dom';
import { sampleHotels } from '../data/hotels';
import { getCountryFlagByName } from '../data/geo';
import FounderSpot from '../components/ui/FounderSpot';

export default function HotelsCityPage() {
  const { citySlug = '' } = useParams();
  const cityName = citySlug.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
  const matches = sampleHotels.filter((item) => item.destination.city.toLowerCase() === cityName.toLowerCase());
  const country = matches[0]?.destination.country || 'UAE';

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Hotels city page</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Hotels in {cityName}, {getCountryFlagByName(country)} {country}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Location pages for city hotel intent with ratings, nearby places, and Klook affiliate fallback support.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {matches.slice(0, 4).map((item) => <Link key={item.id} to={`/hotels/${item.id}`} className="rounded-3xl border border-slate-200 p-4 transition hover:shadow-lg"><div className="text-sm text-[#19A880]">{item.ratings.score} rating</div><div className="mt-2 font-semibold text-slate-950">{item.hotelName}</div><div className="mt-2 text-sm text-slate-500">{item.content.summary}</div></Link>)}
      </div>
      <div className="mt-10">
        <FounderSpot category="hotels" title="Yahia character slot for Hotels city pages" />
      </div>
    </section>
  );
}
