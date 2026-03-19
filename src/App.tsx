import { useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import RealEstatePage from './pages/RealEstatePage';
import ActivitiesPage from './pages/ActivitiesPage';
import HotelsPage from './pages/HotelsPage';
import CarsChauffeursPage from './pages/CarsChauffeursPage';
import BusinessSetupPage from './pages/BusinessSetupPage';
import MortgagePage from './pages/MortgagePage';
import TrainingPage from './pages/TrainingPage';
import BlueprintPage from './pages/BlueprintPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import ActivityDetailPage from './pages/ActivityDetailPage';
import HotelDetailPage from './pages/HotelDetailPage';
import DestinationPage from './pages/DestinationPage';
import FlightsPage from './pages/FlightsPage';
import RealEstateMapPage from './pages/RealEstateMapPage';
import SellPropertyPage from './pages/SellPropertyPage';
import AdminPage from './pages/AdminPage';
import ActivitiesCountryPage from './pages/ActivitiesCountryPage';
import ActivitiesCityPage from './pages/ActivitiesCityPage';
import HotelsCountryPage from './pages/HotelsCountryPage';
import HotelsCityPage from './pages/HotelsCityPage';
import BlogPage from './pages/BlogPage';
import MarketInsightsPage from './pages/MarketInsightsPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function StaticPage({ title, subtitle, body }: { title: string; subtitle: string; body: ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19A880]">Yahia Dubai</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{subtitle}</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">{body}</section>
    </motion.div>
  );
}

function SiteRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/real-estate" element={<RealEstatePage />} />
        <Route path="/real-estate/map" element={<RealEstateMapPage />} />
        <Route path="/real-estate/sell" element={<SellPropertyPage />} />
        <Route path="/real-estate/:id" element={<PropertyDetailPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/activities/country/:countrySlug" element={<ActivitiesCountryPage />} />
        <Route path="/activities/city/:citySlug" element={<ActivitiesCityPage />} />
        <Route path="/activities/:id" element={<ActivityDetailPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/hotels/country/:countrySlug" element={<HotelsCountryPage />} />
        <Route path="/hotels/city/:citySlug" element={<HotelsCityPage />} />
        <Route path="/hotels/:id" element={<HotelDetailPage />} />
        <Route path="/cars-chauffeurs" element={<CarsChauffeursPage />} />
        <Route path="/destination/:countrySlug" element={<DestinationPage />} />
        <Route path="/destination/:countrySlug/:citySlug" element={<DestinationPage />} />
        <Route path="/business-setup" element={<BusinessSetupPage />} />
        <Route path="/mortgage" element={<MortgagePage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/blueprint" element={<BlueprintPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/flights" element={<FlightsPage />} />
        <Route path="/about" element={<StaticPage title="About Yahia Dubai" subtitle="A premium global portal with UAE authority, trusted network access, and one unified experience." body={<div className="max-w-3xl space-y-4 text-slate-600 leading-8"><p>Yahia Dubai is positioned around premium opportunity discovery across travel and UAE business verticals.</p><p>Yahia Fadlallah is the trusted figure behind the platform, highlighted as the network connector, market access holder, and authority-led face of the brand.</p></div>} />} />
        <Route path="/contact" element={<StaticPage title="Contact" subtitle="Lead capture, consultation requests, and premium inquiries flow through this contact surface." body={<div className="grid gap-6 lg:grid-cols-2"><div className="rounded-3xl border border-slate-200 p-6"><p className="text-slate-600">Email: info@yahiadubai.com</p><p className="mt-2 text-slate-600">Phone: +971 4 123 4567</p></div><div className="rounded-3xl border border-slate-200 p-6"><p className="text-slate-600">This surface is ready for Jotform embed placement and sticky CTA blocks.</p></div></div>} />} />
        <Route path="/careers" element={<StaticPage title="Careers" subtitle="Join the platform team building premium conversion experiences for the Yahia Dubai ecosystem." body={<div className="rounded-3xl border border-slate-200 p-6 text-slate-600">Open roles can be connected to a future application workflow.</div>} />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/market-insights" element={<MarketInsightsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-950">
        <Header />
        <main>
          <SiteRoutes />
        </main>
        <Footer />
      </div>
      // Route protégée
{path: '/admin-secret-yahia', element: <ProtectedAdmin />}
    </BrowserRouter>
  );
}
