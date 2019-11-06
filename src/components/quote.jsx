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
          <h3 className="quote-head">Websites</h3>
          <br />
          <br />
          <hr className="thick" />
          <p className="quote-text">
            Bij Gimmix bouwen we functionele en effiente websites volledig in
            afstemming met de klant.
          </p>{' '}
          <br />
          <hr />
          <br />
          <p>
            Waar we vooral op letten tijdens het bouwen van{' '}
            <b>
              <u>websites</u>
            </b>
            ?
          </p>
          <ul>
            <li>Snelheid</li>
            <li>Efficientie</li>
            <li>Vindbaarheid</li>
            <li>Design & User Interface & Experience</li>
            <li>Web Crossplatform voor alle populaire devices</li>
          </ul>
        </section>
        <section id="services">
          <FontAwesomeIcon icon="mobile" size="3x" color="#f0c410" />
          <h3 className="quote-head">Apps</h3>
          <br />
          <br />
          <hr className="thick" />
          <p className="quote-text">
            Onze apps bouwen we met de zelfde methode als het bouwen van
            websites. Met de rise van digitalisering en mobiliteit is er steeds
            meer vraag naar (web)apps.
          </p>
          <br />
          <hr />
          <br />
          <p>
            Waar we extra op letten bij het bouwen van{' '}
            <b>
              <u>apps</u>
            </b>
            ?
          </p>
          <ul>
            <li>Snelheid</li>
            <li>UI & UX priority</li>
            <li>Offline ability</li>
            <li>Optimized for all devices</li>
            <li>Vindbaarheid</li>
          </ul>
        </section>
        <section id="services">
          <FontAwesomeIcon
            icon={['fab', 'searchengin']}
            size="3x"
            color="#f0c410"
          />
          <h3 className="quote-head">SEO</h3>
          <br />
          <br />
          <hr className="thick" />
          <p className="quote-text">
            Wij zorgen ook voor geoptimaliseerde vindbaarheid in de
            zoekmachines. Door middel van duidelijke content/keywords is de
            gebruker in staat de website sneller te vinden.
          </p>
          <br />
          <hr />
          <br />
          <p>
            Wat zijn de grootste voordelen van{' '}
            <b>
              <u>SEO</u>
            </b>
            ?
          </p>
          <ul>
            <li>Vindbaarheid op zoekmachines</li>
            <li>Content wordt sneller gevonden</li>
          </ul>
        </section>
        <section id="services">
          <FontAwesomeIcon
            icon={['fab', 'searchengin']}
            size="3x"
            color="#f0c410"
          />
          <h3 className="quote-head">Content Creating</h3>
          <br />
          <br />
          <hr className="thick" />
          <p className="quote-text">
            Content is misschien wel één van de belangrijkste aspecten voor
            vindbaarheid in zoekmachine.
          </p>
          <br />
          <hr />
          <br />
          <p>
            Wat zijn de grootste voordelen van uitgebreide en professionele{' '}
            <b>
              <u>content</u>
            </b>
            ?
          </p>
          <ul>
            <li>Vindbaarheid op zoekmachines</li>
            <li>Content wordt sneller gevonden</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Quote;
