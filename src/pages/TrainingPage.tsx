import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Check, ChevronDown, GraduationCap, Shield, Sparkles } from 'lucide-react';
import { trainingCourses } from '../data/business';

export default function TrainingPage() {
  const [active, setActive] = useState(trainingCourses[0].id);
  const course = useMemo(() => trainingCourses.find((item) => item.id === active) || trainingCourses[0], [active]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Training</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Premium training and authority-led learning</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Real estate and investment education under the Yahia Fadlallah brand trust model, built for premium lead generation and conversion.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {trainingCourses.map((item) => (
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
            <h2 className="text-2xl font-semibold text-slate-950">{course.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{course.description}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold text-slate-950">Highlights</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {course.highlights.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600"><Check size={14} className="mb-2 text-[#19A880]" />{item}</div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 text-[#19A880]"><GraduationCap size={18} /><h2 className="text-2xl font-semibold text-slate-950">Schedule</h2></div>
            <div className="mt-4 space-y-3">
              {course.schedule.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-600">{item}</div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 text-[#19A880]"><ChevronDown size={18} /><h2 className="text-2xl font-semibold text-slate-950">Why it converts</h2></div>
            <p className="mt-3 text-sm leading-7 text-slate-600">This page structure is designed for premium authority, clear trust cues, and high-intent lead capture.</p>
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-slate-200 p-6">
            <div className="text-sm text-slate-500">Instructor</div>
            <div className="mt-2 text-2xl font-semibold text-[#19A880]">{course.instructor || 'Yahia Fadlallah'}</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">Founder-led positioning for credibility, trust, and premium value.</p>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Shield size={14} className="text-[#19A880]" />Trusted advisor</div>
              <div className="flex items-center gap-2"><Sparkles size={14} className="text-[#19A880]" />Premium brand equity</div>
            </div>
          </div>
          <a href="mailto:info@yahiadubai.com" className="block rounded-2xl bg-[#19A880] px-5 py-4 text-center font-medium text-white transition hover:bg-[#128768]">Enroll now</a>
        </aside>
      </section>
    </motion.div>
  );
}