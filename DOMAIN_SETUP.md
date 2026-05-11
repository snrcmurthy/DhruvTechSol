# GoDaddy Domain to Vercel Connection Guide

## Overview

This guide will help you connect your GoDaddy domain to your Vercel deployment.

**Your Domain:** `dhruvtechsol.ai`
**Vercel Project:** DhruvTechSol

---

## Step-by-Step Instructions

### Part 1: Add Domain in Vercel

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your project: **DhruvTechSol**

2. **Navigate to Domain Settings**
   - Click on **"Settings"** tab
   - Click on **"Domains"** in the left sidebar

3. **Add Your Domain**
   - Click **"Add"** button
   - Enter your domain: `dhruvtechsol.ai`
   - Click **"Add"**

4. **Add www Subdomain (Optional but Recommended)**
   - Click **"Add"** again
   - Enter: `www.dhruvtechsol.ai`
   - Click **"Add"**

5. **Get DNS Records**
   - Vercel will show you the DNS records you need to add
   - Keep this page open - you'll need these values

---

### Part 2: Configure DNS in GoDaddy

#### Option A: Using Vercel Nameservers (Recommended - Easiest)

**Vercel will provide nameservers like:**
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

**Steps:**

1. **Log into GoDaddy**
   - Go to: https://dcc.godaddy.com/
   - Sign in to your account

2. **Access Domain Settings**
   - Click on your domain: `dhruvtechsol.ai`
   - Scroll to **"Additional Settings"**
   - Click **"Manage DNS"**

3. **Change Nameservers**
   - Scroll to **"Nameservers"** section
   - Click **"Change"**
   - Select **"Enter my own nameservers (advanced)"**
   - Enter Vercel's nameservers:
     - Nameserver 1: `ns1.vercel-dns.com`
     - Nameserver 2: `ns2.vercel-dns.com`
   - Click **"Save"**

4. **Wait for Propagation**
   - DNS changes can take 24-48 hours
   - Usually completes in 1-2 hours
   - Vercel will automatically verify once propagated

---

#### Option B: Using A Records (Alternative Method)

If you prefer to keep GoDaddy nameservers:

**Vercel will provide an A record like:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21` (example IP - use the one Vercel provides)

**Steps:**

1. **Log into GoDaddy**
   - Go to: https://dcc.godaddy.com/
   - Sign in to your account

2. **Access DNS Management**
   - Click on your domain: `dhruvtechsol.ai`
   - Scroll to **"Additional Settings"**
   - Click **"Manage DNS"**

3. **Add A Record for Root Domain**
   - Scroll to **"DNS Records"** section
   - Click **"Add"** button
   - Select **"A"** record type
   - Fill in:
     - **Type**: A
     - **Name**: @ (this represents your root domain)
     - **Value**: [IP address from Vercel]
     - **TTL**: 600 seconds (or default)
   - Click **"Save"**

4. **Add CNAME Record for www**
   - Click **"Add"** button again
   - Select **"CNAME"** record type
   - Fill in:
     - **Type**: CNAME
     - **Name**: www
     - **Value**: `cname.vercel-dns.com` (or the value Vercel provides)
     - **TTL**: 1 Hour (or default)
   - Click **"Save"**

5. **Remove Conflicting Records (if any)**
   - Look for existing A or CNAME records for `@` or `www`
   - Delete any that conflict with your new records
   - GoDaddy often has a default parking page A record

---

### Part 3: Verify Connection

1. **Check Vercel Dashboard**
   - Go back to Vercel → Settings → Domains
   - You should see your domain with status:
     - ⏳ **"Pending"** - DNS not propagated yet
     - ✅ **"Valid"** - Successfully connected!

2. **Test Your Domain**
   - Wait for DNS propagation (can take up to 48 hours)
   - Visit: `https://dhruvtechsol.ai`
   - Visit: `https://www.dhruvtechsol.ai`
   - Both should show your website

