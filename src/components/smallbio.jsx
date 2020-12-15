import React from 'react';
import { Link } from 'gatsby';

import smallbioDesign from '../styles/modules/smallbio.module.scss';

const Smallbio = () => (
  <div className={smallbioDesign.smallbioContainer}>
    <div className={smallbioDesign.smallbioWrapper}>
      <br />

      <hr className={smallbioDesign.thick} />
      <br />
      <p className={smallbioDesign.smallbioText}>
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
        <button
          type="button"
          name="meerover"
          className={smallbioDesign.meerover}
        >
          Meer over Gimmix!
        </button>
      </Link>
      <div className="clr" />

      <hr className={smallbioDesign.thin} />
    </div>
  </div>
);

export default Smallbio;
