import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check, Clock3, MapPin, MessageCircle, Star } from 'lucide-react';
import { getActivityById, sampleActivities } from '../data/activities';
import { buildKlookAffiliateUrl, buildWhatsappUrl } from '../utils/affiliate';

export default function ActivityDetailPage() {
  const { id } = useParams();
  const activity = id ? getActivityById(id) : undefined;

  if (!activity) {
    return <section className="mx-auto max-w-4xl px-4 py-24"><h1 className="text-3xl font-semibold text-slate-950">Activity not found</h1></section>;
  }

  const related = sampleActivities.filter((item) => item.id !== activity.id).slice(0, 3);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.35fr_0.65fr] lg:px-8 lg:py-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Activities</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{activity.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"><MapPin size={14} className="text-[#19A880]" />{activity.destination.city}, {activity.destination.country}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"><Star size={14} className="text-[#19A880]" />{activity.ratings.score} ({activity.ratings.reviewCount.toLocaleString()})</span>
              {activity.logistics.duration && <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"><Clock3 size={14} className="text-[#19A880]" />{activity.logistics.duration}</span>}
            </div>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{activity.content.description}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">From</div>
            <div className="mt-2 text-4xl font-semibold text-[#19A880]">{activity.pricing.currency} {activity.pricing.price}</div>
            {activity.pricing.originalPrice ? <div className="mt-1 text-sm text-slate-400 line-through">{activity.pricing.currency} {activity.pricing.originalPrice}</div> : null}
            <a href={buildKlookAffiliateUrl(activity.affiliate.url)} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#19A880] px-5 py-3 font-medium text-white transition hover:bg-[#128768]">Book on partner site <ArrowRight size={16} /></a>
            <a href={buildWhatsappUrl('+971501234567', `Hello, I need live assistance to choose this activity now: ${activity.title}`)} target="_blank" rel="noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-[#19A880] hover:text-[#19A880]"><MessageCircle size={16} /> GET LIVE ASSISTANCE TO CHOOSE THIS ACTIVITY NOW</a>
            <p className="mt-4 text-xs leading-6 text-slate-500">Automatic affiliate architecture is applied through the imported destination rule set.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200">
          <img src={activity.media.featuredImage} alt={activity.title} className="h-[420px] w-full object-cover" />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Highlights</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {activity.content.highlights.map((item) => <div key={item} className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-600"><Check size={14} className="mb-2 text-[#19A880]" />{item}</div>)}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Inclusions</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">{activity.content.inclusions.map((item) => <li key={item} className="flex gap-3"><Check size={14} className="mt-1 text-[#19A880]" /><span>{item}</span></li>)}</ul>
            </div>

            {activity.content.exclusions.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">Exclusions</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">{activity.content.exclusions.map((item) => <li key={item} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-slate-300" /><span>{item}</span></li>)}</ul>
              </div>
            )}

            {activity.content.faq.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">FAQ</h2>
                <div className="mt-4 space-y-3">
                  {activity.content.faq.map((item) => <details key={item.question} className="rounded-2xl border border-slate-200 p-4"><summary className="cursor-pointer list-none font-medium text-slate-950">{item.question}</summary><p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p></details>)}
                </div>
              </div>
            )}

            {related.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">Related activities</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {related.map((item) => <Link key={item.id} to={`/activities/${item.id}`} className="rounded-3xl border border-slate-200 p-4 transition hover:shadow-lg"><div className="text-sm font-medium text-slate-950">{item.title}</div><div className="mt-2 text-xs text-slate-500">{item.destination.city}</div></Link>)}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-950">Yahia Dubai booking trust</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Premium global discovery with strong conversion architecture and trustworthy founder positioning.</p>
            </div>
            <a href={buildKlookAffiliateUrl(activity.affiliate.url)} target="_blank" rel="noreferrer" className="block rounded-2xl bg-[#19A880] px-5 py-4 text-center font-medium text-white transition hover:bg-[#128768]">Open booking link</a>
            <a href={buildWhatsappUrl('+971501234567', `Hello, I need live assistance to choose this activity now: ${activity.title}`)} target="_blank" rel="noreferrer" className="block rounded-2xl border border-slate-200 px-5 py-4 text-center text-sm font-medium text-slate-700 transition hover:border-[#19A880] hover:text-[#19A880]">GET LIVE ASSISTANCE TO CHOOSE THIS ACTIVITY NOW</a>
          </aside>
        </div>
      </section>
    </motion.div>
  );
}