import React from 'react';

import { navigate } from 'gatsby';

import * as pricesStyles from '../styles/modules/prices.module.scss';

const PriceTable = () => {
  const SalePrice = ({ ogPrice }) => {
    const totalPrice = ogPrice - (ogPrice / 100) * 10;
    const endResult = totalPrice;
    const euroFormat = new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
    }).format(endResult);

    return <data>{euroFormat}</data>;
  };

  const handlePrice = (handelen, inputId) => {
    sessionStorage.setItem('mnfx', handelen);
    navigate('/contact/');
    // Focus on the input field after a short delay to ensure the navigation has completed
    setTimeout(() => {
      const inputElement = document.getElementById(inputId);
      if (inputElement) {
        inputElement.focus();
      }
    }, 100);
  };

  return (
    <section>
      <ul className={pricesStyles.prices}>
        <li>
          <h4>BUDGET PLAN</h4>
          <p className={pricesStyles.price}>
            <span>€ 295,-</span> <SalePrice ogPrice={295} />{' '}
            <sup>(excl. btw)</sup>
          </p>
          <p className={pricesStyles.priceAction}>*ACTIE: 10% korting</p>
          <p className={pricesStyles.priceContains}>... bevat:</p>
          <ul>
            <li className={pricesStyles.priceBold}>1 - 2 pagina&apos;s</li>
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
            <li className={pricesStyles.priceFeat}>
              extra features: € 45,- per uur
            </li>
            <li className={pricesStyles.priceBold}>1 maand gratis support</li>
          </ul>
          <button
            type="button"
            name="offerte"
            onClick={() =>
              handlePrice(
                'Hi Michael, ik wil graag een offerte aanvragen voor de Budget Plan...',
                'lead_name',
              )
            }
          >
            OFFERTE
          </button>
        </li>

        <li>
          <h4>STARTER PLAN</h4>
          <p className={pricesStyles.price}>
            <span>€ 595,-</span> <SalePrice ogPrice={595} />{' '}
            <sup>(excl. btw)</sup>
          </p>
          <p className={pricesStyles.priceAction}>*ACTIE: 10% korting</p>
          <p className={pricesStyles.priceContains}>... bevat:</p>
          <ul>
            <li className={pricesStyles.priceBold}>1 - 5 pagina&apos;s</li>
            <li>Maatwerk Design</li>
            <li>CMS (Content Manager)</li>
            <li className={pricesStyles.priceBold}>Blog</li>
            <li>Foto&apos;s, video&apos;s & andere media</li>
            <li>Responsief voor alle toestellen</li>
            <li>Uitgebreide Formulieren</li>
            <li>Social Media Integratie</li>
            <li>Testimonials / Reviews</li>
            <li>
              Statistieken; Google Analytics, Tag Manager & Search Console
            </li>
            <li>SSL Certificaat</li>
            <li className={pricesStyles.priceFeat}>
              extra features: € 45,- per uur
            </li>
            <li className={pricesStyles.priceBold}>3 maanden gratis support</li>
          </ul>
          <button
            type="button"
            name="offerte"
            onClick={() =>
              handlePrice(
                'Hi Michael, ik wil graag een offerte aanvragen voor de Starter Plan...',
                'lead_name',
              )
            }
          >
            OFFERTE
          </button>
        </li>

        <li>
          <h4>ESTABLISHED PLAN</h4>
          <p className={pricesStyles.price}>
            <span>€ 1025,-</span> <SalePrice ogPrice={1025} />{' '}
            <sup>(excl. btw)</sup>
          </p>
          <p className={pricesStyles.priceAction}>*ACTIE: 10% korting</p>
          <p className={pricesStyles.priceContains}>... bevat:</p>
          <ul>
            <li className={pricesStyles.priceBold}>± 10 pagina&apos;s</li>
            <li>Maatwerk Design</li>
            <li>CMS (Content Manager)</li>
            <li className={pricesStyles.priceBold}>Blog</li>
            <li>Foto&apos;s, video&apos;s & andere media</li>
            <li>Responsief voor alle toestellen</li>
            <li>Uitgebreide Formulieren</li>
            <li className={pricesStyles.priceBold}>Zoekmodule</li>
            <li>Social Media Integratie</li>
            <li>Testimonials / Reviews</li>
            <li>
              Statistieken; Google Analytics, Tag Manager & Search Console
            </li>
            <li>SSL Certificaat</li>
            <li className={pricesStyles.priceFeat}>
              extra features: € 45,- per uur
            </li>
            <li className={pricesStyles.priceBold}>6 maanden gratis support</li>
          </ul>
          <button
            type="button"
            name="offerte"
            onClick={() =>
              handlePrice(
                'Hi Michael, ik wil graag een offerte aanvragen voor de Established Plan...',
                'lead_name',
              )
            }
          >
            offerte
          </button>
        </li>

        <li>
          <h4>BUSINESS PLAN</h4>
          <p className={pricesStyles.price}>
            <span>€ 1575,-</span> <SalePrice ogPrice={1575} />{' '}
            <sup>(excl. btw)</sup>
          </p>
          <p className={pricesStyles.priceAction}>*ACTIE: 10% korting</p>
          <p className={pricesStyles.priceContains}>... bevat:</p>
          <ul>
            <li className={pricesStyles.priceBold}>∞ pagina&apos;s</li>
            <li>Maatwerk Design</li>
            <li>CMS (Content Manager)</li>
            <li className={pricesStyles.priceBold}>Blog</li>
            <li>Foto&apos;s, video&apos;s & andere media</li>
            <li className={pricesStyles.priceBold}>
              E-commerce (+Bank Integratie)
            </li>
            <li>Responsief voor alle toestellen</li>
            <li>Uitgebreide Formulieren</li>
            <li>Social Media Integratie</li>
            <li className={pricesStyles.priceBold}>Zoekmodule</li>
            <li>Testimonials / Reviews</li>
            <li className={pricesStyles.priceBold}>User Login / Register</li>
            <li>
              Statistieken; Google Analytics, Tag Manager & Search Console
            </li>
            <li>SSL Certificaat</li>
            <li className={pricesStyles.priceBold}>
              12 maanden gratis support
            </li>
          </ul>
          <button
            type="button"
            name="offerte"
            onClick={() =>
              handlePrice(
                'Hi Michael, ik wil graag een offerte aanvragen voor de Business Plan...',
                'lead_name',
              )
            }
          >
            offerte
          </button>
        </li>
      </ul>
    </section>
  );
};

export default PriceTable;
