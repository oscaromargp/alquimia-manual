/**
 * Alquimia Manual - Interactivity Script v2
 * Animaciones, scroll effects, FAQ y Translator
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initParticles();
    initCounters();
    initScrollAnimations();
    initFAQ();
    initMobileNav();
    initContactForm();
    initTranslatorStyle();
});

/**
 * Translator - Ensure widget is styled properly
 */
function initTranslatorStyle() {
    const observer = new MutationObserver(() => {
        const widget = document.querySelector('.translator-widget');
        if (widget) {
            const select = widget.querySelector('select');
            if (select) {
                select.style.background = 'transparent';
                select.style.border = 'none';
                select.style.color = '#C4B8A8';
                select.style.fontFamily = "'Syne', sans-serif";
                select.style.fontSize = '13px';
                select.style.padding = '4px';
            }
        }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
}

/**
 * Navbar scroll effect
 */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

/**
 * Generate floating particles
 */
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 25;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        
        const size = 2 + Math.random() * 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particlesContainer.appendChild(particle);
    }
}

/**
 * Animated counters for stats
 */
function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

/**
 * Scroll reveal animations
 */
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.service-card, .gallery-item, .process-step, .testimonial-card, .faq-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('reveal', 'active');
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
    
    // Parallax effect on scroll
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const heroVisual = document.querySelector('.hero-visual');
                
                if (heroVisual) {
                    heroVisual.style.transform = `translateY(${scrolled * 0.05}px)`;
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
}

/**
 * FAQ accordion functionality with conversion focus
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

/**
 * Mobile navigation toggle
 */
function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            toggle.classList.toggle('active');
            
            // Animate toggle
            const spans = toggle.querySelectorAll('span');
            if (toggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                toggle.classList.remove('active');
                
                const spans = toggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
}

/**
 * Contact form handling with conversion tracking
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const whatsappBtn = document.getElementById('whatsappBtn');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Track conversion (in production, send to analytics)
            console.log('Conversion: Contact form submitted', { name, email, message });
            
            // Show success message
            alert(`¡Gracias ${name}! Tu mensaje ha sido enviado. Te contactaremos pronto a ${email}.`);
            
            form.reset();
        });
    }
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Track WhatsApp click
            console.log('Conversion: WhatsApp click');
            
            // Placeholder for WhatsApp integration
            const phoneNumber = 'TU_NUMERO_AQUI'; // Replace with actual number
            const message = encodeURIComponent('Hola! Estoy interesada en conocer más sobre las piezas de Alquimia Manual');
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            
            // For demo, show alert
            alert('⚠️ Configura tu número de WhatsApp en script.js línea ~95');
        });
    }
}

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#') {
            e.preventDefault();
            
            const target = document.querySelector(href);
            
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add CSS for mobile nav
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 767px) {
        .nav-links {
            position: fixed;
            top: 60px;
            left: 0;
            width: 100%;
            background: rgba(13, 11, 9, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 20px;
            gap: 0;
            border-bottom: 1px solid var(--glass-border);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav-link {
            padding: 14px 0;
            border-bottom: 1px solid var(--glass-border);
            font-size: 1rem;
        }
        
        .nav-link.cta-link {
            margin-top: 16px;
            text-align: center;
        }
    }
    
    /* Google Translate Widget Styles */
    .goog-te-gadget {
        font-family: 'Syne', sans-serif !important;
    }
    
    .goog-te-gadget-simple {
        background: transparent !important;
        border: none !important;
        padding: 4px 8px !important;
    }
    
    .goog-te-gadget-simple span {
        color: #C4B8A8 !important;
    }
    
    .goog-te-gadget-simple .goog-te-menu-value {
        color: #C4B8A8 !important;
    }
    
    .skiptranslate iframe {
        display: none !important;
    }
    
    body > .skiptranslate {
        display: none !important;
    }
    
    #google_translate_element {
        position: relative;
    }
    
    #google_translate_element select {
        background: transparent !important;
        border: 1px solid rgba(166, 123, 91, 0.3) !important;
        border-radius: 6px !important;
        color: #C4B8A8 !important;
        padding: 6px 12px !important;
        font-family: 'Syne', sans-serif !important;
        cursor: pointer;
    }
    
    #google_translate_element select:focus {
        outline: none;
        border-color: #A67B5B !important;
    }
`;
document.head.appendChild(style);