
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppState, NewsItem, Stats, VolumeCategory, GalleryImage, ContactInfo } from '../types';
import { IMPACT_STATS, NEWS_ITEMS, VOLUME_CATEGORIES } from '../constants';

interface ContentContextType {
  state: AppState;
  updateHero: (hero: AppState['hero']) => void;
  updateFounder: (founder: AppState['founder']) => void;
  addNews: (item: NewsItem) => void;
  deleteNews: (id: string) => void;
  updateStats: (stats: Stats[]) => void;
  addGalleryImage: (img: GalleryImage) => void;
  deleteGalleryImage: (id: string) => void;
  updateCompendium: (categories: VolumeCategory[]) => void;
  updateContact: (contact: ContactInfo) => void;
  resetToDefault: () => void;
}

const DEFAULT_STATE: AppState = {
  hero: {
    headline: "Architecting the Future of Global Governance",
    subHeadline: "A youth-led technical alliance bridging the gap between visionary policy and on-the-ground administrative implementation.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1200",
  },
  founder: {
    quote: "We are moving the conversation from 'asking for inclusion' to 'providing technical solutions.' Functional Authority is the end of tokenism and the beginning of the Technical Elite.",
    name: "Dr. David Sekyi Yirenkyi",
    title: "Founder & Executive Director, Researcher in IR",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  // Fix: Removed redundant mapping as constants now provide valid types with IDs
  stats: IMPACT_STATS,
  news: NEWS_ITEMS,
  compendium: VOLUME_CATEGORIES,
  gallery: [
    { id: '1', url: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800', caption: 'Diplomatic Summit 2026', date: 'Jan 15, 2026' },
    { id: '2', url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800', caption: 'In-Situ Audit Briefing', date: 'Feb 02, 2026' },
    { id: '3', url: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800', caption: 'Secretariat Planning Session', date: 'Feb 10, 2026' },
  ],
  contact: {
    location: 'Accra, Ghana',
    locationDetail: 'Diplomatic Enclave',
    telephone: '+233 (0) XXX XXX XXX',
    email: 'secretariat@ggpa-global.org',
    officeHours: 'Monday - Friday: 9:00 AM - 5:00 PM GMT',
    officeHoursDetail: 'By appointment for diplomatic engagements',
    mediaEmail: 'media@ggpa-global.org',
    partnershipsEmail: 'partnerships@ggpa-global.org',
    yacEmail: 'yac@ggpa-global.org',
  },
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem('ggpa_content_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure contact info exists (migration for old localStorage data)
      if (!parsed.contact) {
        parsed.contact = DEFAULT_STATE.contact;
      }
      return parsed;
    }
    return DEFAULT_STATE;
  });

  useEffect(() => {
    localStorage.setItem('ggpa_content_state', JSON.stringify(state));
  }, [state]);

  const updateHero = (hero: AppState['hero']) => setState(prev => ({ ...prev, hero }));
  const updateFounder = (founder: AppState['founder']) => setState(prev => ({ ...prev, founder }));
  const addNews = (item: NewsItem) => setState(prev => ({ ...prev, news: [item, ...prev.news] }));
  const deleteNews = (id: string) => setState(prev => ({ ...prev, news: prev.news.filter(n => n.id !== id) }));
  const updateStats = (stats: Stats[]) => setState(prev => ({ ...prev, stats }));
  const addGalleryImage = (img: GalleryImage) => setState(prev => ({ ...prev, gallery: [img, ...prev.gallery] }));
  const deleteGalleryImage = (id: string) => setState(prev => ({ ...prev, gallery: prev.gallery.filter(g => g.id !== id) }));
  const updateCompendium = (compendium: VolumeCategory[]) => setState(prev => ({ ...prev, compendium }));
  const updateContact = (contact: ContactInfo) => setState(prev => ({ ...prev, contact }));
  const resetToDefault = () => setState(DEFAULT_STATE);

  return (
    <ContentContext.Provider value={{ 
      state, updateHero, updateFounder, addNews, deleteNews, 
      updateStats, addGalleryImage, deleteGalleryImage, updateCompendium, updateContact, resetToDefault 
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within ContentProvider');
  return context;
};
