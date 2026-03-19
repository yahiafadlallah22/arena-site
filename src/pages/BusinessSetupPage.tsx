import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Briefcase, Building2, Globe, Shield, Clock, Check, ArrowRight, ChevronDown, Users, FileText, Sparkles } from 'lucide-react';
import { businessSetupServices } from '../data/business';

const BusinessSetupPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [activeType, setActiveType] = useState<'freezone' | 'mainland' | 'offshore'>(
    (searchParams.get('type') as 'freezone' | 'mainland' | 'offshore') || 'freezone'
  );

  const currentService = businessSetupServices.find(s => s.type === activeType) || businessSetupServices[0];

  const comparisonData = [
    { feature: 'Ownership', freezone: '100% Foreign', mainland: '100% (most activities)', offshore: '100% Foreign' },
    { feature: 'Local Market Access', freezone: 'Limited', mainland: 'Full Access', offshore: 'Not Allowed' },
    { feature: 'Office Requirement', freezone: 'Flexible', mainland: 'Required', offshore: 'Not Required' },
    { feature: 'Visa Allocation', freezone: '1-6 visas', mainland: 'Unlimited (with office)', offshore: 'No visas' },
    { feature: 'Setup Time', freezone: '3-5 days', mainland: '5-10 days', offshore: '3-5 days' },
    { feature: 'Starting Cost', freezone: 'AED 15,000', mainland: 'AED 25,000', offshore: 'AED 8,000' },
  ];

  const steps = [
    { number: 1, title: 'Consultation', description: 'Free consultation to understand your business needs and goals' },
    { number: 2, title: 'Jurisdiction Selection', description: 'We help you choose the best jurisdiction for your business' },
    { number: 3, title: 'Documentation', description: 'We prepare and submit all required documents' },
    { number: 4, title: 'Approval & License', description: 'Receive your trade license and start operating' },
    { number: 5, title: 'Bank Account', description: 'We assist with corporate bank account opening' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#19A880] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#19A880] rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#19A880]/20 text-[#19A880] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase size={16} />
              <span>UAE Business Formation Experts</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start Your Business in UAE
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Company formation made simple. Freezone, Mainland, or Offshore — 
              we handle everything from licensing to bank accounts.
            </p>

            {/* Service Type Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { id: 'freezone', label: 'Freezone', icon: Globe },
                { id: 'mainland', label: 'Mainland', icon: Building2 },
                { id: 'offshore', label: 'Offshore', icon: Shield },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveType(tab.id as typeof activeType)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    activeType === tab.id
                      ? 'bg-[#19A880] text-white shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <tab.icon size={20} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Key Highlights */}
            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-[#19A880]" />
                <span>{currentService.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-[#19A880]" />
                <span>From {currentService.pricing.currency} {currentService.pricing.starting.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-[#19A880]" />
                <span>100% Ownership</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Service Details */}
          <div className="lg:col-span-2">
            {/* Service Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {currentService.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {currentService.description}
              </p>

              {/* Features */}
              <h3 className="font-semibold text-gray-900 mb-4">Key Benefits</h3>
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Check size={18} className="text-[#19A880] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Requirements */}
              <h3 className="font-semibold text-gray-900 mb-4">Requirements</h3>
              <ul className="space-y-2 mb-8">
                {currentService.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                    <FileText size={16} className="text-gray-400 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              {/* FAQ */}
              <h3 className="font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {currentService.faq.map((item, index) => (
                  <details key={index} className="group bg-gray-50 rounded-lg">
                    <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                      <span className="font-medium text-gray-900">{item.question}</span>
                      <ChevronDown size={20} className="text-gray-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-4 pb-4 text-sm text-gray-600">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Compare Business Types
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">Freezone</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">Mainland</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">Offshore</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 px-4 text-gray-700 font-medium">{row.feature}</td>
                        <td className="py-4 px-4 text-center text-sm text-gray-600">{row.freezone}</td>
                        <td className="py-4 px-4 text-center text-sm text-gray-600">{row.mainland}</td>
                        <td className="py-4 px-4 text-center text-sm text-gray-600">{row.offshore}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Pricing Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 mb-2">Starting from</div>
                <div className="text-4xl font-bold text-[#19A880] mb-1">
                  {currentService.pricing.currency} {currentService.pricing.starting.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">{currentService.timeline}</div>
              </div>

              <button className="w-full bg-[#19A880] hover:bg-[#158969] text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 mb-4">
                Get Started Now
                <ArrowRight size={18} />
              </button>

              <button className="w-full border-2 border-gray-200 hover:border-[#19A880] text-gray-700 hover:text-[#19A880] py-3 rounded-xl font-medium transition-colors mb-6">
                Schedule Consultation
              </button>

              {/* Contact Info */}
              <div className="border-t border-gray-100 pt-6 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 bg-[#19A880]/10 rounded-lg flex items-center justify-center">
                    <Users size={18} className="text-[#19A880]" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Expert Advisors</div>
                    <div className="text-gray-500">Dedicated support team</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 bg-[#19A880]/10 rounded-lg flex items-center justify-center">
                    <Clock size={18} className="text-[#19A880]" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Fast Processing</div>
                    <div className="text-gray-500">3-10 business days</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 bg-[#19A880]/10 rounded-lg flex items-center justify-center">
                    <Shield size={18} className="text-[#19A880]" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">100% Ownership</div>
                    <div className="text-gray-500">No local partner needed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-[#19A880]/10 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-[#19A880] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">YF</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Founded by Yahia Fadlallah</h3>
              <p className="text-sm text-gray-600">
                22 years of business expertise and connections in the UAE market.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#19A880]">Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make business setup simple. Just 5 steps to launch your company.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

              {/* Steps */}
              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.number} className="relative flex gap-6">
                    <div className="w-16 h-16 bg-[#19A880] rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#19A880]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Business?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation with our business setup experts. 
            We'll help you choose the right structure and handle everything.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#19A880] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
            <a
              href="tel:+97141234567"
              className="bg-[#158969] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#127256] transition-colors"
            >
              Call +971 4 123 4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSetupPage;
