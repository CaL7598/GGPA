import React from 'react';
import { GraduationCap, Shield, ClipboardList, Wifi, Users, Star } from 'lucide-react';
import PageDocs from '../components/PageDocs';

const briefs = [
  {
    code: 'GGPA-TECH-2026-T01',
    title: 'Fellowship Curriculum & Elite Training Framework',
    desc: '12-Week Intensive Governance Diagnostics, Policy Drafting & Anti-Corruption Audit Training. Deployment-Ready Designation requires 72% aggregate and 75% Capstone score.',
    icon: <GraduationCap size={20} />,
    tags: ['12-Week Curriculum', 'Governance Diagnostics', 'Policy Drafting', 'Anti-Corruption Audit', 'Deployment-Ready Designation'],
  },
  {
    code: 'GGPA-TECH-2026-T02',
    title: 'Internal Knowledge Transfer & Induction Protocol',
    desc: 'Socialising GGPA Fellows into Radical Transparency and Functional Authority Culture. Four-Phase Induction Architecture.',
    icon: <Star size={20} />,
    tags: ['Institutional Identity', 'Operational Systems', 'Standards Immersion', 'Role Integration'],
  },
  {
    code: 'GGPA-TECH-2026-T03',
    title: 'Senior-to-Junior Peer Review Cycle',
    desc: 'Mentorship Architecture for Quality Assurance Across All GGPA Outputs. Five-Stage Review Cycle with Quality Assessment Rubric scored 1–5, minimum 20/25 for Sign-Off.',
    icon: <Users size={20} />,
    tags: ['Compendium Grounding', 'Evidence Sufficiency', 'Logical Coherence', 'Language Precision', 'Freedom from Advocacy Bias'],
  },
  {
    code: 'GGPA-TECH-2026-P03',
    title: 'Audit-Ready Procurement Process Map',
    desc: 'GGPA Standardised Workflow for Institutions Preparing for IIGRA Procurement Compliance Review. Implement before you apply — reduce your average Pillar 4 gap score by 40%.',
    icon: <ClipboardList size={20} />,
    tags: ['Needs Assessment', 'Tender Publication', 'Bid Evaluation', 'Contract Award', 'Contract Management', 'Payment Recording', 'Post-Procurement Audit Trail'],
  },
  {
    code: 'GGPA-TECH-2026-S04',
    title: 'Governance of Digital Assets & Cyber Sovereignty Framework',
    desc: 'Protocols for Institutional Data Sovereignty, Digital Governance, and E-Procurement Security. Grounded in Ghana Data Protection Act 2012 (Act 843), AU Malabo Convention, and EU GDPR.',
    icon: <Wifi size={20} />,
    tags: ['Vendor Due Diligence', 'Data Sovereignty Mapping', 'Access Control Architecture (RBAC)', 'Digital Procurement Governance', 'Incident Response & Reporting'],
  },
  {
    code: 'GGPA-TECH-2026-L02',
    title: 'YAC Engagement Matrix & Tier Progression Framework',
    desc: 'Youth Advisory Council Technical Requirements. Observer to Technical Auditor. Four-Tier Architecture with entry requirements, advancement criteria, and governance responsibilities.',
    icon: <Shield size={20} />,
    tags: ['Tier I: Observer', 'Tier II: Policy Analyst', 'Tier III: Governance Specialist', 'Tier IV: Technical Auditor'],
  },
];

const TechnicalSuite: React.FC = () => (
  <div className="min-h-screen bg-slate-50">
    <section className="bg-slate-900 text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-amber-500/30">
          Technical Core · Technical Suite
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6 max-w-3xl">
          Technical Suite
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          Six GGPA-TECH Technical Briefs covering training and induction, peer review quality assurance, procurement governance, cyber sovereignty, and youth advisory council engagement — the operational standards that govern how GGPA works.
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
                  {b.tags.map((t, i) => (
                    <span key={i} className="text-[11px] font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section>
        <PageDocs category="Technical Suite" heading="Technical Suite Documents" />
      </section>
    </div>
  </div>
);

export default TechnicalSuite;
