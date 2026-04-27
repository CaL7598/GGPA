import React from 'react';
import { Shield, AlertTriangle, Phone, Mail, Lock, CheckCircle } from 'lucide-react';
import PageDocs from '../components/PageDocs';

const reportingChannels = [
  { icon: <Mail size={20} />, label: 'PSEA Focal Point', contact: 'designated.psea@ggpa.global', note: 'Primary reporting channel for all safeguarding concerns' },
  { icon: <Shield size={20} />, label: 'Board Chairperson', contact: 'Direct — contact via secretariat', note: 'For concerns involving senior staff or the Focal Point' },
  { icon: <Phone size={20} />, label: 'CHRAJ', contact: '+233 302 668 839', note: 'Commission on Human Rights and Administrative Justice' },
  { icon: <Lock size={20} />, label: 'Anonymous', contact: 'Sealed envelope to Board Chairperson', note: 'Identity-protected reporting option — always available' },
];

const controls = [
  'Dual authorisation required for all financial transactions above threshold',
  'Competitive tendering mandatory for all procurement',
  'Donor fund ring-fencing — programme funds cannot cross-subsidise operations',
  'ICAG-registered independent auditor for annual financial statements',
  'Board Ethics Committee of 3 members, including one external ethics practitioner',
  'Board Ethics Committee reports to Board — not to Executive Director',
];

const sanctions = [
  { level: 'Level 1', title: 'Formal Warning & Mandatory Training', desc: 'First-time, lower-severity violations with acknowledgement of responsibility.' },
  { level: 'Level 2', title: 'Suspension & Investigation', desc: 'Serious violations, repeat offences, or failure to cooperate with investigation.' },
  { level: 'Level 3', title: 'Termination & Referral', desc: 'Criminal referral to CHRAJ, EOCO, or Ghana Police Service. Permanent exclusion from GGPA activities.' },
];

const Safeguarding: React.FC = () => (
  <div className="min-h-screen bg-slate-50">
    {/* Hero */}
    <section className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="inline-block px-4 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-red-500/30">
          GGPA-ETH-2026-SE12 · Classification: Public — Zero Restriction
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6 max-w-3xl">
          Safeguarding & Ethics
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          GGPA operates a zero-tolerance policy on sexual exploitation and abuse, corruption, and retaliation against whistleblowers. This page is classified Public — Zero Restriction — no download barrier.
        </p>
      </div>
    </section>

    {/* Zero Tolerance Declaration */}
    <div className="bg-red-600 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex items-center gap-5">
        <AlertTriangle size={28} className="shrink-0" />
        <div>
          <p className="font-black text-lg">ZERO TOLERANCE DECLARATION</p>
          <p className="text-red-200 text-sm mt-1">
            GGPA maintains zero tolerance for sexual exploitation and abuse, bribery, fraud, corruption, and retaliation against anyone reporting a concern. This is non-negotiable and applies to all staff, fellows, board members, and partners without exception.
          </p>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">

      {/* Reporting channels */}
      <section>
        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-3">Four PSEA Reporting Channels</h2>
        <p className="text-slate-500 mb-8">All reports are treated with confidentiality. Anonymous reporting is always available. Anti-Retaliation Guarantee is absolute — reporting a concern is protected conduct.</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {reportingChannels.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-red-200 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600">{c.icon}</div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{c.label}</p>
                  <p className="text-amber-700 font-bold text-xs">{c.contact}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500">{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investigation timeline */}
      <section className="bg-white rounded-3xl border border-slate-200 p-10">
        <h2 className="text-2xl font-bold font-serif text-slate-900 mb-2">Whistleblower Investigation Protocol</h2>
        <p className="text-slate-500 mb-6 text-sm">Seven-step process with 60-day maximum resolution timeline.</p>
        <div className="flex flex-wrap gap-3">
          {['Receipt & Acknowledgement', 'Preliminary Assessment', 'Investigation Panel Formation', 'Evidence Gathering', 'Panel Deliberation', 'Finding & Sanction', 'Resolution & Record'].map((step, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl">
              <span className="w-5 h-5 bg-amber-600 text-white text-[10px] font-black rounded-full flex items-center justify-center">{i + 1}</span>
              <span className="text-xs font-semibold text-slate-700">{step}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-4">Maximum resolution: 60 days from receipt of complaint.</p>
      </section>

      {/* Financial controls */}
      <section>
        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-6">Anti-Corruption Financial Controls Architecture</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {controls.map((c, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl">
              <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-slate-700">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Three-level sanctions */}
      <section>
        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-6">Three-Level Sanctions Framework</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {sanctions.map((s, i) => (
            <div key={i} className={`rounded-2xl border-2 p-6 ${i === 0 ? 'border-amber-200 bg-amber-50' : i === 1 ? 'border-orange-200 bg-orange-50' : 'border-red-200 bg-red-50'}`}>
              <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${i === 0 ? 'text-amber-600' : i === 1 ? 'text-orange-600' : 'text-red-600'}`}>{s.level}</p>
              <h3 className="font-bold font-serif text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Frameworks */}
      <section className="bg-slate-900 text-white rounded-3xl p-10">
        <h2 className="text-2xl font-bold font-serif mb-4">Grounded in International Standards</h2>
        <div className="flex flex-wrap gap-2">
          {["UN Secretary-General's Bulletin ST/SGB/2003/13", 'UNCAC', 'Ghana Act 651', 'Ghana Act 843', 'OECD DAC CSO Standards', 'Commonwealth Governance Framework', 'AU Convention on Preventing and Combating Corruption'].map(f => (
            <span key={f} className="px-3 py-1 bg-white/10 text-white/80 text-xs font-semibold rounded-full border border-white/20">{f}</span>
          ))}
        </div>
      </section>

      <section>
        <PageDocs category="Safeguarding & Ethics" heading="Safeguarding & Ethics Documents" />
      </section>
    </div>
  </div>
);

export default Safeguarding;
