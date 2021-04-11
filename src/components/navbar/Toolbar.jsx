import React from 'react';

import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../logo/Gimmix-logo.svg';
import DrawerToggleButton from './DrawerToggleButton';

import { toolLogo } from '../../styles/modules/headLogo.module.scss';
import {
  tlbar,
  tlbarNavigation,
  tlbarToggleButton,
  spacerTwo,
  spacer,
  tlbarNavigationItems,
  activePage,
  dots,
  whapp,
} from '../../styles/modules/toolbar.module.scss';

const toolbar = (props) => (
  <header className={tlbar}>
    <nav className={tlbarNavigation}>
      <div className={tlbarToggleButton}>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className={spacerTwo} />
      <div>
        <Link to="/">
          <img className={toolLogo} src={logo} alt="Gimmix Logo" />
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
            <Link to="/work/" activeClassName={activePage}>
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
            <Link to="/prices/" activeClassName={activePage}>
              prijzen
              <span className={dots}>.</span>
            </Link>
          </li>
          <li>
            <Link to="/about/" activeClassName={activePage}>
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
              <FontAwesomeIcon
                icon={['fab', 'whatsapp']}
                size="2x"
                color="#555555"
                className={whapp}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="clr" />
  </header>
);

export default toolbar;
