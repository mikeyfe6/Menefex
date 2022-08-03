import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';
import { Animated } from 'react-animated-css';

import Layout from '../components/layout';
import SEO from '../components/seo';

import {
  posts,
  post,
  blogimg,
  posthead,
  contsubtext,
  bloggepost,
} from '../styles/modules/blog.module.scss';

// TODO: images moeten in hun frame komen

// CONTENTFUL blogposts genereren
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
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
        description="What goes through our mind... Our views on life, technology, culture, the past, the future and more..."
        keywords="blog, posts, views, nieuws, stories, nieuws, content, verhalen, news, mind, actualiteiten"
        pathname="/blog/"
      />

      <div>
        <div className="smallwhitespace" />
        <h1 className="page-title">
          Blog<span className="headdots">.</span>
        </h1>
        <br />
        <p className="page-sub">What goes through our mind..</p>
        <Animated
          animationIn="fadeIn"
          animationInDelay={750}
          animationInDuration={2000}
        >
          <ol className={posts}>
            {data.allContentfulBlogPost.edges.map((edge) => (
              <li className={post} key={edge.node.id}>
                <Link to={`/blog/${edge.node.slug}/`}>
                  <div>
                    {' '}
                    <h4 className={posthead}>{edge.node.title}</h4>
                    <span className={contsubtext}> {edge.node.subtitle}</span>
                    <p className={bloggepost}>
                      {' '}
                      Gepost: <strong>{edge.node.publishedDate}</strong> ⌁
                      Auteur: <strong>{edge.node.author}</strong>{' '}
                    </p>
                  </div>

                  <img
                    src={edge.node.image.file.url}
                    alt={edge.node.image.title}
                    className={blogimg}
                  />
                </Link>
              </li>
            ))}
          </ol>
        </Animated>
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
