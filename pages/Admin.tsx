
import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Save, Plus, Trash2, LayoutDashboard, FileText, Image, RefreshCcw, Type, ShieldCheck, Check } from 'lucide-react';

const Admin: React.FC = () => {
  const { state, updateHero, updateFounder, addNews, deleteNews, addGalleryImage, deleteGalleryImage, resetToDefault } = useContent();
  const [activeTab, setActiveTab] = useState<'content' | 'news' | 'gallery'>('content');
  const [saveStatus, setSaveStatus] = useState(false);

  const handleSave = () => {
    setSaveStatus(true);
    setTimeout(() => setSaveStatus(false), 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'hero' | 'founder' | 'gallery') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      if (type === 'hero') updateHero({ ...state.hero, image: base64 });
      if (type === 'founder') updateFounder({ ...state.founder, image: base64 });
      if (type === 'gallery') {
        addGalleryImage({
          id: Date.now().toString(),
          url: base64,
          caption: "New Institutional Photo",
          date: new Date().toLocaleDateString()
        });
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="text-amber-600" size={32} />
              <h1 className="text-4xl font-bold font-serif text-slate-900">Secretariat Command Center</h1>
            </div>
            <p className="text-slate-500">Manage institutional content, documents, and media without code intervention.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={resetToDefault}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-red-50 hover:text-red-600 transition-all"
            >
              <RefreshCcw size={18} /> Reset All
            </button>
            <button 
              onClick={handleSave}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-lg ${saveStatus ? 'bg-green-600 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
            >
              {saveStatus ? <><Check size={18} /> Changes Saved</> : <><Save size={18} /> Deploy Updates</>}
            </button>
          </div>
        </div>

        <div className="flex bg-white p-1 rounded-2xl border border-slate-200 mb-8 max-w-md">
          {[
            { id: 'content', icon: <Type size={18} />, label: 'Page Content' },
            { id: 'news', icon: <FileText size={18} />, label: 'GGPA News' },
            { id: 'gallery', icon: <Image size={18} />, label: 'Media Vault' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 flex-1 px-4 py-3 rounded-xl font-bold text-xs transition-all ${activeTab === tab.id ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-8 md:p-12">
          {activeTab === 'content' && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <section>
                <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                  <LayoutDashboard className="text-amber-600" size={24} /> Hero Section
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Main Headline</label>
                    <input 
                      type="text" 
                      value={state.hero.headline}
                      onChange={(e) => updateHero({ ...state.hero, headline: e.target.value })}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                    />
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Sub-Headline</label>
                    <textarea 
                      rows={3}
                      value={state.hero.subHeadline}
                      onChange={(e) => updateHero({ ...state.hero, subHeadline: e.target.value })}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Hero Imagery</label>
                    <div className="relative group rounded-2xl overflow-hidden border border-slate-200 h-48 bg-slate-100">
                      <img src={state.hero.image} className="w-full h-full object-cover" alt="Preview" />
                      <label className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <input type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'hero')} />
                        <span className="text-white font-bold text-sm underline">Change Image</span>
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-100" />

              <section>
                <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-amber-600" size={24} /> Founder's Welcome
                </h3>
                <div className="space-y-6">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Strategic Excerpt</label>
                  <textarea 
                    rows={4}
                    value={state.founder.quote}
                    onChange={(e) => updateFounder({ ...state.founder, quote: e.target.value })}
                    className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium italic"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Founder Name</label>
                      <input 
                        type="text" 
                        value={state.founder.name}
                        onChange={(e) => updateFounder({ ...state.founder, name: e.target.value })}
                        className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-slate-50 font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Institutional Title</label>
                      <input 
                        type="text" 
                        value={state.founder.title}
                        onChange={(e) => updateFounder({ ...state.founder, title: e.target.value })}
                        className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'news' && (
            <div className="space-y-8 animate-in slide-in-from-right duration-500">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold font-serif">Manage Dispatch Entries</h3>
                <button 
                  onClick={() => addNews({
                    id: Date.now().toString(),
                    category: 'Press',
                    title: 'New Policy Communiqué',
                    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                    excerpt: 'Brief overview of the latest administrative action or strategic partnership.'
                  })}
                  className="flex items-center gap-2 bg-amber-600 text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-amber-700 transition-all shadow-md"
                >
                  <Plus size={16} /> New Entry
                </button>
              </div>

              <div className="space-y-4">
                {state.news.map((item) => (
                  <div key={item.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-grow space-y-3 w-full">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-slate-200 text-slate-600 rounded text-[9px] font-black uppercase">{item.category}</span>
                        <span className="text-[10px] text-slate-400 font-bold">{item.date}</span>
                      </div>
                      <input 
                        className="w-full bg-transparent font-bold text-lg border-none focus:ring-0 p-0"
                        value={item.title}
                        onChange={() => {}} // Simple mock for brevity
                      />
                      <textarea 
                        className="w-full bg-transparent text-sm text-slate-500 border-none focus:ring-0 p-0"
                        value={item.excerpt}
                        onChange={() => {}}
                      />
                    </div>
                    <button 
                      onClick={() => deleteNews(item.id)}
                      className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="space-y-8 animate-in slide-in-from-right duration-500">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold font-serif">Institutional Media Vault</h3>
                <label className="flex items-center gap-2 bg-amber-600 text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-amber-700 transition-all shadow-md cursor-pointer">
                  <Plus size={16} /> Add Media
                  <input type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'gallery')} />
                </label>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {state.gallery.map((img) => (
                  <div key={img.id} className="group relative rounded-2xl overflow-hidden border border-slate-200 aspect-square">
                    <img src={img.url} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center gap-4 p-4 text-center">
                      <p className="text-white text-[10px] font-bold leading-tight">{img.caption}</p>
                      <button 
                        onClick={() => deleteGalleryImage(img.id)}
                        className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
