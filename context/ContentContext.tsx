
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppState, NewsItem, Stats, VolumeCategory, GalleryImage, ContactInfo, Programs } from '../types';
import { IMPACT_STATS, NEWS_ITEMS, VOLUME_CATEGORIES } from '../constants';
import { supabaseService } from '../lib/supabaseService';
import { supabase } from '../lib/supabase';

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
  updatePrograms: (programs: Programs) => void;
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
  programs: {
    globalGovernanceForum: 'https://img.freepik.com/free-photo/african-diplomats-international-conference-meeting_1150-10194.jpg?w=800&t=st=1704067200~exp=1704067800~hmac=PLACEHOLDER_REPLACE_WITH_FREEPIK_AFRICAN_CONFERENCE',
    youthGovernanceFellowship: 'https://img.freepik.com/free-photo/young-african-professionals-learning-working-together_1150-10195.jpg?w=800&t=st=1704067200~exp=1704067800~hmac=PLACEHOLDER_REPLACE_WITH_FREEPIK_AFRICAN_YOUTH_FELLOWSHIP',
    publicPolicyInnovationLab: 'https://img.freepik.com/free-photo/african-researchers-innovators-working-together-lab_1150-10196.jpg?w=800&t=st=1704067200~exp=1704067800~hmac=PLACEHOLDER_REPLACE_WITH_FREEPIK_AFRICAN_INNOVATION_LAB',
    governanceExcellenceAward: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800',
  },
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// Check if Supabase is configured
const isSupabaseConfigured = () => {
  return !!(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY);
};

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(DEFAULT_STATE);
  const [loading, setLoading] = useState(true);

  // Load data from Supabase or localStorage on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        if (isSupabaseConfigured()) {
          // Load from Supabase
          const [hero, founder, news, programs, contact, gallery] = await Promise.all([
            supabaseService.getHero().catch(() => null),
            supabaseService.getFounder().catch(() => null),
            supabaseService.getNews().catch(() => []),
            supabaseService.getPrograms().catch(() => null),
            supabaseService.getContact().catch(() => null),
            supabaseService.getGallery().catch(() => []),
          ]);

          setState(prev => ({
            ...prev,
            hero: hero || prev.hero,
            founder: founder || prev.founder,
            news: news.length > 0 ? news : prev.news,
            programs: programs || prev.programs,
            contact: contact || prev.contact,
            gallery: gallery.length > 0 ? gallery : prev.gallery,
          }));
        } else {
          // Fallback to localStorage
          const saved = localStorage.getItem('ggpa_content_state');
          if (saved) {
            const parsed = JSON.parse(saved);
            if (!parsed.contact) parsed.contact = DEFAULT_STATE.contact;
            if (!parsed.programs) parsed.programs = DEFAULT_STATE.programs;
            setState(parsed);
          }
        }
      } catch (error) {
        console.error('Error loading data:', error);
        // Fallback to localStorage on error
        const saved = localStorage.getItem('ggpa_content_state');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (!parsed.contact) parsed.contact = DEFAULT_STATE.contact;
          if (!parsed.programs) parsed.programs = DEFAULT_STATE.programs;
          setState(parsed);
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Save to both Supabase and localStorage
  useEffect(() => {
    if (loading) return;
    
    // Always save to localStorage as backup
    localStorage.setItem('ggpa_content_state', JSON.stringify(state));

    // Save to Supabase if configured
    if (isSupabaseConfigured()) {
      const saveToSupabase = async () => {
        try {
          await Promise.all([
            supabaseService.updateHero(state.hero).catch(console.error),
            supabaseService.updateFounder(state.founder).catch(console.error),
            supabaseService.updatePrograms(state.programs).catch(console.error),
            supabaseService.updateContact(state.contact).catch(console.error),
          ]);
        } catch (error) {
          console.error('Error saving to Supabase:', error);
        }
      };
      saveToSupabase();
    }
  }, [state, loading]);

  const updateHero = async (hero: AppState['hero']) => {
    setState(prev => ({ ...prev, hero }));
    if (isSupabaseConfigured()) {
      try {
        await supabaseService.updateHero(hero);
      } catch (error) {
        console.error('Error updating hero:', error);
      }
    }
  };

  const updateFounder = async (founder: AppState['founder']) => {
    setState(prev => ({ ...prev, founder }));
    if (isSupabaseConfigured()) {
      try {
        await supabaseService.updateFounder(founder);
      } catch (error) {
        console.error('Error updating founder:', error);
      }
    }
  };

  const addNews = async (item: NewsItem) => {
    setState(prev => ({ ...prev, news: [item, ...prev.news] }));
    if (isSupabaseConfigured()) {
      try {
        await supabaseService.addNews(item);
      } catch (error) {
        console.error('Error adding news:', error);
      }
    }
  };

  const deleteNews = async (id: string) => {
    setState(prev => ({ ...prev, news: prev.news.filter(n => n.id !== id) }));
    if (isSupabaseConfigured()) {
      try {
        await supabaseService.deleteNews(id);
      } catch (error) {
        console.error('Error deleting news:', error);
      }
    }
  };

  const updateStats = (stats: Stats[]) => setState(prev => ({ ...prev, stats }));

  const addGalleryImage = async (img: GalleryImage) => {
    setState(prev => ({ ...prev, gallery: [img, ...prev.gallery] }));
    if (isSupabaseConfigured()) {
      try {
        await supabaseService.addGalleryImage(img);
      } catch (error) {
        console.error('Error adding gallery image:', error);
      }
    }
  };

  const deleteGalleryImage = async (id: string) => {
    setState(prev => ({ ...prev, gallery: prev.gallery.filter(g => g.id !== id) }));
    if (isSupabaseConfigured()) {
      try {
        await supabaseService.deleteGalleryImage(id);
      } catch (error) {
        console.error('Error deleting gallery image:', error);
      }
    }
  };

  const updateCompendium = (compendium: VolumeCategory[]) => setState(prev => ({ ...prev, compendium }));

  const updateContact = async (contact: ContactInfo) => {
    setState(prev => ({ ...prev, contact }));
    if (isSupabaseConfigured()) {
      try {
        await supabaseService.updateContact(contact);
      } catch (error) {
        console.error('Error updating contact:', error);
      }
    }
  };

  const updatePrograms = async (programs: Programs) => {
    setState(prev => ({ ...prev, programs }));
    if (isSupabaseConfigured()) {
      try {
        await supabaseService.updatePrograms(programs);
      } catch (error) {
        console.error('Error updating programs:', error);
      }
    }
  };

  const resetToDefault = () => setState(DEFAULT_STATE);

  return (
    <ContentContext.Provider value={{ 
      state, updateHero, updateFounder, addNews, deleteNews, 
      updateStats, addGalleryImage, deleteGalleryImage, updateCompendium, updateContact, updatePrograms, resetToDefault 
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
