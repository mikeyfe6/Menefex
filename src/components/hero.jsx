import React from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll';
import { Animated } from 'react-animated-css';

import minilogo from '../logo/Menefex-icon.svg';

import {
  hero,
  fleximage,
  ministylo,
  flexhead,
  ipvtpwriter,
  spechead,
  heroHead,
  heroHeadMB,
  herospec,
  flexancors,
  scrollDown,
  scrollDownMB,
  scrollHead,
  scrollHeadMB,
  scrollBtn,
  scrollBtnMB,
} from '../styles/modules/hero.module.scss';
import {
  tpwriter,
  line,
  animTypewriter,
} from '../styles/modules/typewriter.module.scss';

const Hero = () => (
  //   const today = new Date()
  <div className="container-fluid">
    <div className={hero}>
      <div className={fleximage}>
        <Animated
          animationIn="rotateIn"
          animationInDelay={5000}
          animationInDuration={7500}
        >
          <img className={ministylo} src={minilogo} alt="Menefex Mini Logo" />{' '}
        </Animated>
      </div>
      <div className={flexhead}>
        {' '}
        <h1 className={`${tpwriter} ${line} ${animTypewriter}`}>
          Webmediabedrijf Menefex. Welkom!
        </h1>
        <Animated
          animationIn="fadeInDown"
          animationInDelay={1500}
          animationInDuration={3000}
        >
          <h1 className={ipvtpwriter}>
            Webmediabedrijf <br /> <span className={spechead}> Menefex</span>{' '}
            <span className="speccol">.</span>{' '}
          </h1>{' '}
        </Animated>
        <Animated
          animationIn="fadeInUp"
          animationInDelay={8250}
          animationInDuration={2000}
        >
          <h2 className={heroHead}>
            {' '}
            <span style={{ color: 'white' }}>・ </span>Web
            <span className={herospec}>sites</span>, web
            <span className={herospec}>applicaties</span> & SE
            <span className={herospec}>O</span> ・
          </h2>
        </Animated>
        <Animated
          animationIn="fadeInUp"
          animationInDelay={3250}
          animationInDuration={3000}
        >
          <h2 className={heroHeadMB}>
            <span style={{ color: 'white' }}>・ </span>
            Web<span className={herospec}>sites</span>, web
            <span className={herospec}>applicaties</span> & SE
            <span className={herospec}>O</span> ・
          </h2>
        </Animated>
      </div>

      <div className={flexancors}>
        <Animated
          animationIn="zoomIn"
          animationInDelay={11000}
          animationInDuration={3000}
        >
          <div className={scrollDown} />
        </Animated>
        <Animated
          animationIn="zoomIn"
          animationInDelay={7500}
          animationInDuration={3000}
        >
          <div className={scrollDownMB} />
        </Animated>
        <Animated
          animationIn="fadeInDown"
          animationInDelay={9500}
          animationInDuration={2000}
        >
          <span className={scrollHead}>
            <button
              type="button"
              className={scrollBtn}
              onClick={() => scrollTo('#biografiescroll')}
            >
              biografie
            </button>
            <span className="speccolplus">|</span>
            <button
              type="button"
              className={scrollBtn}
              onClick={() => scrollTo('#servicescroll')}
            >
              services
            </button>
            <span className="speccolplus">|</span>
            <button
              type="button"
              className={scrollBtn}
              onClick={() => scrollTo('#projectscroll')}
            >
              portfolio
            </button>
          </span>
        </Animated>
        <Animated
          animationIn="fadeInDown"
          animationInDelay={4500}
          animationInDuration={3000}
        >
          <span className={scrollHeadMB}>
            <button
              type="button"
              className={scrollBtnMB}
              onClick={() => scrollTo('#biografiescroll')}
            >
              biografie
            </button>
            <span className="speccolplus">&nbsp;|&nbsp;</span>
            <button
              type="button"
              className={scrollBtnMB}
              onClick={() => scrollTo('#servicescroll')}
            >
              services
            </button>
            <span className="speccolplus">&nbsp;|&nbsp;</span>
            <button
              type="button"
              className={scrollBtnMB}
              onClick={() => scrollTo('#projectscroll')}
            >
              portfolio
            </button>
          </span>
        </Animated>
      </div>
      <div className="clr" />
    </div>
  </div>
);
export default Hero;
