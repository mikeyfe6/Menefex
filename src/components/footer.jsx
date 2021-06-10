import React from 'react';

import { Link } from 'gatsby';
// import { graphql, useStaticQuery } from 'gatsby';

import minilogo from '../logo/Menefex-icon.svg';

import {
  collab,
  sayin,
  hr,
  ministylo,
  info,
  personal,
  mailfoot,
  telfoot,
  media,
  fb,
  ig,
  tw,
  lin,
  gh,
  address,
  amsterdam,
  termscods,
} from '../styles/modules/footer.module.scss';

// TODO: footer copryrights in het midden zetten

const Footer = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //         author
  //       }
  //     }
  //   }
  // `);

  const today = new Date();

  return (
    <footer>
      <div className="container">
        <div className="whitespace" />
        <div className={collab}>
          <div className="row">
            <div className="col-lg-12">
              <blockquote>
                <p className={sayin}>
                  <i>
                    <span>
                      &quot;Instead of thinking outside of the box, get rid of
                      the box&quot;
                    </span>
                  </i>{' '}
                  - Deepak Chopra
                </p>
              </blockquote>
            </div>
          </div>
        </div>
        <br />
        <div className={hr}>
          <br />
          <br />
          <Link to="/">
            <img className={ministylo} src={minilogo} alt="Menefex Mini Logo" />
          </Link>{' '}
          <div className="row" />
        </div>
        <div className="extrawhitespace" />
        <br />

        <div className={info}>
          <div className="row">
            <div className="col-lg-4" id={personal}>
              <p>connect with us</p>
              <h4>
                <a
                  href="mailto:info@menefex.nl"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {' '}
                  <span className={mailfoot}>e:</span> info@menefex.nl
                </a>{' '}
                ∙
                <a href="tel:0611054318">
                  {' '}
                  <span className={telfoot}>t:</span> +31 6 11 05 43 18
                </a>
              </h4>
            </div>

            <div className="col-lg-4" id={media}>
              <p>follow us on</p>

              <ul>
                <li id={fb}>
                  <a
                    href="https://www.facebook.com/MenefexWMB"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    fb
                  </a>
                </li>
                <li id={ig}>
                  <a
                    href="https://www.instagram.com/menefexwmb/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    ig
                  </a>
                </li>
                <li id={tw}>
                  <a
                    href="https://www.twitter.com/MenefexWMB"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    tw
                  </a>
                </li>
                <li id={lin}>
                  <a
                    href="https://www.linkedin.com/company/menefexwmb/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    li
                  </a>
                </li>
                <li id={gh}>
                  <a
                    href="https://github.com/mikeyfe6"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    gh
                  </a>
                </li>
              </ul>

              <br />
              <br />
            </div>

            <div className="col-lg-4" id={address}>
              <p>straight from</p>
              <h4>
                <span className={amsterdam}>xxx</span> amsterdam, netherlands
              </h4>
              <div className="whitespace" />
            </div>
          </div>
        </div>
        <p className={termscods}>
          <span className="speccol">&copy;</span> 2019 - {today.getFullYear()}{' '}
          <u>Menefex</u> <span className="speccol">|</span>
          <Link to="/privacy-policy/"> privacybeleid</Link>{' '}
          <span className="speccol">|</span>{' '}
          <Link to="/terms-conditions/"> algemene voorwaarden</Link>{' '}
          <span className="speccol">|</span> alle rechten voorbehouden.
          <br />
          KvK <span className="speccol">#</span> 76045315 | Btw{' '}
          <span className="speccol">#</span> NL 003040579B17 | Bank{' '}
          <span className="speccol">#</span> NL10 BUNQ 2038 8619 94
        </p>
      </div>
    </footer>
  );
};

export default Footer;
