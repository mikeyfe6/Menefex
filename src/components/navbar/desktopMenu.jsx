import React from 'react';

import { Link } from 'gatsby';

import logo from '../../logo/Menefex-logo.svg';
import HamburgerBtn from './hamburgerBtn';

import { toolLogo } from '../../styles/modules/headLogo.module.scss';
import {
  tlbar,
  tlbarNavigation,
  tlbarToggleButton,
  spacer,
  tlbarNavigationItems,
  activePage,
  dots,
} from '../../styles/modules/toolbar.module.scss';

const DesktopMenu = ({ drawerClickHandler }) => (
  <header className={tlbar}>
    <nav className={tlbarNavigation}>
      <div className={tlbarToggleButton}>
        <HamburgerBtn click={drawerClickHandler} />
      </div>
      <div>
        <Link to="/">
          <img className={toolLogo} src={logo} alt="Menefex Logo" />
        </Link>
      </div>
      <div className={spacer} />
      <div className={tlbarNavigationItems}>
        <ul>
          <li>
            <Link to="/" activeClassName={activePage}>
              home
              <span className={dots}>.</span>
            </Link>
          </li>
          <li>
            <Link to="/portfolio/" activeClassName={activePage}>
              portfolio
              <span className={dots}>.</span>
            </Link>
          </li>
          <li>
            <Link to="/blog/" activeClassName={activePage} partiallyActive>
              blog
              <span className={dots}>.</span>
            </Link>
          </li>
          <li>
            <Link to="/prijzen/" activeClassName={activePage}>
              prijzen
              <span className={dots}>.</span>
            </Link>
          </li>
          <li>
            <Link to="/over/" activeClassName={activePage}>
              over
              <span className={dots}>.</span>
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeClassName={activePage}>
              contact
              <span className={dots}>.</span>
            </Link>
          </li>
          <li>
            <a
              href="https://wa.me/31611054318"
              rel="noopener noreferrer"
              target="_blank"
            >
              {/* <FontAwesomeIcon
                icon={['fab', 'whatsapp']}
                size="xl"
                color="#555555"
                className={whapp}
              /> */}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default DesktopMenu;
