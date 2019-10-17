import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title }) => {
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
    <Helmet
      title={`${title} | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: "Webdevelopment die schiet naar de toekomst",
        },
        {
          name: "keywords",
          content:
            "gimmix, webdevelopment, gatsby, amsterdam, website, bouwen, freelancer",
        },
      ]}
    />
  )
}

export default SEO
