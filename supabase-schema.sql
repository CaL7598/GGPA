-- GGPA Database Schema for Supabase
-- Copy and paste this entire file into Supabase SQL Editor

-- ============================================
-- 1. CREATE TABLES
-- ============================================

-- Hero Section
CREATE TABLE IF NOT EXISTS hero (
  id INTEGER PRIMARY KEY DEFAULT 1,
  headline TEXT NOT NULL,
  subHeadline TEXT NOT NULL,
  image TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Founder Section
CREATE TABLE IF NOT EXISTS founder (
  id INTEGER PRIMARY KEY DEFAULT 1,
  quote TEXT NOT NULL,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- News/News Items
CREATE TABLE IF NOT EXISTS news (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL CHECK (category IN ('Press', 'Field Notes', 'Academy', 'Editorial')),
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  author TEXT,
  content TEXT,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Programs
CREATE TABLE IF NOT EXISTS programs (
  id INTEGER PRIMARY KEY DEFAULT 1,
  globalGovernanceForum TEXT NOT NULL,
  youthGovernanceFellowship TEXT NOT NULL,
  publicPolicyInnovationLab TEXT NOT NULL,
  governanceExcellenceAward TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact Information
CREATE TABLE IF NOT EXISTS contact (
  id INTEGER PRIMARY KEY DEFAULT 1,
  location TEXT NOT NULL,
  locationDetail TEXT NOT NULL,
  telephone TEXT NOT NULL,
  email TEXT NOT NULL,
  officeHours TEXT NOT NULL,
  officeHoursDetail TEXT NOT NULL,
  mediaEmail TEXT,
  partnershipsEmail TEXT,
  yacEmail TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Gallery Images
CREATE TABLE IF NOT EXISTS gallery (
  id TEXT PRIMARY KEY,
  url TEXT NOT NULL,
  caption TEXT NOT NULL,
  date TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 2. ENABLE ROW LEVEL SECURITY (RLS)
-- ============================================

ALTER TABLE hero ENABLE ROW LEVEL SECURITY;
ALTER TABLE founder ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;

-- ============================================
-- 3. CREATE POLICIES
-- ============================================

-- Hero Policies
CREATE POLICY "Public read access" ON hero FOR SELECT USING (true);
CREATE POLICY "Authenticated write access" ON hero FOR ALL USING (auth.role() = 'authenticated');

-- Founder Policies
CREATE POLICY "Public read access" ON founder FOR SELECT USING (true);
CREATE POLICY "Authenticated write access" ON founder FOR ALL USING (auth.role() = 'authenticated');

-- News Policies
CREATE POLICY "Public read access" ON news FOR SELECT USING (true);
CREATE POLICY "Authenticated write access" ON news FOR ALL USING (auth.role() = 'authenticated');

-- Programs Policies
CREATE POLICY "Public read access" ON programs FOR SELECT USING (true);
CREATE POLICY "Authenticated write access" ON programs FOR ALL USING (auth.role() = 'authenticated');

-- Contact Policies
CREATE POLICY "Public read access" ON contact FOR SELECT USING (true);
CREATE POLICY "Authenticated write access" ON contact FOR ALL USING (auth.role() = 'authenticated');

-- Gallery Policies
CREATE POLICY "Public read access" ON gallery FOR SELECT USING (true);
CREATE POLICY "Authenticated write access" ON gallery FOR ALL USING (auth.role() = 'authenticated');

-- ============================================
-- 4. INSERT DEFAULT DATA (Optional)
-- ============================================

-- Insert default hero
INSERT INTO hero (id, headline, subHeadline, image) VALUES (
  1,
  'Architecting the Future of Global Governance',
  'A youth-led technical alliance bridging the gap between visionary policy and on-the-ground administrative implementation.',
  'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1200'
) ON CONFLICT (id) DO NOTHING;

-- Insert default founder
INSERT INTO founder (id, quote, name, title, image) VALUES (
  1,
  'We are moving the conversation from ''asking for inclusion'' to ''providing technical solutions.'' Functional Authority is the end of tokenism and the beginning of the Technical Elite.',
  'Dr. David Sekyi Yirenkyi',
  'Founder & Executive Director, Researcher in IR',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
) ON CONFLICT (id) DO NOTHING;

-- Insert default programs
INSERT INTO programs (id, globalGovernanceForum, youthGovernanceFellowship, publicPolicyInnovationLab, governanceExcellenceAward) VALUES (
  1,
  'https://img.freepik.com/free-photo/african-diplomats-international-conference-meeting_1150-10194.jpg',
  'https://img.freepik.com/free-photo/young-african-professionals-learning-working-together_1150-10195.jpg',
  'https://img.freepik.com/free-photo/african-researchers-innovators-working-together-lab_1150-10196.jpg',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800'
) ON CONFLICT (id) DO NOTHING;

-- Insert default contact
INSERT INTO contact (id, location, locationDetail, telephone, email, officeHours, officeHoursDetail, mediaEmail, partnershipsEmail, yacEmail) VALUES (
  1,
  'Accra, Ghana',
  'Diplomatic Enclave',
  '+233 (0) XXX XXX XXX',
  'secretariat@ggpa-global.org',
  'Monday - Friday: 9:00 AM - 5:00 PM GMT',
  'By appointment for diplomatic engagements',
  'media@ggpa-global.org',
  'partnerships@ggpa-global.org',
  'yac@ggpa-global.org'
) ON CONFLICT (id) DO NOTHING;
