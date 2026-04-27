import React from 'react';
import { Globe, MessageSquare, FileText, Users, BookOpen } from 'lucide-react';
import PageDocs from '../components/PageDocs';

const briefs = [
  {
    code: 'GGPA-DIP-2026-NV01',
    title: 'Note Verbale Standards',
    desc: 'Standardising Official Diplomatic Notes for GGPA Institutional Communications. The same correspondence format used between sovereign states — adopted by GGPA for all formal communications with government ministries, international organisations, and statutory bodies.',
    icon: <FileText size={20} />,
    elements: ['Formal Header', 'Third-Person Convention', 'Opening Formula', 'Closing Formula', 'Date Format', 'Reference Numbering', 'Classification Requirements'],
  },
  {
    code: 'GGPA-DIP-2026-TN02',
    title: 'Treaty Negotiation Protocol Brief',
    desc: "Defining GGPA's Technical Stance on Treaty, MOU, and Formal Agreement Participation — with the GGPA Sovereignty Guarantee.",
    icon: <BookOpen size={20} />,
    elements: ['LOI — 5 days', 'MOU — 15 days', 'MOA — 21 days', 'Framework Agreement — 30 days', 'Sovereignty Guarantee'],
  },
  {
    code: 'GGPA-DIP-2026-AU03',
    title: 'AU Liaison Protocol Brief',
    desc: 'Procedures for Formal Engagement with African Union Commissions and Bodies. GGPA engages the AU as a governance intelligence provider, not an advocacy petitioner.',
    icon: <Globe size={20} />,
    elements: ['AU Advisory Board on Corruption', 'AU Youth Division (DCYP)', 'African Governance Architecture (AGA)', 'African Peer Review Mechanism (APRM)', 'AU Commission Political Affairs Directorate'],
  },
  {
    code: 'GGPA-DIP-2026-CW04',
    title: 'Commonwealth Diplomacy Protocol Brief',
    desc: 'Formal Standards for Engagement with Commonwealth Secretariat and Member State Bodies.',
    icon: <Users size={20} />,
    elements: ['Commonwealth Secretariat Governance & Peace Directorate', 'Commonwealth Youth Programme', 'Commonwealth Local Government Forum', 'Commonwealth Human Rights Initiative', 'Commonwealth Foundation'],
  },
  {
    code: 'GGPA-DIP-2026-DC05',
    title: 'Diplomatic Circular Protocol Brief',
    desc: 'Standards for Internal and External Policy Update Communications. Four-Class Circular System for all GGPA institutional communications.',
    icon: <MessageSquare size={20} />,
    elements: ['Internal Policy Circular (GGPA/IPC/)', 'Partner Notification Circular (GGPA/PNC/)', 'Governance Intelligence Circular (GGPA/GIC/)', 'Diplomatic Circular External (GGPA/DPC/)'],
  },
];

const DiplomacySuite: React.FC = () => (
  <div className="min-h-screen bg-slate-50">
    <section className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-amber-500/30">
          Technical Core · Diplomacy Suite
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6 max-w-3xl">
          Diplomacy Suite
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          Five GGPA-DIP Technical Briefs governing GGPA's formal diplomatic engagement with the African Union, ECOWAS, the Commonwealth, and UN bodies — signalling intergovernmental credibility to multilateral partners.
        </p>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
      <div className="grid gap-6">
        {briefs.map(b => (
          <div key={b.code} className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-md hover:border-amber-300 transition-all">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">{b.icon}</div>
              <div className="flex-grow min-w-0">
                <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">{b.code}</span>
                <h3 className="text-xl font-bold font-serif text-slate-900 mt-1 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{b.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {b.elements.map((el, i) => (
                    <span key={i} className="text-[11px] font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">{el}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section>
        <PageDocs category="Diplomacy Suite" heading="Diplomacy Suite Documents" />
      </section>
    </div>
  </div>
);

export default DiplomacySuite;
