-- Fix RLS Policies to Allow Anonymous Writes
-- Run this in Supabase SQL Editor to fix the 401 errors

-- Drop existing write policies
DROP POLICY IF EXISTS "Authenticated write access" ON hero;
DROP POLICY IF EXISTS "Authenticated write access" ON founder;
DROP POLICY IF EXISTS "Authenticated write access" ON news;
DROP POLICY IF EXISTS "Authenticated write access" ON programs;
DROP POLICY IF EXISTS "Authenticated write access" ON contact;
DROP POLICY IF EXISTS "Authenticated write access" ON gallery;

-- Create new policies that allow anonymous writes
-- (You can restrict this later if needed for security)

-- Hero: Allow public writes
CREATE POLICY "Public write access" ON hero FOR ALL USING (true) WITH CHECK (true);

-- Founder: Allow public writes
CREATE POLICY "Public write access" ON founder FOR ALL USING (true) WITH CHECK (true);

-- News: Allow public writes
CREATE POLICY "Public write access" ON news FOR ALL USING (true) WITH CHECK (true);

-- Programs: Allow public writes
CREATE POLICY "Public write access" ON programs FOR ALL USING (true) WITH CHECK (true);

-- Contact: Allow public writes
CREATE POLICY "Public write access" ON contact FOR ALL USING (true) WITH CHECK (true);

-- Gallery: Allow public writes
CREATE POLICY "Public write access" ON gallery FOR ALL USING (true) WITH CHECK (true);
