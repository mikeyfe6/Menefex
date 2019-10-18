import React from 'react';
import { Link } from 'gatsby';

// graphql, useStaticQuery

import headerDesign from '../styles/modules/header.module.scss';
import logo from '../logo/Gimmix-logo.svg';

const Header = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <header>
      <div className={headerDesign.mainInner}>
        <nav>
          <ul>
            <li>
              <Link activeClassName={headerDesign.activeNavItem} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link activeClassName={headerDesign.activeNavItem} to="/blog">
                Blog
              </Link>
            </li>

            <Link to="/">
              <img className={headerDesign.logo} src={logo} alt="Gimmix Logo" />{' '}
            </Link>

            <li>
              <Link activeClassName={headerDesign.activeNavItem} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link activeClassName={headerDesign.activeNavItem} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
      </div>

      {/* <Link className={headerDesign.title} to="/">
        {data.site.siteMetadata.title}
      </Link> */}
    </header>
  );
};

export default Header;
