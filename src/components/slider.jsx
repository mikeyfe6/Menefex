/* eslint-disable no-lone-blocks */

import React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery, Link } from 'gatsby';

import SwiperCore, { Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import {
  sliderInfo,
  beschrijving,
  projectLink,
  technologien,
  geschreven,
  slideCont,
} from '../styles/modules/slider.module.scss';

SwiperCore.use([Autoplay, A11y]);

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      slideShow: allFile(
        filter: { relativeDirectory: { eq: "images/projects" } }
        sort: { fields: base, order: DESC }
      ) {
        edges {
          node {
            id
            base
            name
            childImageSharp {
              gatsbyImageData(
                transformOptions: { cropFocus: CENTER, fit: COVER }
                blurredOptions: { width: 100 }
              )
            }
          }
        }
      }
    }
  `);

  const eternityDrum = (
    <div className={sliderInfo}>
      <div className={beschrijving}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1em',
          }}
        >
          <a
            href="https://eternitydrum.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button type="button" className={projectLink}>
              bekijk website
            </button>
          </a>
          <Link to="/work/">
            <h5>Eternity Drum</h5>
          </Link>
        </div>

        <p>
          Deze website is gebouwd in opdracht van Stichting Eternity Percussion
          uit Amsterdam.
        </p>
        <p className={geschreven}>
          <mark className={technologien}>Wordpress</mark>{' '}
          <mark className={technologien}>ACF</mark>{' '}
          <mark className={technologien}>Brizy</mark>
        </p>
      </div>
    </div>
  );

  const blackHarmony = (
    <div className={sliderInfo}>
      <div className={beschrijving}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1em',
          }}
        >
          <a
            href="https://blackharmony.nl/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button type="button" className={projectLink}>
              bekijk website
            </button>
          </a>
          <Link to="/work/">
            {' '}
            <h5>Black Harmony</h5>{' '}
          </Link>
        </div>

        <p>
          Deze website is gebouwd in opdracht van zanggroep Black Harmony uit
          Amsterdam.
        </p>
        <p className={geschreven}>
          <mark className={technologien}>Wordpress</mark>{' '}
          <mark className={technologien}>ACF</mark>{' '}
          <mark className={technologien}>Additional CSS</mark>{' '}
          <mark className={technologien}>Elementor Pro</mark>
        </p>
      </div>
    </div>
  );

  return (
    <Swiper style={{ textAlign: 'center' }} autoplay={{ delay: 7000 }}>
      {data.slideShow.edges.map(({ node }) => (
        <SwiperSlide key={node.id}>
          <GatsbyImage
            image={node.childImageSharp.gatsbyImageData}
            alt={node.base}
            title={node.name}
            className={slideCont}
            loading="eager"
          />

          {(() => {
            switch (node.name) {
              case 'Eternitydrum-screen':
                return eternityDrum;
              case 'Blackharmony-screen':
                return blackHarmony;
              default:
                return 'Een project title';
            }
          })()}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

{
  /* <Carousel.Item>
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
    </Carousel.Item> */
}
{
  /* <Carousel.Item>
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
    </Carousel.Item> */
}

export default Projects;
