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
          <section id={quoteDesign.services} className="col-xl">
            <FontAwesomeIcon icon="globe" size="2x" color="#f0c410" />
            <h3 className={quoteDesign.quoteHead}>Websites</h3>
            <hr className={quoteDesign.thick} />
            <div className={quoteDesign.quoteBlock}>
              {' '}
              <p className={quoteDesign.quoteText}>
                Wij bouwen functionele en efficiënte websites op maat. Daarin
                zorgen wij dat uw website aan alle moderne technische wensen
                voldoet.
              </p>
            </div>
            <br />
            <hr className={quoteDesign.thin} />
            <div className={quoteDesign.quoteText}>
              <h6>Focus:</h6> <br />
              <ul className={quoteDesign.quoteKwali}>
                <li>Snelheid</li>
                <li>Maatwerk Design</li>
                <li>User Interface & Experience</li>
                <li>Web Cross-platform voor alle populaire browsers</li>
              </ul>
            </div>
            <br />
            <hr className={quoteDesign.endline} />
            <br />
          </section>
          <section id={quoteDesign.services} className="col-xl">
            <FontAwesomeIcon icon="shopping-cart" size="2x" color="#f0c410" />
            <h3 className={quoteDesign.quoteHead}>Webshops</h3>
            <hr className={quoteDesign.thick} />
            <div className={quoteDesign.quoteBlock}>
              {' '}
              <p className={quoteDesign.quoteText}>
                Webshops zijn deze tijd onmisbaar voor uw lokale bedrijf en
                bieden een bredere netwerk, beter beschikbaarheid en uiteraard
                meer coversie en productaanzien.
              </p>
            </div>
            <br />
            <hr className={quoteDesign.thin} />
            <div className={quoteDesign.quoteText}>
              <h6>Focus:</h6> <br />
              <ul className={quoteDesign.quoteKwali}>
                <li>Overzicht Assortiment</li>
                <li>Meer leads generen</li>
                <li>24/7 Handelbaar</li>
                <li>Automatisering</li>
              </ul>
            </div>
            <br />
            <hr className={quoteDesign.endline} />
            <br />
          </section>
          <section id={quoteDesign.services} className="col-xl">
            <FontAwesomeIcon icon="mobile" size="2x" color="#f0c410" />
            <h3 className={quoteDesign.quoteHead}>Webapplicaties</h3>
            <hr className={quoteDesign.thick} />
            <div className={quoteDesign.quoteBlock}>
              <p className={quoteDesign.quoteText}>
                Met de opkomst van digitalisering & mobiliteit is er steeds meer
                vraag naar (web)apps. Implementatie van complexe interacties
                maken het verschil tussen een webapp en website.
              </p>
            </div>
            <br />
            <hr className={quoteDesign.thin} />
            <div className={quoteDesign.quoteText}>
              <h6>Focus:</h6> <br />
              <ul className={quoteDesign.quoteKwali}>
                <li>Offline mogelijkheden</li>
                <li>Optimalisatie voor alle apparaten</li>
                <li>
                  Ingebouwde functies (bijv. camera-, microfoon- &
                  locatiegebruik)
                </li>
              </ul>
            </div>
            <br />
            <hr className={quoteDesign.endline} />
            <br />
          </section>
          <section id={quoteDesign.services} className="col-xl">
            <FontAwesomeIcon
              icon={['fab', 'searchengin']}
              size="2x"
              color="#f0c410"
            />
            <h3 className={quoteDesign.quoteHead}>Zoekmachineoptimalisatie</h3>
            <hr className={quoteDesign.thick} />
            <div className={quoteDesign.quoteBlock}>
              <p className={quoteDesign.quoteText}>
                Met zoekmachineoptimalisatie, oftewel &apos;SEO&apos; zorgen wij
                dat uw website bovenaan te vinden is in Google, Bing, Yahoo,
                etc. Uw potentiele bezoekers zullen in staat zijn uw online
                sneller te vinden.
              </p>
            </div>
            <br />
            <hr className={quoteDesign.thin} />
            <div className={quoteDesign.quoteText}>
              <h6>Focus:</h6> <br />
              <ul className={quoteDesign.quoteKwali}>
                <li>Vindbaarheid in zoekmachines</li>
                <li>Content wordt sneller gevonden</li>
                <li>Grafieken en statistieken</li>
              </ul>
            </div>
            <br />
            <hr className={quoteDesign.endline} />
            <br />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Quote;
