import React from 'react';

import '../styles/hero.scss';
import '../styles/typewriter.scss';

const Hero = () => {
  //   const today = new Date()

  return (
    <div>
      <div className="hero">
        <div className="header">
          <h1 className="line anim-typewriter">
            Welkom! Namens het team van webmediabedrijf Gimmix. Waar kunnen wij
            u mee van dienst zijn?
          </h1>
        </div>
      </div>

      <div className="scroll-down" />
    </div>
  );
};

export default Hero;
