import { supabase, TABLES, STORAGE_BUCKET } from './supabase';
import { AppState, NewsItem, GalleryImage, ContactInfo, Programs } from '../types';

// Helper to upload image to Supabase Storage
export const uploadImage = async (file: File, path: string): Promise<string | null> => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${path}/${Date.now()}.${fileExt}`;
    const filePath = fileName;

    const { error: uploadError } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return null;
    }

    const { data } = supabase.storage
      .from(STORAGE_BUCKET)
      .getPublicUrl(filePath);

    return data.publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
};

// Content Management Functions
export const supabaseService = {
  // Hero Section
  async getHero() {
    const { data, error } = await supabase
      .from(TABLES.HERO)
      .select('*')
      .single();
    
    if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows
    return data;
  },

  async updateHero(hero: AppState['hero']) {
    const { error } = await supabase
      .from(TABLES.HERO)
      .upsert({ id: 1, ...hero }, { onConflict: 'id' });
    
    if (error) throw error;
  },

  // Founder Section
  async getFounder() {
    const { data, error } = await supabase
      .from(TABLES.FOUNDER)
      .select('*')
      .single();
    
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  async updateFounder(founder: AppState['founder']) {
    const { error } = await supabase
      .from(TABLES.FOUNDER)
      .upsert({ id: 1, ...founder }, { onConflict: 'id' });
    
    if (error) throw error;
  },

  // News
  async getNews(): Promise<NewsItem[]> {
    const { data, error } = await supabase
      .from(TABLES.NEWS)
      .select('*')
      .order('date', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async addNews(item: NewsItem) {
    const { error } = await supabase
      .from(TABLES.NEWS)
      .insert(item);
    
    if (error) throw error;
  },

  async deleteNews(id: string) {
    const { error } = await supabase
      .from(TABLES.NEWS)
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  // Programs
  async getPrograms(): Promise<Programs | null> {
    const { data, error } = await supabase
      .from(TABLES.PROGRAMS)
      .select('*')
      .single();
    
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  async updatePrograms(programs: Programs) {
    const { error } = await supabase
      .from(TABLES.PROGRAMS)
      .upsert({ id: 1, ...programs }, { onConflict: 'id' });
    
    if (error) throw error;
  },

  // Contact
  async getContact(): Promise<ContactInfo | null> {
    const { data, error } = await supabase
      .from(TABLES.CONTACT)
      .select('*')
      .single();
    
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  async updateContact(contact: ContactInfo) {
    const { error } = await supabase
      .from(TABLES.CONTACT)
      .upsert({ id: 1, ...contact }, { onConflict: 'id' });
    
    if (error) throw error;
  },

  // Gallery
  async getGallery(): Promise<GalleryImage[]> {
    const { data, error } = await supabase
      .from(TABLES.GALLERY)
      .select('*')
      .order('date', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async addGalleryImage(img: GalleryImage) {
    const { error } = await supabase
      .from(TABLES.GALLERY)
      .insert(img);
    
    if (error) throw error;
  },

  async deleteGalleryImage(id: string) {
    const { error } = await supabase
      .from(TABLES.GALLERY)
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },
};
