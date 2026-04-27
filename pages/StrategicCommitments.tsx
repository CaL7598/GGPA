import React from 'react';
import { Target, CheckCircle, Globe, TrendingUp } from 'lucide-react';
import PageDocs from '../components/PageDocs';

const phases = [
  {
    num: 'I',
    title: 'Knowledge Transfer & Domestic Impact',
    color: 'border-amber-400 bg-amber-50',
    badge: 'bg-amber-100 text-amber-800',
    deliverables: [
      'Publish all 30 Compendium volumes with Zenodo DOIs',
      'Conduct minimum 5 IIGRA diagnostics in Ghanaian institutions',
      'Launch Cohort 1 of the Technical Fellowship Programme',
      'Establish YAC with minimum 20 active members across four tiers',
      'Submit complete GaaS Catalogue to Commonwealth Secretariat',
    ],
  },
  {
    num: 'II',
    title: 'Institutional Linkage & Research Architecture',
    color: 'border-blue-400 bg-blue-50',
    badge: 'bg-blue-100 text-blue-800',
    deliverables: [
      'Secure minimum 2 formal MOUs with government MDAs or universities',
      'Publish 6 issues of the GGPA Governance Brief series',
      'Submit application for UN ECOSOC Special Consultative Status',
      'Establish GGPA Governance Intelligence Database',
      'Complete AU Liaison protocol engagement with APRM',
    ],
  },
  {
    num: 'III',
    title: 'Global Reporting & Multilateral Engagement',
    color: 'border-green-400 bg-green-50',
    badge: 'bg-green-100 text-green-800',
    deliverables: [
      'Submit annual governance intelligence report to Commonwealth Foundation',
      'Present at minimum 2 international governance conferences',
      'Achieve GGPA Partner Designation for 10 institutions',
      'Publish Administrative Velocity benchmarks for 5 institutions',
      'Launch GGPA Circular Library as public transparency tool',
    ],
  },
  {
    num: 'IV',
    title: 'Regional Expansion',
    color: 'border-purple-400 bg-purple-50',
    badge: 'bg-purple-100 text-purple-800',
    deliverables: [
      'Extend IIGRA diagnostic services to minimum 3 ECOWAS member states',
      'Establish partnerships with 2 Commonwealth universities outside Ghana',
      'Launch ECOWAS Governance Intelligence Report — annual publication',
      'Scale Fellowship Programme to 3 cohorts per year',
      'Achieve UN ECOSOC Special Consultative Status',
    ],
  },
];

const StrategicCommitments: React.FC = () => (
  <div className="min-h-screen bg-slate-50">
    <section className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-end pr-20">
        <Target size={400} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-amber-500/30">
          GGPA-INST-2026-SI03 · Public Accountability
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6 max-w-3xl">
          2026 Strategic Impact Commitments
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          GGPA's public accountability roadmap — converting internal strategic planning into an external accountability record with named deliverables, measurement indicators, and verification methods for donors, multilateral bodies, and the public.
        </p>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">

      {/* Accountability statement */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8">
        <div className="flex items-start gap-5">
          <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
            <Globe size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-2">An External Accountability Tool — Not an Internal Plan</h2>
            <p className="text-slate-600 leading-relaxed">
              This document was published specifically as an external accountability record. Every commitment listed here is publicly verifiable, time-bound, and subject to independent review by donors, Commonwealth officers, and multilateral partners.
            </p>
          </div>
        </div>
      </div>

      {/* Four phases */}
      {phases.map(p => (
        <section key={p.num}>
          <div className={`flex items-center gap-4 p-4 rounded-2xl border-2 ${p.color} mb-6`}>
            <span className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-lg ${p.badge}`}>{p.num}</span>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Phase {p.num}</p>
              <h2 className="text-xl font-bold font-serif text-slate-900">{p.title}</h2>
            </div>
            <TrendingUp size={20} className="ml-auto text-slate-300" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {p.deliverables.map((d, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl">
                <CheckCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">{d}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section>
        <PageDocs category="Strategic Commitments" heading="Strategic Commitments Publications" />
      </section>
    </div>
  </div>
);

export default StrategicCommitments;
