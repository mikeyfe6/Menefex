/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'gatsby';

import smallbioDesign from '../styles/modules/smallbio.module.scss';

// TODO: Responsive maken!

const Smallbio = () => {
  return (
    <div className={smallbioDesign.smallbioContainer}>
      <div className={smallbioDesign.smallbioWrapper}>
        <br />
        <hr className={smallbioDesign.thick} />
        <br />
        <p className={smallbioDesign.smallbioText}>
          <b>Gimmix</b> is een jong webmediabedrijf, opgericht door{' '}
          <a
            href="https://www.linkedin.com/in/michaelfransman"
            rel="noopener noreferrer"
            target="_blank"
          >
            Michael Fransman
          </a>
          , die zich inzet en gespecialiseerd is in het uitdenken en ontwikkelen
          van websites en webapplicaties. Wij zorgen dat de ambities van de
          klant en het eindproduct tot één komen. <br />
          <br />
          <Link to="/about/">Meer over Gimmix..</Link>
        </p>
        <br />
        <hr className={smallbioDesign.thin} />
      </div>
    </div>
  );
};

export default Smallbio;
