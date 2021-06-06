/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import Carousel from 'react-bootstrap/Carousel';

import {
  sliderInfo,
  beschrijving,
  projectLink,
  technologien,
  geschreven,
} from '../styles/modules/slider.module.scss';

const Projects = () => (
  <Carousel
    style={{ textAlign: 'center', opacity: '0.95' }}
    nextIcon=">"
    prevIcon="<"
    interval={7000}
  >
    <Carousel.Item>
      <StaticImage
        src="../images/projects/Eternitydrum-screen.png"
        alt="Eternity Percussion"
        loading="eager"
      />
      <Carousel.Caption>
        <div className={sliderInfo}>
          <div className={beschrijving}>
            <Link to="/work/#EP">
              <h5>Eternity Drum</h5>
            </Link>

            <a
              href="https://eternitydrum.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button type="button" className={projectLink}>
                bekijk website
              </button>
            </a>

            <p>
              Deze website is gebouwd in opdracht van Stichting Eternity
              Percussion uit Amsterdam.
            </p>
            <p className={geschreven}>
              <mark className={technologien}>Wordpress</mark>{' '}
              <mark className={technologien}>ACF</mark>{' '}
              <mark className={technologien}>Brizy</mark>
            </p>
          </div>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <StaticImage
        src="../images/projects/Blackharmony-screen.png"
        alt="Black Harmony"
        loading="eager"
      />
      <Carousel.Caption>
        <div className={sliderInfo}>
          <div className={beschrijving}>
            <Link to="/work/#BH">
              {' '}
              <h5>Black Harmony</h5>{' '}
            </Link>

            <a
              href="https://blackharmony.nl/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button type="button" className={projectLink}>
                bekijk website
              </button>
            </a>

            <p>
              Deze website is gebouwd in opdracht van zanggroep Black Harmony
              uit Amsterdam.
            </p>
            <p className={geschreven}>
              <mark className={technologien}>Wordpress</mark>{' '}
              <mark className={technologien}>ACF</mark>{' '}
              <mark className={technologien}>Additional CSS</mark>{' '}
              <mark className={technologien}>Elementor Pro</mark>
            </p>
          </div>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
export default Projects;
