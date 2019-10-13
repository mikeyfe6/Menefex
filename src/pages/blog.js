import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import blogDesign from "../styles/modules/blog.module.scss"

import SEO from "../components/seo"

// CONTENTFUL blogposts genereren
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "dddd D MMMM YYYY")
          }
        }
      }
    }
  `)

  // CONTENTFUL blogposts genereren
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog Posts</h1>
      <ol className={blogDesign.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogDesign.post}>
              <Link to={`/blogs/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )

  // MARKDOWN: blogposts genereren grapqhl
  // const BlogPage = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       allMarkdownRemark {
  //         edges {
  //           node {
  //             frontmatter {
  //               title
  //               date
  //             }
  //             fields {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)

  // console.log(data)

  // MARKDOWN blog posts weergeven
  // return (
  //   <Layout>
  //     <h1>Blog Posts</h1>
  //     <ol className={blogDesign.posts}>
  //       {data.allMarkdownRemark.edges.map(edge => {
  //         return (
  //           <li className={blogDesign.post}>
  //             <Link to={`/blogs/${edge.node.fields.slug}`}>
  //               <h2>{edge.node.frontmatter.title}</h2>
  //               <p>{edge.node.frontmatter.date}</p>
  //             </Link>
  //           </li>
  //         )
  //       })}
  //     </ol>
  //   </Layout>
  // )
}

export default BlogPage