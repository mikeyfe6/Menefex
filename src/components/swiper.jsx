/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
import React from 'react';
import Swiper from 'react-id-swiper';
import { Link } from 'gatsby';

import '../styles/swiper.scss';

const ProjectSlide = () => {
  const params = {
    autoplay: {
      delay: 15000,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  };

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <Swiper {...params}>
          <div className="swiper-slide slide1" data-hash="slide1">
            <div className="swiper-content">
              <div className="beschrijving">
                <h5>Eternity Drum</h5>
                <span className="project-link">
                  <Link to="/http://eternitydrum.com">bekijk website!</Link>
                </span>
                <p className="informatie">
                  Deze website is gebouwd in opdracht van Stichting Eternity
                  Drum. Met oog naar snelheid, overzicht en duidelijkheid
                </p>
                <p className="geschreven">
                  Geschreven in: <span>Wordpress, PHP & custom types</span>
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-slide slide2" data-hash="slide2">
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
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectSlide;
