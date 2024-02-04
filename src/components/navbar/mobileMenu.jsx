import React from 'react';

import { Link } from 'gatsby';

import {
  activePage,
  dots,
  menuline,
  // whapp,
  wapp,
  sideBar,
  open,
} from '../../styles/modules/sidebar.module.scss';

const MobileMenu = (props) => {
  let drawerClasses = sideBar;
  if (props.show) {
    drawerClasses = `${sideBar} ${open}`;
  }

  return (
    <nav className={drawerClasses}>
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
        <br />
        <hr className={menuline} />
        <li>
          <a
            href="https://wa.me/31611054318"
            rel="noopener noreferrer"
            target="_blank"
          >
            {/* <FontAwesomeIcon
              icon={['fab', 'whatsapp']}
              size="lg"
              color="#1ca111"
              className={whapp}
            /> */}
            <span className={wapp}>&nbsp;Stuur een whatsapp&apos; bericht</span>
            <span className={dots}>.</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
