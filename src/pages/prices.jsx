import React from 'react';
import PropTypes from 'prop-types';

import { Link, navigate } from 'gatsby';
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

const SalePrice = ({ indivPrice }) => {
  const totalPrice = indivPrice - (indivPrice / 100) * 10;
  const endResult = totalPrice;
  const euroFormat = new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
  }).format(endResult);

  // console.log(euroFormat);
  return euroFormat;
};

const handlePrice = (handelen) => {
  sessionStorage.setItem('mnfx', handelen);
  console.log('geklikt op offerte', sessionStorage.getItem('mnfx'));
  navigate('/contact');
};

const Prices = () => (
  <Layout>
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
        <div className="col-md-3">
          <Animated
            animationIn="fadeInUp"
            animationInDelay={0}
            animationInDuration={1500}
          >
            <div className={pricecon}>
              <h4 className={pricehead}>BUDGET PLAN</h4>
              <p className={pricecap}>
                <span className={pricedisc}>€ 295,-</span>&nbsp;{' '}
                <SalePrice indivPrice={295} />{' '}
                <sup>
                  <span className={pricebtw}>(excl. btw)</span>
                </sup>{' '}
              </p>
              <p className={priceaction}>*ACTIE: 10% korting</p>
              <p className={pricebevat}>
                <i>... bevat:</i>
              </p>
              <ul className={pricelist}>
                <li className={pricebold}>1 - 2 pagina&apos;s</li>

                <li>Maatwerk Design</li>

                <li>CMS (Content Manager)</li>
                <li>Foto&apos;s, video&apos;s & andere media</li>
                <li>Responsief voor alle toestellen</li>
                <li>Uitgebreide Formulieren</li>
                <li>Social Media Integratie</li>
                <li>Testimonials / Reviews</li>
                <li>
                  Statistieken; Google Analytics, Tag Manager & Search Console
                </li>
                <li>SSL Certificaat</li>
                <li
                  style={{
                    fontSize: '0.75em',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    color: 'white',
                  }}
                >
                  extra features: € 45,- per uur
                </li>
                <li className={pricebold}>1 maand gratis support</li>
              </ul>
              <br />
              <br />
              <button
                type="button"
                name="offerte"
                className={pricebtn}
                onClick={() =>
                  handlePrice(
                    'Hi Michael, ik wil graag een offerte aanvragen voor de Budget Plan...',
                  )
                }
              >
                OFFERTE
              </button>
            </div>
          </Animated>
        </div>
        <div className="col-md-3">
          <Animated
            animationIn="fadeInUp"
            animationInDelay={750}
            animationInDuration={1500}
          >
            <div className={pricecon}>
              <h4 className={pricehead}>STARTER PLAN</h4>
              <p className={pricecap}>
                <span className={pricedisc}>€ 595,-</span>&nbsp;{' '}
                <SalePrice indivPrice={595} />{' '}
                <sup>
                  <span className={pricebtw}>(excl. btw)</span>
                </sup>{' '}
              </p>
              <p className={priceaction}>*ACTIE: 10% korting</p>
              <p className={pricebevat}>
                <i>... bevat:</i>
              </p>
              <ul className={pricelist}>
                <li className={pricebold}>1 - 5 pagina&apos;s</li>

                <li>Maatwerk Design</li>

                <li>CMS (Content Manager)</li>
                <li className={pricebold}>Blog</li>
                <li>Foto&apos;s, video&apos;s & andere media</li>
                <li>Responsief voor alle toestellen</li>

                <li>Uitgebreide Formulieren</li>
                <li>Social Media Integratie</li>
                <li>Testimonials / Reviews</li>
                <li>
                  Statistieken; Google Analytics, Tag Manager & Search Console
                </li>
                <li>SSL Certificaat</li>
                <li
                  style={{
                    fontSize: '0.75em',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    color: 'white',
                  }}
                >
                  extra features: € 45,- per uur
                </li>

                <li className={pricebold}>3 maanden gratis support</li>
              </ul>
              <br />
              <br />
              <button
                type="button"
                name="offerte"
                className={pricebtn}
                onClick={() =>
                  handlePrice(
                    'Hi Michael, ik wil graag een offerte aanvragen voor de Starter Plan...',
                  )
                }
              >
                OFFERTE
              </button>
            </div>
          </Animated>
        </div>
        <div className="col-md-3">
          {' '}
          <Animated
            animationIn="fadeInUp"
            animationInDelay={1500}
            animationInDuration={1500}
          >
            <div className={pricecon}>
              <h4 className={pricehead}>ESTABLISHED PLAN</h4>
              <p className={pricecap}>
                <span className={pricedisc}>€ 1025,-</span>&nbsp;{' '}
                <SalePrice indivPrice={1025} />{' '}
                <sup>
                  <span className={pricebtw}>(excl. btw)</span>
                </sup>{' '}
              </p>
              <p className={priceaction}>*ACTIE: 10% korting</p>

              <p className={pricebevat}>
                <i>... bevat:</i>
              </p>

              <ul className={pricelist}>
                <li className={pricebold}>± 10 pagina&apos;s</li>

                <li>Maatwerk Design</li>

                <li>CMS (Content Manager)</li>
                <li className={pricebold}>Blog</li>
                <li>Foto&apos;s, video&apos;s & andere media</li>
                <li>Responsief voor alle toestellen</li>

                <li>Uitgebreide Formulieren</li>
                <li className={pricebold}>Zoekmodule</li>
                <li>Social Media Integratie</li>
                <li>Testimonials / Reviews</li>
                <li>
                  Statistieken; Google Analytics, Tag Manager & Search Console
                </li>
                <li>SSL Certificaat</li>

                <li
                  style={{
                    fontSize: '0.75em',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    color: 'white',
                  }}
                >
                  extra features: € 45,- per uur
                </li>
                <li className={pricebold}>6 maanden gratis support</li>
              </ul>
              <br />
              <br />
              <button
                type="button"
                name="offerte"
                className={pricebtn}
                onClick={() =>
                  handlePrice(
                    'Hi Michael, ik wil graag een offerte aanvragen voor de Established Plan...',
                  )
                }
              >
                offerte
              </button>
            </div>
          </Animated>
        </div>
        <div className="col-md-3">
          {' '}
          <Animated
            animationIn="fadeInUp"
            animationInDelay={2250}
            animationInDuration={1500}
          >
            <div className={pricecon}>
              <h4 className={pricehead}>BUSINESS PLAN</h4>
              <p className={pricecap}>
                <span className={pricedisc}>€ 1575,-</span>&nbsp;{' '}
                <SalePrice indivPrice={1575} />{' '}
                <sup>
                  <span className={pricebtw}>(excl. btw)</span>
                </sup>{' '}
              </p>
              <p className={priceaction}>*ACTIE: 10% korting</p>

              <p className={pricebevat}>
                <i>... bevat:</i>
              </p>

              <ul className={pricelist}>
                <li className={pricebold}>∞ pagina&apos;s</li>

                <li>Maatwerk Design</li>

                <li>CMS (Content Manager)</li>
                <li className={pricebold}>Blog</li>
                <li>Foto&apos;s, video&apos;s & andere media</li>
                <li className={pricebold}>E-commerce (+Bank Integratie)</li>
                <li>Responsief voor alle toestellen</li>

                <li>Uitgebreide Formulieren</li>
                <li>Social Media Integratie</li>
                <li className={pricebold}>Zoekmodule</li>

                <li>Testimonials / Reviews</li>
                <li className={pricebold}>User Login / Register</li>
                <li>
                  Statistieken; Google Analytics, Tag Manager & Search Console
                </li>
                <li>SSL Certificaat</li>
                <li className={pricebold}>12 maanden gratis support</li>
              </ul>
              <br />
              <br />
              <button
                type="button"
                name="offerte"
                className={pricebtn}
                onClick={() =>
                  handlePrice(
                    'Hi Michael, ik wil graag een offerte aanvragen voor de Business Plan...',
                  )
                }
              >
                offerte
              </button>
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
          <b>nieuw logo</b>, <b>extra toevoegingen</b> of <b>toepassingen</b> op
          uw website, webapp of webshop, beter{' '}
          <b>zienswaardigheid via de zoekresultaten (SEO)</b> op bijv. Google,
          Bing, Yahoo... Noem maar op, maak het zo gek als u wilt.{' '}
          <u>Wij fixen het!</u>
          <br />
          <br />
          Ook de <b>grotere projecten</b> die meer tijd vergen, zoals het
          vernieuwen van een bestaande website pakken we met beide handen aan.
          <br />
          <br />
          Alle genoemde services & diensten vallen onder een prijs van{' '}
          <b>€ 45,- per uur (excl. BTW). </b>
          <br />
          <br />
          Mocht u er niet uitkomen welk <b>pakket</b> u het beste schikt... Geen
          probleem! Wij helpen u graag verder. Vraag een <b>terugbelverzoek</b>{' '}
          hieronder aan, <b>bel</b> of <b>mail</b> ons en alles wordt u{' '}
          <b>uitgebreid geinformeerd</b>.
          <br />
          <br />*{' '}
          <a
            href="https://menefex.nl/Menefex-PLIST.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <b>Download hier</b>{' '}
          </a>
          een <u> overzicht</u> van onze prijzen in <b>pdf</b>
          -vorm.
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

SalePrice.defaultProps = {
  indivPrice: null,
};

SalePrice.propTypes = {
  indivPrice: PropTypes.number,
};

export const Head = () => (
  <SEO
    title="Prijzen & tarieven"
    description="Hier ziet u een indicatie van onze scherpe prijzen. Heeft u liever een georiënteerd gesprek, neem contact met ons op of vraag een terugbelverzoek aan."
    keywords="prijzen, tarieven, budget plan, starter plan, established plan, business plan, actie, terugbelverzoek, prijslijst, pakket, offerte, bel mij terug, prices"
    pathname="/prices/"
  />
);
