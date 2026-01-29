
import React from 'react';
import { VOLUME_CATEGORIES } from '../constants';
import { Download, Book, Shield, FileText, ChevronRight } from 'lucide-react';

const Compendium: React.FC = () => {
  return (
    <div className="py-20">
      <div className="bg-slate-900 text-white py-24 mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 text-white/5 pointer-events-none">
          <Book size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold font-serif mb-8">The GGPA Compendium</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Access the foundational blueprints of the GGPA. Our 5,000-page repository is a scientific response to institutional failure, providing 30 volumes of functional frameworks.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {VOLUME_CATEGORIES.map((category, idx) => (
            <div key={category.title} className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 hover:shadow-2xl transition-all group">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 text-xs font-bold rounded-full mb-4 border border-amber-100">
                    {category.range}
                  </span>
                  <h3 className="text-3xl font-bold font-serif text-slate-900">{category.title}</h3>
                </div>
                <div className="bg-slate-100 p-4 rounded-2xl group-hover:bg-amber-100 transition-colors">
                  <Shield size={32} className="text-slate-900 group-hover:text-amber-600 transition-colors" />
                </div>
              </div>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                {category.description}
              </p>

              <div className="space-y-4 mb-10">
                {category.volumes.map((vol) => (
                  <div key={vol} className="flex items-center gap-3 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer group/item">
                    <FileText size={16} className="text-amber-500" />
                    {vol}
                    <ChevronRight size={14} className="opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                  </div>
                ))}
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-lg">
                <Download size={20} />
                Download Executive Summary
              </button>
            </div>
          ))}
        </div>

        {/* Tiers / Access Info */}
        <div className="mt-24 p-12 bg-amber-50 rounded-[3rem] border border-amber-100 flex flex-col md:flex-row gap-12 items-center">
          <div className="shrink-0">
            <div className="w-20 h-20 bg-amber-200 flex items-center justify-center rounded-3xl">
              <Shield className="text-amber-700" size={40} />
            </div>
          </div>
          <div className="flex-grow">
            <h4 className="text-2xl font-bold font-serif text-amber-900 mb-4">Secure Document Access</h4>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <span className="block font-bold text-amber-800 text-sm mb-1 uppercase tracking-wider">Public</span>
                <p className="text-amber-700 text-xs">Press Releases, Executive Summaries</p>
              </div>
              <div>
                <span className="block font-bold text-amber-800 text-sm mb-1 uppercase tracking-wider">Registered</span>
                <p className="text-amber-700 text-xs">Full Governance Library Access</p>
              </div>
              <div>
                <span className="block font-bold text-amber-800 text-sm mb-1 uppercase tracking-wider">Restricted</span>
                <p className="text-amber-700 text-xs">Technical Manuals & RAW Diagnostic Data</p>
              </div>
            </div>
          </div>
          <button className="bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold whitespace-nowrap hover:bg-amber-700 transition-all">
            Upgrade Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Compendium;
