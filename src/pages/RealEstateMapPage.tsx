import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, Percent, SlidersHorizontal } from 'lucide-react';
import { sampleProperties } from '../data/properties';

export default function RealEstateMapPage() {
  const average = Math.round(sampleProperties.reduce((sum, item) => sum + item.pricing.startingPrice, 0) / sampleProperties.length);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Interactive map</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">UAE property map with dates, plans, and prices</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">A premium map page that helps visitors explore delivery dates, payment plans, and price averages with Yahia Dubai colors.</p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 lg:grid-cols-[360px_1fr] lg:px-8">
        <aside className="space-y-4">
          <div className="rounded-3xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 text-[#19A880]"><SlidersHorizontal size={16} /><h2 className="font-semibold text-slate-950">Map filters</h2></div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="rounded-2xl bg-[#19A880]/5 p-4">Delivery date</div>
              <div className="rounded-2xl bg-[#19A880]/5 p-4">Payment plan duration</div>
              <div className="rounded-2xl bg-[#19A880]/5 p-4">Price band and averages</div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6">
            <div className="text-sm text-slate-500">Average asking price</div>
            <div className="mt-2 text-3xl font-semibold text-[#19A880]">AED {average.toLocaleString()}</div>
          </div>
          <Link to="/real-estate" className="inline-flex items-center justify-center rounded-2xl bg-[#19A880] px-5 py-3 font-medium text-white">Back to listings</Link>
        </aside>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <div className="relative min-h-[720px] overflow-hidden rounded-[1.75rem] bg-[radial-gradient(circle_at_20%_20%,rgba(25,168,128,0.10),transparent_25%),radial-gradient(circle_at_70%_40%,rgba(25,168,128,0.08),transparent_25%),linear-gradient(180deg,#ffffff,#f8fafc)]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            {sampleProperties.map((item, index) => (
              <Link key={item.id} to={`/real-estate/${item.id}`} className="absolute rounded-full bg-[#19A880] px-3 py-2 text-xs font-semibold text-white shadow-lg" style={{ left: `${14 + (index % 3) * 22}%`, top: `${18 + index * 12}%` }}>
                <span className="flex items-center gap-1"><MapPin size={12} />{item.location.area}</span>
              </Link>
            ))}
            <div className="absolute bottom-6 left-6 right-6 grid gap-3 md:grid-cols-3">
              {sampleProperties.slice(0, 3).map((item) => (
                <div key={item.id} className="rounded-3xl border border-white/70 bg-white/95 p-4 shadow-sm backdrop-blur">
                  <div className="text-sm text-slate-500">{item.location.area}</div>
                  <div className="mt-2 font-semibold text-slate-950">AED {item.pricing.startingPrice.toLocaleString()}</div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500"><CalendarDays size={12} className="text-[#19A880]" />{item.details.deliveryDate || item.details.handoverDate}</div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500"><Percent size={12} className="text-[#19A880]" />{item.content.paymentPlan?.[0]?.percentage || 0}% booking</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
