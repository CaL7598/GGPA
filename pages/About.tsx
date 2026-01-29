import React from 'react';
import { Shield, Users, BookOpen, Award, Briefcase, GraduationCap, Globe, FileText, Target, Eye, Scale } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import founderImage from '../assets/founder/WhatsApp Image 2026-01-29 at 09.51.13.jpeg';
import legalImage from '../assets/images/supreme_court.jpeg';
import diplomatImage from '../assets/images/au-summit-in-addis-ababa-2-scaled.jpg';
import researchImage from '../assets/images/20251003_hq-drone-photos_0006.webp';
import youthLegalImage from '../assets/images/SUPREME-COURT-2-233LEGAL-1.webp';
import youthEconomicImage from '../assets/images/flickr_24757651797_bfa40e7b50_k_GovernmentZA-e1539695449767.jpg';
import youthTechImage from '../assets/images/395b735280084368b715bf3edf7fdfdf.png';

const About: React.FC = () => {
  const { state } = useContent();

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 lg:py-24 mb-12 sm:mb-16 lg:mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 sm:p-12 lg:p-20 text-white/5 pointer-events-none">
          <Shield size={200} className="sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4 sm:mb-6 lg:mb-8">The Secretariat</h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
              Governance Structure, Act 992 Compliance, and Institutional Transparency. A world-class technical alliance architecting the future of global governance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Executive Council */}
        <section className="mb-12 sm:mb-16 lg:mb-24">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-3 sm:mb-4">The Executive Council</h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
              The leadership structure ensuring Act 992 compliance, diplomatic excellence, and research integrity.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-8 shadow-sm border border-slate-100 overflow-hidden group">
              <div className="relative -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-4 sm:mb-6 h-40 sm:h-48 overflow-hidden">
                <img 
                  src={legalImage}
                  alt="The Registrar"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="bg-slate-900 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-4 sm:mb-6">
                <FileText className="text-amber-400 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif mb-2 sm:mb-3">The Registrar</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Responsible for Act 992 compliance and legal filings. Ensures all institutional operations meet the highest standards of transparency and regulatory adherence.
              </p>
            </div>
            <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-8 shadow-sm border border-slate-100 overflow-hidden group">
              <div className="relative -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-4 sm:mb-6 h-40 sm:h-48 overflow-hidden">
                <img 
                  src={diplomatImage}
                  alt="Chief of Protocols"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="bg-slate-900 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-4 sm:mb-6">
                <Globe className="text-amber-400 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif mb-2 sm:mb-3">Chief of Protocols</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Managing diplomatic relations with the AU and Commonwealth. Coordinates multi-lateral engagements and ensures protocol excellence.
              </p>
            </div>
            <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-8 shadow-sm border border-slate-100 overflow-hidden group sm:col-span-2 lg:col-span-1">
              <div className="relative -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-4 sm:mb-6 h-40 sm:h-48 overflow-hidden">
                <img 
                  src={researchImage}
                  alt="Director of Research"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="bg-slate-900 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-4 sm:mb-6">
                <BookOpen className="text-amber-400 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif mb-2 sm:mb-3">Director of Research</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Oversight of the Governance Index data. Leads research initiatives and maintains the scientific rigor of our 5,000-page framework.
              </p>
            </div>
          </div>
        </section>

        {/* YAC Leads */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">The Youth Advisory Corps (YAC) Leads</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Profiles of the Lead Fellows (PhD/LLB candidates) heading the three main tracks.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 overflow-hidden group">
              <div className="relative -mx-8 -mt-8 mb-6 h-40 overflow-hidden">
                <img 
                  src={youthLegalImage}
                  alt="Legal Harmony Track"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-amber-100 p-3 rounded-xl">
                  <Shield className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif">Legal Harmony Track</h3>
                  <p className="text-sm text-slate-500">Lead Fellow (LLB/PhD)</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Specializing in international legal frameworks, treaty negotiation, and Act 992 compliance. Leading the development of Volumes I-VIII of the Compendium.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 overflow-hidden group">
              <div className="relative -mx-8 -mt-8 mb-6 h-40 overflow-hidden">
                <img 
                  src={youthEconomicImage}
                  alt="Economic Integrity Track"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-amber-100 p-3 rounded-xl">
                  <Briefcase className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif">Economic Integrity Track</h3>
                  <p className="text-sm text-slate-500">Lead Fellow (PhD)</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Expert in IPSAS/IFRS standards, fiduciary transparency, and economic governance. Overseeing the technical frameworks for financial accountability.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 overflow-hidden group">
              <div className="relative -mx-8 -mt-8 mb-6 h-40 overflow-hidden">
                <img 
                  src={youthTechImage}
                  alt="Digital Sovereignty Track"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-amber-100 p-3 rounded-xl">
                  <Award className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif">Digital Sovereignty Track</h3>
                  <p className="text-sm text-slate-500">Lead Fellow (PhD)</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Leading e-governance architecture, data ethics (Act 843), and cyber sovereignty initiatives. Architecting the digital infrastructure for transparent governance.
              </p>
            </div>
          </div>
        </section>

        {/* Competitive Advantage */}
        <section className="mb-12 sm:mb-16 lg:mb-24">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-3 sm:mb-4">THE GGPA "COMPETITIVE ADVANTAGE"</h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
              What sets us apart in the governance landscape
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <div className="bg-amber-100 p-4 sm:p-5 rounded-xl sm:rounded-2xl w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center mb-4 sm:mb-6">
                <Users className="text-amber-600 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif mb-3 sm:mb-4">In-Situ Fellowships</h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlike other NGOs, GGPA embeds "Youth Governance Fellows" directly inside government Ministries (MDAs) to provide technical support.
              </p>
            </div>
            <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <div className="bg-amber-100 p-4 sm:p-5 rounded-xl sm:rounded-2xl w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center mb-4 sm:mb-6">
                <Eye className="text-amber-600 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif mb-3 sm:mb-4">De Facto Monitoring</h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We measure governance not by the laws on paper, but by the actual experience of citizens and youth on the ground.
              </p>
            </div>
            <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <div className="bg-amber-100 p-4 sm:p-5 rounded-xl sm:rounded-2xl w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center mb-4 sm:mb-6">
                <Scale className="text-amber-600 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif mb-3 sm:mb-4">Legal Transparency</h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We are registered under the Ghana Companies Act, 2019 (Act 992) and maintain a "Public Disclosure" policy regarding our board and senior management remuneration.
              </p>
            </div>
          </div>
        </section>

        {/* Act 992 Compliance */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-12 lg:p-20">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="mx-auto mb-6 text-amber-400" size={48} />
            <h2 className="text-4xl font-bold font-serif mb-6">Act 992 Compliance</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              GGPA is a registered entity under the Ghana Companies Act, 2019 (Act 992). Our operations are fully compliant with all statutory requirements, ensuring complete transparency and legal adherence.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="font-bold mb-2">IPSAS Compliant</h4>
                <p className="text-sm text-slate-300">100% adherence to International Public Sector Accounting Standards</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="font-bold mb-2">GDPR Compliant</h4>
                <p className="text-sm text-slate-300">Full data protection and privacy compliance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="font-bold mb-2">Act 992 Registered</h4>
                <p className="text-sm text-slate-300">Legally registered under Ghana Companies Act, 2019</p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Profile */}
        <section className="mb-12 sm:mb-16 lg:mb-24">
          <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 lg:p-12 xl:p-20 shadow-sm border border-slate-100">
            <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-1">
                <img 
                  src={founderImage} 
                  alt={state.founder.name}
                  className="w-full rounded-2xl sm:rounded-3xl shadow-xl mb-4 sm:mb-6 object-cover"
                />
                <div className="text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif mb-2">{state.founder.name}</h3>
                  <p className="text-sm sm:text-base text-slate-600 font-medium mb-3 sm:mb-4">{state.founder.title}</p>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    <span className="px-2 sm:px-3 py-1 bg-amber-50 text-amber-700 rounded-lg text-[10px] sm:text-xs font-bold">Founder & CEO</span>
                    <span className="px-2 sm:px-3 py-1 bg-amber-50 text-amber-700 rounded-lg text-[10px] sm:text-xs font-bold">Commonwealth DSG Nominee</span>
                    <span className="px-2 sm:px-3 py-1 bg-amber-50 text-amber-700 rounded-lg text-[10px] sm:text-xs font-bold">Researcher (IR)</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="text-amber-600 font-bold text-sm tracking-widest uppercase mb-4">Professional Overview</h4>
                  <p className="text-slate-700 leading-relaxed">
                    As the Founder and CEO, David serves as the primary link between the Board of Directors and the Management Team. He is responsible for translating the GGPA's high-level Strategic Plan into actionable operational results that drive global impact. Under his leadership, the organization bridges the gap between visionary policy and on-the-ground administrative execution.
                  </p>
                </div>
                <div>
                  <h4 className="text-amber-600 font-bold text-sm tracking-widest uppercase mb-4">International Diplomatic Standing</h4>
                  <p className="text-slate-700 leading-relaxed">
                    David is recognized as an authoritative voice in international politics. His global standing is evidenced by his nomination by the Ghanaian Ministry of Foreign Affairs for the position of Deputy Secretary-General (Programme) of the Commonwealth Secretariat in London. This nomination reflects his unique ability to navigate complex diplomatic corridors and manage multi-lateral relations at the highest levels of global governance.
                  </p>
                </div>
                <div>
                  <h4 className="text-amber-600 font-bold text-sm tracking-widest uppercase mb-4">Research & Academic Rigor</h4>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <GraduationCap className="text-amber-600 shrink-0 mt-1" size={20} />
                      <div>
                        <strong>Researcher (International Relations):</strong> His ongoing research focuses on geopolitics and public policy, providing a scientific, evidence-based foundation for GGPA's policy frameworks.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="text-amber-600 shrink-0 mt-1" size={20} />
                      <div>
                        <strong>Legal Expertise:</strong> David holds a Bachelor of Laws (LLB), empowering him with deep knowledge of international legal frameworks, statutory compliance, and human rights standards.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="text-amber-600 shrink-0 mt-1" size={20} />
                      <div>
                        <strong>Global Policy Contributions:</strong> He provided strategic input and research to the UN Special Rapporteur's 2025 thematic report for the UN General Assembly, specifically regarding the concentration of corporate power in food systems and its impact on human rights.
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-amber-600 font-bold text-sm tracking-widest uppercase mb-4">Institutional Leadership</h4>
                  <ul className="space-y-3 text-slate-700">
                    <li><strong>Assistant Registrar (UENR):</strong> At the University of Energy and Natural Resources (UENR) in Ghana, David has led internationalization efforts, the modernization of institutional policy, and technical capacity building for student leaders.</li>
                    <li><strong>Erasmus+ Mobility Manager:</strong> He manages international credit mobility and faculty exchanges with European partner universities, fostering intercultural skills and global academic networking between Africa and the EU.</li>
                    <li><strong>Youth Advocate:</strong> He has pioneered the "Critical Youth Mandate" within the GGPA, ensuring that young people are not just observers but direct contributors to national and global policy-making through functional authority.</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                  <h4 className="text-amber-900 font-bold text-sm tracking-widest uppercase mb-2">The Decade Vision</h4>
                  <p className="text-amber-800 leading-relaxed">
                    David has positioned the GGPA as a vital partner for the African Union (AU) and The Commonwealth. His vision for the next decade is to establish the GGPA as the leading African-based, globally aligned institution that empowers the rising generation to lead with integrity, transparency, and scientific precision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
