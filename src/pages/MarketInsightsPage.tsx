import { useMemo, useState } from 'react';
import FounderSpot from '../components/ui/FounderSpot';
import { sampleInsights, marketSources, sampleCSVBlocks } from '../data/market-insights';
import { getFounderSettings } from '../data/portal-settings';
import { getCountryFlagByName } from '../data/geo';
import { buildFeaturedImageDataUrl } from '../utils/featured-image';

function parseCSV(csvText: string) {
  const [headerRow, ...rows] = csvText.trim().split('\n');
  const headers = headerRow.split(',');
  return rows.map((row) => {
    const cells = row.split(',');
    return headers.reduce<Record<string, string>>((acc, header, index) => {
      acc[header] = cells[index] || '';
      return acc;
    }, {});
  });
}

function buildInsightSummaryFromCSV(csvId: string) {
  const block = sampleCSVBlocks.find((item) => item.id === csvId);
  if (!block) {
    return { headline: '', summary: '', chart: [] as { label: string; value: number }[] };
  }

  const rows = parseCSV(block.csv);
  const metricKey = Object.keys(rows[0] || {}).find((key) => key !== 'quarter' && key !== 'period' && key !== 'area') || 'value';
  const labelKey = Object.keys(rows[0] || {}).find((key) => key !== metricKey) || 'label';

  const chart = rows.map((row) => ({
    label: row[labelKey],
    value: Number(row[metricKey]) || 0,
  }));

  const sorted = [...chart].sort((a, b) => b.value - a.value);
  const top = sorted[0];
  const latest = chart[chart.length - 1];
  const first = chart[0];
  const growth = first?.value ? (((latest.value - first.value) / first.value) * 100).toFixed(1) : '0.0';

  return {
    headline: `${block.city} market snapshot: ${top?.label || 'Top segment'} leads`,
    summary: `Using ${block.source}, ${block.city} shows a ${growth}% progression across tracked periods, with ${top?.label || 'the top segment'} posting the strongest value at ${top?.value.toLocaleString()}.`,
    chart,
  };
}

export default function MarketInsightsPage() {
  const [country, setCountry] = useState('all');
  const [csvId, setCsvId] = useState(sampleCSVBlocks[0]?.id || '');
  const founder = getFounderSettings();

  const countries = useMemo(() => ['all', ...Array.from(new Set(sampleInsights.map((item) => item.country)))], []);
  const items = country === 'all' ? sampleInsights : sampleInsights.filter((item) => item.country === country);
  const csvGenerated = buildInsightSummaryFromCSV(csvId);
  const generatedImage = buildFeaturedImageDataUrl(csvGenerated.headline || 'Market insights report', founder.founderPhotoUrl, 'Yahia Dubai Market Insights');

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Market Insights</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Data-backed real estate reports for UAE and global markets</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Articles and report snapshots are authored as Yahia Fadlallah, with CSV-linked source tracking, charts, and post-ready featured-image generation.</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-sm font-medium text-slate-600">Country filter</span>
              <select
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                className="rounded-2xl border border-slate-200 px-4 py-2 outline-none focus:border-[#19A880]"
              >
                {countries.map((value) => (
                  <option key={value} value={value}>
                    {value === 'all' ? 'All countries' : `${getCountryFlagByName(value)} ${value}`}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-4">
              {items.map((item) => {
                const imageUrl = buildFeaturedImageDataUrl(item.title, founder.founderPhotoUrl, 'Yahia Dubai Market Insights');
                const maxValue = Math.max(...item.chart.map((point) => point.value), 1);
                return (
                  <article key={item.id} className="rounded-3xl border border-slate-200 p-5 shadow-sm">
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="rounded-full bg-[#19A880]/10 px-3 py-1 font-medium text-[#19A880]">{getCountryFlagByName(item.country)} {item.country}</span>
                      <span className="text-slate-500">{item.city}</span>
                      <span className="text-slate-500">{item.publishedAt}</span>
                    </div>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-950">{item.title}</h2>
                    <p className="mt-2 text-sm text-slate-500">Author: {item.author}</p>
                    <p className="mt-3 text-slate-600">{item.summary}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-600">
                      {item.keyPoints.map((point) => (
                        <li key={point} className="rounded-2xl bg-slate-50 px-3 py-2">{point}</li>
                      ))}
                    </ul>
                    {item.chart.length > 0 && (
                      <div className="mt-4 rounded-2xl border border-slate-200 p-4">
                        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Trend chart</div>
                        <div className="grid grid-cols-5 gap-2">
                          {item.chart.map((bar) => (
                            <div key={bar.label} className="flex flex-col items-center gap-2">
                              <div className="flex h-24 w-full items-end rounded-lg bg-slate-100 p-1">
                                <div className="w-full rounded-md bg-[#19A880]" style={{ height: `${Math.max((bar.value / maxValue) * 100, 8)}%` }} />
                              </div>
                              <div className="text-[11px] text-slate-500">{bar.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <img src={imageUrl} alt={`${item.title} featured`} className="h-20 rounded-xl border border-slate-200 object-cover" />
                      <span className="rounded-2xl bg-[#19A880] px-4 py-2 text-sm font-medium text-white">Featured image ready for article export</span>
                      <span className="text-xs text-slate-500">Source: {item.source}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">CSV to article generator</h3>
              <p className="mt-2 text-sm text-slate-600">Select a dataset to auto-generate a report angle, chart, and featured image ready for publication.</p>
              <select value={csvId} onChange={(event) => setCsvId(event.target.value)} className="mt-4 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#19A880]">
                {sampleCSVBlocks.map((dataset) => (
                  <option key={dataset.id} value={dataset.id}>{dataset.label}</option>
                ))}
              </select>
              <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-950">{csvGenerated.headline}</div>
                <div className="mt-2 text-sm text-slate-600">{csvGenerated.summary}</div>
              </div>
              <img src={generatedImage} alt="Generated featured" className="mt-4 rounded-2xl border border-slate-200" />
              <div className="mt-3 text-xs text-slate-500">Featured images use white background, green headline (#19A880), and Yahia Fadlallah photo position at bottom-right.</div>
            </div>

            <FounderSpot category="market-insights" title="Market Insights Persona Slot" description="Place your PNG persona for this category. It will appear in reports and section branding." />
            <div className="rounded-3xl border border-slate-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">Data portals to connect</h3>
              <div className="mt-4 space-y-2">
                {marketSources.map((source) => (
                  <div key={source.label} className="rounded-2xl bg-slate-50 px-3 py-3 text-sm text-slate-700">
                    <a href={source.url} target="_blank" rel="noreferrer" className="font-medium hover:text-[#19A880]">
                      {getCountryFlagByName(source.country)} {source.label}
                    </a>
                    {source.csvUrl && (
                      <a href={source.csvUrl} target="_blank" rel="noreferrer" className="mt-1 block text-xs text-[#19A880] hover:underline">
                        CSV endpoint
                      </a>
                    )}
                    {source.notes && <div className="mt-1 text-xs text-slate-500">{source.notes}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
