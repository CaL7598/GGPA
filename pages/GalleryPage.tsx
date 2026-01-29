
import React from 'react';
import { Camera, Calendar, Maximize2, Shield, Images } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const GalleryPage: React.FC = () => {
  const { state } = useContent();

  return (
    <div className="pb-24">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-24 mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 text-white/5 pointer-events-none">
          <Images size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-amber-500/20">
              Secretariat Archives
            </div>
            <h1 className="text-5xl font-bold font-serif mb-8">The Visual Record</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Documenting the active implementation of the GGPA framework. From high-level diplomatic circulars to ground-level "In-Situ" audit sessions across the Commonwealth.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {state.gallery.length === 0 ? (
          <div className="text-center py-40 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
            <Camera className="mx-auto text-slate-300 mb-6" size={64} />
            <h3 className="text-xl font-bold font-serif text-slate-400">Archives are currently being indexed...</h3>
            <p className="text-slate-400 text-sm mt-2">Check back soon for latest institutional media.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {state.gallery.map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-sm border border-slate-200 aspect-[4/3]">
                <img 
                  src={image.url} 
                  alt={image.caption} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="flex items-center gap-2 text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                    <Calendar size={12} />
                    {image.date}
                  </div>
                  <h4 className="text-white font-bold text-lg leading-tight mb-4">
                    {image.caption}
                  </h4>
                  <div className="flex items-center gap-4">
                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-amber-500 transition-colors">
                      <Maximize2 size={18} />
                    </button>
                    <div className="text-[10px] font-black text-white/50 uppercase tracking-tighter">
                      Verified Institutional Media
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Curator Note */}
        <div className="mt-24 p-12 bg-slate-900 text-white rounded-[3rem] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 text-white/5">
            <Shield size={120} />
          </div>
          <div className="max-w-2xl">
            <h4 className="text-2xl font-bold font-serif mb-4">Data Ethics & Transparency</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              All visual content within this repository is governed by the GGPA Data Ethics Framework (Vol. XVIII). Media featuring state officials or sensitive audit data is subject to "Redacted View" protocols unless explicitly authorized for public release.
            </p>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Shield size={16} />
              GDPR & Act 843 Compliant Storage
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
