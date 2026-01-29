import { createClient, SupabaseClient } from '@supabase/supabase-js';

// These will be set via environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Debug: Log what we're getting (only in dev mode)
if (import.meta.env.DEV) {
  console.log('Supabase Config Check:', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey,
    urlLength: supabaseUrl.length,
    keyLength: supabaseAnonKey.length,
    urlStartsWithHttp: supabaseUrl.startsWith('http')
  });
}

// Check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  const isConfigured = !!(supabaseUrl && supabaseAnonKey && supabaseUrl.trim() !== '' && supabaseUrl.startsWith('http'));
  return isConfigured;
};

// Create Supabase client safely - wrap in try-catch to prevent module loading failures
let supabaseInstance: SupabaseClient;

try {
  if (isSupabaseConfigured()) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    });
  } else {
    console.warn('Supabase credentials not found. Using localStorage fallback.');
    // Use the actual URL format but with dummy values - Supabase library will accept this
    // The service layer checks isSupabaseConfigured() before using it
    supabaseInstance = createClient('https://xxxxxxxxxxxxx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTIwMDAsImV4cCI6MTk2MDc2ODAwMH0.placeholder', {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }
} catch (error) {
  console.error('Error creating Supabase client:', error);
  // Last resort: create with minimal valid format
  try {
    supabaseInstance = createClient('https://xxxxxxxxxxxxx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTIwMDAsImV4cCI6MTk2MDc2ODAwMH0.placeholder', {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  } catch (fallbackError) {
    // If even this fails, we have a bigger problem - but we need to export something
    console.error('Critical: Failed to create Supabase client:', fallbackError);
    throw new Error('Failed to initialize Supabase client. Please check your configuration.');
  }
}

export const supabase = supabaseInstance;

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
