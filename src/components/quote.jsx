import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/quote.scss';

const Quote = () => {
  //   const today = new Date()

  return (
    <div className="quote-container">
      <div className="quote-wrapper">
        <section id="services">
          <FontAwesomeIcon icon="globe" size="3x" color="#f0c410" />
          <h2>Websites</h2>
          <p className="quote-text">
            Gimmix is een digitaal webmediabedrijf die zich inzet digitale
            oplossingen te creeën voor bestaande problemen. Wij helpen u met
            websites, SEO, hosting etc..
          </p>
        </section>
        <section id="services">
          <FontAwesomeIcon icon="mobile" size="3x" color="#f0c410" />
          <h2>Apps</h2>
          <p className="quote-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
            adipisci quasi quidem iusto facilis maiores enim voluptates eligendi
            dolorum incidunt mollitia voluptatibus et eos commodi accusantium
            eaque, tempore beatae doloribus.
          </p>
        </section>
        <section id="services">
          <FontAwesomeIcon icon="search-location" size="3x" color="#f0c410" />
          <h2>SEO</h2>
          <p className="quote-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            repellendus minus nulla nihil deleniti tempora consectetur fugit
            porro eum voluptatum.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Quote;
