/**
 * Alquimia Manual - Interactivity Script v3
 * Traductor funcionando, FAQ colapsable, imágenes
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initParticles();
    initCounters();
    initScrollAnimations();
    initFAQ();
    initMobileNav();
    initContactForm();
    initTranslator();
});

/**
 * Translator - Use Google's widget properly
 */
function initTranslator() {
    // Force reload if needed
    setTimeout(() => {
        const select = document.querySelector('.goog-te-combo');
        if (select) {
            select.style.background = '#232019';
            select.style.color = '#C4B8A8';
            select.style.border = '1px solid rgba(166, 123, 91, 0.3)';
            select.style.borderRadius = '6px';
            select.style.padding = '8px 12px';
        }
    }, 2000);
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
    
    const particleCount = 20;
    
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
    const revealElements = document.querySelectorAll('.service-card, .gallery-item, .process-step');
    
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
}

/**
 * FAQ accordion - solo una respuesta abierta a la vez
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Cerrar todas
            faqItems.forEach(i => i.classList.remove('active'));
            
            // Abrir la clickeada si no estaba activa
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
    }
}

/**
 * Contact form handling
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const whatsappBtn = document.getElementById('whatsappBtn');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            alert(`¡Gracias ${name}! Tu mensaje ha sido enviado. Te contactaremos pronto.`);
            form.reset();
        });
    }
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('⚠️ Configura tu número de WhatsApp en script.js línea ~95');
        });
    }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        }
    });
});

// CSS adicional
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
        }
    }
`;
document.head.appendChild(style);