import { Link, useParams } from 'react-router-dom';
import { sampleActivities } from '../data/activities';
import { getCountryBySlug, getCountryFlagBySlug, matchesCountrySlug } from '../data/geo';
import FounderSpot from '../components/ui/FounderSpot';

export default function ActivitiesCountryPage() {
  const { countrySlug = '' } = useParams();
  const countryModel = getCountryBySlug(countrySlug);
  const countryName = countryModel?.name || countrySlug.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
  const flag = getCountryFlagBySlug(countrySlug);
  const matches = sampleActivities.filter((item) => matchesCountrySlug(countrySlug, item.destination.country));

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Activities country page</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Things to do in {flag} {countryName}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">A destination SEO page built for country intent, local discovery, reviews, and travel conversions.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {matches.slice(0, 4).map((item) => <Link key={item.id} to={`/activities/${item.id}`} className="rounded-3xl border border-slate-200 p-4 transition hover:shadow-lg"><div className="text-sm text-[#19A880]">{item.category}</div><div className="mt-2 font-semibold text-slate-950">{item.title}</div><div className="mt-2 text-sm text-slate-500">{item.destination.city}</div></Link>)}
      </div>
      <div className="mt-10">
        <FounderSpot category="activities" title="Yahia character slot for Activities country pages" />
      </div>
    </section>
  );
}
