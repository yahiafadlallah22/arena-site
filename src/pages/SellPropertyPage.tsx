import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, PhoneCall, ShieldCheck } from 'lucide-react';

export default function SellPropertyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Sell with Yahia Dubai</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Property owners who want to sell</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">A premium sales desk for owners who want serious exposure, qualified buyers, and a trust-led process positioned around Yahia Fadlallah.</p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 lg:grid-cols-[1fr_380px] lg:px-8">
        <div className="space-y-8">
          <div className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold text-slate-950">How it works</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {['Property review', 'Market positioning', 'Buyer qualification'].map((item, index) => <div key={item} className="rounded-2xl bg-slate-50 p-4"><div className="text-sm text-[#19A880]">0{index + 1}</div><div className="mt-2 font-medium text-slate-950">{item}</div></div>)}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold text-slate-950">Owner benefits</h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              {['Premium presentation', 'WhatsApp lead handling', 'Call-back in 55 seconds', 'Brokered through trusted authority'].map((item) => <div key={item} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#19A880]" />{item}</div>)}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold text-slate-950">Trust and safety</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Your listing is handled with premium marketing, qualified leads, and a structured process designed to protect owner value.</p>
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-950">Send your property</h3>
            <div className="mt-4 grid gap-3">
              <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#19A880]" placeholder="Name" />
              <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#19A880]" placeholder="WhatsApp" />
              <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#19A880]" placeholder="Property area" />
              <button className="rounded-2xl bg-[#19A880] px-5 py-3 font-medium text-white">Request listing review</button>
            </div>
          </div>
          <a href="https://wa.me/971501234567?text=I%20want%20to%20sell%20my%20property%20with%20Yahia%20Dubai" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-[#19A880] px-5 py-4 font-medium text-white"><MessageCircle size={16} /> WhatsApp sales desk</a>
          <a href="tel:+97141234567" className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 py-4 font-medium text-slate-700"><PhoneCall size={16} /> Call sales desk</a>
          <div className="rounded-3xl border border-slate-200 bg-[#19A880]/5 p-5">
            <div className="flex items-center gap-2 text-[#19A880]"><ShieldCheck size={16} /><span className="font-semibold">Founder-backed trust</span></div>
            <p className="mt-3 text-sm leading-7 text-slate-600">Your sale is positioned with the credibility of Yahia Fadlallah and the network access of Yahia Dubai.</p>
          </div>
        </aside>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-16 lg:px-8">
        <Link to="/real-estate" className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 font-medium text-white">View current listings</Link>
      </div>
    </section>
  );
}
