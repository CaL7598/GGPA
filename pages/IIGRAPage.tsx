import React from 'react';
import { Shield, ClipboardCheck, BarChart3, FileCheck, ArrowRight, CheckCircle } from 'lucide-react';
import PageDocs from '../components/PageDocs';

const pillars = [
  'Strategic Leadership & Board Governance',
  'Financial Management & Fiduciary Duty',
  'Legal Compliance & Regulatory Alignment',
  'Procurement & Contract Management',
  'Human Resource Governance',
  'Stakeholder Engagement & Transparency',
  'Digital Governance & Cyber Sovereignty',
  'Anti-Corruption & Ethics Architecture',
  'Programme Delivery & Impact Measurement',
  'Institutional Memory & Knowledge Management',
];

const ratingBands = [
  { label: 'Transformation Ready', range: '36–42', color: 'bg-green-100 text-green-800 border-green-200' },
  { label: 'Substantially Ready', range: '28–35', color: 'bg-blue-100 text-blue-800 border-blue-200' },
  { label: 'Developing', range: '18–27', color: 'bg-amber-100 text-amber-800 border-amber-200' },
  { label: 'Foundational Gaps', range: 'Below 18', color: 'bg-red-100 text-red-800 border-red-200' },
];

const outputs = [
  { icon: <BarChart3 size={20} />, title: 'Governance Integrity Scorecard', desc: 'Quantified score across all 10 pillars with benchmark comparisons.' },
  { icon: <FileCheck size={20} />, title: 'Full Audit Report', desc: 'Detailed findings, evidence citations, and gap identification.' },
  { icon: <ClipboardCheck size={20} />, title: 'Correction Roadmap', desc: 'Prioritised 90-day action plan with named accountabilities.' },
  { icon: <Shield size={20} />, title: 'GGPA Partner Designation', desc: 'Official recognition for institutions that meet the readiness threshold.' },
];

const IIGRAPage: React.FC = () => (
  <div className="min-h-screen bg-slate-50">
    {/* Hero */}
    <section className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-end pr-20">
        <Shield size={400} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-amber-500/30">
          GGPA-IIGRA-2026 · Flagship Diagnostic
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6 max-w-3xl">
          Institutional Integrity & Governance Readiness Assessment
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-10">
          GGPA's primary diagnostic service. A rigorous, evidence-based audit of your institution's governance architecture across 10 pillars — delivering a quantified scorecard, full audit report, and a prioritised correction roadmap.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:director.ggpa.global@gmail.com?subject=IIGRA Engagement Request"
            className="flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-700 transition-all">
            Initiate IIGRA Engagement <ArrowRight size={16} />
          </a>
          <a href="#publications" className="flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl font-bold hover:border-white/60 transition-all">
            View Publications
          </a>
        </div>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">

      {/* 10 Pillars */}
      <section>
        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-3">The 10 Pillars of Governance Readiness</h2>
        <p className="text-slate-500 mb-8">Every institution is scored across these ten domains using GGPA's Modular Audit Technique.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 hover:border-amber-300 transition-colors">
              <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 text-xs font-black flex items-center justify-center shrink-0">{i + 1}</span>
              <span className="text-sm font-semibold text-slate-700">{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Rating Bands */}
      <section>
        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-3">GGPA Rating Bands</h2>
        <p className="text-slate-500 mb-8">Your institution's aggregate score places it in one of four readiness categories.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ratingBands.map(b => (
            <div key={b.label} className={`p-5 rounded-2xl border-2 ${b.color}`}>
              <p className="font-black text-2xl mb-1">{b.range}</p>
              <p className="font-bold text-sm">{b.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outputs */}
      <section>
        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-3">Four IIGRA Outputs</h2>
        <p className="text-slate-500 mb-8">Every completed IIGRA diagnostic produces four deliverables.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {outputs.map((o, i) => (
            <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">{o.icon}</div>
              <div>
                <p className="font-bold text-slate-900 mb-1">{o.title}</p>
                <p className="text-sm text-slate-500">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Five-stage process */}
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

      {/* Self-assessment CTA */}
      <section className="bg-amber-50 rounded-3xl border border-amber-100 p-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-grow">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">Pre-Assessment Tool</p>
          <h3 className="text-2xl font-bold font-serif text-amber-900 mb-3">Are You Ready for Governance Transformation?</h3>
          <p className="text-amber-800 text-sm leading-relaxed">
            Complete the 42-item, 7-domain Institutional Readiness Self-Assessment Checklist before engaging GGPA. Takes 30 minutes and gives you a preliminary readiness score.
          </p>
        </div>
        <div className="flex flex-col gap-3 shrink-0">
          <a href="mailto:director.ggpa.global@gmail.com?subject=IIGRA Self-Assessment Request"
            className="flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-700 transition-all whitespace-nowrap">
            <CheckCircle size={16} /> Request Checklist
          </a>
        </div>
      </section>

      {/* Publications */}
      <section id="publications">
        <PageDocs category="IIGRA Diagnostic" heading="IIGRA Publications & Methodology Documents" />
      </section>
    </div>
  </div>
);

export default IIGRAPage;
