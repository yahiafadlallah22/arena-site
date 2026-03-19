import { Link } from 'react-router-dom';

export default function FlightsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Flights</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Flight search is routed to the existing engine</h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">This page is a redirect surface that preserves the current flight search flow instead of rebuilding a duplicate engine.</p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <Link to="/" className="rounded-2xl bg-[#19A880] px-6 py-3 font-medium text-white">Back to home</Link>
      </div>
    </section>
  );
}