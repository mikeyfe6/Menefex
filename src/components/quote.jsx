/* eslint-disable react/jsx-indent */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import quoteDesign from '../styles/modules/quote.module.scss';

// TODO: Responsive maken!

const Quote = () => {
  //   const today = new Date()

  return (
    <div className={quoteDesign.quoteContainer}>
      <div className={quoteDesign.quoteWrapper}>
        <div className="row">
          <section id={quoteDesign.services} className="col-lg-3">
            <FontAwesomeIcon icon="globe" size="2x" color="#f0c410" />
            <h3 className={quoteDesign.quoteHead}>Websites</h3>
            <hr className={quoteDesign.thick} />
            <p className={quoteDesign.quoteText}>
              {' '}
              <b>
                Wij bouwen functionele en efficiënte websites op maat. Daarin
                zorgen wij dat we aan alle web-technische wensen voldoen en zo
                werken wij naar een uitstekend en compleet eindproduct.
              </b>
            </p>
            <br />
            <hr className={quoteDesign.thin} />
            <p className={quoteDesign.quoteText}>
              Waar we op letten tijdens het bouwen van{' '}
              <b>
                <u>websites</u>
              </b>{' '}
              (?)
              <br />
              <br />
              <ul className={quoteDesign.quoteKwali}>
                <li>Snelheid</li>
                <li>Efficiëntie</li>
                <li>Design</li>
                <li>Web Crossplatform voor alle populaire browsers</li>
              </ul>
            </p>
            <br />
            <hr className={quoteDesign.endline} />
            <br />
          </section>
          <section id={quoteDesign.services} className="col-lg-3">
            <FontAwesomeIcon icon="mobile" size="2x" color="#f0c410" />
            <h3 className={quoteDesign.quoteHead}>Webapplicaties</h3>
            <hr className={quoteDesign.thick} />
            <p className={quoteDesign.quoteText}>
              <b>
                Met de rise van digitalisering en mobiliteit is er steeds meer
                vraag naar (web)apps. Het grootste verschil tussen een website
                en webapp zijn de ingebouwde functies.
              </b>
            </p>
            <br />
            <hr className={quoteDesign.thin} />
            <p className={quoteDesign.quoteText}>
              Bij het bouwen van{' '}
              <b>
                <u>webapps</u>
              </b>{' '}
              letten wij extra op (?)
              <br />
              <br />
              <ul className={quoteDesign.quoteKwali}>
                <li>User Interface & Experience</li>
                <li>Offline ability</li>
                <li>Geoptimialiseerd voor alle apparaten</li>
              </ul>
            </p>
            <br />
            <hr className={quoteDesign.endline} />
            <br />
          </section>
          <section id={quoteDesign.services} className="col-lg-3">
            <FontAwesomeIcon
              icon={['fab', 'searchengin']}
              size="2x"
              color="#f0c410"
            />
            <h3 className={quoteDesign.quoteHead}>SEO</h3>
            <hr className={quoteDesign.thick} />
            <p className={quoteDesign.quoteText}>
              <b>
                Wij zorgen dat uw website bovenaan te vinden is in Google, Bing,
                Yahoo, noem maar op. Uw potentiele bezoekers zullen in staat
                zijn u en uw website sneller te vinden.
              </b>
            </p>
            <br />
            <hr className={quoteDesign.thin} />
            <p className={quoteDesign.quoteText}>
              Wat zijn de grootste voordelen van goede en geoptimaliseerde{' '}
              <b>
                <u>SEO</u>
              </b>{' '}
              (?)
              <br />
              <br />
              <ul className={quoteDesign.quoteKwali}>
                <li>Vindbaarheid in zoekmachines</li>
                <li>Content wordt sneller gevonden</li>
                <li>Product(en) krijgen meer aanzien</li>
              </ul>
            </p>
            <br />
            <hr className={quoteDesign.endline} />
            <br />
          </section>
          {
            // * EXTRA section
            /* <section id="services">
		<FontAwesomeIcon
		icon={['fab', 'searchengin']}
		size="3x"
		color="#f8e491"
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
	</section> */
          }
        </div>
      </div>
    </div>
  );
};

export default Quote;
