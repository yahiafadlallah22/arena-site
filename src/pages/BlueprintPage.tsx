import { motion } from 'framer-motion';
import { architecture } from '../data/architecture';

export default function BlueprintPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Platform blueprint</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">WordPress ecosystem architecture</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">This page exposes the exact tables, normalized JSON mappings, WP Residence mapping layer, and wireframe system used by the Yahia Dubai portal architecture.</p>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold text-slate-950">SQL tables</h2>
          <div className="mt-4 grid gap-6 xl:grid-cols-2">
            {architecture.importTables.map((table) => (
              <div key={table.name} className="space-y-3">
                <h3 className="font-semibold text-slate-950">{table.name}</h3>
                <pre className="overflow-x-auto rounded-3xl border border-slate-200 bg-slate-950 p-6 text-xs leading-6 text-slate-100">{table.sql}</pre>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-950">Normalized JSON models</h2>
          <div className="mt-4 grid gap-6 xl:grid-cols-3">
            <pre className="overflow-x-auto rounded-3xl border border-slate-200 bg-slate-950 p-6 text-xs leading-6 text-slate-100">{JSON.stringify(architecture.normalizedModels.realEstate, null, 2)}</pre>
            <pre className="overflow-x-auto rounded-3xl border border-slate-200 bg-slate-950 p-6 text-xs leading-6 text-slate-100">{JSON.stringify(architecture.normalizedModels.activity, null, 2)}</pre>
            <pre className="overflow-x-auto rounded-3xl border border-slate-200 bg-slate-950 p-6 text-xs leading-6 text-slate-100">{JSON.stringify(architecture.normalizedModels.hotel, null, 2)}</pre>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-950">WP Residence mapping layer</h2>
          <pre className="overflow-x-auto rounded-3xl border border-slate-200 bg-slate-950 p-6 text-xs leading-6 text-slate-100">{JSON.stringify(architecture.wpResidenceMapping, null, 2)}</pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-950">Pixel-perfect wireframes</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {architecture.wireframes.map((item) => (
              <div key={item.page} className="rounded-3xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-950">{item.page}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {item.elements.map((element) => <li key={element}>- {element}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}