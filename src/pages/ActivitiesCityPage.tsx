import { Link, useParams } from 'react-router-dom';
import { sampleActivities } from '../data/activities';
import { getCountryFlagByName } from '../data/geo';
import FounderSpot from '../components/ui/FounderSpot';

export default function ActivitiesCityPage() {
  const { citySlug = '' } = useParams();
  const cityName = citySlug.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
  const matches = sampleActivities.filter((item) => item.destination.city.toLowerCase() === cityName.toLowerCase());
  const country = matches[0]?.destination.country || 'UAE';

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Activities city page</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Things to do in {cityName}, {getCountryFlagByName(country)} {country}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Localized city content, reviews, and activity discovery to capture high-intent search traffic.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {matches.slice(0, 4).map((item) => <Link key={item.id} to={`/activities/${item.id}`} className="rounded-3xl border border-slate-200 p-4 transition hover:shadow-lg"><div className="text-sm text-[#19A880]">{item.category}</div><div className="mt-2 font-semibold text-slate-950">{item.title}</div><div className="mt-2 text-sm text-slate-500">{item.ratings.score} rating</div></Link>)}
      </div>
      <div className="mt-10">
        <FounderSpot category="activities" title="Yahia character slot for Activities city pages" />
      </div>
    </section>
  );
}
