const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carousel = document.querySelector('.carousel');

prevBtn.addEventListener('click', () => {
    carousel.scrollBy({
        left: -300,  // Adjust the value to control the scroll distance
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    carousel.scrollBy({
        left: 300,  // Adjust the value to control the scroll distance
        behavior: 'smooth'
    });
});



const nextSlide = document.querySelector('.next-slide');
const prevSlide = document.querySelector('.prev-slide');
const slides = document.querySelectorAll('.card');

let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

nextSlide.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevSlide.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Initially show the first slide
showSlide(currentSlide);





document.querySelector('.dropdown > a').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    const dropdownContent = this.nextElementSibling;

    // Toggle the dropdown visibility
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});

// Close dropdown if clicking outside of it
window.addEventListener('click', function(e) {
    if (!e.target.matches('.dropdown > a')) {
        const dropdownContent = document.querySelector('.dropdown-content');
        if (dropdownContent) {
            dropdownContent.style.display = 'none';
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const Menu = document.getElementById('menu');
    const Nav = document.querySelector('nav');

    Menu.addEventListener('click', () => {
        Nav.classList.toggle('active');
    });
});

