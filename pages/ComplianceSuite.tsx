import React from 'react';
import { ShieldCheck, Scale, FileCheck, Gavel, BookOpen } from 'lucide-react';
import PageDocs from '../components/PageDocs';

const briefs = [
  {
    code: 'GGPA-COMP-2026-A992',
    title: 'Act 992 Compliance Standard',
    subtitle: "GGPA's Interpretation and Implementation of Ghana Companies Act, 2019",
    icon: <Gavel size={20} />,
    points: ['Annual Returns filing', 'Audited Financial Statements', 'Board Minutes documentation', 'COI Declarations', 'Board Composition Requirements'],
  },
  {
    code: 'GGPA-COMP-2026-AT02',
    title: 'Audit Trail Standard',
    subtitle: 'Seven-Domain Architecture for Systematic Logging of All Institutional Activities',
    icon: <FileCheck size={20} />,
    points: ['Financial Transactions (7-year retention)', 'Board Decisions (Permanent)', 'Procurement Events (7 years)', 'IIGRA Assessments (10 years)', 'Diplomatic Communications (10 years)'],
  },
  {
    code: 'GGPA-COMP-2026-BG03',
    title: 'Board Governance Standard',
    subtitle: 'Standards for Executive Oversight, Board Accountability, and Institutional Integrity',
    icon: <ShieldCheck size={20} />,
    points: ['Minimum 5 directors', '40% female quota', 'Youth representation', 'AGM requirements', 'Executive Director accountability mechanisms'],
  },
  {
    code: 'GGPA-COMP-2026-FID01',
    title: 'Fiduciary Responsibility Standard',
    subtitle: "Defining the Legal Duty to Protect GGPA's Assets, Resources, and Institutional Trust",
    icon: <Scale size={20} />,
    points: ['Duty of Loyalty', 'Duty of Care', 'Duty of Prudence', 'Duty of Obedience', 'Duty of Transparency'],
  },
  {
    code: 'GGPA-COMP-2026-LH04',
    title: 'Legal Harmonisation Standard',
    subtitle: 'Aligning GGPA Policies with Ghanaian Law and International Governance Frameworks',
    icon: <BookOpen size={20} />,
    points: ['Board Governance — HARMONISED', 'Financial Management — HARMONISED', 'Anti-Corruption — HARMONISED', 'Procurement — HARMONISED', 'Data Protection — HARMONISED', 'Youth Participation — HARMONISED', 'Employment — HARMONISED'],
  },
];

const ComplianceSuite: React.FC = () => (
  <div className="min-h-screen bg-slate-50">
    <section className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-amber-500/30">
          Technical Core · Compliance Suite
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6 max-w-3xl">
          Compliance Suite
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          Five GGPA-COMP Technical Briefs governing GGPA's internal legal and institutional compliance. Every brief carries a Zenodo DOI and is publicly verifiable by donors, regulatory bodies, and Commonwealth officers.
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
                <h3 className="text-xl font-bold font-serif text-slate-900 mt-1 mb-1">{b.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{b.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {b.points.map((pt, i) => (
                    <span key={i} className="text-[11px] font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">{pt}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section>
        <PageDocs category="Compliance Suite" heading="Compliance Suite Documents" />
      </section>
    </div>
  </div>
);

export default ComplianceSuite;
