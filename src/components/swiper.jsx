/* eslint-disable import/extensions */
import React from 'react';
import {
  Swiper,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from 'swiper/js/swiper.esm.js';

import '../styles/swiper.scss';

const ProjectSlide = () => {
  return (
    <div className="project-slide">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide" data-hash="slide1">
            Slide 1
          </div>
          <div className="swiper-slide" data-hash="slide2">
            Slide 2
          </div>
          <div className="swiper-slide" data-hash="slide3">
            Slide 3
          </div>
          <div className="swiper-slide" data-hash="slide4">
            Slide 4
          </div>
          <div className="swiper-slide" data-hash="slide5">
            Slide 5
          </div>
        </div>

        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />

        <div className="swiper-pagination" />
      </div>
    </div>
  );
};

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);

const swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  hashNavigation: true,
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

export default ProjectSlide;
