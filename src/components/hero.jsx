import React from 'react';

import { Animated } from 'react-animated-css';
import scrollTo from 'gatsby-plugin-smoothscroll';

import heroDesign from '../styles/modules/hero.module.scss';
import typewriterDesign from '../styles/modules/typewriter.module.scss';

import mini from '../logo/Gimmix-mini.svg';

// TODO: 'lees meer' naar de volgende section laten scrollen
// TODO: fix the elements on px's for fixed

const Hero = () => (
  //   const today = new Date()
  <div className="container-fluid">
    <div className={heroDesign.hero}>
      <div className={heroDesign.fleximage}>
        <Animated
          animationIn="rotateIn"
          animationInDelay={5000}
          animationInDuration={7500}
        >
          <img className={heroDesign.mini} src={mini} alt="Gimmix Mini Logo" />{' '}
        </Animated>
      </div>
      <div className={heroDesign.flexhead}>
        {' '}
        <h1
          className={`${typewriterDesign.tpwriter} ${typewriterDesign.line} ${typewriterDesign.animTypewriter}`}
        >
          Webmediabedrijf Gimmix. Welkom!
        </h1>
        <Animated
          animationIn="fadeInDown"
          animationInDelay={1500}
          animationInDuration={3000}
        >
          <h1 className={heroDesign.ipvtpwriter}>
            Webmediabedrijf <br />{' '}
            <span className={heroDesign.spechead}> Gimmix</span>{' '}
            <span className="speccol">.</span>{' '}
          </h1>{' '}
        </Animated>
        <Animated
          animationIn="fadeInUp"
          animationInDelay={8500}
          animationInDuration={2000}
        >
          <h2 className={heroDesign.heroHead}>
            Web<span className={heroDesign.herospec}>sites</span>, web
            <span className={heroDesign.herospec}>applicaties</span> & SE
            <span className={heroDesign.herospec}>O</span>
          </h2>
        </Animated>
        <Animated
          animationIn="fadeInUp"
          animationInDelay={3250}
          animationInDuration={3000}
        >
          <h2 className={heroDesign.heroHeadMB}>
            Web<span className={heroDesign.herospec}>sites</span>, web
            <span className={heroDesign.herospec}>applicaties</span> & SE
            <span className={heroDesign.herospec}>O</span>
          </h2>
        </Animated>
      </div>
      <div className={heroDesign.flexancors}>
        <Animated
          animationIn="zoomIn"
          animationInDelay={11000}
          animationInDuration={3000}
        >
          <div className={heroDesign.scrollDown} />
        </Animated>
        <Animated
          animationIn="zoomIn"
          animationInDelay={7500}
          animationInDuration={3000}
        >
          <div className={heroDesign.scrollDownMB} />
        </Animated>
        <Animated
          animationIn="fadeInDown"
          animationInDelay={9500}
          animationInDuration={2000}
        >
          <span className={heroDesign.scrollHead}>
            <button
              type="button"
              className={heroDesign.scrollBtn}
              onClick={() => scrollTo('#biografiescroll')}
            >
              biografie
            </button>{' '}
            <span className="speccol">&nbsp;|&nbsp;</span>{' '}
            <button
              type="button"
              className={heroDesign.scrollBtn}
              onClick={() => scrollTo('#servicescroll')}
            >
              services
            </button>{' '}
            <span className="speccol">&nbsp;|&nbsp;</span>{' '}
            <button
              type="button"
              className={heroDesign.scrollBtn}
              onClick={() => scrollTo('#projectscroll')}
            >
              portfolio
            </button>{' '}
          </span>{' '}
        </Animated>
        <Animated
          animationIn="fadeInDown"
          animationInDelay={4500}
          animationInDuration={3000}
        >
          <span className={heroDesign.scrollHeadMB}>
            <button
              type="button"
              className={heroDesign.scrollBtnMB}
              onClick={() => scrollTo('#biografiescroll')}
            >
              biografie
            </button>{' '}
            <span className="speccol">&nbsp;|&nbsp;</span>{' '}
            <button
              type="button"
              className={heroDesign.scrollBtnMB}
              onClick={() => scrollTo('#servicescroll')}
            >
              services
            </button>{' '}
            <span className="speccol">&nbsp;|&nbsp;</span>{' '}
            <button
              type="button"
              className={heroDesign.scrollBtnMB}
              onClick={() => scrollTo('#projectscroll')}
            >
              portfolio
            </button>{' '}
          </span>{' '}
        </Animated>
      </div>
      <div className="clr" />
    </div>
  </div>
);
export default Hero;
