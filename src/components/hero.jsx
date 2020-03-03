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
        <div className={heroDesign.hwrapper}>
          {' '}
          <h1
            className={`${typewriterDesign.tpwriter} ${typewriterDesign.line} ${typewriterDesign.animTypewriter}`}
          >
            Webmediabedrijf Gimmix. Welkom!
          </h1>
          <br />
          <br />
          <h1 className={heroDesign.ipvtpwriter}>
            Webmediabedrijf <br /> Gimmix <span className="speccol">.</span>{' '}
          </h1>{' '}
          <br />
          <br />
          <Animated
            animationIn="fadeInUp"
            animationInDelay={9000}
            animationInDuration={1900}
          >
            <h1 className={heroDesign.heroHead}>Web-, Appdevelopment & SEO</h1>
          </Animated>
        </div>

        <Animated
          animationIn="zoomIn"
          animationInDelay={10000}
          animationInDuration={2000}
        >
          <div className={heroDesign.scrollDown} />
        </Animated>
        <Animated
          animationIn="fadeInDown"
          animationInDelay={11000}
          animationInDuration={2000}
        >
          <span className={heroDesign.scrollHead}>
            <Link to="/#servicescroll">services</Link> |{' '}
            <Link to="/#projectscroll">projecten</Link>
          </span>{' '}
        </Animated>
        <div className="clr" />
      </div>
    </div>
  );
};

export default Hero;
