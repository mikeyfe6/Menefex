import React from "react"

// components
import Header from "./header"
import Footer from "./footer"

// styles
import "../styles/index.scss"
import "normalize.css"
import LayoutDesign from "../styles/modules/layout.module.scss"

// layout
const Layout = props => {
  return (
    <div className={LayoutDesign.container}>
      <div className={LayoutDesign.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
