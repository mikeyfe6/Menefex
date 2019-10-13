import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Welkom" />
      <h1>Hello.</h1>
      <h2>I'm Michael from Gimmix</h2>
      <p>
        Heb je een developer nodig? <Link to="/contact">klik hier</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
