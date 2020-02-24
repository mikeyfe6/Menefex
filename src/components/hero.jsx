import React from 'react';
import { Link } from 'gatsby';
import { Animated } from 'react-animated-css';

import heroDesign from '../styles/modules/hero.module.scss';
import typewriterDesign from '../styles/modules/typewriter.module.scss';

import mini from '../logo/Gimmix-mini.svg';

// TODO: 'lees meer' naar de volgende section laten scrollen
// TODO: fix the elements on px's for fixed

const Hero = () => {
  //   const today = new Date()
  return (
    <div className="container-fluid">
      <div className={heroDesign.hero}>
        <img className={heroDesign.mini} src={mini} alt="Gimmix Mini Logo" />
        <div>
          {' '}
          <h1
            className={`${typewriterDesign.tpwriter} ${typewriterDesign.line} ${typewriterDesign.animTypewriter}`}
          >
            Webmediabedrijf Gimmix. Welkom!
          </h1>
          <h1 className={heroDesign.ipvtpwriter}>
            <span className={heroDesign.ipvtpwriterwmb}>Webmediabedrijf</span>{' '}
            Gimmix. Welkom!
          </h1>
          <Animated
            animationIn="fadeInUp"
            animationInDelay={10000}
            animationInDuration={1900}
          >
            <h1 className={heroDesign.heroHead}>Web-, Appdevelopment & SEO</h1>
          </Animated>
        </div>

        <Animated
          animationIn="zoomIn"
          animationInDelay={12000}
          animationInDuration={1500}
        >
          <div className={heroDesign.scrollDown} />
        </Animated>
        <Animated
          animationIn="slideInUp"
          animationInDelay={12000}
          animationInDuration={1000}
        >
          <span className={heroDesign.scrollHead}>
            <Link to="/#servicescroll">services</Link> |{' '}
            <Link to="/#projectscroll">projects</Link>
          </span>{' '}
        </Animated>
        <div className="clr" />
      </div>
    </div>
  );
};

export default Hero;
