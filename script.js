// Classico Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Hero slider functionality
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        heroSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showSlide(currentSlide);
    }
    
    // Auto-advance hero slider every 5 seconds
    if (heroSlides.length > 1) {
        setInterval(nextSlide, 5000);
    }

    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Quick view functionality
    const quickViewButtons = document.querySelectorAll('.quick-view');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            // Here you would typically open a modal or navigate to product page
            alert('Quick view functionality would open here!');
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Simulate form submission
                const button = this.querySelector('button');
                const originalText = button.textContent;
                button.textContent = 'Subscribing...';
                button.disabled = true;
                
                setTimeout(() => {
                    button.textContent = 'Subscribed!';
                    button.style.background = '#28a745';
                    this.querySelector('input[type="email"]').value = '';
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.disabled = false;
                        button.style.background = '';
                    }, 2000);
                }, 1500);
            }
        });
    }

    // Cart functionality
    const cartButton = document.querySelector('.cart-btn');
    const cartCount = document.querySelector('.cart-count');
    let cartItems = 0;

    // Add to cart functionality (would be connected to actual product buttons)
    function addToCart() {
        cartItems++;
        cartCount.textContent = cartItems;
        cartCount.style.animation = 'pulse 0.5s ease-in-out';
        
        setTimeout(() => {
            cartCount.style.animation = '';
        }, 500);
    }

    // Search functionality
    const searchButton = document.querySelector('.search-btn');
    searchButton.addEventListener('click', function() {
        // Here you would typically open a search modal or focus on search input
        alert('Search functionality would open here!');
    });

    // Language toggle
    const languageToggles = document.querySelectorAll('.language-toggle span');
    languageToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            languageToggles.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.feature-item, .product-card, .review-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Customization section interactive elements
    const customizeButton = document.querySelector('.customization .cta-button');
    if (customizeButton) {
        customizeButton.addEventListener('click', function() {
            // Here you would typically open a customization modal or navigate to customization page
            alert('Customization tool would open here!');
        });
    }

    // CTA buttons functionality
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Mobile menu toggle (for future mobile navigation)
    function createMobileMenu() {
        const header = document.querySelector('.header-content');
        const nav = document.querySelector('.nav');
        
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                const mobileToggle = document.createElement('button');
                mobileToggle.className = 'mobile-menu-toggle';
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                mobileToggle.style.cssText = `
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    color: var(--text-dark);
                    cursor: pointer;
                    display: block;
                `;
                
                header.appendChild(mobileToggle);
                
                mobileToggle.addEventListener('click', function() {
                    nav.classList.toggle('mobile-open');
                });
            }
        } else {
            const mobileToggle = document.querySelector('.mobile-menu-toggle');
            if (mobileToggle) {
                mobileToggle.remove();
            }
            nav.classList.remove('mobile-open');
        }
    }

    // Initialize mobile menu
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);

    // Add CSS for mobile menu
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                box-shadow: 0 5px 20px rgba(0,0,0,0.1);
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .nav.mobile-open {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            .nav ul {
                flex-direction: column;
                padding: 20px;
                gap: 15px;
            }
            
            .mobile-menu-toggle {
                display: block !important;
            }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Performance optimization: Lazy loading for images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });

    // Add loading states for better UX
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Console welcome message
    console.log(`
    ⚽ Welcome to Classico! ⚽
    
    Premium Classic Football Shirts
    Built with modern web technologies
    
    Features:
    - Responsive design
    - Smooth animations
    - Interactive elements
    - Performance optimized
    
    Enjoy exploring our classic collection!
    `);
});
