
import React from 'react';
import { Download, UserPlus, Shield } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Hero: React.FC = () => {
  const { state } = useContent();

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 transform translate-x-1/4 z-0 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-32 pb-16 sm:pb-24 lg:pb-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-amber-50 text-amber-700 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 sm:mb-8 border border-amber-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              The Critical Youth Mandate
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-slate-900 mb-6 sm:mb-8 font-serif">
              {state.hero.headline}
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-xl">
              {state.hero.subHeadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="#/compendium" 
                className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">Executive Compendium</span>
              </a>
              <a 
                href="#/fellowship" 
                className="flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:border-slate-900 transition-all"
              >
                <UserPlus size={18} className="sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">Apply for Fellowship</span>
              </a>
            </div>
            
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 border-t border-slate-100 pt-6 sm:pt-8">
              <div className="flex -space-x-3 sm:-space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/100/100?random=${i}`} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 border-white object-cover" alt="Fellow" />
                ))}
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900">Join 120+ Technical Fellows</p>
                <p className="text-[10px] sm:text-xs text-slate-500">From AU and Commonwealth nations</p>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-2 sm:-inset-4 bg-amber-100/50 rounded-[1.5rem] sm:rounded-[2rem] blur-xl sm:blur-2xl z-0"></div>
            <div className="relative bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 p-1.5 sm:p-2">
              <img 
                src="https://img.freepik.com/free-photo/confident-african-professional-businessman-suit-standing-office_1150-10180.jpg?w=1380&t=st=1704067200~exp=1704067800~hmac=PLACEHOLDER_REPLACE_WITH_FREEPIK_AFRICAN_BUSINESS_LEADER" 
                alt="Global Governance" 
                className="rounded-[1rem] sm:rounded-[1.5rem] w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                onError={(e) => {
                  // Fallback to original image if placeholder fails
                  e.currentTarget.src = state.hero.image;
                }}
              />
              
              <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-3 sm:gap-4 mb-2">
                  <div className="bg-amber-100 p-1.5 sm:p-2 rounded-lg">
                    <Shield className="text-amber-600 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">Functional Authority</h4>
                    <p className="text-[10px] sm:text-xs text-slate-500">Science-based response to institutional failure</p>
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
