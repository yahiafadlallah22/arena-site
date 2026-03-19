import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Check, ChevronRight, Download, MapPin, MessageCircle, Share2, SquareDashedBottomCode, Star } from 'lucide-react';
import { getPropertyById, sampleProperties } from '../data/properties';
import { buildWhatsappUrl } from '../utils/affiliate';
import { getDiscountOverride } from '../data/portal-settings';

function money(value: number, currency: string) {
  return `${currency} ${new Intl.NumberFormat('en-AE', { maximumFractionDigits: 0 }).format(value)}`;
}

export default function PropertyDetailPage() {
  const { id } = useParams();
  const property = id ? getPropertyById(id) : undefined;
  const discount = id ? getDiscountOverride(id) : undefined;
  const [showLeadGate, setShowLeadGate] = useState(false);

  if (!property) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-24">
        <h1 className="text-3xl font-semibold text-slate-950">Property not found</h1>
        <p className="mt-3 text-slate-600">The requested project could not be loaded.</p>
      </section>
    );
  }

  const related = sampleProperties.filter((item) => item.id !== property.id).slice(0, 3);
  const discountedPrice = discount?.discountedPrice || (discount ? Math.round(property.pricing.startingPrice * (1 - discount.discountPercent / 100)) : property.pricing.startingPrice);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.35fr_0.65fr] lg:px-8 lg:py-14">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link to="/real-estate" className="hover:text-[#19A880]">Real Estate</Link>
              <ChevronRight size={14} />
              <span>{property.location.emirate}</span>
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{property.title}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{property.content.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">{property.developer}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"><MapPin size={14} className="text-[#19A880]" />{property.location.area}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"><Star size={14} className="text-[#19A880]" />{property.details.status}</span>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">Starting from</div>
            <div className="mt-2 text-4xl font-semibold text-[#19A880]">
                {money(discountedPrice, property.pricing.currency)}
            </div>
            {discount && (
              <div className="mt-2 rounded-2xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-600">
                Discount {discount.discountPercent}% applied
                <span className="ml-2 text-slate-500 line-through">{money(property.pricing.startingPrice, property.pricing.currency)}</span>
              </div>
            )}
            <div className="mt-2 text-sm text-slate-600">{property.details.handoverDate ? `Handover: ${property.details.handoverDate}` : 'Handover available on request'}</div>
            <div className="mt-6 grid gap-3">
              <a href="mailto:info@yahiadubai.com" className="rounded-2xl bg-[#19A880] px-5 py-3 text-center font-medium text-white transition hover:bg-[#128768]">Request availability</a>
              <a href="tel:+97141234567" className="rounded-2xl border border-[#19A880] px-5 py-3 text-center text-sm font-semibold text-[#19A880] transition hover:bg-[#19A880] hover:text-white">RECEIVE A CALLBACK IN 55 SECONDS</a>
              <a href="tel:+97141234567" className="rounded-2xl border border-slate-200 px-5 py-3 text-center font-medium text-slate-700 transition hover:border-[#19A880] hover:text-[#19A880]">Call advisor</a>
              <a href={buildWhatsappUrl(property.agent?.whatsapp || '+971501234567', `Hello, I am interested in ${property.title} on Yahia Dubai.`)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#19A880] px-5 py-3 text-center font-medium text-white transition hover:bg-[#128768]"><MessageCircle size={16} />WhatsApp agent</a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-slate-500">
              <div className="rounded-2xl bg-slate-50 p-3"><div className="text-base font-semibold text-slate-950">{property.unitTypes.length}</div>Unit types</div>
              <div className="rounded-2xl bg-slate-50 p-3"><div className="text-base font-semibold text-slate-950">{property.details.bedrooms}</div>Bedrooms</div>
              <div className="rounded-2xl bg-slate-50 p-3"><div className="text-base font-semibold text-slate-950">{property.details.bathrooms}</div>Bathrooms</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[1fr_360px] lg:px-8">
        <div className="space-y-10">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            <img src={property.media.featuredImage} alt={property.title} className="h-[420px] w-full object-cover" />
          </div>

          {property.media.gallery.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Gallery</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
                {property.media.gallery.map((src) => <img key={src} src={src} alt={property.title} className="h-48 w-full rounded-2xl object-cover" />)}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-semibold text-slate-950">Overview</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{property.content.description}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <div className="flex items-center gap-3">
              <img src={property.agent?.photo || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300'} alt={property.agent?.name || 'Agent'} className="h-16 w-16 rounded-full object-cover" />
              <div>
                <div className="text-sm text-slate-500">Assigned agent</div>
                <div className="text-xl font-semibold text-slate-950">{property.agent?.name || 'Yahia Dubai Advisor'}</div>
                <div className="text-sm text-slate-600">{property.agent?.title || 'Trusted property advisor'}</div>
              </div>
            </div>
            <a href={buildWhatsappUrl(property.agent?.whatsapp || '+971501234567', `Hello, I am interested in ${property.title} on Yahia Dubai.`)} target="_blank" rel="noreferrer" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#19A880] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#128768]"><MessageCircle size={16} /> GET LIVE ASSISTANCE FOR THIS PROJECT NOW</a>
          </div>

          {property.content.amenities.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Amenities</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {property.content.amenities.map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full bg-[#19A880]/10 px-4 py-2 text-sm font-medium text-[#19A880]"><Check size={14} />{item}</span>)}
              </div>
            </div>
          )}

          {property.content.paymentPlan?.length ? (
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Payment Plan</h2>
              <div className="mt-4 space-y-3">
                {property.content.paymentPlan.map((step) => (
                  <div key={step.milestone} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="font-medium text-slate-950">{step.milestone}</div>
                        <div className="text-sm text-slate-500">{step.date}</div>
                      </div>
                      <div className="font-semibold text-[#19A880]">{step.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {property.content.faq.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">FAQ</h2>
              <div className="mt-4 space-y-3">
                {property.content.faq.map((item) => (
                  <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-4">
                    <summary className="cursor-pointer list-none font-medium text-slate-950">{item.question}</summary>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {related.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Related projects</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {related.map((item) => (
                  <Link key={item.id} to={`/real-estate/${item.id}`} className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:shadow-lg">
                    <img src={item.media.featuredImage} alt={item.title} className="h-40 w-full object-cover" />
                    <div className="p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-[#19A880]">{item.location.emirate}</div>
                      <div className="mt-2 font-semibold text-slate-950">{item.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">Trusted by Yahia Fadlallah</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">22 years of connections, portfolios, partnerships, and market access positioned around premium real estate opportunities.</p>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Check size={14} className="text-[#19A880]" />Real discounts</div>
              <div className="flex items-center gap-2"><Check size={14} className="text-[#19A880]" />Real investments</div>
              <div className="flex items-center gap-2"><Check size={14} className="text-[#19A880]" />Real developer access</div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 text-[#19A880]"><SquareDashedBottomCode size={18} /><h2 className="text-lg font-semibold text-slate-950">Project facts</h2></div>
            <dl className="mt-4 space-y-4 text-sm">
              <div className="flex justify-between gap-4"><dt className="text-slate-500">Developer</dt><dd className="font-medium text-slate-950">{property.developer}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-slate-500">Type</dt><dd className="font-medium text-slate-950">{property.propertyType}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-slate-500">Area</dt><dd className="font-medium text-slate-950">{property.location.area}</dd></div>
            </dl>
          </div>

          <a href="mailto:info@yahiadubai.com" className="flex items-center justify-center gap-2 rounded-2xl bg-[#19A880] px-5 py-4 font-medium text-white transition hover:bg-[#128768]">
            Request full brochure <Share2 size={16} />
          </a>
          <button onClick={() => setShowLeadGate(true)} className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 py-4 font-medium text-slate-700 transition hover:border-[#19A880] hover:text-[#19A880]">
            <Download size={16} /> Download stock / brochure
          </button>
        </aside>
      </section>

      {showLeadGate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
            <h3 className="text-2xl font-semibold text-slate-950">Get the brochure and availability sheet</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">Leave your details and we will send the brochure, stock availability, and a free investor training invite.</p>
            <div className="mt-5 grid gap-3">
              <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#19A880]" placeholder="Full name" />
              <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#19A880]" placeholder="Phone / WhatsApp" />
              <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#19A880]" placeholder="Email" />
            </div>
            <div className="mt-5 flex gap-3">
              <button className="flex-1 rounded-2xl bg-[#19A880] px-4 py-3 font-medium text-white">Send request</button>
              <button onClick={() => setShowLeadGate(false)} className="rounded-2xl border border-slate-200 px-4 py-3 font-medium text-slate-700">Close</button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}