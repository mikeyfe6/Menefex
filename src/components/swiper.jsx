import React from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Link } from 'gatsby';

import '../styles/swipering.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/autoplay';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Projects = () => {
  return (
    <Swiper
      spaceBetween={3}
      slidesPerView={1}
      autoplay={{
        delay: '7000',
        disableOnInteraction: true,
      }}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="swiper-slide slide1">
          <div className="slider-content">
            <div className="beschrijving">
              <h5>Eternity Drum</h5>

              <a
                href="https://eternitydrum.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button type="button" className="project-link">
                  bekijk website
                </button>
              </a>

              <p className="informatie">
                Deze website is gebouwd in opdracht van Stichting Eternity
                Percussion uit Amsterdam.
              </p>
              <p className="geschreven">
                <mark className="technologien">Wordpress</mark>{' '}
                <mark className="technologien">ACF</mark>{' '}
                <mark className="technologien">Brizy</mark>
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide slide2">
          <div className="slider-content">
            <div className="beschrijving">
              <h5>Black Harmony</h5>

              <a
                href="https://blackharmony.nl/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button type="button" className="project-link">
                  bekijk website
                </button>
              </a>

              <p className="informatie">
                Deze website is gebouwd in opdracht van zanggroep Black Harmony
                uit Amsterdam.
              </p>
              <p className="geschreven">
                <mark className="technologien">Wordpress</mark>{' '}
                <mark className="technologien">ACF</mark>{' '}
                <mark className="technologien">Additional CSS</mark>{' '}
                <mark className="technologien">Elementor Pro</mark>
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Projects;

// * EXTRA PROJECTEN TOEVOEGEN
/* <div className="swiper-slide slide2" data-hash="slide2">
        Slide 2
      </div>
      <div className="swiper-slide slide3" data-hash="slide3">
        Slide 3
      </div>
      <div className="swiper-slide slide4" data-hash="slide4">
        Slide 4
      </div>
      <div className="swiper-slide slide5" data-hash="slide5">
        Slide 5
</div> */
