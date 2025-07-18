document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form validation and submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const company = this.company.value.trim();
            const name = this.name.value.trim();
            const email = this.email.value.trim();
            const category = this.category.value;
            const message = this.message.value.trim();
            
            // Basic validation
            if (!name || !email || !category || !message) {
                alert('必須項目を入力してください。');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('有効なメールアドレスを入力してください。');
                return;
            }
            
            // Success message (in production, this would send to a server)
            alert('お問い合わせありがとうございます。\n内容を確認の上、担当者よりご連絡させていただきます。');
            
            // Reset form
            contactForm.reset();
        });
    }


    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Add elements to observe
    const animateElements = document.querySelectorAll('.stat, .feature, .team-member-card, .news-item, .investor-logo, .contact-item');
    
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Parallax effect for floating shapes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.floating-shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.2);
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Counter animation for stats
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 20);
    }

    // Trigger counter animation when stats are visible
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const statValue = entry.target.querySelector('h3');
                const targetValue = parseInt(statValue.textContent.replace(/[^0-9]/g, '')) || 100;
                animateCounter(statValue, targetValue);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat').forEach(stat => {
        statObserver.observe(stat);
    });
});

// Add loading animation for images
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});