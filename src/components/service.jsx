import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  serviceContainer,
  serviceWrapper,
  services,
  serviceHead,
  thick,
  thin,
  serviceBlock,
  serviceText,
  serviceFocus,
  serviceFocusTitle,
  serviceTitle,
  serviceKwali,
  endline,
  servicePriceInfo,
} from '../styles/modules/services.module.scss';

const Service = () => (
  <div className={serviceContainer}>
    <div className={serviceWrapper}>
      <div className="row">
        <section className={`${services} col-xl`}>
          <div className={serviceTitle}>
            <FontAwesomeIcon icon="globe" size="2x" color="#FFCC00" />
            <h3 className={serviceHead}>Websites</h3>
          </div>
          <hr className={thick} />
          <div className={serviceBlock}>
            {' '}
            <p className={serviceText}>
              Wij bouwen functionele en efficiënte websites volledig op maat.
              Daarin zorgen wij dat uw website aan alle actuele technische
              wensen en voorwaarden voldoet.
            </p>
          </div>
          <br />
          <hr className={thin} />
          <div className={serviceFocus}>
            <h6 className={serviceFocusTitle}>Focus:</h6> <br />
            <ul className={serviceKwali}>
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
          <div className={serviceTitle}>
            <FontAwesomeIcon icon="shopping-cart" size="2x" color="#FFCC00" />
            <h3 className={serviceHead}>Webshops</h3>
          </div>
          <hr className={thick} />
          <div className={serviceBlock}>
            {' '}
            <p className={serviceText}>
              Webshops zijn deze tijd onmisbaar voor uw lokale onderneming en
              bieden een bredere netwerk, beter beschikbaarheid en uiteraard
              meer conversie en productaanzien.
            </p>
          </div>
          <br />
          <hr className={thin} />
          <div className={serviceFocus}>
            <h6 className={serviceFocusTitle}>Focus:</h6> <br />
            <ul className={serviceKwali}>
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
          <div className={serviceTitle}>
            <FontAwesomeIcon icon="mobile" size="2x" color="#FFCC00" />
            <h3 className={serviceHead}>Webapplicaties</h3>
          </div>
          <hr className={thick} />
          <div className={serviceBlock}>
            <p className={serviceText}>
              Met de opkomst van digitalisering & mobiliteit is er steeds meer
              vraag naar (web)apps. Implementaties van complexe interacties
              maken het verschil tussen een webapplicatie en een website.
            </p>
          </div>
          <br />
          <hr className={thin} />
          <div className={serviceFocus}>
            <h6 className={serviceFocusTitle}>Focus:</h6> <br />
            <ul className={serviceKwali}>
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
          <div className={serviceTitle}>
            <FontAwesomeIcon
              icon={['fab', 'searchengin']}
              size="2x"
              color="#FFCC00"
            />
            <h3 className={serviceHead}>Zoekmachine Optimalisatie</h3>
          </div>
          <hr className={thick} />
          <div className={serviceBlock}>
            <p className={serviceText}>
              Met zoekmachine optimalisatie, oftewel &apos;SEO&apos; zorgen wij
              dat uw website bovenaan te vinden is in Google, Bing, Yahoo, etc.
              Potentiele bezoekers zullen zo in staat zijn uw onderneming
              sneller te ontdekken.
            </p>
          </div>
          <br />
          <hr className={thin} />
          <div className={serviceFocus}>
            <h6 className={serviceFocusTitle}>Focus:</h6> <br />
            <ul className={serviceKwali}>
              <li>Vindbaarheid in populaire zoekmachines</li>
              <li>Aanzienlijk meer (in)directe webbezoekers</li>
              <li>Grafieken, tactieken en statistieken</li>
            </ul>
          </div>
          <br />
          <hr className={endline} />
          <br />
        </section>
        <div style={{ textAlign: 'center', marginTop: '1em' }}>
          <Link to="/prices/">
            <button type="button" className={servicePriceInfo}>
              Bekijk de prijslijst
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
export default Service;
