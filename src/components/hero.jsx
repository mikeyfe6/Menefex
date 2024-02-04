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
        Webmediabedrijf Menefex. Welkom!
      </h1>
      <h2 className={heroStyles.heroSlogan}>
        <span>・ </span>Web<span>sites</span>, web<span>applicaties</span> & SE{' '}
        <span>O</span> ・
      </h2>
    </div>

    <div className={heroStyles.flexancors}>
      <div className={heroStyles.scrollDown} />

      <span className={heroStyles.scrollHead}>
        <button
          type="button"
          className={heroStyles.scrollBtn}
          // onClick={() => scrollTo('#biografiescroll')}
        >
          biografie
        </button>
        <span className="speccolplus">|</span>
        <button
          type="button"
          className={heroStyles.scrollBtn}
          // onClick={() => scrollTo('#servicescroll')}
        >
          services
        </button>
        <span className="speccolplus">|</span>
        <button
          type="button"
          className={heroStyles.scrollBtn}
          // onClick={() => scrollTo('#projectscroll')}
        >
          portfolio
        </button>
      </span>
    </div>
  </section>
);
export default Hero;
