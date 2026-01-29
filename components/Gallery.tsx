
import React from 'react';
import { Camera, Calendar, Maximize2 } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Gallery: React.FC = () => {
  const { state } = useContent();

  if (state.gallery.length === 0) return null;

  return (
    <section className="py-24 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-slate-50 text-slate-900 rounded-3xl mb-6 shadow-sm border border-slate-100">
            <Camera size={32} />
          </div>
          <h2 className="text-4xl font-bold font-serif mb-4">Institutional Gallery</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Visualizing the impact of the GGPA Secretariat across the African Union and Commonwealth domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {state.gallery.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-sm border border-slate-200 aspect-[4/3]">
              <img 
                src={image.url} 
                alt={image.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="flex items-center gap-2 text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                  <Calendar size={12} />
                  {image.date}
                </div>
                <h4 className="text-white font-bold text-lg leading-tight mb-4">
                  {image.caption}
                </h4>
                <button className="self-start p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-amber-500 transition-colors">
                  <Maximize2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
