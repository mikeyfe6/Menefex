import React from 'react';

import { graphql, useStaticQuery, Link } from 'gatsby';

import minilogo from '../logo/Menefex-icon.svg';

import * as footerStyles from '../styles/modules/footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          bizEmail
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { title, bizEmail },
    },
  } = data;

  const today = new Date();

  return (
    <footer className={footerStyles.footer}>
      <blockquote>
        <p className={footerStyles.sayin}>
          <i>
            &quot;Instead of thinking outside of the box, get rid of the
            box&quot;
          </i>{' '}
          {/* CITE toevoegen */}- Deepak Chopra
        </p>
      </blockquote>

      <hr />

      <div className={footerStyles.footerInfo}>
        <div className={footerStyles.personal}>
          <p>connect with us</p>

          <h5>
            <a
              href={`mailto:${bizEmail}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className={footerStyles.mailfoot}>e:</span> {bizEmail}
            </a>{' '}
            ∙
            <a href="tel:0611054318">
              <span className={footerStyles.telfoot}>t:</span> +31 6 11 05 43 18
            </a>
          </h5>
        </div>

        <div className={footerStyles.media}>
          <p>follow us on</p>

          <ul>
            <li className={footerStyles.fb}>
              <a
                href="https://www.facebook.com/MenefexWMB"
                rel="noopener noreferrer"
                target="_blank"
              >
                fb
              </a>
            </li>
            <li className={footerStyles.ig}>
              <a
                href="https://www.instagram.com/menefexwmb/"
                rel="noopener noreferrer"
                target="_blank"
              >
                ig
              </a>
            </li>
            <li className={footerStyles.tw}>
              <a
                href="https://www.twitter.com/MenefexWMB"
                rel="noopener noreferrer"
                target="_blank"
              >
                tw
              </a>
            </li>
            <li className={footerStyles.li}>
              <a
                href="https://www.linkedin.com/company/menefexwmb/"
                rel="noopener noreferrer"
                target="_blank"
              >
                li
              </a>
            </li>
            <li className={footerStyles.gh}>
              <a
                href="https://github.com/mikeyfe6"
                rel="noopener noreferrer"
                target="_blank"
              >
                gh
              </a>
            </li>
          </ul>
        </div>

        <div className={footerStyles.address}>
          <p>straight from</p>
          <h5>
            <span className={footerStyles.amsterdam}>xxx</span> amsterdam,
            netherlands
          </h5>
        </div>
      </div>

      <Link to="/">
        <img
          className={footerStyles.footerLogo}
          src={minilogo}
          alt="Menefex Mini Logo"
        />
      </Link>

      <p className={footerStyles.credits}>
        <span>&copy;</span> 2019 - {today.getFullYear()} · {title}{' '}
        <span>|</span> <Link to="/privacy-policy/">privacybeleid</Link>{' '}
        <span>|</span> <Link to="/terms-conditions/">algemene voorwaarden</Link>{' '}
        <span>|</span> alle rechten voorbehouden <span>|</span> KvK{' '}
        <span>#</span> 76045315 <span>|</span> Btw <span>#</span> NL
        003040579B17 <span>|</span> Bank <span>#</span> NL10 BUNQ 2038 8619 94
      </p>
    </footer>
  );
};

export default Footer;
