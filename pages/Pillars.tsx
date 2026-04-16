import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GovernanceDashboard from '../components/GovernanceDashboard';
import { Shield, BarChart3, GraduationCap, ArrowRight, CheckCircle, Target, Globe, Award, Users, Lightbulb, Trophy, Calendar, Heart, Lock, ChevronDown, ChevronUp, Zap } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import forumImage from '../assets/images/au-summit-in-addis-ababa-2-scaled.jpg';
import fellowshipImage from '../assets/images/meeting-at-ecowas-wahpscon.jpg';
import innovationImage from '../assets/images/20251003_hq-drone-photos_0006.webp';
import awardImage from '../assets/images/flickr_24757651797_bfa40e7b50_k_GovernmentZA-e1539695449767.jpg';
import auditImage from '../assets/images/shutterstock_2487493763-1024x683.jpg';
import trainingImage from '../assets/images/0822POM.jpg';

const GlossaryTerm: React.FC<{ term: string; definition: string }> = ({ term, definition }) => (
  <span className="relative group inline-block">
    <span className="border-b-2 border-dotted border-amber-500 cursor-help text-amber-600 font-medium">{term}</span>
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-slate-900 text-white text-xs p-3 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
      <strong className="block mb-1 text-amber-400">{term}</strong>
      {definition}
      <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-slate-900" />
    </span>
  </span>
);

