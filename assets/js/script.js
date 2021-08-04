const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');
const searchIcon = document.querySelector('#search-icon');
const searchForm = document.querySelector('#search-form');
const searchClose = document.querySelector('#close');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('.header .navbar a');
const loader = document.querySelector('.loader');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

searchIcon.onclick = () => {
    searchForm.classList.toggle('active');
}

searchClose.onclick = () => {
    searchForm.classList.remove('active');
}

/* Menu On Scroll */
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
	
    sections.forEach(section => {
        let top = window.scrollY;
        let height = section.offsetHeight;
        let offset = section.offsetTop - 150;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.header .navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

/* Home Slider */
const slider = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});

/* Testimonial Slider */
const review = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

/* Loader Function */
function loaded() {
    loader.classList.add('fade-out');
}

function fadeOut() {
    setInterval(loaded, 3000);
}

window.onload = fadeOut;