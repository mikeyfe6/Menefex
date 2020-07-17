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
        <div className={heroDesign.fleximage}>
          <img className={heroDesign.mini} src={mini} alt="Gimmix Mini Logo" />{' '}
        </div>
        <div className={heroDesign.flexhead}>
          {' '}
          <h1
            className={`${typewriterDesign.tpwriter} ${typewriterDesign.line} ${typewriterDesign.animTypewriter}`}
          >
            Webmediabedrijf Gimmix. Welkom!
          </h1>
          <h1 className={heroDesign.ipvtpwriter}>
            Webmediabedrijf <br />{' '}
            <span className={heroDesign.spechead}> Gimmix</span>{' '}
            <span className="speccol">.</span>{' '}
          </h1>{' '}
          <Animated
            animationIn="fadeInUp"
            animationInDelay={9000}
            animationInDuration={1900}
          >
            <h2 className={heroDesign.heroHead}>
              - Websites, webapplicaties & SEO -
            </h2>
          </Animated>
        </div>
        <div className={heroDesign.flexancors}>
          <Animated
            animationIn="zoomIn"
            animationInDelay={10000}
            animationInDuration={2000}
          >
            <Link to="#biografiescroll">
              <div className={heroDesign.scrollDown} />
            </Link>
          </Animated>

          <Animated
            animationIn="fadeInDown"
            animationInDelay={11000}
            animationInDuration={2000}
          >
            <span className={heroDesign.scrollHead}>
              <Link to="#biografiescroll">biografie</Link>{' '}
              <span className="speccol">
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              </span>{' '}
              <Link to="#servicescroll">services</Link>{' '}
              <span className="speccol">
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              </span>{' '}
              <Link to="#projectscroll">projecten</Link>
            </span>{' '}
          </Animated>
        </div>
        <div className="clr" />
      </div>
    </div>
  );
};

export default Hero;
