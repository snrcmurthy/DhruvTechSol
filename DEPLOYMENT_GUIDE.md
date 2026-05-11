# Deployment Guide - GitHub & Vercel

## 🚀 Quick Start Deployment

Follow these steps to deploy your website to GitHub and Vercel.

---

## Part 1: Deploy to GitHub

### Step 1: Initialize Git Repository

Open your terminal in the project folder and run:

```bash
cd "C:\Users\snrcm\OneDrive\Documents\AI\DhruvTechSol"
git init
```

### Step 2: Add All Files

```bash
git add .
```

### Step 3: Create Initial Commit

```bash
git commit -m "Initial commit - Dhruv Technology Solutions website"
```

### Step 4: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** icon in the top right
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `dhruv-tech-solutions` (or your preferred name)
   - **Description**: "AI & IT Consulting Services Website"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### Step 5: Connect Local Repository to GitHub

Copy the commands from GitHub (they'll look like this):

```bash
git remote add origin https://github.com/YOUR-USERNAME/dhruv-tech-solutions.git
git branch -M main
git push -u origin main
```

**Replace `YOUR-USERNAME` with your actual GitHub username!**

### Step 6: Verify Upload

Refresh your GitHub repository page - you should see all your files!

---

## Part 2: Deploy to Vercel

### Step 1: Create Vercel Account

1. Go to [Vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Repository

1. Once logged in, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **"dhruv-tech-solutions"** (or whatever you named it)
4. Click **"Import"**

### Step 3: Configure Project

Vercel will auto-detect your project settings:

- **Framework Preset**: Other (or None)
- **Root Directory**: `./` (leave as default)
- **Build Command**: Leave empty (static site)
- **Output Directory**: Leave empty (static site)

Click **"Deploy"**

### Step 4: Wait for Deployment

Vercel will:
1. Build your site (takes 30-60 seconds)
2. Deploy to a production URL
3. Show you a success screen with your live URL!

### Step 5: Get Your Live URL

Your site will be live at:
```
https://dhruv-tech-solutions.vercel.app
```

Or a similar URL based on your project name.

---

## Part 3: Custom Domain (Optional)

### Add Your Own Domain

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Enter your domain name (e.g., `dhruv-tech-solutions.com`)
4. Follow Vercel's instructions to update your DNS settings
5. Wait for DNS propagation (can take up to 48 hours)

---

## Part 4: Future Updates

### How to Update Your Website

Whenever you make changes to your website:

```bash
# 1. Add changed files
git add .

# 2. Commit with a message
git commit -m "Update: describe what you changed"

# 3. Push to GitHub
git push origin main
```

**Vercel will automatically deploy your changes!** ✨

You'll get a new deployment in 30-60 seconds.

---

## Troubleshooting

### Issue: Git not recognized

**Solution**: Install Git from [git-scm.com](https://git-scm.com/downloads)

### Issue: Permission denied (GitHub)

**Solution**: Set up SSH keys or use Personal Access Token
- Guide: [GitHub SSH Setup](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### Issue: Vercel deployment failed

**Solution**: 
1. Check the build logs in Vercel dashboard
2. Ensure all file paths are correct (case-sensitive)
3. Verify `vercel.json` is in the root directory

### Issue: Images not showing

**Solution**: 
- Check that `hero-visuals.css` is linked in `index.html`
- Verify all CSS files are in the same directory as HTML files

---

## File Checklist

Before deploying, ensure you have these files:

- ✅ `index.html` - Homepage
- ✅ `about.html` - About page
- ✅ `services.html` - Services page
- ✅ `contact.html` - Contact page
- ✅ `styles.css` - Main stylesheet
- ✅ `hero-visuals.css` - Hero animations
- ✅ `script.js` - JavaScript functionality
- ✅ `vercel.json` - Vercel configuration
- ✅ `.gitignore` - Git ignore rules
- ✅ `SECURITY.md` - Security documentation
- ✅ `.htaccess` - Apache security headers

---

## Environment Variables (If Needed)

If you add forms or backend functionality later:

1. In Vercel dashboard → **Settings** → **Environment Variables**
2. Add your variables (e.g., API keys, database URLs)
3. Redeploy for changes to take effect

---

## Security Notes

✅ **Your site includes:**
- Security headers (XSS, clickjacking protection)
- Content Security Policy
- HTTPS (automatic on Vercel)
- No copyrighted content

---

## Support

### Vercel Documentation
- [Vercel Docs](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)

### GitHub Documentation
- [GitHub Docs](https://docs.github.com)
- [GitHub Support](https://support.github.com)

---

## Quick Reference Commands

```bash
# Check Git status
git status

# View commit history
git log --oneline

# Create a new branch
git checkout -b feature-name

# Switch back to main
git checkout main

# Pull latest changes
git pull origin main

# View remote URL
git remote -v
```

---

## Success! 🎉

Your website is now live and accessible worldwide!

**Next Steps:**
1. Share your Vercel URL with clients
2. Set up analytics (Google Analytics, Vercel Analytics)
3. Add a custom domain
4. Monitor performance in Vercel dashboard

---

**Last Updated**: May 10, 2026
