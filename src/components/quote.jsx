import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  quoteContainer,
  quoteWrapper,
  services,
  quoteHead,
  thick,
  thin,
  quoteBlock,
  quoteText,
  quoteFocus,
  quoteKwali,
  endline,
  quotePriceInfo,
} from '../styles/modules/quote.module.scss';

// *GEFIXT TODO: Responsive maken!

const Quote = () => (
  //   const today = new Date()

  <div className={quoteContainer}>
    <div className={quoteWrapper}>
      <div className="row">
        <section className={`${services} col-xl`}>
          <div style={{ whiteSpace: 'nowrap' }}>
            <FontAwesomeIcon icon="globe" size="2x" color="#FFCC00" />
            <h3 className={quoteHead}>Websites</h3>
          </div>
          <hr className={thick} />
          <div className={quoteBlock}>
            {' '}
            <p className={quoteText}>
              Wij bouwen functionele en efficiënte websites volledig op maat.
              Daarin zorgen wij dat uw website aan alle actuele technische
              wensen en voorwaarden voldoet.
            </p>
          </div>
          <br />
          <hr className={thin} />
          <div className={quoteText}>
            <h6 className={quoteFocus}>Focus:</h6> <br />
            <ul className={quoteKwali}>
              <li>Laadsnelheid</li>
              <li>Maatwerk Design</li>
              <li>Gebruikersinterface & gebruikservaring</li>
              <li>Web Cross-platform voor alle populaire browsers</li>
            </ul>
          </div>
          <br />
          <hr className={endline} />
          <br />
        </section>
        <section className={`${services} col-xl`}>
          <div style={{ whiteSpace: 'nowrap' }}>
            <FontAwesomeIcon icon="shopping-cart" size="2x" color="#FFCC00" />
            <h3 className={quoteHead}>Webshops</h3>
          </div>
          <hr className={thick} />
          <div className={quoteBlock}>
            {' '}
            <p className={quoteText}>
              Webshops zijn deze tijd onmisbaar voor uw lokale onderneming en
              bieden een bredere netwerk, beter beschikbaarheid en uiteraard
              meer conversie en productaanzien.
            </p>
          </div>
          <br />
          <hr className={thin} />
          <div className={quoteText}>
            <h6 className={quoteFocus}>Focus:</h6> <br />
            <ul className={quoteKwali}>
              <li>Overzicht assortiment</li>
              <li>Meer leads generen</li>
              <li>24/7 Handel drijven</li>
              <li>Automatiseringsprocessen</li>
            </ul>
          </div>
          <br />
          <hr className={endline} />
          <br />
        </section>
        <section className={`${services} col-xl`}>
          <div style={{ whiteSpace: 'nowrap' }}>
            <FontAwesomeIcon icon="mobile" size="2x" color="#FFCC00" />
            <h3 className={quoteHead}>Webapplicaties</h3>
          </div>
          <hr className={thick} />
          <div className={quoteBlock}>
            <p className={quoteText}>
              Met de opkomst van digitalisering & mobiliteit is er steeds meer
              vraag naar (web)apps. Implementaties van complexe interacties
              maken het verschil tussen een webapplicatie en een website.
            </p>
          </div>
          <br />
          <hr className={thin} />
          <div className={quoteText}>
            <h6 className={quoteFocus}>Focus:</h6> <br />
            <ul className={quoteKwali}>
              <li>Offline-mogelijkheden</li>
              <li>Optimalisatie voor alle apparaten</li>
              <li>
                Koppelingen met ingebouwde functies (bijv. camera-, microfoon- &
                locatiegebruik)
              </li>
            </ul>
          </div>
          <br />
          <hr className={endline} />
          <br />
        </section>
        <section className={`${services} col-xl`}>
          <div style={{ whiteSpace: 'nowrap' }}>
            <FontAwesomeIcon
              icon={['fab', 'searchengin']}
              size="2x"
              color="#FFCC00"
            />
            <h3 className={quoteHead}>Zoekmachineoptimalisatie</h3>
          </div>
          <hr className={thick} />
          <div className={quoteBlock}>
            <p className={quoteText}>
              Met zoekmachineoptimalisatie, oftewel &apos;SEO&apos; zorgen wij
              dat uw website bovenaan te vinden is in Google, Bing, Yahoo, etc.
              Potentiele bezoekers zullen zo in staat zijn uw onderneming
              sneller te ontdekken.
            </p>
          </div>
          <br />
          <hr className={thin} />
          <div className={quoteText}>
            <h6 className={quoteFocus}>Focus:</h6> <br />
            <ul className={quoteKwali}>
              <li>Vindbaarheid in populaire zoekmachines</li>
              <li>Aanzienlijk meer (in)directe webbezoekers</li>
              <li>Grafieken, tactieken en statistieken</li>
            </ul>
          </div>
          <br />
          <hr className={endline} />
          <br />
        </section>
        <div style={{ textAlign: 'center', marginTop: '2em' }}>
          <Link to="/prices/">
            <button type="button" className={quotePriceInfo} style={{}}>
              Bekijk de prijslijst
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
export default Quote;
