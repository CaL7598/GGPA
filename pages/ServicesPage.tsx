import React from 'react';
import { Zap, Clock, Layers, ArrowRight, CheckCircle } from 'lucide-react';
import PageDocs from '../components/PageDocs';

const tiers = [
  {
    tier: 'Tier 1 — Rapid Diagnostics',
    delivery: '48–72 hours',
    icon: <Zap size={22} />,
    color: 'border-blue-200 bg-blue-50',
    badge: 'bg-blue-100 text-blue-800',
    services: [
      { code: 'GaaS-01', name: 'Institutional Health Check', desc: 'Rapid governance temperature check across key risk indicators.' },
      { code: 'GaaS-02', name: 'Governance Red Flag Scan', desc: 'Identification of critical governance vulnerabilities and immediate risk alerts.' },
    ],
  },
  {
    tier: 'Tier 2 — Standard Engagements',
    delivery: '2–4 weeks',
    icon: <Clock size={22} />,
    color: 'border-amber-200 bg-amber-50',
    badge: 'bg-amber-100 text-amber-800',
    services: [
      { code: 'GaaS-03', name: 'Protocol Alignment Audit', desc: 'Full alignment review against Act 992, IPSAS, and international frameworks.' },
      { code: 'GaaS-04', name: 'Technical Policy Drafting', desc: 'Evidence-based policy documents grounded in GGPA Compendium standards.' },
      { code: 'GaaS-05', name: 'Governance Training & Executive Seminar', desc: 'Structured capacity building for boards, senior staff, and executive teams.' },
    ],
  },
  {
    tier: 'Tier 3 — Transformation Programmes',
    delivery: '30–90 days',
    icon: <Layers size={22} />,
    color: 'border-slate-200 bg-slate-50',
    badge: 'bg-slate-100 text-slate-700',
    services: [
      { code: 'GaaS-06', name: 'Full IIGRA Diagnostic Audit', desc: '30-day comprehensive institutional audit across all 10 governance pillars.' },
      { code: 'GaaS-07', name: '90-Day Governance Reform Partnership', desc: 'End-to-end governance reform with embedded GGPA technical team.' },
      { code: 'GaaS-08', name: 'SDG Alignment & Donor Portfolio Programme', desc: 'Repositioning institutional strategy to SDG 16 frameworks for donor readiness.' },
    ],
  },
];

const principles = [
  'Data Integrity — findings are never suppressed or altered',
  'No Interference with Findings — institutional sponsors cannot influence conclusions',
  'Confidentiality — all diagnostic data is protected under signed MOU',
  'Agreed Timelines are Binding — delivery dates are contractual commitments',
  'Public Acknowledgement — partnerships are listed on the GGPA public register',
];

const ServicesPage: React.FC = () => (
  <div className="min-h-screen bg-slate-50">
    {/* Hero */}
    <section className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-amber-500/30">
          GGPA-AS-2026-CAT08 · Advisory Services
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6 max-w-3xl">
          Governance-as-a-Service (GaaS)
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-10">
          Eight technical advisory services across three delivery tiers — from rapid 48-hour diagnostics to 90-day transformation partnerships. Every service is grounded in GGPA's published Compendium standards.
        </p>
        <a href="mailto:director.ggpa.global@gmail.com?subject=GaaS Engagement Request"
          className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-700 transition-all">
          Request a Service <ArrowRight size={16} />
        </a>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">

      {/* Three tiers */}
      {tiers.map(t => (
        <section key={t.tier}>
          <div className={`flex items-center gap-4 p-5 rounded-2xl border-2 ${t.color} mb-6`}>
            <div className={`px-3 py-1 rounded-full text-xs font-black uppercase ${t.badge}`}>{t.delivery}</div>
            <div className="flex items-center gap-2 text-slate-800">
              {t.icon}
              <h2 className="text-xl font-bold font-serif">{t.tier}</h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.map(s => (
              <div key={s.code} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-amber-300 transition-all">
                <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-2 block">{s.code}</span>
                <h3 className="font-bold font-serif text-slate-900 text-lg mb-2">{s.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Engagement process */}
      <section className="bg-white rounded-3xl border border-slate-200 p-10">
        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-8">Five-Stage Engagement Process</h2>
        <div className="flex flex-col sm:flex-row gap-0">
          {['Expression of Interest', 'Needs Assessment', 'MOU', 'Delivery', 'Report'].map((s, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center relative">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-black flex items-center justify-center mb-3 relative z-10">{i + 1}</div>
              {i < 4 && <div className="hidden sm:block absolute top-5 left-1/2 w-full h-0.5 bg-amber-200 z-0" />}
              <p className="text-xs font-bold text-slate-700">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership principles */}
      <section className="bg-amber-50 rounded-3xl border border-amber-100 p-10">
        <h2 className="text-2xl font-bold font-serif text-amber-900 mb-6">Five Non-Negotiable Partnership Principles</h2>
        <div className="space-y-3">
          {principles.map((p, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <p className="text-amber-800 text-sm font-medium">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section>
        <PageDocs category="Advisory Services" heading="Advisory Services Publications" />
      </section>
    </div>
  </div>
);

export default ServicesPage;
