import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, FileText, CheckCircle, ArrowRight, Lock, BookOpen, Target } from 'lucide-react';
import teamImage from '../assets/images/meeting-at-ecowas-wahpscon.jpg';
import legalTrackImage from '../assets/images/supreme_court.jpeg';
import economicTrackImage from '../assets/images/flickr_24757651797_bfa40e7b50_k_GovernmentZA-e1539695449767.jpg';
import techTrackImage from '../assets/images/395b735280084368b715bf3edf7fdfdf.png';

const Fellowship: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  const tracks = [
    {
      id: 'track-a',
      name: 'Track A: Legal & Diplomatic Affairs',
      description: 'For those specializing in international law, treaty negotiation, and diplomatic protocol. This track prepares fellows to serve as technical advisors in ministries of foreign affairs and multilateral institutions.',
      requirements: ['LLB or equivalent', 'Experience in legal research', 'Interest in diplomatic affairs'],
      outcomes: ['Mastery of Note Verbale drafting', 'Treaty negotiation skills', 'International protocol expertise']
    },
    {
      id: 'track-b',
      name: 'Track B: Economic Governance (IPSAS/IFRS)',
      description: 'Designed for professionals focused on financial transparency, fiduciary responsibility, and economic policy. Ideal for accountants, auditors, and economic policy analysts.',
      requirements: ['Accounting or Economics background', 'Familiarity with IPSAS/IFRS', 'Analytical skills'],
      outcomes: ['IPSAS compliance expertise', 'Fiduciary framework mastery', 'Economic policy analysis']
    },
    {
      id: 'track-c',
      name: 'Track C: Digital Sovereignty & E-Governance',
      description: 'For technologists and policy experts working at the intersection of digital transformation and governance. This track addresses cyber sovereignty, data ethics, and e-governance architecture.',
      requirements: ['Technical or policy background', 'Interest in digital transformation', 'Understanding of data ethics'],
      outcomes: ['E-governance architecture skills', 'Data ethics (Act 843) expertise', 'Digital audit capabilities']
    }
  ];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 lg:py-24 mb-12 sm:mb-16 lg:mb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={teamImage}
            alt="African professionals"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 p-8 sm:p-12 lg:p-20 text-white/5 pointer-events-none z-0">
          <Users size={200} className="sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-4 sm:mb-6 border border-amber-500/20">
              The Youth Advisory Corps
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4 sm:mb-6 lg:mb-8">Join the Technical Elite</h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed mb-4 sm:mb-6">
              We don't seek activists; we seek Experts. Architects of Integrity. The Youth Advisory Corps (YAC) is the gateway to functional authority in global governance.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-500 border-2 border-slate-900 flex items-center justify-center text-[10px] sm:text-xs font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-slate-300 text-xs sm:text-sm">120+ Active Fellows</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The Mandate */}
        <section className="mb-12 sm:mb-16 lg:mb-24">
          <div className="bg-gradient-to-br from-amber-50 to-slate-50 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 lg:p-12 xl:p-20">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="mx-auto mb-4 sm:mb-6 text-amber-600 w-10 h-10 sm:w-12 sm:h-12" />
              <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4 sm:mb-6">The Mandate</h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed mb-6 sm:mb-8 px-4">
                "We don't seek activists; we seek Experts. Architects of Integrity. Functional Authority means that when a youth leader enters a Ministry, they aren't there to protest—they are there to audit, to digitize, and to implement IPSAS-compliant frameworks."
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <Target className="text-amber-600 mx-auto mb-4" size={32} />
                  <h3 className="font-bold mb-2">Technical Excellence</h3>
                  <p className="text-sm text-slate-600">Master the frameworks that drive institutional transformation</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <Award className="text-amber-600 mx-auto mb-4" size={32} />
                  <h3 className="font-bold mb-2">Global Network</h3>
                  <p className="text-sm text-slate-600">Connect with leaders across AU and Commonwealth nations</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <BookOpen className="text-amber-600 mx-auto mb-4" size={32} />
                  <h3 className="font-bold mb-2">5,000-Page Repository</h3>
                  <p className="text-sm text-slate-600">Access to the complete GGPA Compendium</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Tiers */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">Application Tiers</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose your specialization track. Each track provides specialized training and access to relevant volumes of the Compendium.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {tracks.map((track, index) => {
              const trackImages = [legalTrackImage, economicTrackImage, techTrackImage];
              return (
              <div 
                key={track.id}
                className={`bg-white rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-8 shadow-sm border-2 transition-all cursor-pointer overflow-hidden ${
                  selectedTrack === track.id 
                    ? 'border-amber-500 shadow-xl' 
                    : 'border-slate-100 hover:border-amber-200'
                }`}
                onClick={() => setSelectedTrack(selectedTrack === track.id ? null : track.id)}
              >
                <div className="relative -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-4 sm:mb-6 h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={trackImages[index]}
                    alt={track.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-slate-900 p-3 rounded-xl">
                    <FileText className="text-amber-400" size={24} />
                  </div>
                  {selectedTrack === track.id && (
                    <CheckCircle className="text-amber-500" size={24} />
                  )}
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4">{track.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{track.description}</p>
                
                {selectedTrack === track.id && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wider">Requirements</h4>
                      <ul className="space-y-2">
                        {track.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wider">Learning Outcomes</h4>
                      <ul className="space-y-2">
                        {track.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <ArrowRight className="text-amber-500 shrink-0 mt-0.5" size={16} />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="w-full mt-6 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
                      Apply for {track.name.split(':')[0]}
                    </button>
                  </div>
                )}
              </div>
              );
            })}
          </div>
        </section>

        {/* The Induction Process */}
        <section className="mb-24">
          <div className="bg-slate-900 text-white rounded-[3rem] p-12 lg:p-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Lock className="mx-auto mb-6 text-amber-400" size={48} />
                <h2 className="text-4xl font-bold font-serif mb-4">The Induction Process</h2>
                <p className="text-xl text-slate-300">
                  A rigorous vetting process ensuring only the most qualified candidates join the Technical Elite.
                </p>
              </div>
              <div className="space-y-8">
                {[
                  {
                    step: '01',
                    title: 'Application Review',
                    description: 'Initial screening of qualifications, background, and alignment with GGPA values. Applications are reviewed by the Executive Council.'
                  },
                  {
                    step: '02',
                    title: 'NDA & Confidentiality Briefing',
                    description: 'All candidates must sign a Non-Disclosure Agreement and undergo a comprehensive briefing on the sensitive nature of our work and the 5,000-page repository.'
                  },
                  {
                    step: '03',
                    title: 'Technical Assessment',
                    description: 'Candidates undergo a technical assessment relevant to their chosen track, demonstrating proficiency in their area of specialization.'
                  },
                  {
                    step: '04',
                    title: 'Vetting Process',
                    description: 'Comprehensive background check and reference verification. This includes academic credentials, professional experience, and character references.'
                  },
                  {
                    step: '05',
                    title: 'In-Situ Audit Training',
                    description: 'Selected candidates participate in hands-on "In-Situ" audit training, learning to apply the GGPA Logic Model Framework in real-world scenarios.'
                  },
                  {
                    step: '06',
                    title: 'Induction Ceremony',
                    description: 'Formal induction into the Youth Advisory Corps with access to the full Compendium, Knowledge Exchange Forum, and ongoing mentorship.'
                  }
                ].map((phase) => (
                  <div key={phase.step} className="flex gap-6 items-start">
                    <div className="bg-amber-500 text-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl shrink-0">
                      {phase.step}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold font-serif mb-3">{phase.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-amber-50 to-slate-50 rounded-[3rem] p-12 lg:p-20">
            <h2 className="text-4xl font-bold font-serif mb-6">Ready to Become an Architect of Integrity?</h2>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
              Join 120+ Technical Fellows from AU and Commonwealth nations. Apply now to begin your journey toward functional authority.
            </p>
            <Link 
              to="/application"
              className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center gap-3 mx-auto"
            >
              Start Your Application
              <ArrowRight size={24} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Fellowship;
