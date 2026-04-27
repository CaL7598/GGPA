import React from 'react';
import { Scale, CheckCircle, Shield } from 'lucide-react';
import PageDocs from '../components/PageDocs';

const matrix = [
  { domain: 'Board Governance', domestic: 'Companies Act 2019 (Act 992)', international: 'Commonwealth Governance Framework', status: 'HARMONISED' },
  { domain: 'Financial Management', domestic: 'IPSAS · Public Financial Management Act (Act 921)', international: 'IFRS · OECD DAC Standards', status: 'HARMONISED' },
  { domain: 'Anti-Corruption', domestic: 'CHRAJ Act (Act 456) · EOCO Act (Act 804)', international: 'UNCAC · AU Malabo Convention', status: 'HARMONISED' },
  { domain: 'Procurement', domestic: 'Public Procurement Act (Act 663/914)', international: 'World Bank Procurement Guidelines', status: 'HARMONISED' },
  { domain: 'Data Protection', domestic: 'Data Protection Act 2012 (Act 843)', international: 'EU GDPR · AU Malabo Convention', status: 'HARMONISED' },
  { domain: 'Youth Participation', domestic: "Local Governance Act (Act 936)", international: 'UNSCR 2250 · AU Youth Charter', status: 'HARMONISED' },
  { domain: 'Employment', domestic: 'Labour Act (Act 651)', international: 'ILO Core Labour Standards', status: 'HARMONISED' },
];

const checklist = [
  'Annual Returns — filed with Registrar-General\'s Department',
  'Audited Financial Statements — ICAG-registered auditor',
  'Accounting Records — IPSAS-compliant double-entry',
  'Board Minutes — all decisions formally recorded',
  'COI Declarations — annual conflict of interest disclosures',
  'Registered Name on Documents — all official communications',
  'Board Composition Requirements — minimum 5 directors, 40% female quota',
];

const LegalCompliance: React.FC = () => (
  <div className="min-h-screen bg-slate-50">
    <section className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-end pr-20">
        <Scale size={400} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-amber-500/30">
          GGPA-COMP-2026 · Legal & Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6 max-w-3xl">
          Legal & Compliance
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          GGPA's statutory and regulatory compliance record — showing both domestic Ghanaian law compliance and international governance framework alignment simultaneously, for verification by the Registrar-General's Department, donors, UN bodies, and Commonwealth Foundation grant officers.
        </p>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">

      {/* Act 992 Checklist */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
            <CheckCircle size={20} className="text-green-600" />
          </div>
          <div>
            <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest">GGPA-COMP-2026-A992</p>
            <h2 className="text-2xl font-bold font-serif text-slate-900">Act 992 Audit Readiness — Seven-Item Checklist</h2>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-8">
          <p className="text-sm text-slate-500 mb-6">
            Registered under Companies Act 2019 (Act 992) · Registrar-General's Department, Ghana. All seven annual compliance requirements are actively maintained.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {checklist.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-green-50 border border-green-100 rounded-xl">
                <CheckCircle size={15} className="text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Harmonisation Matrix */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Shield size={20} className="text-amber-600" />
          </div>
          <div>
            <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest">GGPA-COMP-2026-LH04</p>
            <h2 className="text-2xl font-bold font-serif text-slate-900">Living Legal Harmonisation Matrix</h2>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest">Policy Domain</th>
                <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest">Domestic Framework</th>
                <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest">International Framework</th>
                <th className="text-center px-6 py-4 text-xs font-bold uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {matrix.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-sm text-slate-900">{row.domain}</td>
                  <td className="px-6 py-4 text-xs text-slate-600">{row.domestic}</td>
                  <td className="px-6 py-4 text-xs text-slate-600">{row.international}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-[10px] font-black rounded-full">{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <PageDocs category="Legal & Compliance" heading="Legal & Compliance Documents" />
      </section>
    </div>
  </div>
);

export default LegalCompliance;
