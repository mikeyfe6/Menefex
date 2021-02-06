import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../logo/Gimmix-logo.svg';
import DrawerToggleButton from './DrawerToggleButton';

import headLogo from '../../styles/modules/headLogo.module.scss';
import headerDesign from '../../styles/modules/toolbar.module.scss';

const toolbar = (props) => (
  <header className={headerDesign.toolbar}>
    <nav className={headerDesign.toolbar__navigation}>
      <div className={headerDesign.toolbar__toggleButton}>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className={headerDesign.spacerTwo} />
      <div>
        <Link to="/">
          <img className={headLogo.logo} src={logo} alt="Gimmix Logo" />
        </Link>
      </div>
      <div className={headerDesign.spacer} />
      <div className={headerDesign.toolbar_navigationItems}>
        <ul>
          <li>
            <Link to="/" activeClassName={headerDesign.activePage}>
              home
              <span className={headerDesign.dots}>.</span>
            </Link>
          </li>
          <li>
            <Link to="/work/" activeClassName={headerDesign.activePage}>
              portfolio
              <span className={headerDesign.dots}>.</span>
            </Link>
          </li>
          <li>
            <Link
              to="/blog/"
              activeClassName={headerDesign.activePage}
              partiallyActive
            >
              blog
              <span className={headerDesign.dots}>.</span>
            </Link>
          </li>
          <li>
            <Link to="/prices/" activeClassName={headerDesign.activePage}>
              prijzen
              <span className={headerDesign.dots}>.</span>
            </Link>
          </li>
          <li>
            <Link to="/about/" activeClassName={headerDesign.activePage}>
              over
              <span className={headerDesign.dots}>.</span>
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeClassName={headerDesign.activePage}>
              contact
              <span className={headerDesign.dots}>.</span>
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
                className={headerDesign.whapp}
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
