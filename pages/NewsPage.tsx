import React from 'react';
import { useContent } from '../context/ContentContext';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsPage: React.FC = () => {
  const { state } = useContent();

  return (
    <div className="pb-24">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-24 mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 text-white/5 pointer-events-none">
          <Calendar size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-amber-500/20">
              The GGPA Dispatch
            </div>
            <h1 className="text-5xl font-bold font-serif mb-8">Latest Communiqués</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Field notes, editorials, press releases, and strategic insights from the Secretariat.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {state.news.map((item) => (
            <Link 
              key={item.id} 
              to={`/news/${item.id}`}
              className="block bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {item.image && (
                  <div className="md:w-64 shrink-0 rounded-2xl overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <Calendar size={14} />
                      {item.date}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold font-serif mb-3 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    {item.author && (
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <User size={14} />
                        <span className="font-medium">{item.author}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-amber-600 font-bold text-sm group-hover:gap-4 transition-all">
                      Read Article
                      <ArrowRight size={18} />
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
