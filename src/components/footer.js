import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <footer>
      <p>
        Created by {data.site.siteMetadata.author} also known as Mr.{" "}
        {data.site.siteMetadata.title}. {today.getFullYear()} ©{" "}
      </p>
    </footer>
  )
}

const today = new Date()

export default Footer
