import React from 'react';

import { Link } from 'gatsby';

import logo from '../../logo/Menefex-logo.svg';
import HamburgerBtn from './hamburgerBtn';

import * as desktopMenuStyles from '../../styles/modules/desktopMenu.module.scss';

const DesktopMenu = ({ drawerClickHandler }) => (
  <header className={desktopMenuStyles.desktopMenu}>
    <nav>
      <Link to="/">
        <img className={desktopMenuStyles.logo} src={logo} alt="Menefex Logo" />
      </Link>

      <ul>
        <li>
          <Link to="/" activeClassName={desktopMenuStyles.activePage}>
            home
            <span>.</span>
          </Link>
        </li>
        <li>
          <Link to="/portfolio/" activeClassName={desktopMenuStyles.activePage}>
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
      </ul>
      <div className={desktopMenuStyles.hamburger}>
        <HamburgerBtn click={drawerClickHandler} />
      </div>
    </nav>
  </header>
);

export default DesktopMenu;
