
import React, { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Save, Plus, Trash2, LayoutDashboard, FileText, Image, RefreshCcw, Type, ShieldCheck, Check, Phone, LogOut } from 'lucide-react';
import AdminLogin from './AdminLogin';
import { uploadImage } from '../lib/supabaseService';
import { supabase } from '../lib/supabase';

const Admin: React.FC = () => {
  const { user, loading: authLoading, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { state, updateHero, updateFounder, addNews, deleteNews, addGalleryImage, deleteGalleryImage, updateContact, updatePrograms, updateStats, updateCompendium, updateNavigation, updateFooter, resetToDefault } = useContent();
  const [activeTab, setActiveTab] = useState<'content' | 'news' | 'gallery' | 'contact' | 'programs' | 'stats' | 'compendium' | 'navigation' | 'footer'>('content');
  const [saveStatus, setSaveStatus] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      // Redirect handled by showing login component
    }
  }, [user, authLoading]);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AdminLogin />;
  }

  const handleSave = () => {
    setSaveStatus(true);
    setTimeout(() => setSaveStatus(false), 2000);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'hero' | 'founder' | 'gallery' | 'program', programId?: keyof typeof state.programs) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if Supabase is configured
    const isSupabaseConfigured = !!(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY);
    
    let imageUrl: string;

    if (isSupabaseConfigured && user) {
      // Upload to Supabase Storage
      const path = type === 'gallery' ? 'gallery' : type === 'program' ? 'programs' : type;
      const uploadedUrl = await uploadImage(file, path);
      
      if (uploadedUrl) {
        imageUrl = uploadedUrl;
      } else {
        // Fallback to base64 if upload fails
        const reader = new FileReader();
        imageUrl = await new Promise((resolve) => {
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });
      }
    } else {
      // Fallback to base64 if Supabase not configured
      const reader = new FileReader();
      imageUrl = await new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
    }

    // Update state
    if (type === 'hero') updateHero({ ...state.hero, image: imageUrl });
    if (type === 'founder') updateFounder({ ...state.founder, image: imageUrl });
    if (type === 'gallery') {
      addGalleryImage({
        id: Date.now().toString(),
        url: imageUrl,
        caption: "New Institutional Photo",
        date: new Date().toLocaleDateString()
      });
    }
    if (type === 'program' && programId) {
      updatePrograms({ ...state.programs, [programId]: imageUrl });
    }
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
            <p className="text-xs text-slate-400 mt-1">Logged in as: {user.email}</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={async () => {
                await signOut();
                navigate('/');
              }}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all"
            >
              <LogOut size={18} /> Sign Out
            </button>
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

        <div className="flex bg-white p-1 rounded-2xl border border-slate-200 mb-8 max-w-4xl overflow-x-auto">
          {[
            { id: 'content', icon: <Type size={18} />, label: 'Page Content' },
            { id: 'news', icon: <FileText size={18} />, label: 'GGPA News' },
            { id: 'gallery', icon: <Image size={18} />, label: 'Media Vault' },
            { id: 'contact', icon: <Phone size={18} />, label: 'Contact Info' },
            { id: 'programs', icon: <LayoutDashboard size={18} />, label: 'Programs' },
            { id: 'stats', icon: <LayoutDashboard size={18} />, label: 'Impact Stats' },
            { id: 'compendium', icon: <FileText size={18} />, label: 'Compendium' },
            { id: 'navigation', icon: <LayoutDashboard size={18} />, label: 'Navigation' },
            { id: 'footer', icon: <LayoutDashboard size={18} />, label: 'Footer' },
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
                  <div className="space-y-4">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Founder Image</label>
                    <div className="relative group rounded-2xl overflow-hidden border border-slate-200 h-48 bg-slate-100 max-w-md">
                      <img src={state.founder.image} className="w-full h-full object-cover" alt="Founder" />
                      <label className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'founder')} />
                        <span className="text-white font-bold text-sm underline">Change Image</span>
                      </label>
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

          {activeTab === 'contact' && (
            <div className="space-y-12 animate-in slide-in-from-right duration-500">
              <section>
                <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                  <Phone className="text-amber-600" size={24} />
                  Headquarters Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Location (City, Country)</label>
                    <input 
                      type="text" 
                      value={state.contact?.location || ''}
                      onChange={(e) => updateContact({ ...(state.contact || {}), location: e.target.value } as any)}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                      placeholder="Accra, Ghana"
                    />
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Location Detail</label>
                    <input 
                      type="text" 
                      value={state.contact?.locationDetail || ''}
                      onChange={(e) => updateContact({ ...(state.contact || {}), locationDetail: e.target.value } as any)}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                      placeholder="Diplomatic Enclave"
                    />
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Telephone</label>
                    <input 
                      type="text" 
                      value={state.contact?.telephone || ''}
                      onChange={(e) => updateContact({ ...(state.contact || {}), telephone: e.target.value } as any)}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                      placeholder="+233 (0) XXX XXX XXX"
                    />
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Main Email</label>
                    <input 
                      type="email" 
                      value={state.contact?.email || ''}
                      onChange={(e) => updateContact({ ...(state.contact || {}), email: e.target.value } as any)}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                      placeholder="secretariat@ggpa-global.org"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Office Hours</label>
                    <input 
                      type="text" 
                      value={state.contact?.officeHours || ''}
                      onChange={(e) => updateContact({ ...(state.contact || {}), officeHours: e.target.value } as any)}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                      placeholder="Monday - Friday: 9:00 AM - 5:00 PM GMT"
                    />
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Office Hours Detail</label>
                    <input 
                      type="text" 
                      value={state.contact?.officeHoursDetail || ''}
                      onChange={(e) => updateContact({ ...(state.contact || {}), officeHoursDetail: e.target.value } as any)}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                      placeholder="By appointment for diplomatic engagements"
                    />
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Media Email</label>
                    <input 
                      type="email" 
                      value={state.contact?.mediaEmail || ''}
                      onChange={(e) => updateContact({ ...(state.contact || {}), mediaEmail: e.target.value } as any)}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                      placeholder="media@ggpa-global.org"
                    />
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Partnerships Email</label>
                    <input 
                      type="email" 
                      value={state.contact?.partnershipsEmail || ''}
                      onChange={(e) => updateContact({ ...(state.contact || {}), partnershipsEmail: e.target.value } as any)}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                      placeholder="partnerships@ggpa-global.org"
                    />
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">YAC Email</label>
                    <input 
                      type="email" 
                      value={state.contact?.yacEmail || ''}
                      onChange={(e) => updateContact({ ...(state.contact || {}), yacEmail: e.target.value } as any)}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                      placeholder="yac@ggpa-global.org"
                    />
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'programs' && (
            <div className="space-y-12 animate-in slide-in-from-right duration-500">
              <section>
                <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                  <LayoutDashboard className="text-amber-600" size={24} />
                  Programs & Initiatives Images
                </h3>
                <p className="text-slate-600 mb-8 text-sm">
                  Manage images for the Programs & Initiatives section on the Pillars page. Upload new images to replace the current ones.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Global Governance Forum */}
                  <div className="space-y-4">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Global Governance Forum
                    </label>
                    <div className="relative group rounded-2xl overflow-hidden border border-slate-200 h-48 bg-slate-100">
                      <img src={state.programs.globalGovernanceForum} className="w-full h-full object-cover" alt="Global Governance Forum" />
                      <label className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, 'program', 'globalGovernanceForum')} 
                        />
                        <span className="text-white font-bold text-sm underline">Change Image</span>
                      </label>
                    </div>
                  </div>

                  {/* Youth Governance Fellowship */}
                  <div className="space-y-4">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Youth Governance Fellowship
                    </label>
                    <div className="relative group rounded-2xl overflow-hidden border border-slate-200 h-48 bg-slate-100">
                      <img src={state.programs.youthGovernanceFellowship} className="w-full h-full object-cover" alt="Youth Governance Fellowship" />
                      <label className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, 'program', 'youthGovernanceFellowship')} 
                        />
                        <span className="text-white font-bold text-sm underline">Change Image</span>
                      </label>
                    </div>
                  </div>

                  {/* Public Policy Innovation Lab */}
                  <div className="space-y-4">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Public Policy Innovation Lab
                    </label>
                    <div className="relative group rounded-2xl overflow-hidden border border-slate-200 h-48 bg-slate-100">
                      <img src={state.programs.publicPolicyInnovationLab} className="w-full h-full object-cover" alt="Public Policy Innovation Lab" />
                      <label className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, 'program', 'publicPolicyInnovationLab')} 
                        />
                        <span className="text-white font-bold text-sm underline">Change Image</span>
                      </label>
                    </div>
                  </div>

                  {/* Governance Excellence Award */}
                  <div className="space-y-4">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Governance Excellence Award
                    </label>
                    <div className="relative group rounded-2xl overflow-hidden border border-slate-200 h-48 bg-slate-100">
                      <img src={state.programs.governanceExcellenceAward} className="w-full h-full object-cover" alt="Governance Excellence Award" />
                      <label className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, 'program', 'governanceExcellenceAward')} 
                        />
                        <span className="text-white font-bold text-sm underline">Change Image</span>
                      </label>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="space-y-8 animate-in slide-in-from-right duration-500">
              <div>
                <h3 className="text-xl font-bold font-serif mb-6">Impact Statistics</h3>
                <p className="text-sm text-slate-600 mb-6">Manage the statistics displayed in the stats bar on the homepage.</p>
                
                <div className="space-y-4">
                  {state.stats.map((stat, index) => (
                    <div key={stat.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Value</label>
                          <input 
                            type="text" 
                            value={stat.value}
                            onChange={(e) => {
                              const newStats = [...state.stats];
                              newStats[index] = { ...stat, value: e.target.value };
                              updateStats(newStats);
                            }}
                            className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-white font-bold text-2xl"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Label</label>
                          <input 
                            type="text" 
                            value={stat.label}
                            onChange={(e) => {
                              const newStats = [...state.stats];
                              newStats[index] = { ...stat, label: e.target.value };
                              updateStats(newStats);
                            }}
                            className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-white font-medium"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'compendium' && (
            <div className="space-y-8 animate-in slide-in-from-right duration-500">
              <div>
                <h3 className="text-xl font-bold font-serif mb-6">Compendium Volumes</h3>
                <p className="text-sm text-slate-600 mb-6">Manage the 30-volume Compendium structure and categories.</p>
                
                <div className="space-y-6">
                  {state.compendium.map((category, categoryIndex) => (
                    <div key={category.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                      <div className="mb-4">
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Category Name</label>
                        <input 
                          type="text" 
                          value={category.name}
                          onChange={(e) => {
                            const newCompendium = [...state.compendium];
                            newCompendium[categoryIndex] = { ...category, name: e.target.value };
                            updateCompendium(newCompendium);
                          }}
                          className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-white font-bold"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Description</label>
                        <textarea 
                          rows={2}
                          value={category.description}
                          onChange={(e) => {
                            const newCompendium = [...state.compendium];
                            newCompendium[categoryIndex] = { ...category, description: e.target.value };
                            updateCompendium(newCompendium);
                          }}
                          className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-white font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Volumes</label>
                        <input 
                          type="text" 
                          value={category.volumes}
                          onChange={(e) => {
                            const newCompendium = [...state.compendium];
                            newCompendium[categoryIndex] = { ...category, volumes: e.target.value };
                            updateCompendium(newCompendium);
                          }}
                          className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-white font-medium"
                          placeholder="e.g., Vols I-VIII"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'navigation' && (
            <div className="space-y-8 animate-in slide-in-from-right duration-500">
              <div>
                <h3 className="text-xl font-bold font-serif mb-6">Navigation Menu</h3>
                <p className="text-sm text-slate-600 mb-6">Manage the navigation links displayed in the header.</p>
                
                <div className="space-y-4">
                  {(state.navigation || []).map((link, index) => (
                    <div key={index} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Link Name</label>
                          <input 
                            type="text" 
                            value={link.name}
                            onChange={(e) => {
                              const newNav = [...state.navigation];
                              newNav[index] = { ...link, name: e.target.value };
                              updateNavigation(newNav);
                            }}
                            className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-white font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Link URL</label>
                          <input 
                            type="text" 
                            value={link.href}
                            onChange={(e) => {
                              const newNav = [...state.navigation];
                              newNav[index] = { ...link, href: e.target.value };
                              updateNavigation(newNav);
                            }}
                            className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-white font-medium"
                            placeholder="#/page"
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          const newNav = state.navigation.filter((_, i) => i !== index);
                          updateNavigation(newNav);
                        }}
                        className="mt-4 text-red-600 hover:text-red-700 text-xs font-bold flex items-center gap-1"
                      >
                        <Trash2 size={14} /> Delete Link
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      const newNav = [...state.navigation, { name: 'New Link', href: '#/' }];
                      updateNavigation(newNav);
                    }}
                    className="w-full p-4 bg-amber-50 border-2 border-dashed border-amber-300 rounded-xl text-amber-700 font-bold hover:bg-amber-100 transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus size={18} /> Add Navigation Link
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'footer' && (
            <div className="space-y-8 animate-in slide-in-from-right duration-500">
              <div>
                <h3 className="text-xl font-bold font-serif mb-6">Footer Content</h3>
                <p className="text-sm text-slate-600 mb-6">Manage all footer content including description, links, and copyright.</p>
                
                <div className="space-y-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Footer Description</label>
                    <textarea 
                      rows={3}
                      value={state.footer?.description || ''}
                      onChange={(e) => updateFooter({ ...state.footer, description: e.target.value } as any)}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-white font-medium"
                    />
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Governance Links</label>
                    <div className="space-y-4">
                      {state.footer?.governanceLinks?.map((link, index) => (
                        <div key={index} className="grid md:grid-cols-2 gap-4">
                          <input 
                            type="text" 
                            value={link.label}
                            onChange={(e) => {
                              const newLinks = [...(state.footer?.governanceLinks || [])];
                              newLinks[index] = { ...link, label: e.target.value };
                              updateFooter({ ...state.footer, governanceLinks: newLinks } as any);
                            }}
                            className="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-white font-medium"
                            placeholder="Link Label"
                          />
                          <div className="flex gap-2">
                            <input 
                              type="text" 
                              value={link.href}
                              onChange={(e) => {
                                const newLinks = [...(state.footer?.governanceLinks || [])];
                                newLinks[index] = { ...link, href: e.target.value };
                                updateFooter({ ...state.footer, governanceLinks: newLinks } as any);
                              }}
                              className="flex-1 p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-white font-medium"
                              placeholder="#"
                            />
                            <button
                              onClick={() => {
                                const newLinks = (state.footer?.governanceLinks || []).filter((_, i) => i !== index);
                                updateFooter({ ...state.footer, governanceLinks: newLinks } as any);
                              }}
                              className="p-3 text-red-600 hover:text-red-700"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          const newLinks = [...(state.footer?.governanceLinks || []), { label: 'New Link', href: '#' }];
                          updateFooter({ ...state.footer, governanceLinks: newLinks } as any);
                        }}
                        className="w-full p-3 bg-amber-50 border border-amber-300 rounded-xl text-amber-700 font-bold hover:bg-amber-100 transition-colors flex items-center justify-center gap-2 text-xs"
                      >
                        <Plus size={14} /> Add Governance Link
                      </button>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Footer Links (Privacy, Data Ethics, etc.)</label>
                    <div className="space-y-4">
                      {state.footer?.footerLinks?.map((link, index) => (
                        <div key={index} className="grid md:grid-cols-2 gap-4">
                          <input 
                            type="text" 
                            value={link.label}
                            onChange={(e) => {
                              const newLinks = [...(state.footer?.footerLinks || [])];
                              newLinks[index] = { ...link, label: e.target.value };
                              updateFooter({ ...state.footer, footerLinks: newLinks } as any);
                            }}
                            className="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-white font-medium"
                            placeholder="Link Label"
                          />
                          <div className="flex gap-2">
                            <input 
                              type="text" 
                              value={link.href}
                              onChange={(e) => {
                                const newLinks = [...(state.footer?.footerLinks || [])];
                                newLinks[index] = { ...link, href: e.target.value };
                                updateFooter({ ...state.footer, footerLinks: newLinks } as any);
                              }}
                              className="flex-1 p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-white font-medium"
                              placeholder="#"
                            />
                            <button
                              onClick={() => {
                                const newLinks = (state.footer?.footerLinks || []).filter((_, i) => i !== index);
                                updateFooter({ ...state.footer, footerLinks: newLinks } as any);
                              }}
                              className="p-3 text-red-600 hover:text-red-700"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          const newLinks = [...(state.footer?.footerLinks || []), { label: 'New Link', href: '#' }];
                          updateFooter({ ...state.footer, footerLinks: newLinks } as any);
                        }}
                        className="w-full p-3 bg-amber-50 border border-amber-300 rounded-xl text-amber-700 font-bold hover:bg-amber-100 transition-colors flex items-center justify-center gap-2 text-xs"
                      >
                        <Plus size={14} /> Add Footer Link
                      </button>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Copyright Text</label>
                    <input 
                      type="text" 
                      value={state.footer?.copyright || ''}
                      onChange={(e) => updateFooter({ ...state.footer, copyright: e.target.value } as any)}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-white font-medium"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
