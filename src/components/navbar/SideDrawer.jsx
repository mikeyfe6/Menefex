/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import sidebarDesign from '../../styles/modules/sidebar.module.scss';

const sideDrawer = (props) => {
  let drawerClasses = sidebarDesign.sideBar;
  if (props.show) {
    drawerClasses = `${sidebarDesign.sideBar} ${sidebarDesign.open}`;
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/" activeClassName={sidebarDesign.activePage}>
            home
            <span className={sidebarDesign.dots}>.</span>
          </Link>
        </li>
        <li>
          <Link to="/work/" activeClassName={sidebarDesign.activePage}>
            portfolio
            <span className={sidebarDesign.dots}>.</span>
          </Link>
        </li>
        <li>
          <Link
            to="/blog/"
            activeClassName={sidebarDesign.activePage}
            partiallyActive
          >
            blog
            <span className={sidebarDesign.dots}>.</span>
          </Link>
        </li>
        <li>
          <Link to="/prices/" activeClassName={sidebarDesign.activePage}>
            prijzen
            <span className={sidebarDesign.dots}>.</span>
          </Link>
        </li>
        <li>
          <Link to="/about/" activeClassName={sidebarDesign.activePage}>
            over
            <span className={sidebarDesign.dots}>.</span>
          </Link>
        </li>
        <li>
          <Link to="/contact/" activeClassName={sidebarDesign.activePage}>
            contact
            <span className={sidebarDesign.dots}>.</span>
          </Link>
        </li>
        <br />
        <hr className={sidebarDesign.menuline} />
        <li>
          <a href="https://wa.me/31611054318">
            <FontAwesomeIcon
              icon={['fab', 'whatsapp']}
              size="lg"
              color="#1ca111"
            />
            <span className={sidebarDesign.wapp}>
              &nbsp;Stuur een whatsapp&apos; bericht
            </span>
            <span className={sidebarDesign.dots}>.</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
