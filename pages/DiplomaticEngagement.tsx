import React from 'react';
import { Globe, Shield, FileText, ExternalLink } from 'lucide-react';
import PageDocs from '../components/PageDocs';

const channels = [
  {
    body: 'African Union',
    code: 'GGPA-DIP-2026-AU03',
    desc: 'GGPA engages the AU as a governance intelligence provider, not an advocacy petitioner — contributing evidence-based assessments to AU\'s own institutional mandate.',
    pathways: ['AU Advisory Board on Corruption', 'AU Youth Division (DCYP)', 'African Governance Architecture (AGA)', 'African Peer Review Mechanism (APRM)', 'AU Commission Political Affairs Directorate'],
    color: 'border-l-4 border-l-green-500',
  },
  {
    body: 'Commonwealth Secretariat',
    code: 'GGPA-DIP-2026-CW04',
    desc: 'Ghana is a full Commonwealth member state. Every GGPA submission to a Commonwealth body is a civil society input into a formal intergovernmental process.',
    pathways: ['Commonwealth Secretariat Governance & Peace Directorate', 'Commonwealth Youth Programme', 'CLGF World Council', 'Commonwealth Human Rights Initiative', 'Commonwealth Foundation Grant Cycles'],
    color: 'border-l-4 border-l-blue-500',
  },
  {
    body: 'United Nations',
    code: 'GGPA/ASG/2026-VAL',
    desc: 'GGPA\'s Proprietary Technical Proposal — The OCHA Governance Stack — was formally submitted to UN OCHA under Reference OCHA/NV/44/2026.',
    pathways: ['UN OCHA (Reference: OCHA/NV/44/2026)', 'UN ECOSOC Special Consultative Status Roadmap', 'SDG 16 Implementation Framework'],
    color: 'border-l-4 border-l-slate-400',
  },
];

const DiplomaticEngagement: React.FC = () => (
  <div className="min-h-screen bg-slate-50">
    <section className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-end pr-20">
        <Globe size={400} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-amber-500/30">
          GGPA-DIP-2026 · Diplomatic Engagement
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6 max-w-3xl">
          Diplomatic Engagement
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          GGPA's formal engagement architecture with AU, ECOWAS, Commonwealth, and UN bodies — operating with the discipline of an intergovernmental body, not as an advocacy NGO.
        </p>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">

      {/* Note Verbale standard */}
      <section className="bg-white rounded-3xl border border-slate-200 p-10">
        <div className="flex items-start gap-5">
          <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
            <FileText size={22} />
          </div>
          <div>
            <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">GGPA-DIP-2026-NV01</span>
            <h2 className="text-2xl font-bold font-serif text-slate-900 mt-1 mb-3">Note Verbale Standards</h2>
            <p className="text-slate-600 mb-5 max-w-2xl">
              GGPA adopts the Note Verbale format — the same correspondence standard used between sovereign states — for all formal institutional communications with government ministries, international organisations, and statutory bodies.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {['Formal Header', 'Third-Person Convention', 'Opening Formula', 'Closing Formula', 'Date Format', 'Reference Number'].map(el => (
                <div key={el} className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
                  <Shield size={12} className="text-amber-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">{el}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sovereignty Guarantee */}
      <section className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-10">
        <span className="text-xs font-black text-amber-600 uppercase tracking-widest block mb-3">GGPA Sovereignty Guarantee</span>
        <blockquote className="text-xl font-bold font-serif text-amber-900 leading-relaxed">
          "GGPA will not enter any agreement that requires it to suppress, alter, or withhold its governance assessments or findings."
        </blockquote>
        <p className="text-amber-700 text-sm mt-4">Reference Code: GGPA-DIP-2026-TN02 — Treaty Negotiation Protocol Brief</p>
      </section>

      {/* Engagement channels */}
      <section>
        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-8">Multilateral Engagement Channels</h2>
        <div className="grid gap-6">
          {channels.map(c => (
            <div key={c.body} className={`bg-white rounded-2xl border border-slate-200 p-8 ${c.color}`}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">{c.code}</span>
                  <h3 className="text-xl font-bold font-serif text-slate-900 mt-1">{c.body}</h3>
                </div>
                <Globe size={24} className="text-slate-300 shrink-0" />
              </div>
              <p className="text-slate-600 text-sm mb-5">{c.desc}</p>
              <div className="flex flex-wrap gap-2">
                {c.pathways.map((p, i) => (
                  <span key={i} className="text-[11px] font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OCHA Submission highlight */}
      <section className="bg-slate-900 text-white rounded-3xl p-10">
        <div className="flex items-start gap-5">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
            <ExternalLink size={20} className="text-amber-400" />
          </div>
          <div>
            <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">International Submission · GGPA/ASG/2026-VAL</span>
            <h3 className="text-2xl font-bold font-serif mt-1 mb-3">UN OCHA — The OCHA Governance Stack</h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
              GGPA's Proprietary Technical Proposal integrating the IIGRA Diagnostic Engine, Shadow-Role Operational Model, and Zero-Latency Tracking Protocol was formally submitted to UN OCHA under Reference <strong className="text-white">OCHA/NV/44/2026</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <PageDocs category="Diplomatic Engagement" heading="Diplomatic Engagement Publications" />
      </section>
    </div>
  </div>
);

export default DiplomaticEngagement;
