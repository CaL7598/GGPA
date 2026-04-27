import React from 'react';
import { Users, Shield, ArrowRight, Star, CheckCircle } from 'lucide-react';
import PageDocs from '../components/PageDocs';

const mechanisms = [
  { title: 'Constitutional Board Quota', desc: '40% mandatory female and youth representation on the GGPA Board — embedded in Act 992 registration.' },
  { title: 'Youth Governance Fellow Placements', desc: 'Structured placements in government MDAs, AU bodies, and Commonwealth institutions.' },
  { title: 'Youth-Led Audit Cohorts', desc: 'Trained fellows conducting in-situ IIGRA diagnostics under GGPA supervision.' },
  { title: 'Youth Policy Innovation Lab', desc: 'Evidence-based policy development and research output production.' },
  { title: 'Youth Advisory Council (YAC)', desc: 'Four-tier technical structure from Observer to Technical Auditor with permanent appointment eligibility.' },
  { title: 'Youth-Disaggregated Data Production', desc: 'Publishing governance intelligence data disaggregated by age to fill evidence gaps.' },
];

const yacTiers = [
  { tier: 'I', title: 'Observer', desc: 'Entry-level engagement — attend briefings, shadow audits, access foundational Compendium materials.' },
  { tier: 'II', title: 'Policy Analyst', desc: 'Draft policy briefs, contribute to governance intelligence reports, support IIGRA pre-assessments.' },
  { tier: 'III', title: 'Governance Specialist', desc: 'Lead workstreams, conduct standalone diagnostics, represent GGPA in partner engagements.' },
  { tier: 'IV', title: 'Technical Auditor', desc: 'Eligible for permanent GGPA team appointment. Full IIGRA audit lead authority.' },
];

const frameworks = ['UNSCR 2250', 'AU Youth Charter (Art. 13)', "Ghana's Local Governance Act 936", 'SDG 16.7', 'SDG 4', 'SDG 10'];

const YouthGovernance: React.FC = () => (
  <div className="min-h-screen bg-slate-50">
    <section className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-end pr-20">
        <Users size={400} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-amber-500/30">
          GGPA-PM-2026-YM06 · Youth Governance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6 max-w-3xl">
          Youth Governance — From Rhetoric to Structural Empowerment
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-8">
          GGPA's youth inclusion is a constitutional requirement embedded in our governance architecture — not a consultative add-on. Youth participation at GGPA means structural authority, not symbolic presence.
        </p>
        <div className="flex flex-wrap gap-2">
          {frameworks.map(f => (
            <span key={f} className="px-3 py-1 bg-white/10 text-white/80 text-xs font-bold rounded-full border border-white/20">{f}</span>
          ))}
        </div>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">

      {/* Six mechanisms */}
      <section>
        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-3">Six Structural Mechanisms</h2>
        <p className="text-slate-500 mb-8">Youth voice at GGPA is institutionalised through six permanent structural mechanisms — not temporary programmes.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mechanisms.map((m, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-700 font-black text-sm">{i + 1}</div>
                <h3 className="font-bold text-slate-900 text-sm">{m.title}</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* YAC Tiers */}
      <section>
        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-3">Youth Advisory Council — Tier Progression</h2>
        <p className="text-slate-500 mb-8">A structured technical pathway from Observer to Technical Auditor — with permanent GGPA team appointment eligibility at Tier IV.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {yacTiers.map(t => (
            <div key={t.tier} className="bg-white p-6 rounded-2xl border-2 border-slate-200 hover:border-amber-400 transition-all relative">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-black text-lg flex items-center justify-center mb-4">
                {t.tier}
              </div>
              <h3 className="font-bold font-serif text-slate-900 mb-2">{t.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{t.desc}</p>
              {t.tier === 'IV' && (
                <div className="mt-3 flex items-center gap-1 text-amber-600">
                  <Star size={12} className="fill-amber-600" />
                  <span className="text-[10px] font-bold">Permanent Appointment Eligible</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Fellowship CTA */}
      <section className="bg-amber-50 rounded-3xl border border-amber-100 p-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-3">
            <Shield size={20} className="text-amber-600" />
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Primary Pathway</span>
          </div>
          <h3 className="text-2xl font-bold font-serif text-amber-900 mb-3">Apply to the Fellowship</h3>
          <p className="text-amber-800 text-sm leading-relaxed">
            The GGPA Technical Fellowship is Africa's most structured pathway for transforming young professionals (ages 18–30) into governance technocrats. 3 tracks · 6–12 months · 100% placement guaranteed · stipend provided.
          </p>
        </div>
        <a href="#/fellowship"
          className="flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-700 transition-all whitespace-nowrap shrink-0">
          View Fellowship <ArrowRight size={16} />
        </a>
      </section>

      {/* Publications */}
      <section>
        <PageDocs category="Youth Governance" heading="Youth Governance Publications" />
      </section>
    </div>
  </div>
);

export default YouthGovernance;
