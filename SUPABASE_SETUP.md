# Supabase Setup Guide for GGPA

This guide will help you set up Supabase for the GGPA website.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in:
   - **Name**: GGPA Website
   - **Database Password**: (choose a strong password)
   - **Region**: Choose closest to your users
5. Click "Create new project" (takes 1-2 minutes)

## Step 2: Get Your API Keys

1. In your Supabase project, go to **Settings** → **API**
2. You'll see two tabs:
   - **"Publishable and secret API keys"** (new format) - **USE THIS ONE**
   - **"Legacy anon, service_role API keys"** (old format)
3. Click on **"Publishable and secret API keys"** tab
4. Copy:
   - **Project URL** (shown at the top of the page)
   - **Publishable key** (this is the public key safe for client-side use)
   
   **Note**: If you only see the legacy tab, use the **anon public** key from there. Both work the same way.

## Step 3: Set Environment Variables

Create a `.env` file in your project root:

```env
VITE_SUPABASE_URL=your-project-url-here
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

**Important**: Add `.env` to your `.gitignore` file to keep credentials secure!

## Step 4: Create Database Tables

Run these SQL commands in your Supabase SQL Editor (SQL Editor → New Query):

```sql
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

-- Enable Row Level Security (RLS)
ALTER TABLE hero ENABLE ROW LEVEL SECURITY;
ALTER TABLE founder ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;

-- Create policies: Allow public read, authenticated write
CREATE POLICY "Public read access" ON hero FOR SELECT USING (true);
CREATE POLICY "Authenticated write access" ON hero FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Public read access" ON founder FOR SELECT USING (true);
CREATE POLICY "Authenticated write access" ON founder FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Public read access" ON news FOR SELECT USING (true);
CREATE POLICY "Authenticated write access" ON news FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Public read access" ON programs FOR SELECT USING (true);
CREATE POLICY "Authenticated write access" ON programs FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Public read access" ON contact FOR SELECT USING (true);
CREATE POLICY "Authenticated write access" ON contact FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Public read access" ON gallery FOR SELECT USING (true);
CREATE POLICY "Authenticated write access" ON gallery FOR ALL USING (auth.role() = 'authenticated');
```

## Step 5: Create Storage Bucket

1. Go to **Storage** in your Supabase dashboard
2. Click "Create bucket"
3. Name: `ggpa-media`
4. Make it **Public** (uncheck "Private bucket")
5. Click "Create bucket"

## Step 6: Set Up Storage Policies

In the SQL Editor, run:

```sql
-- Allow public read access to storage
CREATE POLICY "Public read access" ON storage.objects
FOR SELECT USING (bucket_id = 'ggpa-media');

-- Allow authenticated users to upload
CREATE POLICY "Authenticated upload access" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'ggpa-media' AND 
  auth.role() = 'authenticated'
);

-- Allow authenticated users to update/delete
CREATE POLICY "Authenticated update access" ON storage.objects
FOR UPDATE USING (
  bucket_id = 'ggpa-media' AND 
  auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated delete access" ON storage.objects
FOR DELETE USING (
  bucket_id = 'ggpa-media' AND 
  auth.role() = 'authenticated'
);
```

## Step 7: Create Admin User

1. Go to **Authentication** → **Users** in Supabase
2. Click "Add user" → "Create new user"
3. Enter:
   - **Email**: your-admin-email@example.com
   - **Password**: (choose a strong password)
4. Click "Create user"

**Important**: Save these credentials securely! You'll use them to log into the admin panel.

## Step 8: Insert Initial Data (Optional)

You can insert default data or let the app use localStorage fallback:

```sql
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
  'David Sekyi Yirenkyi',
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
```

## Step 9: Test the Integration

1. Restart your dev server: `npm run dev`
2. Go to `http://localhost:3000/#/admin`
3. You should see the login page
4. Log in with the admin credentials you created
5. Try updating content - it should save to Supabase!

## Troubleshooting

### Images not uploading?
- Check that the storage bucket `ggpa-media` exists and is public
- Verify storage policies are set correctly
- Check browser console for errors

### Can't log in?
- Verify your email and password are correct
- Check that the user exists in Supabase Authentication
- Check browser console for auth errors

### Data not loading?
- Verify your `.env` file has correct credentials
- Check that tables exist in your database
- Check browser console for Supabase errors
- The app will fallback to localStorage if Supabase fails

## Security Notes

- Never commit `.env` file to git
- Use environment variables in production
- Consider using Supabase's service role key only on the server side
- Regularly rotate your API keys
- Monitor your Supabase dashboard for unusual activity

## Next Steps

- Set up custom domain for Supabase (optional)
- Configure email templates for authentication
- Set up backup strategies
- Monitor usage and optimize queries
