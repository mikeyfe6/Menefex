import React from 'react';

import { Link } from 'gatsby';

import {
  smallbioContainer,
  smallbioWrapper,
  thick,
  smallbioText,
  meerover,
  thin,
} from '../styles/modules/smallbio.module.scss';

const Smallbio = () => (
  <div className={smallbioContainer}>
    <div className={smallbioWrapper}>
      <br />

      <hr className={thick} />
      <br />
      <p className={smallbioText}>
        <b>Gimmix</b> is een jong & modern webmediabedrijf, opgericht door{' '}
        <b>
          <a
            href="https://www.linkedin.com/in/michaelfransman"
            rel="noopener noreferrer"
            target="_blank"
          >
            Michael Fransman
          </a>
        </b>
        , die zich inzet en gespecialiseerd is in het in- en uitdenken &
        ontwikkelen van websites & webapplicaties, voor zowel jonge startups als
        gevestigde bedrijven. Wij zorgen dat uw digitale ambities en wensen tot
        één komen. Wij bouwen onze softwareproducten op maatwerk zodat u zich
        zoveel mogelijk kan relativeren met uw eindproduct.
        <br />
        <br />
      </p>
      <Link to="/about/">
        <button type="button" name="meerover" className={meerover}>
          Meer over Gimmix!
        </button>
      </Link>
      <div className="clr" />

      <hr className={thin} />
    </div>
  </div>
);

export default Smallbio;