3. **Check DNS Propagation**
   - Use: https://dnschecker.org/
   - Enter your domain: `dhruvtechsol.ai`
   - Check if DNS has propagated globally

---

## SSL Certificate

**Automatic HTTPS:**
- ✅ Vercel automatically provisions SSL certificates
- ✅ Uses Let's Encrypt
- ✅ Auto-renews before expiration
- ✅ No action needed from you

Once DNS is configured, Vercel will:
1. Detect your domain
2. Issue SSL certificate
3. Enable HTTPS automatically
4. Redirect HTTP → HTTPS

---

## Troubleshooting

### Domain Not Connecting

**Check:**
1. DNS records are correct (no typos)
2. Old records are removed
3. DNS has propagated (use dnschecker.org)
4. Domain is not locked in GoDaddy
5. Nameservers are correct

**Common Issues:**

**"Invalid Configuration"**
- DNS records don't match Vercel's requirements
- Check for typos in IP addresses or CNAME values

**"Pending Verification"**
- DNS hasn't propagated yet
- Wait 1-24 hours and check again

**"Domain Already in Use"**
- Domain is connected to another Vercel project
- Remove it from the other project first

### SSL Certificate Not Issued

**Possible Causes:**
- DNS not fully propagated
- CAA records blocking Let's Encrypt
- Domain verification failed

**Solutions:**
1. Wait for DNS propagation
2. Check CAA records in GoDaddy DNS
3. Remove any CAA records or add Let's Encrypt
4. Contact Vercel support if issue persists

### Website Shows Old Content

**Clear Cache:**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Try incognito/private mode
- Check different browsers

---

## Recommended DNS Configuration

### For Best Performance:

**Root Domain (dhruvtechsol.ai):**
```
Type: A
Name: @
Value: [Vercel IP from dashboard]
TTL: 600
```

**WWW Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**Email (if using email with this domain):**
```
Keep your existing MX records
Do NOT delete email-related DNS records
```

---

## Email Configuration

**Important:** If you're using email with your domain (e.g., yourname@dhruvtechsol.ai):

1. **Keep MX Records**
   - Do NOT delete existing MX records
   - These are needed for email delivery

2. **Keep SPF/DKIM Records**
   - Keep TXT records for email authentication
   - Usually start with `v=spf1` or `v=DKIM1`

3. **Email Providers**
   - If using Google Workspace, Microsoft 365, etc.
   - Keep all their DNS records intact

---

## Timeline

**Expected Timeline:**

- **Immediate:** Add domain in Vercel (5 minutes)
- **5-10 minutes:** Configure DNS in GoDaddy
- **1-2 hours:** DNS propagation (typical)
- **Up to 48 hours:** Maximum DNS propagation time
- **Automatic:** SSL certificate issued after DNS propagates

---

## Quick Reference

### Vercel Nameservers (Option A)
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

### DNS Records (Option B)
```
A Record:
  Name: @
  Value: [Get from Vercel dashboard]

CNAME Record:
  Name: www
  Value: cname.vercel-dns.com
```

---

## Support Resources

**Vercel Documentation:**
- https://vercel.com/docs/concepts/projects/domains

**GoDaddy Help:**
- https://www.godaddy.com/help/manage-dns-680

**DNS Checker:**
- https://dnschecker.org/

**Vercel Support:**
- https://vercel.com/support

---

## After Connection

Once your domain is connected:

1. ✅ Update email signatures with new domain
2. ✅ Update business cards and marketing materials
3. ✅ Set up email forwarding if needed
4. ✅ Configure Google Search Console with new domain
5. ✅ Update social media links
6. ✅ Set up Google Analytics (if not already done)
7. ✅ Test all pages and forms on new domain

---

**Last Updated:** May 10, 2026
**Domain:** dhruvtechsol.ai
**Hosting:** Vercel
**Registrar:** GoDaddy