const Pillars: React.FC = () => {
  const { state } = useContent();
  const [showRoadmap, setShowRoadmap] = useState(false);

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 lg:py-24 mb-12 sm:mb-16 lg:mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 sm:p-12 lg:p-20 text-white/5 pointer-events-none">
          <Target size={200} className="sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4 sm:mb-6 lg:mb-8">Pillars of Impact</h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
              The "Action Tank" Services: Governance, Diplomacy, Research, Academy, Partnerships, and Humanitarian. Six strategic pillars driving institutional transformation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The Six Pillars Overview */}
        <section className="mb-12 sm:mb-16 lg:mb-24">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
            {[
              { name: 'Governance', icon: Shield, color: 'bg-slate-900' },
              { name: 'Diplomacy', icon: Globe, color: 'bg-amber-600' },
              { name: 'Research', icon: BarChart3, color: 'bg-slate-700' },
              { name: 'Academy', icon: GraduationCap, color: 'bg-amber-500' },
              { name: 'Partnerships', icon: Award, color: 'bg-slate-600' },
              { name: 'Humanitarian', icon: Heart, color: 'bg-teal-600' }
            ].map((pillar) => (
              <div key={pillar.name} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all">
                <div className={`${pillar.color} p-3 sm:p-4 rounded-lg sm:rounded-xl w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center`}>
                  <pillar.icon className="text-white w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-sm sm:text-base font-bold font-serif text-slate-900">{pillar.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* IIGRA Diagnostic */}
        <section className="mb-24">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <img 
                src={auditImage}
                alt="Institutional audit"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 right-0 p-12 text-white/5 z-0">
              <Shield size={200} />
            </div>
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-amber-500 p-4 rounded-2xl">
                  <Shield size={32} />
                </div>
                <div>
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Institutional Integrity Audit</span>
                  <h2 className="text-4xl font-bold font-serif mt-2">The IIGRA Diagnostic</h2>
                </div>
              </div>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Does your institution meet global standards? Book a GGPA Institutional Integrity & Governance Readiness Audit. Our comprehensive diagnostic evaluates your organization against international benchmarks including IPSAS, Act 992, and UN SDG 16 compliance.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  'IPSAS Compliance Assessment',
                  'Transparency Score Analysis',
                  'Administrative Velocity Metrics',
                  'Fiduciary Framework Review',
                  'Digital Governance Audit',
                  'Youth Technical Density Evaluation'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <CheckCircle className="text-amber-400 shrink-0" size={20} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-amber-500 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-amber-400 transition-all flex items-center gap-2">
                Request Audit
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Governance Index */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">The Governance Index</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real-time data on administrative velocity and transparency across the Commonwealth. View our dynamic dashboard tracking institutional integrity metrics.
            </p>
          </div>
          <GovernanceDashboard />
          <div className="text-center mt-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold"
            >
              View Full Dashboard
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Leadership Academy */}
        <section className="mb-24">
          <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-sm border border-slate-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-amber-100 p-4 rounded-2xl">
                    <GraduationCap className="text-amber-600" size={32} />
                  </div>
                  <div>
                    <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">Professional Certification</span>
                    <h2 className="text-4xl font-bold font-serif mt-2">The Leadership Academy</h2>
                  </div>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-8">
                  Certified training for the next generation of technical administrators. Our academy offers three professional certification tracks designed to build functional authority in governance, diplomacy, and digital transformation.
                </p>
                <div className="relative h-64 rounded-2xl overflow-hidden mb-8 lg:hidden">
                  <img 
                    src={trainingImage}
                    alt="Leadership Academy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Track 1: The Executive Diplomat',
                      description: 'Mastering the "Note Verbale," treaty negotiation, and international protocol.'
                    },
                    {
                      title: 'Track 2: The Digital Auditor',
                      description: 'Training in cyber-governance, data ethics (Act 843), and automated fiduciary reporting.'
                    },
                    {
                      title: 'Track 3: Public Sector RBM',
                      description: 'A deep dive into Results-Based Management for civil service directors.'
                    }
                  ].map((track) => (
                    <div key={track.title} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <h3 className="font-bold text-slate-900 mb-2">{track.title}</h3>
                      <p className="text-slate-600 text-sm">{track.description}</p>
                    </div>
                  ))}
                </div>
                <button className="mt-8 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
                  View Academy Programs
                  <ArrowRight size={20} />
                </button>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-slate-50 rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <img 
                    src={trainingImage}
                    alt="Leadership Academy"
                    className="w-full h-full object-cover hidden lg:block"
                  />
                </div>
                <div className="space-y-6 relative z-10">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-4">Knowledge Exchange Forum</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      Where PhDs meet practitioners. A restricted-access portal for GGPA Fellows and Alumni to share field notes from "In-Situ" audits, ensuring that the 5,000-page repository is constantly updated with real-world data.
                    </p>
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Fellows & Alumni Only</span>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-4">Certification Benefits</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                        <span>Internationally recognized certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                        <span>Access to exclusive research materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                        <span>Networking with global governance leaders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                        <span>Ongoing mentorship and support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs & Initiatives */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">Programs & Initiatives</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Flagship programs driving governance excellence, youth empowerment, and policy innovation across the Commonwealth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Global Governance Forum */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden group hover:shadow-2xl transition-all">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src={forumImage}
                  alt="Global Governance Forum"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 p-8 text-white/5 z-0">
                <Globe size={120} />
              </div>
              <div className="relative z-10">
                <div className="bg-amber-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <Globe className="text-slate-900" size={32} />
                </div>
                <h3 className="text-3xl font-bold font-serif mb-4">Global Governance Forum</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  An annual high-level convening bringing together diplomats, policy makers, and governance experts to address critical challenges in institutional transparency, diplomatic protocol, and multi-lateral cooperation.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-amber-400 shrink-0 mt-0.5" size={16} />
                    <span>Keynote addresses from Commonwealth and AU leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-amber-400 shrink-0 mt-0.5" size={16} />
                    <span>Technical workshops on Act 992 compliance and IPSAS standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-amber-400 shrink-0 mt-0.5" size={16} />
                    <span>Networking sessions with global governance leaders</span>
                  </li>
                </ul>
                <button className="bg-amber-500 text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-amber-400 transition-all flex items-center gap-2">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Youth Governance Fellowship */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-[2.5rem] p-8 lg:p-12 border-2 border-amber-100 group hover:shadow-2xl transition-all overflow-hidden">
              <div className="relative -mx-8 -mt-8 mb-6 h-48 overflow-hidden rounded-t-[2.5rem]">
                <img 
                  src={fellowshipImage}
                  alt="Youth Governance Fellowship"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="bg-amber-100 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Users className="text-amber-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold font-serif mb-4 text-slate-900">Youth Governance Fellowship</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                A comprehensive 12-month fellowship program designed to equip emerging leaders with the technical skills and functional authority needed to drive institutional transformation in their home countries.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                  <span>Mentorship from GGPA Executive Council members</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                  <span>Access to all 30 volumes of the Compendium</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                  <span>In-situ audit training and field experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                  <span>Certificate of completion and YAC membership</span>
                </li>
              </ul>
              <Link 
                to="/fellowship"
                className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 inline-block"
              >
                Apply Now
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Public Policy Innovation Lab */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-[2.5rem] p-8 lg:p-12 border-2 border-slate-200 group hover:shadow-2xl transition-all overflow-hidden">
              <div className="relative -mx-8 -mt-8 mb-6 h-48 overflow-hidden rounded-t-[2.5rem]">
                <img 
                  src={innovationImage}
                  alt="Public Policy Innovation Lab"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="bg-slate-900 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Lightbulb className="text-amber-400" size={32} />
              </div>
              <h3 className="text-3xl font-bold font-serif mb-4 text-slate-900">Public Policy Innovation Lab</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                A collaborative research and development space where policy experts, technologists, and practitioners co-create innovative solutions to governance challenges using the GGPA Logic Model Framework.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                  <span>Quarterly innovation challenges addressing real-world governance problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                  <span>Access to proprietary research data and diagnostic tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                  <span>Prototype development and pilot testing support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                  <span>Publication opportunities in GGPA research journals</span>
                </li>
              </ul>
              <button className="bg-amber-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-700 transition-all flex items-center gap-2">
                Join the Lab
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Governance Excellence Award */}
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden group hover:shadow-2xl transition-all">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src={awardImage}
                  alt="Governance Excellence Award"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 p-8 text-white/10 z-0">
                <Trophy size={120} />
              </div>
              <div className="relative z-10">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <Trophy className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold font-serif mb-4">Governance Excellence Award</h3>
                <p className="text-slate-100 leading-relaxed mb-6">
                  Recognizing institutions and individuals who demonstrate exceptional commitment to transparency, accountability, and functional authority in governance. The highest honor in institutional integrity.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-slate-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-amber-200 shrink-0 mt-0.5" size={16} />
                    <span>Annual ceremony during the Global Governance Forum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-amber-200 shrink-0 mt-0.5" size={16} />
                    <span>Categories: Institutional Excellence, Youth Leadership, Innovation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-amber-200 shrink-0 mt-0.5" size={16} />
                    <span>Evaluation based on IIGRA diagnostic scores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-amber-200 shrink-0 mt-0.5" size={16} />
                    <span>Recognition in GGPA Compendium and global media</span>
                  </li>
                </ul>
                <div className="flex items-center gap-4">
                  <button className="bg-white text-amber-700 px-6 py-3 rounded-xl font-bold hover:bg-amber-50 transition-all flex items-center gap-2">
                    Nominate
                    <ArrowRight size={18} />
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                    <Calendar size={18} />
                    View Past Winners
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Humanitarian Governance & Policy */}
        <section className="mb-24">
          {/* Pillar Header */}
          <div className="bg-gradient-to-br from-teal-900 to-teal-800 text-white rounded-[3rem] p-12 lg:p-20 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 text-white/5 z-0">
              <Heart size={200} />
            </div>
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-amber-500 p-4 rounded-2xl">
                  <Heart size={32} />
                </div>
                <div>
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Pillar VI</span>
                  <h2 className="text-4xl font-bold font-serif mt-2">Humanitarian Governance &amp; Policy</h2>
                </div>
              </div>
              <p className="text-xl text-teal-100 leading-relaxed mb-6">
                Transitioning from Reactive Response to Predictive Governance. By bridging the gap between international assistance and national sovereignty, the GGPA Humanitarian Pillar delivers technical solutions that ensure life-saving aid is transparent, frictionless, and culturally responsive.
              </p>
              <p className="text-teal-200 leading-relaxed">
                At the core of our humanitarian strategy is the <strong className="text-white">OCHA Governance Stack</strong> — a proprietary suite of three integrated protocols designed for the 21st-century geopolitical landscape.
              </p>
            </div>
          </div>

          {/* OCHA Governance Stack — Three Protocols */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Protocol 1: IIGRA Diagnostic Engine */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-[2rem] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-white/5">
                <BarChart3 size={80} />
              </div>
              <div className="relative z-10">
                <div className="bg-amber-500 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart3 size={24} />
                </div>
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Protocol 1</span>
                <h3 className="text-2xl font-bold font-serif mt-2 mb-3">IIGRA Diagnostic Engine</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  The Integrated Institutional Governance Risk Assessment replaces anecdotal guesswork with mathematical certainty.
                </p>
                <div className="space-y-3">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-bold text-sm mb-1 text-amber-400">Sovereign Friction Coefficient (SFC)</h4>
                    <p className="text-xs text-slate-300">A quadratic algorithm that calculates potential bureaucratic bottlenecks before a mission begins.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-bold text-sm mb-1 text-amber-400">Predictive Accuracy</h4>
                    <p className="text-xs text-slate-300">Back-tested at an <strong className="text-white">85% accuracy rate</strong>, enabling pre-emptive identification of "Critical Blockage" zones to save lives and resources.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Protocol 2: Shadow-Role Operational Model */}
            <div className="bg-white rounded-[2rem] p-8 border-2 border-teal-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-teal-50">
                <Users size={80} />
              </div>
              <div className="relative z-10">
                <div className="bg-teal-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <span className="text-teal-600 text-xs font-bold uppercase tracking-widest">Protocol 2</span>
                <h3 className="text-2xl font-bold font-serif mt-2 mb-3 text-slate-900">Shadow-Role Operational Model</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  National sovereignty is a cornerstone, not an obstacle. The Shadow-Role Model re-conceptualises international assistance through a Mirror-Hierarchy Architecture.
                </p>
                <div className="space-y-3">
                  <div className="bg-teal-50 p-4 rounded-xl">
                    <h4 className="font-bold text-sm mb-1 text-teal-800">Technical Symbiosis</h4>
                    <p className="text-xs text-slate-600">UN Technical Leads ("Shadows") provide expert advice while National Principals retain final decision-making authority.</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-xl">
                    <h4 className="font-bold text-sm mb-1 text-teal-800">
                      <Lock className="inline mr-1 mb-0.5" size={12} />
                      Sovereign Kill-Switch (SKS)
                    </h4>
                    <p className="text-xs text-slate-600">
                      A biometric-secured protocol granting host nations the power to pause operations conflicting with local laws (<GlossaryTerm term="Lex Loci" definition="The law of the place — the local legal framework of the host nation that takes precedence over external protocols." />), fostering absolute trust and partnership.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Protocol 3: ZLT Protocol */}
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-[2rem] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-white/10">
                <Zap size={80} />
              </div>
              <div className="relative z-10">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="text-white" size={24} />
                </div>
                <span className="text-amber-100 text-xs font-bold uppercase tracking-widest">Protocol 3</span>
                <h3 className="text-2xl font-bold font-serif mt-2 mb-3">ZLT Protocol</h3>
                <p className="text-amber-100 text-sm leading-relaxed mb-4">
                  Zero-Latency Tracking uses permissioned blockchain technology to eliminate fraud and ensure aid reaches its intended destination.
                </p>
                <div className="space-y-3">
                  <div className="bg-white/15 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-bold text-sm mb-1">
                      4-Gate Ledger System
                    </h4>
                    <p className="text-xs text-amber-100">Aid tokenized at source → IoT-tracked in transit → biometric salted-hash verification at beneficiary level → closed via <GlossaryTerm term="Multi-Sig" definition="Multi-signature approval: a security mechanism requiring multiple authorised parties to sign off before a transaction is finalised on the ledger." /> approvals.</p>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-bold text-sm mb-1">Operational Resilience</h4>
                    <p className="text-xs text-amber-100">Asynchronous Edge-Sync keeps tracking fully functional in conflict zones with zero connectivity — eliminating <GlossaryTerm term="Audit-Lag" definition="The delay between an aid disbursement event and its appearance in the official audit trail, which can obscure fraud or misuse." /> in donor reporting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Impact Metrics */}
          <div className="bg-slate-50 rounded-[2rem] p-8 lg:p-12 mb-8 border border-slate-100">
            <h3 className="text-2xl font-bold font-serif text-slate-900 mb-8 text-center">Strategic Impact</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { stat: '20–50%', label: 'Reduction in aid lead-times', color: 'text-teal-600' },
                { stat: '95%', label: 'Reduction in resource leakage & fraud', color: 'text-amber-600' },
                { stat: '100%', label: 'Data sovereignty for host nations via managed repatriation audits', color: 'text-slate-900' }
              ].map((item) => (
                <div key={item.stat} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center">
                  <div className={`text-4xl font-bold font-serif ${item.color} mb-2`}>{item.stat}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 180-Day Implementation Roadmap (Toggle) */}
          <div className="bg-white rounded-[2rem] border-2 border-teal-100 overflow-hidden mb-8">
            <button
              onClick={() => setShowRoadmap(!showRoadmap)}
              className="w-full flex items-center justify-between p-8 text-left hover:bg-teal-50 transition-colors"
            >
              <div>
                <span className="text-teal-600 text-xs font-bold uppercase tracking-widest block mb-1">Technical Readiness</span>
                <h3 className="text-2xl font-bold font-serif text-slate-900">180-Day Implementation Roadmap</h3>
              </div>
              <div className="bg-teal-600 text-white p-3 rounded-xl shrink-0 ml-4">
                {showRoadmap ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>
            {showRoadmap && (
              <div className="px-8 pb-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      phase: 'Phase 1',
                      days: 'Days 1–30',
                      title: 'Assessment & Onboarding',
                      items: ['Sovereign Friction Coefficient baseline survey', 'Host nation stakeholder mapping', 'IIGRA diagnostic pre-assessment', 'Legal framework review (Lex Loci audit)']
                    },
                    {
                      phase: 'Phase 2',
                      days: 'Days 31–90',
                      title: 'System Integration & Training',
                      items: ['Shadow-Role pairing and orientation', 'ZLT blockchain node deployment', 'Biometric enrollment for beneficiary verification', 'National staff certification — Track 2: Digital Auditor']
                    },
                    {
                      phase: 'Phase 3',
                      days: 'Days 91–150',
                      title: 'Pilot Deployment',
                      items: ['Live 4-Gate Ledger activation in pilot corridor', 'Asynchronous Edge-Sync stress-testing', 'SKS protocol drill and sign-off', 'Real-time donor reporting dashboard launch']
                    },
                    {
                      phase: 'Phase 4',
                      days: 'Days 151–180',
                      title: 'Full Activation & Handover',
                      items: ['Multi-Sig approval panel constituted', 'Managed data repatriation audit completed', 'Governance stack handed to National Principals', 'Final IIGRA post-deployment scorecard issued']
                    }
                  ].map((phase) => (
                    <div key={phase.phase} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <span className="text-teal-600 text-xs font-bold uppercase tracking-widest">{phase.phase}</span>
                      <span className="text-slate-400 text-xs ml-2">{phase.days}</span>
                      <h4 className="font-bold text-slate-900 mt-1 mb-3">{phase.title}</h4>
                      <ul className="space-y-2">
                        {phase.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle className="text-teal-500 shrink-0 mt-0.5" size={14} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Founder Quote */}
          <div className="bg-gradient-to-br from-slate-900 to-teal-900 text-white rounded-[2rem] p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 text-white/5">
              <Heart size={160} />
            </div>
            <div className="relative z-10 max-w-3xl">
              <blockquote className="text-xl lg:text-2xl font-serif italic leading-relaxed text-slate-200 mb-6">
                "The GGPA Governance Stack is not just a toolkit, but a strategic necessity for a multipolar world where sovereignty and solidarity must exist in perfect balance."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-amber-500 rounded-full" />
                <div>
                  <p className="font-bold text-white">David Sekyi Yirenkyi, LLB</p>
                  <p className="text-amber-400 text-sm">Founder, GGPA</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pillars;
