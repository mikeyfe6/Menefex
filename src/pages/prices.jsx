import React from 'react';

import { Link } from 'gatsby';
import { Animated } from 'react-animated-css';
import scrollTo from 'gatsby-plugin-smoothscroll';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Call from '../components/call';

import {
  scrollcall,
  pricecon,
  pricehead,
  pricecap,
  pricedisc,
  pricebtw,
  priceaction,
  pricelist,
  pricebold,
  pricebtn,
  pricenot,
  pricebevat,
} from '../styles/modules/prices.module.scss';

const Prices = () => (
  <Layout>
    <SEO
      title="Prijzen & tarieven"
      description="Hier ziet u een indicatie van onze scherpe prijzen. Heeft u liever een georiënteerd gesprek, neem contact met ons op of vraag een terugbelverzoek aan."
      keywords="prijzen, tarieven, starter, established, business, plan, actie"
      pathname="/prices/"
    />
    <div>
      <div className="smallwhitespace" />
      <h1 className="page-title">
        Prijzen & tarieven<span className="headdots">.</span>
      </h1>
      <br />
      <p className="page-sub">
        Hier ziet u een indicatie van onze scherpe prijzen. Heeft u liever een
        georiënteerd gesprek, neem{' '}
        <Link to="/contact/" style={{ fontWeight: '700' }}>
          contact
        </Link>{' '}
        met ons op of vraag een{' '}
        <button
          style={{ fontWeight: '700' }}
          type="button"
          className={scrollcall}
          onClick={() => scrollTo('#callscroll')}
        >
          terugbelverzoek
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
            <div className={pricecon}>
              <h4 className={pricehead}>STARTER PLAN</h4>
              <p className={pricecap}>
                <span className={pricedisc}>€695,-</span> &nbsp; €521,-&nbsp;
                <sup>
                  <span className={pricebtw}>(excl. btw)</span>
                </sup>{' '}
              </p>
              <p className={priceaction}>ACTIE: *(25% korting)</p>
              <p className={pricebevat}>
                <i>... bevat:</i>
              </p>
              <ul className={pricelist}>
                <li className={pricebold}>1 - 5 pagina&apos;s</li>

                <li>Maatwerk Design</li>
                <li>Eigen CMS (inlogpaneel)</li>
                <li>Foto&apos;s, video&apos;s en andere media</li>
                <li>Responsief voor alle toestellen</li>
                <li>Uitgebreide Formulieren</li>
                <li>Testimonials / Reviews</li>
                <li>
                  Statistieken; Google Analytics, Tag Manager & Search Console
                </li>
                <li>Gratis SSL</li>

                <li className={pricebold}>3 maanden gratis support</li>
              </ul>
              <br />
              <br />
              <Link to="/contact/">
                <button type="button" name="offerte" className={pricebtn}>
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
            <div className={pricecon}>
              <h4 className={pricehead}>ESTABLISHED PLAN</h4>
              <p className={pricecap}>
                <span className={pricedisc}>€1125,-</span> &nbsp; €844,-&nbsp;
                <sup>
                  <span className={pricebtw}>(excl. btw)</span>
                </sup>{' '}
              </p>
              <p className={priceaction}>ACTIE: *(25% korting)</p>

              <p className={pricebevat}>
                <i>... bevat:</i>
              </p>

              <ul className={pricelist}>
                <li className={pricebold}>± 10 pagina&apos;s</li>

                <li>Maatwerk Design</li>
                <li>Eigen CMS (inlogpaneel)</li>
                <li>Foto&apos;s, video&apos;s en andere media</li>
                <li>Responsief voor alle toestellen</li>
                <li>Uitgebreide Formulieren</li>
                <li className={pricebold}>Zoekmodule op website</li>
                <li>Testimonials / Reviews</li>
                <li>
                  Statistieken; Google Analytics, Tag Manager & Search Console
                </li>
                <li>Gratis SSL</li>
                <li className={pricebold}>6 maanden gratis support</li>
              </ul>
              <br />
              <br />
              <Link to="/contact/">
                <button type="button" name="offerte" className={pricebtn}>
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
            <div className={pricecon}>
              <h4 className={pricehead}>BUSINESS PLAN</h4>
              <p className={pricecap}>
                <span className={pricedisc}>€1675,-</span> &nbsp; €1256,-&nbsp;
                <sup>
                  <span className={pricebtw}>(excl. btw)</span>
                </sup>{' '}
              </p>
              <p className={priceaction}>ACTIE: *(25% korting)</p>

              <p className={pricebevat}>
                <i>... bevat:</i>
              </p>

              <ul className={pricelist}>
                <li className={pricebold}>∞ pagina&apos;s</li>

                <li>Maatwerk Design</li>

                <li>Eigen CMS (inlogpaneel)</li>
                <li>Foto&apos;s, video&apos;s en andere media</li>
                <li className={pricebold}>E-commerce (+Bank Integratie)</li>
                <li>Responsief voor alle toestellen</li>
                <li>Uitgebreide Formulieren</li>
                <li className={pricebold}>Zoekmodule op website</li>

                <li>Testimonials / Reviews</li>
                <li>
                  Statistieken; Google Analytics, Tag Manager & Search Console
                </li>
                <li>Gratis SSL</li>
                <li className={pricebold}>12 maanden gratis support</li>
              </ul>
              <br />
              <br />
              <Link to="/contact/">
                <button type="button" name="offerte" className={pricebtn}>
                  offerte
                </button>
              </Link>
            </div>
          </Animated>
        </div>
      </div>
      <div className="whitespace" />
      <Animated
        animationIn="fadeIn"
        animationInDelay={3000}
        animationInDuration={2250}
      >
        <p className={pricenot}>
          <span>Aanvullende informatie:</span>
          <br />
          <br />U bent uiteraard ook voor de <b>kleinere taken</b> bij het
          juiste adres, denk bijvoorbeeld aan <b>onderhoud</b>, een{' '}
          <b>nieuwe logo</b>, een <b>toevoeging</b> op uw website of meer{' '}
          <b>zienswaardigheid in Google</b>. Noem maar op, maak het zo gek als u
          wilt. <u>Wij fixen het!</u>
          <br />
          <br />
          Wel variëren deze prijzen <b>vanaf €150,-</b> (excl btw.) Mocht het
          gaan om grotere projecten die meer tijd vergen, zoals het vernieuwen
          van een bestaande website hanteren we een prijs van{' '}
          <b>€45,- per uur </b>
          (excl btw.).
          <br />
          <br />
          Dit alles wordt u natuurlijk <b>uitgebreid geinformeerd</b> d.m.v. een
          vrijblijvend terugbelverzoek of via de mail, mocht u er niet uitkomen
          welk pakket het beste u wensen vervult.
        </p>
      </Animated>
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

export default Prices;
