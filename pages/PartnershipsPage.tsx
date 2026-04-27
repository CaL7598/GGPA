import React from 'react';
import { Handshake, CheckCircle, ArrowRight, FileText } from 'lucide-react';
import PageDocs from '../components/PageDocs';

const categories = [
  { title: 'Governance Diagnostic (IIGRA)', code: 'GaaS-06', desc: 'Full institutional audit with scorecard, report, correction roadmap, and GGPA Partner Designation.' },
  { title: 'Research Partnership', code: 'Research', desc: 'Joint production of governance intelligence reports, white papers, and policy briefs under co-authorship.' },
  { title: 'Capacity Building Programme', code: 'Training', desc: 'Fellowship cohort hosting, executive seminar delivery, and induction protocol implementation.' },
  { title: 'Advisory & Policy Alignment', code: 'GaaS-03/04', desc: 'Protocol alignment audits and technical policy drafting grounded in GGPA Compendium standards.' },
  { title: 'Strategic Alliance (NGO/Development Partner)', code: 'GaaS-08', desc: 'SDG alignment repositioning and donor portfolio programme for long-term development partners.' },
];

const principles = [
  'Data Integrity — GGPA findings are never suppressed or altered',
  'No Interference with Findings — partners cannot influence diagnostic conclusions',
  'Confidentiality — all diagnostic data protected under signed MOU',
  'Agreed Timelines are Binding — delivery dates are contractual commitments',
  'Public Acknowledgement — partnerships listed on GGPA public register',
];

const agreements = [
  { type: 'LOI', full: 'Letter of Intent', days: '5 days' },
  { type: 'MOU', full: 'Memorandum of Understanding', days: '15 days' },
  { type: 'MOA', full: 'Memorandum of Agreement', days: '21 days' },
  { type: 'Framework', full: 'Framework Agreement', days: '30 days' },
];

const PartnershipsPage: React.FC = () => (
  <div className="min-h-screen bg-slate-50">
    <section className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-end pr-20">
        <Handshake size={400} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-amber-500/30">
          GGPA-AS-2026-SP10 · Partnerships
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6 max-w-3xl">
          Strategic Partnership Model
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-10">
          GGPA partners with governments, universities, NGOs, and development partners through five formal partnership categories — each governed by a published, documented protocol.
        </p>
        <a href="mailto:director.ggpa.global@gmail.com?subject=Partnership Enquiry"
          className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-700 transition-all">
          Initiate Partnership <ArrowRight size={16} />
        </a>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">

      {/* Five categories */}
      <section>
        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-8">Five Partnership Categories</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all">
              <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest block mb-2">{c.code}</span>
              <h3 className="font-bold font-serif text-slate-900 mb-2">{c.title}</h3>
              <p className="text-sm text-slate-500">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white rounded-3xl border border-slate-200 p-10">
        <h2 className="text-2xl font-bold font-serif text-slate-900 mb-6">Five Non-Negotiable Partnership Principles</h2>
        <div className="space-y-4">
          {principles.map((p, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <p className="text-slate-700 text-sm font-medium">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agreement types */}
      <section>
        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-3">Formal Agreement Standards</h2>
        <p className="text-slate-500 mb-8">All GGPA partnerships are governed by formally classified agreements — each with defined processing timelines.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {agreements.map(a => (
            <div key={a.type} className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <FileText size={20} className="text-amber-700" />
              </div>
              <p className="font-black text-2xl text-slate-900 mb-1">{a.type}</p>
              <p className="text-xs text-slate-500 mb-2">{a.full}</p>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">{a.days}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Readiness CTA */}
      <section className="bg-amber-50 rounded-3xl border border-amber-100 p-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold font-serif text-amber-900 mb-3">Before You Partner — Assess Your Readiness</h3>
          <p className="text-amber-800 text-sm leading-relaxed">
            Complete the 42-item Institutional Readiness Self-Assessment Checklist (GGPA-INST-2026-RC09) before formal engagement. Takes 30 minutes and ensures productive, efficient partnership scoping.
          </p>
        </div>
        <a href="mailto:director.ggpa.global@gmail.com?subject=Readiness Checklist Request"
          className="flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-700 transition-all whitespace-nowrap shrink-0">
          Request Checklist <ArrowRight size={16} />
        </a>
      </section>

      <section>
        <PageDocs category="Partnerships" heading="Partnership Model Publications" />
      </section>
    </div>
  </div>
);

export default PartnershipsPage;
