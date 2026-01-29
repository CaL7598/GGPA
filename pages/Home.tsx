
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import GovernanceDashboard from '../components/GovernanceDashboard';
import DeepSearch from '../components/DeepSearch';
import { useContent } from '../context/ContentContext';
import { Star, ArrowRight } from 'lucide-react';
import founderImage from '../assets/founder/WhatsApp Image 2026-01-29 at 09.51.13.jpeg';

const Home: React.FC = () => {
  const { state } = useContent();

  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* Stats Bar */}
      <div className="bg-slate-900 py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {state.stats.map((stat) => (
              <div key={stat.id} className="text-center group">
                <p className="text-4xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors font-serif">{stat.value}</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder's Excerpt */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[3rem] p-8 lg:p-20 relative border border-slate-100">
            <div className="absolute top-0 right-0 p-12 text-slate-200 hidden lg:block">
              <Star size={200} strokeWidth={0.5} />
            </div>
            
            <div className="max-w-3xl relative z-10">
              <h4 className="text-amber-600 font-bold text-sm tracking-widest uppercase mb-6">Founder's Welcome</h4>
              <blockquote className="text-3xl lg:text-4xl font-serif text-slate-900 mb-10 leading-tight">
                "{state.founder.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img src={founderImage} alt="Founder" className="w-16 h-16 rounded-full grayscale border-2 border-amber-200 object-cover" />
                <div>
                  <h5 className="font-bold text-slate-900">{state.founder.name}</h5>
                  <p className="text-sm text-slate-500 font-medium">{state.founder.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GovernanceDashboard />
      
      <DeepSearch />

      {/* Dispatch Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold font-serif mb-4">The GGPA Dispatch</h2>
              <p className="text-slate-600">Latest communiqués and field notes from our Secretariat.</p>
            </div>
            <Link to="/news" className="hidden sm:flex items-center gap-2 font-bold text-amber-600 hover:text-amber-700 transition-colors">
              View All Insights
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {state.news.map((item) => (
              <Link 
                key={item.id} 
                to={`/news/${item.id}`}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col h-full"
              >
                <div className="mb-6">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-serif mb-4 group-hover:text-amber-600 transition-colors">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{item.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                  <span className="text-xs font-bold text-slate-400">{item.date}</span>
                  <div className="text-slate-900 group-hover:text-amber-600 transition-colors">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Alliances */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-12">Institutional Partners & Alliances</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['AU', 'Commonwealth', 'ECOWAS', 'UN', 'UENR'].map(logo => (
              <span key={logo} className="text-2xl font-serif font-bold text-slate-900 tracking-tighter">{logo}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
