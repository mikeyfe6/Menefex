// /* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'gatsby';

// graphql, useStaticQuery

import '../styles/menu.scss';
import logo from '../logo/Gimmix-logo.svg';

import headerLogo from '../styles/modules/headerLogo.module.scss';

// TODO: Animations & dergelijke toepassen

const Menu = () => {
  function toggleNav() {
    document.getElementById('resize').classList.toggle('active');
  }

  return (
    <div>
      <nav id="topnavbar">
        <div id="brand">
          <Link to="/" activeClassName="activeNavItem">
            <img className={headerLogo.logo} src={logo} alt="Gimmix Logo" />
          </Link>
        </div>

        <ul id="menu">
          <li>
            <Link to="/" activeClassName="activeNavItem">
              home
              <span className="dots">.</span>
            </Link>
          </li>
          <li>
            <Link to="/work" activeClassName="activeNavItem">
              work
              <span className="dots">.</span>
            </Link>
          </li>
          <li>
            <Link to="/blog" activeClassName="activeNavItem">
              blog
              <span className="dots">.</span>
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="activeNavItem">
              about
              <span className="dots">.</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="activeNavItem">
              contact
              <span className="dots">.</span>
            </Link>
          </li>
        </ul>

        <div
          id="toggle"
          onKeyPress={toggleNav}
          role="button"
          tabIndex="0"
          onClick={toggleNav}
        >
          <div className="span">menu</div>
        </div>
      </nav>

      <div id="resize">
        <div className="closeBtn">close</div>

        <ul id="menu">
          <li>
            <Link to="/" activeClassName="activeNavItem">
              home
              <span className="dots">.</span>
            </Link>
          </li>
          <li>
            <Link to="/work" activeClassName="activeNavItem">
              work
              <span className="dots">.</span>
            </Link>
          </li>
          <li>
            <Link to="/blog" activeClassName="activeNavItem">
              blog
              <span className="dots">.</span>
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="activeNavItem">
              about
              <span className="dots">.</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="activeNavItem">
              contact
              <span className="dots">.</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="clr" />
    </div>
  );
};

export default Menu;

// const data = useStaticQuery(graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `)

/* <Link className={headerDesign.title} to="/">
        {data.site.siteMetadata.title}
      </Link> */
