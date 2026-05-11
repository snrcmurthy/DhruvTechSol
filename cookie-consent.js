// Simple Cookie Consent Banner
// Compliant with GDPR and CCPA

(function() {
    'use strict';

    // Check if consent has already been given
    function getCookieConsent() {
        const consent = localStorage.getItem('cookie_consent');
        return consent ? JSON.parse(consent) : null;
    }

    // Save consent preferences
    function setCookieConsent(preferences) {
        localStorage.setItem('cookie_consent', JSON.stringify(preferences));
        localStorage.setItem('cookie_consent_date', new Date().toISOString());
    }

    // Create and show cookie banner
    function showCookieBanner() {
        const existingBanner = document.getElementById('cookie-consent-banner');
        if (existingBanner) return;

        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.innerHTML = `
            <div class="cookie-consent-content">
                <div class="cookie-consent-text">
                    <h3>🍪 We Use Cookies</h3>
                    <p>We use cookies to enhance your browsing experience, protect our forms from spam, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. <a href="/cookie-policy.html" target="_blank">Learn more</a></p>
                </div>
                <div class="cookie-consent-buttons">
                    <button id="cookie-accept-all" class="cookie-btn cookie-btn-primary">Accept All</button>
                    <button id="cookie-reject-optional" class="cookie-btn cookie-btn-secondary">Reject Optional</button>
                    <button id="cookie-customize" class="cookie-btn cookie-btn-text">Customize</button>
                </div>
            </div>
            <div id="cookie-preferences" class="cookie-preferences" style="display: none;">
                <h4>Cookie Preferences</h4>
                <div class="cookie-option">
                    <label>
                        <input type="checkbox" id="cookie-essential" checked disabled>
                        <strong>Essential Cookies</strong> (Required)
                        <p>Necessary for the website to function properly.</p>
                    </label>
                </div>
                <div class="cookie-option">
                    <label>
                        <input type="checkbox" id="cookie-analytics">
                        <strong>Analytics Cookies</strong>
                        <p>Help us understand how visitors use our website.</p>
                    </label>
                </div>
                <div class="cookie-option">
                    <label>
                        <input type="checkbox" id="cookie-functional">
                        <strong>Functional Cookies</strong>
                        <p>Remember your preferences and choices.</p>
                    </label>
                </div>
                <div class="cookie-preferences-buttons">
                    <button id="cookie-save-preferences" class="cookie-btn cookie-btn-primary">Save Preferences</button>
                    <button id="cookie-cancel" class="cookie-btn cookie-btn-secondary">Cancel</button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);

        // Add event listeners
        document.getElementById('cookie-accept-all').addEventListener('click', acceptAll);
        document.getElementById('cookie-reject-optional').addEventListener('click', rejectOptional);
        document.getElementById('cookie-customize').addEventListener('click', showPreferences);
        document.getElementById('cookie-save-preferences').addEventListener('click', savePreferences);
        document.getElementById('cookie-cancel').addEventListener('click', hidePreferences);
    }

    function acceptAll() {
        setCookieConsent({
            essential: true,
            analytics: true,
            functional: true
        });
        hideBanner();
        loadOptionalScripts();
    }

    function rejectOptional() {
        setCookieConsent({
            essential: true,
            analytics: false,
            functional: false
        });
        hideBanner();
    }

    function showPreferences() {
        document.querySelector('.cookie-consent-content').style.display = 'none';
        document.getElementById('cookie-preferences').style.display = 'block';
    }

    function hidePreferences() {
        document.querySelector('.cookie-consent-content').style.display = 'flex';
        document.getElementById('cookie-preferences').style.display = 'none';
    }

    function savePreferences() {
        const preferences = {
            essential: true, // Always true
            analytics: document.getElementById('cookie-analytics').checked,
            functional: document.getElementById('cookie-functional').checked
        };
        setCookieConsent(preferences);
        hideBanner();
        if (preferences.analytics || preferences.functional) {
            loadOptionalScripts();
        }
    }

    function hideBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.style.display = 'none';
        }
    }

    function loadOptionalScripts() {
        const consent = getCookieConsent();
        
        // Load analytics if consented
        if (consent && consent.analytics) {
            // Add analytics scripts here if needed
            console.log('Analytics cookies enabled');
        }

        // Load functional scripts if consented
        if (consent && consent.functional) {
            // Add functional scripts here if needed
            console.log('Functional cookies enabled');
        }
    }

    // Initialize on page load
    function init() {
        const consent = getCookieConsent();
        
        if (!consent) {
            // No consent given yet, show banner
            showCookieBanner();
        } else {
            // Consent already given, load scripts if applicable
            loadOptionalScripts();
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
