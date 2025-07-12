document.addEventListener('DOMContentLoaded', function() {

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800, // values from 0 to 3000, with step 50ms
        once: true,    // whether animation should happen only once - while scrolling down
        offset: 100,   // offset (in px) from the original trigger point
    });

    // GSAP Animations for Hero Section
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-title', { opacity: 0, y: 40, duration: 1, delay: 0.2 });
    tl.from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.8 }, '-=0.6');
    tl.from('.hero-cta .btn', { opacity: 0, y: 20, duration: 0.6, stagger: 0.2 }, '-=0.4');
    tl.from('.hero-glass-overlay', { opacity: 0, scale: 0.95, duration: 0.8 }, '-=0.5');


    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});