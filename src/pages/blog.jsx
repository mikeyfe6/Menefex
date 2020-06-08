/* eslint-disable react/jsx-key */

import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

import SEO from '../components/seo';

import blogDesign from '../styles/modules/blog.module.scss';

// TODO: images moeten in hun frame komen

// CONTENTFUL blogposts genereren
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            subtitle
            author
            image {
              title
              file {
                url
              }
            }
            publishedDate(formatString: "dddd D MMMM YYYY", locale: "nl")
          }
        }
      }
    }
  `);

  // CONTENTFUL blogposts genereren
  return (
    <Layout>
      <SEO
        title="Blog"
        description="Our views on life, technology, culture & the future."
        keywords="blog, posts, views, nieuws, story"
        pathname="/blog/"
      />

      <div className="container">
        <div className="whitespace" />
        <h2 className="page-title">
          Blog<span className="headdots">.</span>
        </h2>
        <br />
        <p className="page-sub">What comes through our mind..</p>
        <ol className={blogDesign.posts}>
          {data.allContentfulBlogPost.edges.map((edge) => {
            return (
              <li className={blogDesign.post}>
                <Link to={`/blog/${edge.node.slug}/`}>
                  <img
                    src={edge.node.image.file.url}
                    alt={edge.node.image.title}
                    className={blogDesign.blogimg}
                  />
                  <h4>{edge.node.title}</h4>
                  <p className={blogDesign.bloggepost}>
                    {' '}
                    * Gepost op <strong>{edge.node.publishedDate}</strong>, door{' '}
                    <strong>{edge.node.author}</strong>{' '}
                  </p>

                  <span className={blogDesign.contsubtext}>
                    {' '}
                    {edge.node.subtitle}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>

        <div className="whitespace" />
      </div>
    </Layout>
  );

  // ! MARKDOWN: blogposts genereren grapqhl
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

  // ! MARKDOWN blog posts weergeven
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
};

export default BlogPage;
