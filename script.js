// Example JavaScript for loader and menu
document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("preloader");

    // Loader Animation
    window.addEventListener("load", () => {
        loader.style.display = "none";
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("preloader");

    // Loader Animation
    window.addEventListener("load", () => {
        loader.style.display = "none";
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Smooth Scroll
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
            // Close menu on mobile after clicking
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Testimonials Slider (Example)
    let slideIndex = 0;
    const slides = document.querySelectorAll('.testimonial-item');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    showSlide(slideIndex);

    nextButton.addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    });

    prevButton.addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    });
});

