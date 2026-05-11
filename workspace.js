// Overlay Management
class OverlayManager {
    constructor() {
        this.overlays = {
            'about': document.getElementById('about-overlay'),
            'services': document.getElementById('services-overlay'),
            'why-us': document.getElementById('why-us-overlay')
        };
        
        // Service detail overlays
        this.serviceOverlays = {
            'ai-consulting': document.getElementById('ai-consulting-detail'),
            'predictive-analytics': document.getElementById('predictive-analytics-detail'),
            'automation': document.getElementById('automation-detail'),
            'generative-ai': document.getElementById('generative-ai-detail')
        };
        
        this.init();
    }

    init() {
        // Handle overlay triggers
        document.querySelectorAll('[data-overlay]').forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const overlayName = trigger.getAttribute('data-overlay');
                this.open(overlayName);
            });
        });

        // Handle service detail triggers
        document.querySelectorAll('[data-service-detail]').forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const serviceName = trigger.getAttribute('data-service-detail');
                this.openService(serviceName);
            });
        });

        // Handle overlay close buttons
        document.querySelectorAll('[data-close]').forEach(closeBtn => {
            closeBtn.addEventListener('click', () => {
                const overlayName = closeBtn.getAttribute('data-close');
                this.close(overlayName);
            });
        });

        // Handle service overlay close buttons
        document.querySelectorAll('[data-close-service]').forEach(closeBtn => {
            closeBtn.addEventListener('click', () => {
                const serviceName = closeBtn.getAttribute('data-close-service');
                this.closeService(serviceName);
            });
        });

        // Close overlay on backdrop click
        const allOverlays = [...Object.values(this.overlays), ...Object.values(this.serviceOverlays)];
        allOverlays.forEach(overlay => {
            if (overlay) {
                overlay.addEventListener('click', (e) => {
                    if (e.target === overlay) {
                        this.closeAll();
                    }
                });
            }
        });

        // Close overlay on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAll();
            }
        });
    }

    open(name) {
        const overlay = this.overlays[name];
        if (overlay) {
            this.closeAll();
            setTimeout(() => {
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }, 100);
        }
    }

    openService(name) {
        const overlay = this.serviceOverlays[name];
        if (overlay) {
            this.closeAll();
            setTimeout(() => {
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }, 100);
        }
    }

    close(name) {
        const overlay = this.overlays[name];
        if (overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    closeService(name) {
        const overlay = this.serviceOverlays[name];
        if (overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    closeAll() {
        Object.values(this.overlays).forEach(overlay => {
            if (overlay) overlay.classList.remove('active');
        });
        Object.values(this.serviceOverlays).forEach(overlay => {
            if (overlay) overlay.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
}

// Scroll-Triggered Reveal Animation
class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('[data-scroll-reveal]');
        this.init();
    }

    init() {
        // Create Intersection Observer
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered delay
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, index * 100);
                    
                    // Stop observing once revealed
                    this.observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all elements
        this.elements.forEach(element => {
            this.observer.observe(element);
        });
    }
}

// Floating Hub Active State
class FloatingHub {
    constructor() {
        this.hubItems = document.querySelectorAll('.hub-item');
        this.init();
    }

    init() {
        // Add active state on click
        this.hubItems.forEach(item => {
            item.addEventListener('click', () => {
                this.hubItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            });
        });
    }
}

// Smooth Scroll Enhancement
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Add smooth scrolling to anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Parallax Effect for Gradient Orbs
class ParallaxOrbs {
    constructor() {
        this.orbs = document.querySelectorAll('.gradient-orb');
        this.init();
    }

    init() {
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.updateOrbPositions();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    updateOrbPositions() {
        const scrollY = window.scrollY;
        
        this.orbs.forEach((orb, index) => {
            const speed = 0.1 + (index * 0.05);
            const yPos = -(scrollY * speed);
            orb.style.transform = `translateY(${yPos}px)`;
        });
    }
}

// Floating Stats Animation on Scroll
class FloatingStats {
    constructor() {
        this.statsSection = document.querySelector('.floating-stats');
        this.init();
    }

    init() {
        if (!this.statsSection) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });

        observer.observe(this.statsSection);
    }

    animateStats() {
        const statCards = this.statsSection.querySelectorAll('.stat-card');
        statCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = `floatIn 0.8s ease-out forwards`;
            }, index * 200);
        });
    }
}

// Mouse Parallax Effect for Hero Section
class MouseParallax {
    constructor() {
        this.hero = document.querySelector('.hero-workspace');
        this.floatingElements = document.querySelectorAll('.stat-card');
        this.init();
    }

    init() {
        if (!this.hero) return;

        this.hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            
            const xPos = (clientX / innerWidth - 0.5) * 20;
            const yPos = (clientY / innerHeight - 0.5) * 20;

            this.floatingElements.forEach((element, index) => {
                const depth = (index + 1) * 0.5;
                element.style.transform = `translate(${xPos * depth}px, ${yPos * depth}px)`;
            });
        });

        this.hero.addEventListener('mouseleave', () => {
            this.floatingElements.forEach(element => {
                element.style.transform = 'translate(0, 0)';
            });
        });
    }
}

// Loading Animation
class LoadingAnimation {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            
            // Trigger initial animations
            setTimeout(() => {
                this.animateHero();
            }, 300);
        });
    }

    animateHero() {
        const heroContent = document.querySelector('.hero-content-float');
        if (heroContent) {
            heroContent.style.animation = 'fadeInUp 1s ease-out forwards';
        }
    }
}

// Service Card Hover Effect Enhancement
class ServiceCardEffects {
    constructor() {
        this.cards = document.querySelectorAll('.service-float-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.createRipple(e, card);
            });
        });
    }

    createRipple(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(59, 130, 246, 0.2)';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        card.style.position = 'relative';
        card.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Scroll Progress Indicator
class ScrollProgress {
    constructor() {
        this.createIndicator();
        this.init();
    }

    createIndicator() {
        const indicator = document.createElement('div');
        indicator.id = 'scroll-progress';
        indicator.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #2563eb, #3b82f6);
            width: 0%;
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(indicator);
        this.indicator = indicator;
    }

    init() {
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            this.indicator.style.width = `${scrolled}%`;
        });
    }
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    new OverlayManager();
    new ScrollReveal();
    new FloatingHub();
    new SmoothScroll();
    new ParallaxOrbs();
    new FloatingStats();
    new MouseParallax();
    new LoadingAnimation();
    new ServiceCardEffects();
    new ScrollProgress();

    console.log('🚀 Dhruv Technology Solutions - Workspace Initialized');
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add resize handler with debounce
window.addEventListener('resize', debounce(() => {
    // Recalculate positions if needed
    console.log('Window resized - recalculating layouts');
}, 250));
