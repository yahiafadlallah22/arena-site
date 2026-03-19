import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PenSquare } from 'lucide-react';
import { sampleInsights } from '../data/market-insights';
import { getFounderSettings } from '../data/portal-settings';
import { buildFeaturedImageDataUrl } from '../utils/featured-image';

const BLOG_DRAFT_KEY = 'yahia-dubai-blog-draft';

export default function BlogPage() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Market Insights');
  const [content, setContent] = useState(() => localStorage.getItem(BLOG_DRAFT_KEY) || '');
  const founder = getFounderSettings();
  const featuredImage = buildFeaturedImageDataUrl(
    title || 'Your next article title',
    founder.founderPhotoUrl,
    `Yahia Dubai ${category}`
  );

  const saveDraft = () => {
    localStorage.setItem(BLOG_DRAFT_KEY, content);
  };

  const seoTips = useMemo(
    () => [
      'Use one target keyword in title, intro, and one H2 naturally.',
      'Add internal links to activities, hotels, and destination pages.',
      'Keep a strong trust section signed by Yahia Fadlallah.',
      'Add FAQ for long-tail queries and featured snippets.',
    ],
    []
  );

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Editorial Engine</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Blog and content control</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">You have full control to publish global SEO articles and UAE authority content. Market Insights is integrated as a dedicated category.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Article title"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#19A880]"
              />
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#19A880]"
              >
                <option>Market Insights</option>
                <option>Activities</option>
                <option>Hotels</option>
                <option>Real Estate</option>
                <option>Business Setup</option>
                <option>Mortgage</option>
                <option>Training</option>
              </select>
            </div>
            <textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Write your article..."
              className="mt-4 min-h-[260px] w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#19A880]"
            />
            <div className="mt-4 flex flex-wrap gap-3">
              <button onClick={saveDraft} className="inline-flex items-center gap-2 rounded-2xl bg-[#19A880] px-5 py-3 font-medium text-white">
                <PenSquare size={16} /> Save draft
              </button>
              <Link to="/market-insights" className="rounded-2xl border border-slate-200 px-5 py-3 font-medium text-slate-700">
                Open Market Insights
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 p-4">
              <h3 className="text-base font-semibold text-slate-950">Auto featured image</h3>
              <p className="mt-2 text-sm text-slate-600">Each article can auto-generate a featured image with white background, green title (#19A880), and Yahia Fadlallah signature block at bottom-right.</p>
              <img src={featuredImage} alt="Featured preview" className="mt-4 rounded-xl border border-slate-200" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">SEO publishing checklist</h2>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                {seoTips.map((tip) => (
                  <div key={tip} className="rounded-2xl bg-slate-50 px-3 py-2">{tip}</div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">Latest Market Insights</h2>
              <div className="mt-4 space-y-3">
                {sampleInsights.map((item) => (
                  <article key={item.id} className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#19A880]">{item.country}</div>
                    <h3 className="mt-2 font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">By {item.author}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
