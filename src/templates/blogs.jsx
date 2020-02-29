/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */

import React from 'react';
import { graphql, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/layout';
import '../styles/blogpost.scss';
import mini from '../logo/Gimmix-mini.svg';

import SEO from '../components/seo';

// TODO: Add 'author' & fix the blogpost page accordingly to Traversy Media

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      subtitle
      publishedDate(formatString: "dddd D MMMM YYYY, H:m", locale: "nl")
      body {
        json
      }
    }
  }
`;

// show the individual blog pages & DSIH laat alles zien
const Blog = (props) => {
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const alt = node.data.target.fields.title['en-US'];
        // eslint-disable-next-line prefer-destructuring
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} className="img-resize" />;
      },
    },
  };

  return (
    <Layout>
      <div className="whitespace" />
      <div className="container">
        <SEO title={props.data.contentfulBlogPost.title} />
        <Link to="/blog" className="goback">
          <FontAwesomeIcon icon="backward" /> Ga Terug
        </Link>
        <br />
        <br />
        <hr />
        <br />
        <img className="blog-mini" src={mini} alt="Gimmix Mini Logo" />
        <h1 className="post-title">{props.data.contentfulBlogPost.title}</h1>
        <p className="post-date">
          {' '}
          Gepost op {props.data.contentfulBlogPost.publishedDate}
        </p>

        <h5 className="post-subtitle">
          {props.data.contentfulBlogPost.subtitle}
        </h5>
        <p className="post-content">
          {documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options,
          )}
        </p>
      </div>
      <div className="whitespace" />
    </Layout>
  );
};

// ! query the individual blog pages with MD
// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export default Blog;
