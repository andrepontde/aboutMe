# Google Analytics Setup Guide

## Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Create an account (use your name or portfolio name)
5. Create a property (use your website name)
6. Choose "Web" platform
7. Enter your website URL (when you deploy it)

## Step 2: Get Your Measurement ID

1. After creating the property, you'll see a "Measurement ID" that looks like `G-XXXXXXXXXX`
2. Copy this ID

## Step 3: Configure Your Portfolio

1. Create a `.env` file in your project root (same folder as package.json):
   ```
   REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID

2. Add `.env` to your `.gitignore` file (already done ✅)

## Step 4: Deploy and Verify

1. Deploy your site to a hosting service (Vercel, Netlify, GitHub Pages, etc.)
2. Add your deployed URL to Google Analytics property settings
3. Visit your live site and check Google Analytics "Realtime" tab to see if it's working

## What's Already Set Up

✅ Google Analytics tracking code (loads automatically when you add the measurement ID)
✅ Page view tracking  
✅ Section navigation tracking (About, Skills, Projects, etc.)
✅ Project link clicks (GitHub, Live Demo buttons)
✅ Contact method tracking (Email, LinkedIn, GitHub)
✅ Resume download tracking
✅ External link tracking

## Analytics You'll See

- **Page Views**: How many people visit your portfolio
- **Section Views**: Which sections people spend time on
- **Project Clicks**: Which projects get the most interest
- **Contact Engagement**: How people prefer to contact you
- **Resume Downloads**: How many people download your resume
- **External Links**: Clicks to your GitHub, LinkedIn, etc.

## Optional: Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add your website URL
3. Verify ownership (easiest with Google Analytics verification)
4. This helps your site appear in Google search results

## Testing Locally

The analytics code won't run in development mode without the measurement ID, so it won't interfere with your local development.
