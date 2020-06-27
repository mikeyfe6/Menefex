import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import pricesDesign from '../styles/modules/prices.module.scss';

import SEO from '../components/seo';
import Call from '../components/call';

const Prices = () => {
  return (
    <Layout>
      <SEO
        title="Prijzen & tarieven"
        description="Bekijk onze prijzen en tarieven."
        keywords="prijzen, tarieven, starter, established, business, plan"
        pathname="/prices/"
      />
      <div className="container">
        <div className="whitespace" />
        <h2 className="page-title">
          Prijzen & tarieven<span className="headdots">.</span>
        </h2>
        <br />
        <p className="page-sub">
          Hier ziet u een indicatie van onze scherpe prijzen. Heeft u liever een
          georiënteerd gesprek, neem <Link to="/contact/">contact</Link> met ons
          op of vraag een <Link to="#callscroll">terugbelverzoek</Link> aan.
        </p>
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className={pricesDesign.pricecon}>
              <h4 className={pricesDesign.pricehead}>STARTER PLAN</h4>
              <p className={pricesDesign.pricecap}>
                <span className={pricesDesign.pricedisc}>€695,-</span> &nbsp;
                <b>€345,-</b>&nbsp;
                <sup>
                  <span className={pricesDesign.pricebtw}>(excl. btw)</span>
                </sup>{' '}
              </p>
              <p className={pricesDesign.priceaction}>ACTIE: *(50% korting)</p>
              <br />
              <ul className={pricesDesign.pricelist}>
                <strong>
                  <li>1 - 5 pagina&apos;s</li>
                </strong>
                <li>Design op maatwerk</li>
                <li>CMS</li>
                <li>Foto Gallery</li>
                <li>Video Integratie</li>
                <li>Responsive Design</li>
                <li>Formulieren</li>
                <li>Testimonials</li>
                <li>Google Maps integratie</li>
                <li>Google Statistieken / SEO</li>
                <li>Gratis SSL</li>
                <strong>
                  <li>1 maand gratis support</li>
                </strong>
              </ul>
              <br />
              <button
                type="button"
                name="offerte"
                className={pricesDesign.pricebtn}
              >
                <Link to="/contact/">OFFERTE</Link>
              </button>
            </div>
          </div>
          <div className="col-md-4">
            {' '}
            <div className={pricesDesign.pricecon}>
              <h4 className={pricesDesign.pricehead}>ESTABLISHED PLAN</h4>
              <p className={pricesDesign.pricecap}>
                <span className={pricesDesign.pricedisc}>€1125,-</span> &nbsp;
                <b>€555,-</b>&nbsp;
                <sup>
                  <span className={pricesDesign.pricebtw}>(excl. btw)</span>
                </sup>{' '}
              </p>
              <p className={pricesDesign.priceaction}>ACTIE: *(50% korting)</p>
              <br />
              <ul className={pricesDesign.pricelist}>
                <strong>
                  <li>± 10 pagina&apos;s</li>
                </strong>
                <li>Design op maatwerk</li>
                <li>CMS</li>
                <li>Foto Gallery</li>
                <li>Video Integratie</li>
                <li>Responsive Design</li>
                <li>Formulieren</li>
                <strong>
                  <li>Zoekmodule op website</li>
                </strong>
                <li>Testimonials</li>
                <li>Google Maps integratie</li>
                <li>Google Statistieken / SEO</li>
                <li>Gratis SSL</li>
                <li>2 maanden gratis support</li>
              </ul>
              <br />
              <button
                type="button"
                name="offerte"
                className={pricesDesign.pricebtn}
              >
                <Link to="/contact/">OFFERTE</Link>
              </button>
            </div>
          </div>
          <div className="col-md-4">
            {' '}
            <div className={pricesDesign.pricecon}>
              <h4 className={pricesDesign.pricehead}>BUSINESS PLAN</h4>
              <p className={pricesDesign.pricecap}>
                <span className={pricesDesign.pricedisc}>€1675,-</span> &nbsp;
                <b>€835,-</b>&nbsp;
                <sup>
                  <span className={pricesDesign.pricebtw}>(excl. btw)</span>
                </sup>{' '}
              </p>
              <p className={pricesDesign.priceaction}>ACTIE: *(50% korting)</p>
              <br />
              <ul className={pricesDesign.pricelist}>
                <strong>
                  <li>∞ pagina&apos;s</li>
                </strong>
                <li>Design op maatwerk</li>
                <strong>
                  <li>E-commerce (+Bank Integratie)</li>
                </strong>
                <li>CMS</li>
                <li>Foto Gallery</li>
                <li>Video Integratie</li>
                <li>Responsive Design</li>
                <li>Formulieren</li>
                <strong>
                  <li>Zoekmodule op website</li>
                </strong>
                <li>Testimonials</li>
                <li>Google Maps integratie</li>
                <li>Google Statistieken / SEO</li>
                <li>Gratis SSL</li>
                <strong>
                  <li>3 maanden gratis support</li>
                </strong>
              </ul>
              <br />
              <button
                type="button"
                name="offerte"
                className={pricesDesign.pricebtn}
              >
                <Link to="/contact/">OFFERTE</Link>
              </button>
            </div>
          </div>
        </div>
        <div id="callscroll" />
        <div className="whitespace" />
        <Call />
      </div>
      <div className="whitespace" />
    </Layout>
  );
};

export default Prices;
