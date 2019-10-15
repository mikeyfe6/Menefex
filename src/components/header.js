import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerDesign from "../styles/modules/header.module.scss"
import logo from "../logo/Gimmix-logo.svg"

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
    <header>
      <div className={headerDesign.mainInner}>
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

          <img className={headerDesign.logo} src={logo} alt="Gimmix Logo" />

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
      </div>

      <Link className={headerDesign.title} to="/">
        {data.site.siteMetadata.title}
      </Link>
    </header>
  )
}

export default Header
