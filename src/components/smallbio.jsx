import React from 'react';

import { Link } from 'gatsby';

import * as smallBioStyles from '../styles/modules/smallbio.module.scss';

const Smallbio = () => (
  <section
    className={smallBioStyles.smallbioContainer}
    id="biografie"
    data-scroll-center
  >
    <div className={smallBioStyles.smallbioWrapper}>
      <hr className={smallBioStyles.thickHr} />
      <p className={smallBioStyles.smallbioText}>
        <b>Menefex</b> is een jong & modern webmediabedrijf, opgericht door{' '}
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
      </p>
      <div>
        <a
          href="https://open.spotify.com/playlist/08UGoWTjvpuooABCWyPx0m?si=5a3ca09f8cba4300"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-spotify" />
        </a>
        <Link to="/over/" className={smallBioStyles.meerover}>
          Meer over Menefex
        </Link>
      </div>

      <hr className={smallBioStyles.thinHr} />
    </div>
  </section>
);

export default Smallbio;
