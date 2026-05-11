# Contact Form Setup Guide

## Current Configuration

The contact form on your website is configured to send inquiries to: **51221487@dhruvtechsol.ai**

### Form Service: Formspree

We're using Formspree (free tier) to handle form submissions and forward them to your email.

**Form Endpoint:** `https://formspree.io/f/xanyqjpb`

### How It Works

1. User fills out the contact form on your website
2. Form submits to Formspree endpoint
3. Formspree forwards the inquiry to: 51221487@dhruvtechsol.ai
4. You receive the inquiry in your inbox
5. User sees confirmation message

### Form Fields Captured

- Full Name (required)
- Email Address (required)
- Company Name (required)
- Role (optional)
- Phone Number (optional)
- Primary Area of Interest (required)
- Project Timeline (required)
- Budget Range (optional)
- Message/Project Details (required)

### Setup Steps (Already Completed)

✅ Form action configured to Formspree endpoint
✅ Email address updated throughout site
✅ JavaScript handles form submission with fetch API
✅ Success/error messages configured
✅ Form validation in place

### Testing the Form

1. Go to your deployed website
2. Navigate to the Contact page
3. Fill out the form with test data
4. Submit the form
5. Check your inbox at 51221487@dhruvtechsol.ai

### Formspree Account Setup (Required)

**IMPORTANT:** You need to verify your email with Formspree:

1. Go to: https://formspree.io/
2. Sign up with: 51221487@dhruvtechsol.ai
3. Verify your email address
4. The form endpoint `xanyqjpb` will be activated
5. You'll start receiving form submissions

### Free Tier Limits

- **50 submissions per month** (free tier)
- Upgrade to paid plan if you need more

### Alternative Options

If you want to use a different service:

**Option 1: Netlify Forms** (if hosting on Netlify)
- Add `netlify` attribute to form
- Submissions go to Netlify dashboard
- Can forward to email

**Option 2: Custom Backend**
- Build your own API endpoint
- Use SendGrid, AWS SES, or similar
- More control but requires backend code

**Option 3: Google Forms**
- Embed Google Form
- Responses go to Google Sheets
- Email notifications available

### Troubleshooting

**Form not submitting:**
- Check browser console for errors
- Verify Formspree endpoint is correct
- Ensure email is verified with Formspree

**Not receiving emails:**
- Check spam folder
- Verify email address in Formspree dashboard
- Confirm email is verified

**Too many submissions:**
- Upgrade Formspree plan
- Switch to alternative service
- Implement rate limiting

### Security

✅ Form uses HTTPS
✅ Client-side validation
✅ Formspree provides spam protection
✅ No sensitive data stored on frontend

### Monitoring

Check your Formspree dashboard to:
- View submission history
- Monitor usage limits
- Configure email notifications
- Export submissions

---

**Last Updated:** May 10, 2026
**Contact Email:** 51221487@dhruvtechsol.ai
