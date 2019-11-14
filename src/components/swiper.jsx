/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
import React from 'react';
import Swiper from 'react-id-swiper';
// import { Link } from 'gatsby';

import '../styles/swiper.scss';

const ProjectSlide = () => {
  const params = {
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'progressbar',
    // },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: true,
    // },
  };

  return (
    <div className="swiper-whole">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <Swiper {...params}>
            <div className="swiper-slide slide1" data-hash="slide1">
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
                    Drum. Met oog naar snelheid, overzicht en duidelijkheid
                  </p>
                  <p className="geschreven">
                    Geschreven in: <u>Wordpress</u>, <u>PHP</u> &{' '}
                    <u>custom types</u>
                  </p>
                </div>
              </div>
            </div>
            {
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
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
