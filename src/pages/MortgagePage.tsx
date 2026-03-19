import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Check, ChevronDown, Clock3, Shield, Sparkles } from 'lucide-react';
import { mortgageServices } from '../data/business';

export default function MortgagePage() {
  const [active, setActive] = useState(mortgageServices[0].id);
  const service = useMemo(() => mortgageServices.find((item) => item.id === active) || mortgageServices[0], [active]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Mortgage / Credit</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Premium mortgage support in the UAE</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Conversion-oriented advisory pages built around trust, process clarity, and premium lead capture with Yahia Fadlallah positioning.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {mortgageServices.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${active === item.id ? 'bg-[#19A880] text-white' : 'bg-slate-100 text-slate-600 hover:text-[#19A880]'}`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 lg:grid-cols-[1fr_360px] lg:px-8">
        <div className="space-y-8">
          <div className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold text-slate-950">{service.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold text-slate-950">Eligibility</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {service.eligibility.map((item) => (
                <li key={item} className="flex items-start gap-3"><Check size={14} className="mt-1 text-[#19A880]" /><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold text-slate-950">Features</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {service.features.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">{item}</div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 text-[#19A880]"><ChevronDown size={18} /><h2 className="text-2xl font-semibold text-slate-950">FAQ</h2></div>
            <div className="mt-4 space-y-3">
              {service.faq.map((item) => (
                <details key={item.question} className="rounded-2xl border border-slate-200 p-4">
                  <summary className="cursor-pointer list-none font-medium text-slate-950">{item.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-slate-200 p-6">
            <div className="text-sm text-slate-500">Founder trust</div>
            <div className="mt-2 text-3xl font-semibold text-[#19A880]">Yahia Fadlallah</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">22 years of market access, portfolio relationships, and advisory trust.</p>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Shield size={14} className="text-[#19A880]" />Trusted market access</div>
              <div className="flex items-center gap-2"><Sparkles size={14} className="text-[#19A880]" />Premium positioning</div>
              <div className="flex items-center gap-2"><Clock3 size={14} className="text-[#19A880]" />Fast advisory flow</div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6">
            <p className="text-sm leading-7 text-slate-600">This surface is ready for Jotform embeds, sticky CTA blocks, and lead routing.</p>
          </div>
          <a href="mailto:info@yahiadubai.com" className="block rounded-2xl bg-[#19A880] px-5 py-4 text-center font-medium text-white transition hover:bg-[#128768]">Request mortgage call</a>
        </aside>
      </section>
    </motion.div>
  );
}