import { createClient } from '@supabase/supabase-js';

// These will be set via environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Using localStorage fallback.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

// Database table names
export const TABLES = {
  HERO: 'hero',
  FOUNDER: 'founder',
  NEWS: 'news',
  PROGRAMS: 'programs',
  CONTACT: 'contact',
  GALLERY: 'gallery',
  STATS: 'stats',
} as const;

// Storage bucket name
export const STORAGE_BUCKET = 'ggpa-media';
