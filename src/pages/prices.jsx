import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import pricesDesign from '../styles/modules/prices.module.scss';

import SEO from '../components/seo';

const Prices = () => {
  return (
    <Layout>
      <SEO
        title="Prices"
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
          georienteerd gesprek, neem <Link to="/contact/">contact</Link> met ons
          op!{' '}
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
              <p className={pricesDesign.priceaction}>*(50% korting)</p>
              <br />
              <ul className={pricesDesign.pricelist}>
                <li>1 - 5 pagina's</li>
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
                <li>1 maand gratis support</li>
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
              <p className={pricesDesign.priceaction}>*(50% korting)</p>
              <br />
              <ul className={pricesDesign.pricelist}>
                <li>± 10 pagina's</li>
                <li>Design op maatwerk</li>
                <li>CMS</li>
                <li>Foto Gallery</li>
                <li>Video Integratie</li>
                <li>Responsive Design</li>
                <li>Formulieren</li>
                <li>Zoekmodule op website</li>
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
              <p className={pricesDesign.priceaction}>*(50% korting)</p>
              <br />
              <ul className={pricesDesign.pricelist}>
                <li>∞ pagina's</li>
                <li>Design op maatwerk</li>
                <li>E-commerce (+Bank Integratie)</li>
                <li>CMS</li>
                <li>Foto Gallery</li>
                <li>Video Integratie</li>
                <li>Responsive Design</li>
                <li>Formulieren</li>
                <li>Zoekmodule op website</li>
                <li>Testimonials</li>
                <li>Google Maps integratie</li>
                <li>Google Statistieken / SEO</li>
                <li>Gratis SSL</li>
                <li>3 maanden gratis support</li>
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
      </div>
      <div className="whitespace" />
    </Layout>
  );
};

export default Prices;
