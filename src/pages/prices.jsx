import React from 'react';
import { Link } from 'gatsby';

import { Animated } from 'react-animated-css';
import scrollTo from 'gatsby-plugin-smoothscroll';

import Layout from '../components/layout';

import pricesDesign from '../styles/modules/prices.module.scss';

import SEO from '../components/seo';
import Call from '../components/call';

const Prices = () => {
  return (
    <Layout>
      <SEO
        title="Prijzen & tarieven"
        description="Hier ziet u een indicatie van onze scherpe prijzen. Heeft u liever een georiënteerd gesprek, neem contact met ons op of vraag een terugbelverzoek aan."
        keywords="prijzen, tarieven, starter, established, business, plan, actie"
        pathname="/prices/"
      />
      <div className="container">
        <div className="smallwhitespace" />
        <h1 className="page-title">
          Prijzen & tarieven<span className="headdots">.</span>
        </h1>
        <br />
        <p className="page-sub">
          Hier ziet u een indicatie van onze scherpe prijzen. Heeft u liever een
          georiënteerd gesprek, neem{' '}
          <Link to="/contact/">
            <b>contact</b>
          </Link>{' '}
          met ons op of vraag een{' '}
          <button
            type="button"
            className={pricesDesign.scrollcall}
            onClick={() => scrollTo('#callscroll')}
          >
            <b>terugbelverzoek</b>
          </button>{' '}
          aan.
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
                  €521,-&nbsp;
                  <sup>
                    <span className={pricesDesign.pricebtw}>(excl. btw)</span>
                  </sup>{' '}
                </p>
                <p className={pricesDesign.priceaction}>
                  ACTIE: *(25% korting)
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
                <Link to="/contact/">
                  <button
                    type="button"
                    name="offerte"
                    className={pricesDesign.pricebtn}
                  >
                    OFFERTE
                  </button>
                </Link>
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
                  €844,-&nbsp;
                  <sup>
                    <span className={pricesDesign.pricebtw}>(excl. btw)</span>
                  </sup>{' '}
                </p>
                <p className={pricesDesign.priceaction}>
                  ACTIE: *(25% korting)
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
                <Link to="/contact/">
                  <button
                    type="button"
                    name="offerte"
                    className={pricesDesign.pricebtn}
                  >
                    offerte
                  </button>
                </Link>
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
                  €1256,-&nbsp;
                  <sup>
                    <span className={pricesDesign.pricebtw}>(excl. btw)</span>
                  </sup>{' '}
                </p>
                <p className={pricesDesign.priceaction}>
                  ACTIE: *(25% korting)
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
                <Link to="/contact/">
                  <button
                    type="button"
                    name="offerte"
                    className={pricesDesign.pricebtn}
                  >
                    offerte
                  </button>
                </Link>
              </div>
            </Animated>
          </div>
        </div>
        <div id="callscroll" />
        <div className="whitespace" />
        <Animated
          animationIn="fadeIn"
          animationInDelay={3750}
          animationInDuration={2750}
        >
          <Call />
        </Animated>
      </div>
      <div className="whitespace" />
    </Layout>
  );
};

export default Prices;
