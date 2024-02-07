import React from 'react';

import heroLogo from '../logo/Menefex-icon.svg';

import * as heroStyles from '../styles/modules/hero.module.scss';
import * as tpWriterStyles from '../styles/modules/typewriter.module.scss';

const Hero = () => (
  <section className={heroStyles.hero}>
    <div className={heroStyles.heroImage}>
      <img className={heroStyles.heroLogo} src={heroLogo} alt="Menefex Logo" />
    </div>
    <div>
      <h1
        className={`${tpWriterStyles.tpwriter} ${tpWriterStyles.line} ${tpWriterStyles.animTypewriter}`}
      >
        Webmediabedrijf Menefex<span class={tpWriterStyles.dot}>.</span>{' '}
        <span class={tpWriterStyles.welkom}>Welkom!</span>
      </h1>
      <h2 className={heroStyles.heroSlogan}>
        <span>・</span>Web<span>sites</span>, web<span>applicaties</span> & SE
        <span>O</span>・
      </h2>
    </div>

    <div className={heroStyles.heroCta}>
      <div className={heroStyles.scrollDown} />

      <div className={heroStyles.heroButtons}>
        <button
          type="button"

          // onClick={() => scrollTo('#biografiescroll')}
        >
          biografie
        </button>
        <span>|</span>
        <button
          type="button"

          // onClick={() => scrollTo('#servicescroll')}
        >
          services
        </button>
        <span>|</span>
        <button
          type="button"

          // onClick={() => scrollTo('#projectscroll')}
        >
          portfolio
        </button>
      </div>
    </div>
  </section>
);
export default Hero;
