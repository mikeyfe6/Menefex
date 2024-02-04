import React from 'react';

import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Parallax,
  Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/parallax';
import 'swiper/scss/autoplay';

import * as sliderStyles from '../styles/modules/slider.module.scss';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      slideShow: allFile(
        filter: { sourceInstanceName: { eq: "project-images" } }
        sort: { base: ASC }
      ) {
        edges {
          node {
            id
            base
            name
            childImageSharp {
              gatsbyImageData(
                transformOptions: { cropFocus: NORTH, fit: COVER }
                blurredOptions: { width: 100 }
              )
            }
          }
        }
      }
    }
  `);

  const eternityDrum = (
    <div className={sliderStyles.sliderInfo}>
      <div>
        <a
          href="https://eternitydrum.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          bekijk website
        </a>
        <Link to="/portfolio/">
          <h5>Eternity Drum</h5>
        </Link>
      </div>

      <p>
        Deze website is gebouwd in opdracht van Stichting Eternity Percussion
        uit Amsterdam
      </p>
      <ul>
        <li>GatsbyJS</li>
        <li>ReactJS</li>
        <li>Netlify</li>
        <li>Contentful</li>
      </ul>
    </div>
  );

  const blackHarmony = (
    <div className={sliderStyles.sliderInfo}>
      <div>
        <a
          href="https://blackharmony.nl"
          rel="noopener noreferrer"
          target="_blank"
        >
          bekijk website
        </a>
        <Link to="/portfolio/">
          <h5>Black Harmony</h5>
        </Link>
      </div>

      <p>
        Deze website is gebouwd in opdracht van zanggroep Black Harmony uit
        Amsterdam
      </p>
      <ul>
        <li>Wordpress</li>
        <li>Advanced Custom Field Types</li>
        <li>Custom CSS</li>
        <li>Elementor</li>
      </ul>
    </div>
  );

  const afroDiaSphere = (
    <div className={sliderStyles.sliderInfo}>
      <div>
        <a
          href="https://afrodiasphere.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          bekijk webapp
        </a>
        <Link to="/portfolio/">
          <h5>Afrodiasphere</h5>
        </Link>
      </div>

      <p>
        Dit project is geheel op eigen initiatief opgezet, gericht op sociale
        interacties
      </p>
      <ul>
        <li>GatsbyJS</li>
        <li>Strapi</li>
        <li>Netlify</li>
        <li>GraphQl</li>
        <li>RESTful API</li>
      </ul>
    </div>
  );

  const dsMelodies = (
    <div className={sliderStyles.sliderInfo}>
      <div>
        <a
          href="https://dsmelodies.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          bekijk website
        </a>
        <Link to="/portfolio/">
          <h5>DS Melodies</h5>
        </Link>
      </div>

      <p>
        Deze website is gebouwd in opdracht van steelpannist Derek Simpey uit
        Amsterdam
      </p>
      <ul>
        <li>Wordpress</li>
        <li>Custom CSS</li>
        <li>Elementor</li>
      </ul>
    </div>
  );

  const knAcdig = (
    <div className={sliderStyles.sliderInfo}>
      <div>
        <a
          href="https://kn-acdig.com"
          // href="#!"
          rel="noopener noreferrer"
          target="_blank"
        >
          bekijk website
        </a>
        <Link to="/portfolio/">
          <h5>KN-ACDiG</h5>
        </Link>
      </div>

      <p>
        Deze website is gebouwd in opdracht van stichting KN-ACDiG uit Den-Haag
      </p>
      <ul>
        <li>Wordpress</li>
        <li>Custom CSS</li>
        <li>Elementor</li>
      </ul>
    </div>
  );

  return (
    <section>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Parallax, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides
        loop
        parallax
        navigation
        pagination={{
          clickable: true,
        }}
        scrollbar={{
          draggable: true,
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        className={sliderStyles.sliderWrapper}
      >
        {data.slideShow.edges.map(({ node }) => {
          const projectImg = getImage(node.childImageSharp.gatsbyImageData);

          return (
            <SwiperSlide key={node.id}>
              <GatsbyImage
                image={projectImg}
                alt={node.name}
                className={sliderStyles.sliderContainer}
                style={{
                  width: '100%',
                  overflow: 'hidden',
                  objectPosition: 'top',
                }}
                loading="eager"
              />
              {(() => {
                switch (node.name) {
                  case 'eternitydrum':
                    return eternityDrum;
                  case 'blackharmony':
                    return blackHarmony;
                  case 'afrodiasphere':
                    return afroDiaSphere;
                  case 'dsmelodies':
                    return dsMelodies;
                  case 'kn-acdig':
                    return knAcdig;
                  default:
                    return null;
                }
              })()}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Projects;
