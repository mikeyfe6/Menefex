import React from 'react';
import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import { Animated } from 'react-animated-css';

import '../styles/hero.scss';
import '../styles/typewriter.scss';

import mini from '../logo/Gimmix-mini.svg';

import '../styles/mini-logo.scss';

// TODO: 'lees meer' naar de volgende section laten scrollen

const Hero = () => {
  //   const today = new Date()
  // TODO:
  return (
    <div>
      <div className="container-fluid">
        <div className="hero">
          <img className="mini" src={mini} alt="Gimmix Mini Logo" />
          <h1 className="tpwriter line anim-typewriter">
            Welkom! Namens het team van webmediabedrijf Gimmix.
          </h1>
          <Animated
            animationIn="fadeInUp"
            isVisible={true}
            animationInDelay={10000}
            animationInDuration={1900}
          >
            <h1 className="hero-head">
              Web-, <span className="hero-head-spec">Appdevelopment</span> & SEO
            </h1>
          </Animated>
          <br />
          <Animated
            animationIn="slideInUp"
            isVisible={true}
            animationInDelay={12000}
            animationInDuration={1000}
          >
            <span className="scroll-head">
              <Link to="/#servicescroll">services</Link> |{' '}
              <Link to="/#projectscroll">projects</Link>
            </span>{' '}
          </Animated>
          <Animated
            animationIn="zoomIn"
            isVisible={true}
            animationInDelay={12000}
            animationInDuration={1500}
          >
            <div className="scroll-down" />
          </Animated>
        </div>
        <div className="whitespace" />
      </div>
    </div>
  );
};

export default Hero;
