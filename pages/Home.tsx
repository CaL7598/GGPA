
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
      <div className="bg-slate-900 py-8 sm:py-12 relative z-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://img.freepik.com/free-photo/african-professionals-working-together-modern-office_1150-10179.jpg?w=1380&t=st=1704067200~exp=1704067800~hmac=PLACEHOLDER_REPLACE_WITH_FREEPIK_AFRICAN_TEAM_COLLABORATION" 
            alt="African professionals" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {state.stats.map((stat) => (
              <div key={stat.id} className="text-center group">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:text-amber-400 transition-colors font-serif">{stat.value}</p>
                <p className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder's Excerpt */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 lg:p-20 relative border border-slate-100">
            <div className="absolute top-0 right-0 p-6 sm:p-8 lg:p-12 text-slate-200 hidden lg:block">
              <Star size={200} strokeWidth={0.5} />
            </div>
            
            <div className="max-w-3xl relative z-10">
              <h4 className="text-amber-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">Founder's Welcome</h4>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif text-slate-900 mb-6 sm:mb-8 lg:mb-10 leading-tight">
                "{state.founder.quote}"
              </blockquote>
              <div className="flex items-center gap-3 sm:gap-4">
                <img src={founderImage} alt="Founder" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full grayscale border-2 border-amber-200 object-cover" />
                <div>
                  <h5 className="font-bold text-slate-900 text-sm sm:text-base">{state.founder.name}</h5>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">{state.founder.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GovernanceDashboard />
      
      <DeepSearch />

      {/* Dispatch Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 lg:mb-16 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-2 sm:mb-4">The GGPA Dispatch</h2>
              <p className="text-sm sm:text-base text-slate-600">Latest communiqués and field notes from our Secretariat.</p>
            </div>
            <Link to="/news" className="flex items-center gap-2 font-bold text-amber-600 hover:text-amber-700 transition-colors text-sm sm:text-base">
              View All Insights
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {state.news.map((item, index) => (
              <Link 
                key={item.id} 
                to={`/news/${item.id}`}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col h-full overflow-hidden"
              >
                {item.image ? (
                  <div className="mb-4 sm:mb-6 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 rounded-t-[1.5rem] sm:rounded-t-[2rem] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="mb-4 sm:mb-6 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 rounded-t-[1.5rem] sm:rounded-t-[2rem] overflow-hidden h-40 sm:h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <img 
                      src={`https://img.freepik.com/free-photo/african-professional-presenting-data-meeting_1150-10181.jpg?w=800&t=st=1704067200~exp=1704067800~hmac=PLACEHOLDER_REPLACE_WITH_FREEPIK_AFRICAN_PROFESSIONAL_${index}`}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-50"
                    />
                  </div>
                )}
                <div className="mb-4 sm:mb-6">
                  <span className="px-2 sm:px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-serif mb-3 sm:mb-4 group-hover:text-amber-600 transition-colors">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">{item.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 sm:pt-6 border-t border-slate-50">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400">{item.date}</span>
                  <div className="text-slate-900 group-hover:text-amber-600 transition-colors">
                    <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Alliances */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-400 mb-8 sm:mb-12">Institutional Partners & Alliances</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['AU', 'Commonwealth', 'ECOWAS', 'UN', 'UENR'].map(logo => (
              <span key={logo} className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-slate-900 tracking-tighter">{logo}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
