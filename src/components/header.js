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
              <Link to="/" activeClassName={headerDesign.activeNavItem}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                activeClassName={headerDesign.activeNavItem}
                partiallyActive="true"
              >
                Blog
              </Link>
            </li>

            <Link to="/">
              <img className={headerDesign.logo} src={logo} alt="Gimmix Logo" />{' '}
            </Link>

            <li>
              <Link to="/about" activeClassName={headerDesign.activeNavItem}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" activeClassName={headerDesign.activeNavItem}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* <Link className={headerDesign.title} to="/">
        {data.site.siteMetadata.title}
      </Link> */}
    </header>
  );
};

export default Header;
