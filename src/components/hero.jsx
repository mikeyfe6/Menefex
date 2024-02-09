import React from 'react';

import heroLogo from '../logo/Menefex-icon.svg';

import * as heroStyles from '../styles/modules/hero.module.scss';
import * as tpWriterStyles from '../styles/modules/typewriter.module.scss';

const Hero = () => {
  React.useEffect(() => {
    const updateVhVariable = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateVhVariable();

    window.addEventListener('resize', updateVhVariable);

    return () => {
      window.removeEventListener('resize', updateVhVariable);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const hasScrollPosition = section.hasAttribute('data-scroll-center');

    if (hasScrollPosition) {
      const blockValue = 'center';
      const scrollOptions = {
        behavior: 'smooth',
        block: blockValue,
        inline: 'nearest',
      };
      section.scrollIntoView(scrollOptions);
      return;
    }

    const offset = 175;
    const scrollOptions = {
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    };

    window.scrollTo({
      top: section.offsetTop - offset,
      ...scrollOptions,
    });
  };

  return (
    <section className={heroStyles.hero} id="hero">
      <div className={heroStyles.heroImage}>
        <img
          className={heroStyles.heroLogo}
          src={heroLogo}
          alt="Menefex Logo"
        />
      </div>
      <div>
        <h1
          className={`${tpWriterStyles.tpwriter} ${tpWriterStyles.line} ${tpWriterStyles.animTypewriter}`}
        >
          <span className={tpWriterStyles.wmb}>Webmediabedrijf</span> <br />
          <span className={tpWriterStyles.mnfx}>Menefex</span>
          <span className={tpWriterStyles.dot}>.</span>{' '}
          <span className={tpWriterStyles.welkom}>Welkom!</span>
        </h1>
        <h2 className={heroStyles.heroSlogan}>
          <span>・</span>Web<span>sites</span>, web<span>applicaties</span> & SE
          {''}
          <span>O</span>・
        </h2>
      </div>

      <div className={heroStyles.heroCta}>
        <div
          className={heroStyles.scrollDown}
          type="button"
          onClick={() => scrollToSection('cta')}
        />

        <div className={heroStyles.heroButtons} id="cta" data-scroll-center>
          <button type="button" onClick={() => scrollToSection('biografie')}>
            biografie
          </button>
          <span>|</span>
          <button type="button" onClick={() => scrollToSection('services')}>
            services
          </button>
          <span>|</span>
          <button type="button" onClick={() => scrollToSection('portfolio')}>
            portfolio
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
