import React from 'react';

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
          <h1 className="line anim-typewriter">
            Welkom! Namens het team van webmediabedrijf Gimmix. Waar kunnen wij
            u mee van dienst zijn?{' '}
          </h1>
          <br />
          <span>
            <a href>lees meer</a>
          </span>
          <div className="scroll-down" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
