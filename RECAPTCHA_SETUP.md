# reCAPTCHA Setup Guide

## Bot Protection Configured

Your contact form now has multiple layers of bot protection:

### 1. Google reCAPTCHA v2 (Checkbox)

**Current Configuration:**
- Using Google's test site key: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`
- This is a test key that always passes validation
- **You MUST replace this with your own reCAPTCHA key**

### 2. Honeypot Field

- Hidden field that bots typically fill out
- Legitimate users won't see or interact with it
- If filled, form submission is silently blocked

## How to Get Your Own reCAPTCHA Keys

### Step 1: Register Your Site

1. Go to: https://www.google.com/recaptcha/admin/create
2. Sign in with your Google account
3. Fill out the registration form:
   - **Label**: Dhruv Technology Solutions Contact Form
   - **reCAPTCHA type**: Select "reCAPTCHA v2" → "I'm not a robot" Checkbox
   - **Domains**: Add your domain(s):
     - `dhruvtechsol.ai`
     - `www.dhruvtechsol.ai`
     - Your Vercel domain (e.g., `dhruv-tech-sol.vercel.app`)
   - Accept the terms
   - Click "Submit"

### Step 2: Get Your Keys

You'll receive two keys:
- **Site Key** (public) - Goes in your HTML
- **Secret Key** (private) - Keep this secure, used for server-side validation

### Step 3: Update Your Website

**Replace the test site key in `contact.html`:**

Find this line:
```html
<div class="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>
```

Replace with your actual site key:
```html
<div class="g-recaptcha" data-sitekey="YOUR_ACTUAL_SITE_KEY_HERE"></div>
```

### Step 4: Configure Formspree (Optional)

Formspree can validate reCAPTCHA on the backend:

1. Log into your Formspree account
2. Go to your form settings
3. Add your reCAPTCHA secret key
4. Enable reCAPTCHA validation

## Bot Protection Features

### ✅ Implemented

1. **reCAPTCHA v2 Checkbox**
   - User must check "I'm not a robot"
   - Google analyzes behavior to detect bots
   - Prevents automated submissions

2. **Honeypot Field**
   - Hidden field invisible to humans
   - Bots often auto-fill all fields
   - Silently blocks suspicious submissions

3. **Client-Side Validation**
   - Checks if reCAPTCHA is completed
   - Validates honeypot field
   - Prevents form submission if checks fail

4. **Formspree Protection**
   - Built-in spam filtering
   - Rate limiting
   - Email verification

## Testing

### Test the Protection

1. **Normal User Flow:**
   - Fill out form
   - Check reCAPTCHA box
   - Submit successfully

2. **Bot Detection:**
   - Try submitting without checking reCAPTCHA
   - Should see error message
   - Form won't submit

3. **Honeypot Test:**
   - Open browser console
   - Fill honeypot field manually
   - Form submission should be blocked silently

## Alternative: reCAPTCHA v3 (Invisible)

If you prefer invisible protection:

**Pros:**
- No user interaction required
- Better user experience
- Scores submissions 0.0-1.0

**Cons:**
- More complex setup
- Requires backend validation
- May need fallback for low scores

**To switch to v3:**
1. Register for reCAPTCHA v3 keys
2. Update HTML to use v3 API
3. Add score-based validation
4. Configure backend to verify scores

## Troubleshooting

### reCAPTCHA Not Showing

**Possible causes:**
- Script not loaded (check browser console)
- Invalid site key
- Domain not registered
- Ad blocker blocking reCAPTCHA

**Solutions:**
- Verify script tag is in `<head>`
- Check site key is correct
- Add domain to reCAPTCHA admin
- Test in incognito mode

### Form Submitting Without reCAPTCHA

**Check:**
- JavaScript validation is running
- `grecaptcha.getResponse()` is called
- No JavaScript errors in console

### Too Many False Positives

**Options:**
- Switch to reCAPTCHA v3
- Adjust validation logic
- Add additional verification methods
- Contact Google reCAPTCHA support

## Security Best Practices

✅ **Do:**
- Keep secret key secure (never in frontend code)
- Use HTTPS for all form submissions
- Validate on both client and server side
- Monitor submission patterns
- Update keys if compromised

❌ **Don't:**
- Share secret keys publicly
- Rely only on client-side validation
- Ignore suspicious patterns
- Use test keys in production
- Skip backend verification

## Monitoring

### Check Form Submissions

1. **Formspree Dashboard:**
   - View submission history
   - Monitor for spam patterns
   - Check rejection rates

2. **reCAPTCHA Admin Console:**
   - View usage statistics
   - Monitor bot detection rates
   - Adjust security settings

3. **Email Inbox:**
   - Review inquiries for quality
   - Identify spam that got through
   - Adjust protection if needed

## Cost

**reCAPTCHA:**
- Free for most websites
- Up to 1 million assessments/month
- Enterprise pricing for higher volume

**Formspree:**
- Free: 50 submissions/month
- Paid plans for higher volume

## Support

**reCAPTCHA Issues:**
- Documentation: https://developers.google.com/recaptcha
- Support: https://support.google.com/recaptcha

**Formspree Issues:**
- Documentation: https://help.formspree.io/
- Support: support@formspree.io

---

**Last Updated:** May 10, 2026
**Status:** Test keys active - Replace with production keys before launch
