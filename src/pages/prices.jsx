import React from 'react';
import { Link } from 'gatsby';

import { Animated } from 'react-animated-css';

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
        keywords="prijzen, tarieven, starter, established, business, plan, actie"
        pathname="/prices/"
      />
      <div className="container">
        <div className="whitespace" />
        <h1 className="page-title">
          Prijzen & tarieven<span className="headdots">.</span>
        </h1>
        <br />
        <p className="page-sub">
          Hier ziet u een indicatie van onze scherpe prijzen. Heeft u liever een
          georiënteerd gesprek, neem <Link to="/contact/">contact</Link> met ons
          op of vraag een <Link to="#callscroll">terugbelverzoek</Link> aan.
        </p>
        <br />
        <div className="row">
          <div className="col-md-4">
            <Animated
              animationIn="fadeInUp"
              animationInDelay={750}
              animationInDuration={1500}
            >
              <div className={pricesDesign.pricecon}>
                <h4 className={pricesDesign.pricehead}>STARTER PLAN</h4>
                <p className={pricesDesign.pricecap}>
                  <span className={pricesDesign.pricedisc}>€695,-</span> &nbsp;
                  €345,-&nbsp;
                  <sup>
                    <span className={pricesDesign.pricebtw}>(excl. btw)</span>
                  </sup>{' '}
                </p>
                <p className={pricesDesign.priceaction}>
                  ACTIE: *(50% korting)
                </p>
                <br />
                <ul className={pricesDesign.pricelist}>
                  <li className={pricesDesign.pricebold}>
                    1 - 5 pagina&apos;s
                  </li>

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

                  <li className={pricesDesign.pricebold}>
                    1 maand gratis support
                  </li>
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
            </Animated>
          </div>
          <div className="col-md-4">
            {' '}
            <Animated
              animationIn="fadeInUp"
              animationInDelay={1500}
              animationInDuration={1500}
            >
              <div className={pricesDesign.pricecon}>
                <h4 className={pricesDesign.pricehead}>ESTABLISHED PLAN</h4>
                <p className={pricesDesign.pricecap}>
                  <span className={pricesDesign.pricedisc}>€1125,-</span> &nbsp;
                  €555,-&nbsp;
                  <sup>
                    <span className={pricesDesign.pricebtw}>(excl. btw)</span>
                  </sup>{' '}
                </p>
                <p className={pricesDesign.priceaction}>
                  ACTIE: *(50% korting)
                </p>
                <br />
                <ul className={pricesDesign.pricelist}>
                  <li className={pricesDesign.pricebold}>± 10 pagina&apos;s</li>

                  <li>Design op maatwerk</li>
                  <li>CMS</li>
                  <li>Foto Gallery</li>
                  <li>Video Integratie</li>
                  <li>Responsive Design</li>
                  <li>Formulieren</li>
                  <li className={pricesDesign.pricebold}>
                    Zoekmodule op website
                  </li>

                  <li>Testimonials</li>
                  <li>Google Maps integratie</li>
                  <li>Google Statistieken / SEO</li>
                  <li>Gratis SSL</li>
                  <li className={pricesDesign.pricebold}>
                    2 maanden gratis support
                  </li>
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
            </Animated>
          </div>
          <div className="col-md-4">
            {' '}
            <Animated
              animationIn="fadeInUp"
              animationInDelay={2250}
              animationInDuration={1500}
            >
              <div className={pricesDesign.pricecon}>
                <h4 className={pricesDesign.pricehead}>BUSINESS PLAN</h4>
                <p className={pricesDesign.pricecap}>
                  <span className={pricesDesign.pricedisc}>€1675,-</span> &nbsp;
                  €835,-&nbsp;
                  <sup>
                    <span className={pricesDesign.pricebtw}>(excl. btw)</span>
                  </sup>{' '}
                </p>
                <p className={pricesDesign.priceaction}>
                  ACTIE: *(50% korting)
                </p>
                <br />
                <ul className={pricesDesign.pricelist}>
                  <li className={pricesDesign.pricebold}>∞ pagina&apos;s</li>

                  <li>Design op maatwerk</li>
                  <li className={pricesDesign.pricebold}>
                    E-commerce (+Bank Integratie)
                  </li>

                  <li>CMS</li>
                  <li>Foto Gallery</li>
                  <li>Video Integratie</li>
                  <li>Responsive Design</li>
                  <li>Formulieren</li>
                  <li className={pricesDesign.pricebold}>
                    Zoekmodule op website
                  </li>

                  <li>Testimonials</li>
                  <li>Google Maps integratie</li>
                  <li>Google Statistieken / SEO</li>
                  <li>Gratis SSL</li>
                  <li className={pricesDesign.pricebold}>
                    3 maanden gratis support
                  </li>
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
            </Animated>
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
