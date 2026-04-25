import { supabase, TABLES, STORAGE_BUCKET, DOCUMENTS_BUCKET, isSupabaseConfigured } from './supabase';
import { AppState, NewsItem, GalleryImage, ContactInfo, Programs, LibraryDocument } from '../types';

// Helper to upload image to Supabase Storage
export const uploadImage = async (file: File, path: string): Promise<string | null> => {
  if (!isSupabaseConfigured()) {
    console.warn('Supabase not configured. Cannot upload image.');
    return null;
  }

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
    if (!isSupabaseConfigured()) return null;
    
    const { data, error } = await supabase
      .from(TABLES.HERO)
      .select('*')
      .single();
    
    if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows
    return data;
  },

  async updateHero(hero: AppState['hero']) {
    if (!isSupabaseConfigured()) return;
    
    const { error } = await supabase
      .from(TABLES.HERO)
      .upsert({ id: 1, ...hero }, { onConflict: 'id' });
    
    if (error) throw error;
  },

  // Founder Section
  async getFounder() {
    if (!isSupabaseConfigured()) return null;
    
    const { data, error } = await supabase
      .from(TABLES.FOUNDER)
      .select('*')
      .single();
    
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  async updateFounder(founder: AppState['founder']) {
    if (!isSupabaseConfigured()) return;
    
    const { error } = await supabase
      .from(TABLES.FOUNDER)
      .upsert({ id: 1, ...founder }, { onConflict: 'id' });
    
    if (error) throw error;
  },

  // News
  async getNews(): Promise<NewsItem[]> {
    if (!isSupabaseConfigured()) return [];
    
    const { data, error } = await supabase
      .from(TABLES.NEWS)
      .select('*')
      .order('date', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async addNews(item: NewsItem) {
    if (!isSupabaseConfigured()) return;
    
    const { error } = await supabase
      .from(TABLES.NEWS)
      .insert(item);
    
    if (error) throw error;
  },

  async deleteNews(id: string) {
    if (!isSupabaseConfigured()) return;
    
    const { error } = await supabase
      .from(TABLES.NEWS)
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  // Programs
  async getPrograms(): Promise<Programs | null> {
    if (!isSupabaseConfigured()) return null;
    
    const { data, error } = await supabase
      .from(TABLES.PROGRAMS)
      .select('*')
      .single();
    
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  async updatePrograms(programs: Programs) {
    if (!isSupabaseConfigured()) return;
    
    const { error } = await supabase
      .from(TABLES.PROGRAMS)
      .upsert({ id: 1, ...programs }, { onConflict: 'id' });
    
    if (error) throw error;
  },

  // Contact
  async getContact(): Promise<ContactInfo | null> {
    if (!isSupabaseConfigured()) return null;
    
    const { data, error } = await supabase
      .from(TABLES.CONTACT)
      .select('*')
      .single();
    
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  async updateContact(contact: ContactInfo) {
    if (!isSupabaseConfigured()) return;
    
    const { error } = await supabase
      .from(TABLES.CONTACT)
      .upsert({ id: 1, ...contact }, { onConflict: 'id' });
    
    if (error) throw error;
  },

  // Gallery
  async getGallery(): Promise<GalleryImage[]> {
    if (!isSupabaseConfigured()) return [];
    
    const { data, error } = await supabase
      .from(TABLES.GALLERY)
      .select('*')
      .order('date', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async addGalleryImage(img: GalleryImage) {
    if (!isSupabaseConfigured()) return;
    
    const { error } = await supabase
      .from(TABLES.GALLERY)
      .insert(img);
    
    if (error) throw error;
  },

  async deleteGalleryImage(id: string) {
    if (!isSupabaseConfigured()) return;

    const { error } = await supabase
      .from(TABLES.GALLERY)
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  // Library Documents
  async getDocuments(): Promise<LibraryDocument[]> {
    if (!isSupabaseConfigured()) return [];

    const { data, error } = await supabase
      .from(TABLES.DOCUMENTS)
      .select('*')
      .order('uploaded_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async uploadDocument(file: File, title: string, description: string, categoryName?: string): Promise<LibraryDocument | null> {
    if (!isSupabaseConfigured()) return null;

    const filePath = `documents/${Date.now()}_${file.name.replace(/\s+/g, '_')}`;

    const { error: uploadError } = await supabase.storage
      .from(DOCUMENTS_BUCKET)
      .upload(filePath, file, { upsert: false });

    if (uploadError) throw uploadError;

    const { data: urlData } = supabase.storage
      .from(DOCUMENTS_BUCKET)
      .getPublicUrl(filePath);

    const record = {
      title,
      description,
      file_url: urlData.publicUrl,
      file_name: file.name,
      file_path: filePath,
      category_name: categoryName || null,
    };

    const { data, error: insertError } = await supabase
      .from(TABLES.DOCUMENTS)
      .insert(record)
      .select()
      .single();

    if (insertError) throw insertError;
    return data;
  },

  async deleteDocument(id: string, filePath: string) {
    if (!isSupabaseConfigured()) return;

    await supabase.storage.from(DOCUMENTS_BUCKET).remove([filePath]);

    const { error } = await supabase
      .from(TABLES.DOCUMENTS)
      .delete()
      .eq('id', id);

    if (error) throw error;
  },
};
