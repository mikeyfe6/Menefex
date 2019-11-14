/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <Link to="/">
            <img className={headerLogo.logo} src={logo} alt="Gimmix Logo" />
          </Link>
        </div>

        <ul id="menu">
          <li>
            <Link to="/" activeClassName="activePage" className="underline">
              home
              <span className="dots">.</span>
            </Link>
          </li>
          <li>
            <Link to="/work" activeClassName="activePage" className="underline">
              work
              <span className="dots">.</span>
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              activeClassName="activePage"
              className="underline"
              partiallyActive
            >
              blog
              <span className="dots">.</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              activeClassName="activePage"
              className="underline"
            >
              about
              <span className="dots">.</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              activeClassName="activePage"
              className="underline"
            >
              contact
              <span className="dots">.</span>
            </Link>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=0031628213134"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={['fab', 'whatsapp']}
                size="2x"
                color="#656565"
                className="whapp"
              />
            </a>
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
            <Link to="/">
              home
              <span className="dots">.</span>
            </Link>
          </li>
          <li>
            <Link to="/work">
              work
              <span className="dots">.</span>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              blog
              <span className="dots">.</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              about
              <span className="dots">.</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
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
