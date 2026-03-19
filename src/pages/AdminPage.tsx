import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  saveDiscountOverride,
  removeDiscountOverride,
  getDiscountOverrides,
  getFounderSettings,
  saveFounderSettings,
} from '../data/portal-settings';
import { sampleProperties } from '../data/properties';

export default function AdminPage() {
  const [propertyId, setPropertyId] = useState(sampleProperties[0]?.id || '');
  const [discountPercent, setDiscountPercent] = useState('10');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [note, setNote] = useState('Limited-time campaign');
  const [savedTick, setSavedTick] = useState(0);
  const [founderPhotoUrl, setFounderPhotoUrl] = useState(getFounderSettings().founderPhotoUrl);
  const [mascotCategory, setMascotCategory] = useState('activities');
  const [mascotUrl, setMascotUrl] = useState('');

  const overrides = useMemo(() => getDiscountOverrides(), [savedTick]);
  const founderSettings = useMemo(() => getFounderSettings(), [savedTick]);

  const save = () => {
    saveDiscountOverride({
      propertyId,
      discountPercent: Number(discountPercent),
      discountedPrice: discountedPrice ? Number(discountedPrice) : undefined,
      note,
    });
    setSavedTick((value) => value + 1);
  };

  const remove = (id: string) => {
    removeDiscountOverride(id);
    setSavedTick((value) => value + 1);
  };

  const saveFounder = () => {
    const current = getFounderSettings();
    saveFounderSettings({
      ...current,
      founderPhotoUrl,
    });
    setSavedTick((value) => value + 1);
  };

  const saveMascot = () => {
    const current = getFounderSettings();
    saveFounderSettings({
      ...current,
      mascotByCategory: {
        ...current.mascotByCategory,
        [mascotCategory]: mascotUrl,
      },
    });
    setSavedTick((value) => value + 1);
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Admin controls</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Real estate pricing and identity controls</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Configure discounted public prices, founder media, mascot placements, and content identity from one admin panel.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-4">
              <select value={propertyId} onChange={(e) => setPropertyId(e.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#19A880]">
                {sampleProperties.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
              </select>
              <input value={discountPercent} onChange={(e) => setDiscountPercent(e.target.value)} type="number" min="0" max="100" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#19A880]" placeholder="Discount %" />
              <input value={discountedPrice} onChange={(e) => setDiscountedPrice(e.target.value)} type="number" min="0" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#19A880]" placeholder="Discounted price (optional)" />
              <input value={note} onChange={(e) => setNote(e.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#19A880]" placeholder="Note" />
            </div>
            <div className="mt-4 flex gap-3">
              <button onClick={save} className="rounded-2xl bg-[#19A880] px-5 py-3 font-medium text-white">Save override</button>
              <Link to="/real-estate" className="rounded-2xl border border-slate-200 px-5 py-3 font-medium text-slate-700">Back to listings</Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">Active overrides</h2>
            <div className="mt-4 space-y-3">
              {overrides.length === 0 ? <p className="text-sm text-slate-500">No overrides set.</p> : overrides.map((item) => (
                <div key={item.propertyId} className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-sm font-medium text-slate-950">Property #{item.propertyId}</div>
                  <div className="text-sm text-[#19A880]">{item.discountPercent}% discount</div>
                  {item.discountedPrice && <div className="text-xs text-slate-500">Public discounted price: AED {item.discountedPrice.toLocaleString()}</div>}
                  <button onClick={() => remove(item.propertyId)} className="mt-3 text-sm font-medium text-red-500">Remove</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">Founder and mascot media</h2>
            <p className="mt-2 text-sm text-slate-600">Paste your Yahia Fadlallah photo URL and category PNG mascot URLs. These are used across the platform pages.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input value={founderPhotoUrl} onChange={(e) => setFounderPhotoUrl(e.target.value)} placeholder="Founder photo URL" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#19A880] md:col-span-2" />
              <select value={mascotCategory} onChange={(e) => setMascotCategory(e.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#19A880]">
                <option value="activities">Activities</option>
                <option value="hotels">Hotels</option>
                <option value="cars-chauffeurs">Cars & Chauffeurs</option>
                <option value="real-estate">Real Estate</option>
                <option value="market-insights">Market Insights</option>
              </select>
              <input value={mascotUrl} onChange={(e) => setMascotUrl(e.target.value)} placeholder="Mascot PNG URL" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#19A880]" />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <button onClick={saveFounder} className="rounded-2xl bg-[#19A880] px-5 py-3 font-medium text-white">Save founder photo</button>
              <button onClick={saveMascot} className="rounded-2xl border border-slate-200 px-5 py-3 font-medium text-slate-700">Save mascot by category</button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">Current media</h2>
            <div className="mt-4 space-y-4">
              {founderSettings.founderPhotoUrl ? (
                <img src={founderSettings.founderPhotoUrl} alt="Founder" className="h-36 w-36 rounded-2xl object-cover" />
              ) : (
                <p className="text-sm text-slate-500">No founder photo set yet.</p>
              )}
              <div className="space-y-2 text-sm text-slate-600">
                {Object.entries(founderSettings.mascotByCategory).length === 0 ? (
                  <p>No mascot images set.</p>
                ) : (
                  Object.entries(founderSettings.mascotByCategory).map(([key, value]) => (
                    <div key={key} className="rounded-2xl bg-slate-50 p-3">
                      <div className="font-medium text-slate-950">{key}</div>
                      <div className="truncate text-xs text-slate-500">{value}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
