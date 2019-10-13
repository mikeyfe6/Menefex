import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerDesign from "../styles/modules/header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerDesign.header}>
      <h1>
        <Link className={headerDesign.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerDesign.navList}>
          <li>
            <Link
              className={headerDesign.navItem}
              activeClassName={headerDesign.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerDesign.navItem}
              activeClassName={headerDesign.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerDesign.navItem}
              activeClassName={headerDesign.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerDesign.navItem}
              activeClassName={headerDesign.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
