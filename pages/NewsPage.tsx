import React from 'react';
import { useContent } from '../context/ContentContext';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import ungaImage from '../assets/images/unga-wrap-up.webp';
import auImage from '../assets/images/au-summit-in-addis-ababa-2-scaled.jpg';
import governmentImage from '../assets/images/flickr_24757651797_bfa40e7b50_k_GovernmentZA-e1539695449767.jpg';

const NewsPage: React.FC = () => {
  const { state } = useContent();

  return (
    <div className="pb-12 sm:pb-16 lg:pb-24">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 lg:py-24 mb-12 sm:mb-16 lg:mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 sm:p-12 lg:p-20 text-white/5 pointer-events-none">
          <Calendar size={200} className="sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-4 sm:mb-6 border border-amber-500/20">
              The GGPA Dispatch
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4 sm:mb-6 lg:mb-8">Latest Communiqués</h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
              Field notes, editorials, press releases, and strategic insights from the Secretariat.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8">
          {state.news.map((item) => (
            <Link 
              key={item.id} 
              to={`/news/${item.id}`}
              className="block bg-white rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                {(() => {
                  const newsImages = [ungaImage, auImage, governmentImage];
                  const newsImage = item.image || newsImages[state.news.indexOf(item) % newsImages.length];
                  return (
                    <div className="md:w-64 shrink-0 rounded-xl sm:rounded-2xl overflow-hidden">
                      <img 
                        src={newsImage} 
                        alt={item.title}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  );
                })()}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="px-2 sm:px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2 text-slate-400 text-[10px] sm:text-xs">
                      <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                      {item.date}
                    </div>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif mb-2 sm:mb-3 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
                    {item.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                    {item.author && (
                      <div className="flex items-center gap-2 text-slate-500 text-xs sm:text-sm">
                        <User size={12} className="sm:w-3.5 sm:h-3.5" />
                        <span className="font-medium">{item.author}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-amber-600 font-bold text-xs sm:text-sm group-hover:gap-3 sm:group-hover:gap-4 transition-all">
                      Read Article
                      <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
