-- GGPA Storage Bucket Setup for Supabase
-- Run this AFTER creating the storage bucket manually in the Supabase dashboard

-- ============================================
-- STORAGE POLICIES
-- ============================================

-- Allow public read access to storage
CREATE POLICY "Public read access" ON storage.objects
FOR SELECT USING (bucket_id = 'ggpa-media');

-- Allow authenticated users to upload
CREATE POLICY "Authenticated upload access" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'ggpa-media' AND 
  auth.role() = 'authenticated'
);

-- Allow authenticated users to update
CREATE POLICY "Authenticated update access" ON storage.objects
FOR UPDATE USING (
  bucket_id = 'ggpa-media' AND 
  auth.role() = 'authenticated'
);

-- Allow authenticated users to delete
CREATE POLICY "Authenticated delete access" ON storage.objects
FOR DELETE USING (
  bucket_id = 'ggpa-media' AND 
  auth.role() = 'authenticated'
);
