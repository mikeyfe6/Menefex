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
          <section id={quoteDesign.services} className="col-md-3">
            <FontAwesomeIcon icon="globe" size="3x" color="#f0c410" />
            <h3 className={quoteDesign.quoteHead}>Websites</h3>
            <br />
            <br />
            <hr className={quoteDesign.thick} />
            <p className={quoteDesign.quoteText}>
              <strong>
                {' '}
                <b>
                  Wij als Gimmix bouwen functionele en efficiënte websites
                  volledig in afstemming met de klant. We zorgen daarin zoveel
                  mogelijk dat we alle technische wensen voldoen en zo werken
                  naar een uitstekend eindproduct.
                </b>
              </strong>
            </p>{' '}
            <br />
            <hr className={quoteDesign.thin} />
            <p className={quoteDesign.quoteText}>
              Waar we op letten tijdens het bouwen van{' '}
              <b>
                <u>websites</u>
              </b>{' '}
              (?)
            </p>
            <ul>
              <li>Snelheid</li>
              <li>Efficiëntie</li>
              <li>Vindbaarheid</li>
              <li>Design</li>
              <li>User Interface & Experience</li>
              <li>Web Crossplatform voor alle populaire apparaten</li>
            </ul>
            <br />
          </section>
          <section id={quoteDesign.services} className="col-md-3">
            <FontAwesomeIcon icon="mobile" size="3x" color="#f0c410" />
            <h3 className={quoteDesign.quoteHead}>Apps</h3>
            <br />
            <br />
            <hr className={quoteDesign.thick} />
            <p className={quoteDesign.quoteText}>
              <b>
                Onze apps bouwen we met het oog naar kwaliteit, design en
                gebruiksgemak.
                <br />
                <br />
                Met de rise van digitalisering en mobiliteit is er steeds meer
                vraag naar (web)apps.
              </b>
            </p>
            <br />
            <hr className={quoteDesign.thin} />
            <p className={quoteDesign.quoteText}>
              Bij het bouwen van{' '}
              <b>
                <u>apps</u>
              </b>{' '}
              letten wij extra op (?)
            </p>
            <ul>
              <li>Snelheid</li>
              <li>Efficiëntie</li>
              <li>User Interface & Experience</li>
              <li>Offline ability</li>
              <li>Geoptimialiseerd voor alle apparaten</li>
            </ul>
            <br />
          </section>
          <section id={quoteDesign.services} className="col-md-3">
            <FontAwesomeIcon
              icon={['fab', 'searchengin']}
              size="3x"
              color="#f0c410"
            />
            <h3 className={quoteDesign.quoteHead}>SEO</h3>
            <br />
            <br />
            <hr className={quoteDesign.thick} />
            <p className={quoteDesign.quoteText}>
              <b>
                Wij zorgen ook voor geoptimaliseerde vindbaarheid in de
                zoekmachines.
                <br />
                <br />
                Door middel van duidelijke content en keywords zijn uw
                potentiele klanten in staat u en uw website sneller te vinden op
                Google, Bing, Yahoo, noem maar op.
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
            </p>
            <ul>
              <li>Vindbaarheid op zoekmachines</li>
              <li>Content wordt sneller gevonden</li>
            </ul>
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
