import './style.css';
// eslint-disable-next-line import/no-unresolved
import Swiper from 'swiper/bundle';

const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
};

const swiperCourse = new Swiper('.course-slider', {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const swiperPerks = new Swiper('.perks-slider', {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const swiperReviews = new Swiper('.reviews-slider', {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

swiperCourse();
swiperPerks();
swiperReviews();
