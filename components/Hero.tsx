
import React from 'react';
import { Download, UserPlus, Shield } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Hero: React.FC = () => {
  const { state } = useContent();

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 transform translate-x-1/4 z-0 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-widest mb-8 border border-amber-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              The Critical Youth Mandate
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900 mb-8 font-serif">
              {state.hero.headline}
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              {state.hero.subHeadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#/compendium" 
                className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <Download size={20} />
                Executive Compendium
              </a>
              <a 
                href="#/fellowship" 
                className="flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-slate-900 transition-all"
              >
                <UserPlus size={20} />
                Apply for Fellowship
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-slate-100 pt-8">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/100/100?random=${i}`} className="w-12 h-12 rounded-full border-4 border-white object-cover" alt="Fellow" />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Join 120+ Technical Fellows</p>
                <p className="text-xs text-slate-500">From AU and Commonwealth nations</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-100/50 rounded-[2rem] blur-2xl z-0"></div>
            <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 p-2">
              <img 
                src={state.hero.image} 
                alt="Global Governance" 
                className="rounded-[1.5rem] w-full h-[500px] object-cover"
              />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Shield className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Functional Authority</h4>
                    <p className="text-xs text-slate-500">Science-based response to institutional failure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
