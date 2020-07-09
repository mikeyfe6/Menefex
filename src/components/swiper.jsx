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

import '../styles/swiper.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Projects = () => {
  return (
    <div className="slider-whole">
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        autoplay={{ delay: '7000', disableOnInteraction: true }}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="slide1">
            <div className="slider-content">
              <div className="beschrijving">
                <h5>Eternity Drum</h5>
                <span className="project-link">
                  <a
                    href="https://eternitydrum.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    bekijk website!
                  </a>
                </span>

                <p className="informatie">
                  Deze website is gebouwd in opdracht van Stichting Eternity
                  Percussion uit Amsterdam. Met oog naar snelheid, overzicht en
                  duidelijkheid.
                </p>
                <p className="geschreven">
                  Technologiën: <u>Wordpress</u>, <u>ACF</u> & <u>Brizy</u>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2">
            <div className="slider-content">
              <div className="beschrijving">
                <h5>Black Harmony</h5>
                <span className="project-link">
                  <a
                    href="https://blackharmony.nl"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    bekijk website!
                  </a>
                </span>

                <p className="informatie">
                  Deze website is gebouwd in opdracht van Black Harmony,
                  zanggroep uit Amsterdam. Deze website bevat informatie, media
                  en interactieve social media toepassingen.
                </p>
                <p className="geschreven">
                  Technologiën: <u>Wordpress</u>, <u>Additional CSS</u>,{' '}
                  <u>ACF</u> & <u>Elementor Pro</u>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
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
