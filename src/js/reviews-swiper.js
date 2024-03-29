import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperContainer = document.querySelector('.reviews-swiper');

let swiperReviews = null;

const setSlidesHeight = function (swiper) {
  let maxHeight = 0;

  swiper.slides.forEach(function (slide) {
    if (slide.offsetHeight > maxHeight) {
      maxHeight = slide.offsetHeight;
    }
  });

  swiper.slides.forEach(function (slide) {
    slide.style.height = `${maxHeight}px`;
    slide.style.height = `auto`;
  });

  swiper.update();
};

swiperReviews = new Swiper('.reviews-swiper', {
  modules: [Navigation, Pagination],
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  on: {
    init: function () {
      setSlidesHeight(this);
    },
    resize: function () {
      setSlidesHeight(this);
    },
    slideChange: function () {
      setSlidesHeight(this);
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
});

swiperContainer.addEventListener('mouseover', function () {
  swiperReviews.autoplay.stop();
});

swiperContainer.addEventListener('mouseout', function () {
  swiperReviews.autoplay.start();
});
