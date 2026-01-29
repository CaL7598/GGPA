# Deployment Guide: GGPA Website to GoDaddy Domain via Render

This guide will help you deploy your GGPA website to your GoDaddy domain using Render (free hosting).

## Step 1: Deploy to Render

### Option A: Deploy via Render Dashboard (Recommended)

1. **Go to Render**: Visit [https://render.com](https://render.com)
2. **Sign up/Login**: Create a free account or login (you can use your GitHub account)
3. **Create New Static Site**:
   - Click "New +" → "Static Site"
   - Or go to Dashboard → "New" → "Static Site"
4. **Connect Repository**:
   - Click "Connect GitHub" (or GitLab/Bitbucket)
   - Authorize Render to access your repositories
   - Select your `GGPA` repository
5. **Configure Static Site**:
   - **Name**: `ggpa-website` (or your choice)
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: Leave blank (or `./` if needed)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
6. **Environment Variables** (if using Supabase):
   - Click "Advanced" → "Environment"
   - Add:
     - `VITE_SUPABASE_URL` = Your Supabase URL
     - `VITE_SUPABASE_ANON_KEY` = Your Supabase Anon Key
   - **Important**: Environment variables must start with `VITE_` for Vite to access them
7. **Deploy**: Click "Create Static Site"
8. **Wait**: Render will build and deploy your site (takes 3-5 minutes on first build)

### Option B: Deploy via render.yaml (Automatic)

If you've committed `render.yaml` to your repository:
1. Go to Render Dashboard
2. Click "New +" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect `render.yaml` and configure everything
5. Review settings and click "Apply"

## Step 2: Connect Your GoDaddy Domain

### In Render Dashboard:

1. **Go to Your Static Site**: Click on your deployed site
2. **Go to Settings**: Click "Settings" tab
3. **Custom Domains Section**:
   - Scroll down to "Custom Domains"
   - Click "Add Custom Domain"
   - Enter your GoDaddy domain (e.g., `yourdomain.com`)
   - Click "Save"
   - Render will show you DNS configuration instructions

### In GoDaddy Dashboard:

1. **Login to GoDaddy**: Go to [https://www.godaddy.com](https://www.godaddy.com) and login
2. **Go to DNS Management**:
   - Click "My Products"
   - Find your domain
   - Click "DNS" or "Manage DNS"
3. **Update DNS Records**:
   - Render will provide you with specific DNS records to add
   - You need to add a **CNAME Record**:
     - **Type**: CNAME
     - **Name**: `www` (or `@` for root domain)
     - **Value**: The CNAME value Render provides (e.g., `ggpa-website.onrender.com` or a custom domain)
     - **TTL**: 3600 (or default)
   - **For Root Domain (@)**:
     - Some DNS providers don't support CNAME on root
     - Use Render's provided A record IP addresses if needed
     - Or use a subdomain like `www.yourdomain.com`

### DNS Configuration Options:

**Option 1: Use www subdomain (Easiest)**
- Add CNAME: `www` → `your-render-url.onrender.com`
- Your site will be at `https://www.yourdomain.com`

**Option 2: Use root domain**
- Add A record: `@` → Render's IP addresses (Render will provide)
- Add CNAME: `www` → `your-render-url.onrender.com`
- Your site will be at both `https://yourdomain.com` and `https://www.yourdomain.com`

### DNS Propagation:

- DNS changes can take 24-48 hours to propagate globally
- Usually works within 1-2 hours
- You can check propagation at: [https://www.whatsmydns.net](https://www.whatsmydns.net)

## Step 3: SSL Certificate (Automatic)

- Render automatically provides free SSL certificates (HTTPS)
- Your site will be available at `https://yourdomain.com`
- SSL is set up automatically after DNS propagates (can take a few minutes)

## Step 4: Verify Deployment

1. **Check Render Dashboard**: Your site should show "Live" status
2. **Visit Your Domain**: After DNS propagates, visit `https://yourdomain.com`
3. **Test All Pages**: Make sure routing works correctly
4. **Check HTTPS**: Ensure SSL certificate is active (green lock icon)

## Troubleshooting

### If your domain doesn't work:

1. **Check DNS Propagation**: Use [whatsmydns.net](https://www.whatsmydns.net)
2. **Verify DNS Records**: Make sure records match what Render provided
3. **Check Render Dashboard**: Look for any error messages in the "Events" tab
4. **Wait**: DNS can take up to 48 hours (usually much faster)
5. **Check SSL Status**: In Render dashboard, verify SSL certificate status

### If build fails:

1. **Check Build Logs**: In Render dashboard → Click on your service → "Logs" tab
2. **Common Issues**:
   - Missing environment variables
   - Build errors in code
   - Missing dependencies
   - Node version mismatch (check `render.yaml` has correct Node version)

### If routing doesn't work:

- Render automatically handles SPA routing for static sites
- Make sure you're using `HashRouter` in your React app (which you are)
- If using `BrowserRouter`, you may need to configure redirects in Render

### Environment Variables Not Working:

- **Important**: Vite only exposes environment variables that start with `VITE_`
- Make sure your variables are named `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Restart the service after adding environment variables

## Render Free Tier Limits

- **Static Sites**: Free forever
- **Bandwidth**: 100 GB/month
- **Build Time**: 750 minutes/month
- **Auto-deploy**: Every push to main branch
- **Custom Domains**: Free
- **SSL**: Free automatic SSL

## Auto-Deployments

- Render automatically deploys on every push to your main branch
- You can also manually trigger deployments from the dashboard
- Check "Events" tab to see deployment history

## Important Notes

- **Free Tier**: Render's free tier is generous and perfect for most sites
- **Sleep Mode**: Free static sites don't sleep (always available)
- **Build Time**: First build takes 3-5 minutes, subsequent builds are faster
- **Environment Variables**: Add them in Render dashboard, not in code
- **Node Version**: Specified in `render.yaml` (currently 18.x)

## Alternative: Manual Deployment

If you prefer to build locally and upload:

```bash
# Build the project
npm run build

# The dist folder contains your built site
# You can upload this to any static hosting service
```

## Need Help?

- Render Docs: [https://render.com/docs](https://render.com/docs)
- Render Support: [https://render.com/support](https://render.com/support)
- GoDaddy DNS Help: [https://www.godaddy.com/help](https://www.godaddy.com/help)

## Quick Checklist

- [ ] Created Render account
- [ ] Connected GitHub repository
- [ ] Created Static Site in Render
- [ ] Added environment variables (if needed)
- [ ] Site deployed successfully
- [ ] Added custom domain in Render
- [ ] Updated DNS records in GoDaddy
- [ ] Waited for DNS propagation
- [ ] Verified SSL certificate
- [ ] Tested site at custom domain
