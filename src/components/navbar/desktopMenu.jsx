import React, { useEffect } from 'react';

import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

import logo from '../../logo/Menefex-logo.svg';
import HamburgerBtn from './hamburgerBtn';

import * as desktopMenuStyles from '../../styles/modules/desktopMenu.module.scss';

const DesktopMenu = ({ drawerClickHandler }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className={desktopMenuStyles.desktopMenu}>
      <nav>
        <Link to="/">
          <img
            className={desktopMenuStyles.logo}
            src={logo}
            alt="Menefex Logo"
          />
        </Link>

        <ul>
          <li>
            <Link to="/" activeClassName={desktopMenuStyles.activePage}>
              home
              <span>.</span>
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/"
              activeClassName={desktopMenuStyles.activePage}
            >
              portfolio
              <span>.</span>
            </Link>
          </li>
          <li>
            <Link
              to="/blog/"
              activeClassName={desktopMenuStyles.activePage}
              partiallyActive
            >
              blog
              <span>.</span>
            </Link>
          </li>
          <li>
            <Link to="/prijzen/" activeClassName={desktopMenuStyles.activePage}>
              prijzen
              <span>.</span>
            </Link>
          </li>
          <li>
            <Link to="/over/" activeClassName={desktopMenuStyles.activePage}>
              over
              <span>.</span>
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeClassName={desktopMenuStyles.activePage}>
              contact
              <span>.</span>
            </Link>
          </li>
          <li>
            <a
              href="https://wa.me/31611054318"
              rel="noopener noreferrer"
              target="_blank"
              className={desktopMenuStyles.whapp}
            >
              <i className="fa-brands fa-whatsapp" />
            </a>
          </li>
          <li className={desktopMenuStyles.language}>
            <button
              onClick={() => switchLanguage('nl')}
              className={
                currentLanguage === 'nl' ? desktopMenuStyles.active : ''
              }
            >
              nl
            </button>
            <span>/</span>
            <button
              onClick={() => switchLanguage('en')}
              className={
                currentLanguage === 'en' ? desktopMenuStyles.active : ''
              }
            >
              en
            </button>
          </li>
        </ul>

        <div className={desktopMenuStyles.hamburger}>
          <HamburgerBtn click={drawerClickHandler} />
        </div>
      </nav>
    </header>
  );
};

export default DesktopMenu;
