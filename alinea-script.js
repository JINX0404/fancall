// Anime.js animations for Alinea-style effects
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Letter by letter animation for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        // Split text into letters
        text.split('').forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter === ' ' ? '\u00A0' : letter;
            span.className = 'letter-animate';
            heroTitle.appendChild(span);
        });

        // Animate letters
        anime({
            targets: '.letter-animate',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 50,
            delay: anime.stagger(30, {start: 300}),
            easing: 'easeOutQuad'
        });
    }

    // Floating graphics animation
    anime({
        targets: '.floating-graphic',
        translateY: [-20, 20],
        translateX: [-10, 10],
        rotate: '1turn',
        duration: 20000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        delay: anime.stagger(2000)
    });

    // Feature cards animation on scroll
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                
                // Animate feature cards
                if (entry.target.classList.contains('feature-card')) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [40, 0],
                        duration: 800,
                        easing: 'easeOutCubic'
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - headerHeight - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax scroll effect
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax') || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Stats counter animation
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    
                    const target = parseInt(entry.target.getAttribute('data-count'));
                    
                    anime({
                        targets: entry.target,
                        textContent: [0, target],
                        duration: 2000,
                        easing: 'easeOutQuad',
                        round: 1,
                        update: function(anim) {
                            entry.target.textContent = Math.floor(anim.animations[0].currentValue);
                        }
                    });
                }
            });
        }, {threshold: 0.5});
        
        observer.observe(stat);
    });
});

// Page load animations
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    anime({
        targets: '.hero-badge',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 750,
        easing: 'easeOutQuad'
    });
});