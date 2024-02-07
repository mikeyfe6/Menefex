import React from 'react';

import { Link } from 'gatsby';

import * as mobileMenuStyles from '../../styles/modules/mobileMenu.module.scss';

const MobileMenu = ({ show }) => {
  let drawerClasses = mobileMenuStyles.mobileMenu;
  if (show) {
    drawerClasses = `${mobileMenuStyles.mobileMenu} ${mobileMenuStyles.open}`;
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/" activeClassName={mobileMenuStyles.activePage}>
            home
            <span className={mobileMenuStyles.dots}>.</span>
          </Link>
        </li>
        <li>
          <Link to="/portfolio/" activeClassName={mobileMenuStyles.activePage}>
            portfolio
            <span className={mobileMenuStyles.dots}>.</span>
          </Link>
        </li>
        <li>
          <Link
            to="/blog/"
            activeClassName={mobileMenuStyles.activePage}
            partiallyActive
          >
            blog
            <span className={mobileMenuStyles.dots}>.</span>
          </Link>
        </li>
        <li>
          <Link to="/prijzen/" activeClassName={mobileMenuStyles.activePage}>
            prijzen
            <span className={mobileMenuStyles.dots}>.</span>
          </Link>
        </li>
        <li>
          <Link to="/over/" activeClassName={mobileMenuStyles.activePage}>
            over
            <span className={mobileMenuStyles.dots}>.</span>
          </Link>
        </li>
        <li>
          <Link to="/contact/" activeClassName={mobileMenuStyles.activePage}>
            contact
            <span className={mobileMenuStyles.dots}>.</span>
          </Link>
        </li>

        <hr />

        <li>
          <a
            href="https://wa.me/31611054318"
            rel="noopener noreferrer"
            target="_blank"
            className={mobileMenuStyles.whapp}
          >
            <i className="fa-brands fa-whatsapp" />
            Stuur een whatsapp&apos; bericht
            <span className={mobileMenuStyles.dots}>.</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
