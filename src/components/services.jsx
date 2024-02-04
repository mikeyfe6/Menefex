import React from 'react';
import { Link } from 'gatsby';

import * as servicesStyles from '../styles/modules/services.module.scss';

const Service = () => (
  <section className={servicesStyles.serviceContainer}>
    <div className={servicesStyles.serviceWrapper}>
      <div>
        <div>
          <div className={servicesStyles.serviceTitle}>
            <i className="fa-solid fa-globe" />
            <h4>Websites</h4>
          </div>
          <hr className={servicesStyles.thick} />
          <p>
            Wij bouwen functionele en efficiënte websites volledig op maat.
            Daarin zorgen wij dat uw website aan alle actuele technische wensen
            en voorwaarden voldoet.
          </p>
          <hr className={servicesStyles.thin} />
          <span>Focus:</span>
          <ul>
            <li>Laadsnelheid</li>
            <li>Maatwerk Design</li>
            <li>Gebruikersinterface & gebruikservaring</li>
            <li>Web Cross-platform voor alle populaire browsers</li>
          </ul>
          <hr className={servicesStyles.endline} />
        </div>
        <div>
          <div className={servicesStyles.serviceTitle}>
            <i className="fa-solid fa-shopping-cart" />
            <h4>Webshops</h4>
          </div>
          <hr className={servicesStyles.thick} />
          <p>
            Webshops zijn deze tijd onmisbaar voor uw lokale onderneming en
            bieden een bredere netwerk, beter beschikbaarheid en uiteraard meer
            conversie en productaanzien.
          </p>
          <hr className={servicesStyles.thin} />
          <span>Focus:</span>
          <ul>
            <li>Overzicht assortiment</li>
            <li>Meer leads generen</li>
            <li>24/7 Handel drijven</li>
            <li>Automatiseringsprocessen</li>
          </ul>
          <hr className={servicesStyles.endline} />
        </div>
        <div>
          <div className={servicesStyles.serviceTitle}>
            <i className="fa-solid fa-mobile" />
            <h4>Webapplicaties</h4>
          </div>
          <hr className={servicesStyles.thick} />
          <p>
            Met de opkomst van digitalisering & mobiliteit is er steeds meer
            vraag naar (web)apps. Implementaties van complexe interacties maken
            het verschil tussen een webapplicatie en een website.
          </p>
          <hr className={servicesStyles.thin} />
          <span>Focus:</span>
          <ul>
            <li>Offline-mogelijkheden</li>
            <li>Optimalisatie voor alle apparaten</li>
            <li>
              Koppelingen met ingebouwde functies (bijv. camera-, microfoon- &
              locatiegebruik)
            </li>
          </ul>
          <hr className={servicesStyles.endline} />
        </div>
        <div>
          <div className={servicesStyles.serviceTitle}>
            <i className="fa-brands fa-searchengin" />
            <h4>Zoekmachine Optimalisatie</h4>
          </div>
          <hr className={servicesStyles.thick} />
          <p>
            Met zoekmachine optimalisatie, oftewel &apos;SEO&apos; zorgen wij
            dat uw website bovenaan te vinden is in Google, Bing, Yahoo, etc.
            Potentiele bezoekers zullen zo in staat zijn uw onderneming sneller
            te ontdekken.
          </p>
          <hr className={servicesStyles.thin} />
          <span>Focus:</span>
          <ul>
            <li>Vindbaarheid in populaire zoekmachines</li>
            <li>Aanzienlijk meer (in)directe webbezoekers</li>
            <li>Grafieken, tactieken en statistieken</li>
          </ul>
          <hr className={servicesStyles.endline} />
        </div>
      </div>
      <div>
        <Link to="/prijzen/">Bekijk de prijslijst</Link>
      </div>
    </div>
  </section>
);
export default Service;
