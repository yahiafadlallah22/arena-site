import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Page not found</h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">The requested page does not exist in the Yahia Dubai portal.</p>
      <Link to="/" className="mt-8 inline-flex rounded-2xl bg-[#19A880] px-6 py-3 font-medium text-white">Return home</Link>
    </section>
  );
}