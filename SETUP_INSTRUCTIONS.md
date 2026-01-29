# Quick Setup Instructions for Supabase

Follow these steps in order:

## Step 1: Create Database Tables

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Select your project
3. Click **SQL Editor** in the left sidebar
4. Click **New Query**
5. Open the file `supabase-schema.sql` from this project
6. Copy **ALL** the contents
7. Paste into the SQL Editor
8. Click **Run** (or press Ctrl+Enter)
9. You should see "Success. No rows returned"

## Step 2: Create Storage Bucket

1. In Supabase dashboard, click **Storage** in the left sidebar
2. Click **Create bucket**
3. Name: `ggpa-media`
4. **Uncheck** "Private bucket" (make it public)
5. Click **Create bucket**

## Step 3: Set Up Storage Policies

1. Go back to **SQL Editor**
2. Click **New Query**
3. Open the file `supabase-storage-setup.sql` from this project
4. Copy **ALL** the contents
5. Paste into the SQL Editor
6. Click **Run**

## Step 4: Create Admin User

1. In Supabase dashboard, click **Authentication** in the left sidebar
2. Click **Users** tab
3. Click **Add user** → **Create new user**
4. Enter:
   - **Email**: your-admin-email@example.com
   - **Password**: (choose a strong password)
5. Click **Create user**
6. **Save these credentials** - you'll use them to log into the admin panel!

## Step 5: Test It!

1. Make sure your `.env` file has both:
   - `VITE_SUPABASE_URL=https://yywosmqpkltxzhaiampa.supabase.co`
   - `VITE_SUPABASE_ANON_KEY=sb_publishable_wvuLjqqqH4PULzMbEV5tBw_ixQgKvAd`

2. Restart your dev server:
   ```bash
   npm run dev
   ```

3. Go to: `http://localhost:3000/#/admin`

4. Log in with the admin credentials you created in Step 4

5. Try updating some content - it should save to Supabase!

## Troubleshooting

### Can't log in?
- Make sure you created the user in Supabase Authentication
- Check that the email and password are correct
- Check browser console for errors

### Data not saving?
- Check that all tables were created (go to **Table Editor** in Supabase)
- Verify your `.env` file has the correct credentials
- Check browser console for Supabase errors

### Images not uploading?
- Make sure the `ggpa-media` bucket exists and is public
- Verify storage policies were created
- Check browser console for upload errors

## Need Help?

Check the full guide in `SUPABASE_SETUP.md` for more details.
