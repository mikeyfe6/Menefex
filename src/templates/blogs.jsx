/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */

import React from 'react';
import { graphql, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { DiscussionEmbed } from 'disqus-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/layout';
import '../styles/blogpost.scss';
import mini from '../logo/Gimmix-mini.svg';

import SEO from '../components/seo';

import GoogleAds from '../components/ads';

// TODO: Add 'author' & fix the blogpost page accordingly to Traversy Media

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      id
      subtitle
      slug
      keywords
      author
      image {
        file {
          url
        }
      }
      publishedDate(formatString: "dddd D MMMM YYYY, H:m", locale: "nl")
      updatedAt(formatString: "dddd D MMMM YYYY, H:m", locale: "nl")
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

  const disqusConfig = {
    shortname: 'gimmix',
    config: {
      identifier: props.data.contentfulBlogPost.id,
      title: props.data.contentfulBlogPost.title,
    },
  };

  return (
    <Layout>
      <div className="whitespace" />
      <div className="container">
        <SEO
          title={props.data.contentfulBlogPost.title}
          description={props.data.contentfulBlogPost.subtitle}
          keywords={props.data.contentfulBlogPost.keywords}
          pathname={`/${props.data.contentfulBlogPost.slug}/`}
          custom={`https:${props.data.contentfulBlogPost.image.file.url}`}
          article
        />
        <button type="button" className="gobackbtn">
          <Link to="/blog/" className="goback">
            <FontAwesomeIcon icon="backward" />{' '}
            <span className="gobacktext"> &nbsp;TERUG; ALLE BLOGPOSTS </span>
          </Link>
        </button>

        <hr className="thick" />
        <br />
        <div className="postcenterit">
          <img className="blog-mini" src={mini} alt="Gimmix Mini Logo" />
          <div className="nexttologo">
            <h1 className="post-title">
              <strong>| {props.data.contentfulBlogPost.title}</strong>
            </h1>
            <p className="post-date">
              ⌁ Gepost op {props.data.contentfulBlogPost.publishedDate}
            </p>
          </div>
          <div className="clr" />

          <hr className="thin" />

          <h5 className="post-subtitle">
            * {props.data.contentfulBlogPost.subtitle}
          </h5>

          <div className="post-content">
            {documentToReactComponents(
              props.data.contentfulBlogPost.body.json,
              options,
            )}
            <div className="smallwhitespace" />
            <div className="post-authorcont">
              <div className="post-author">
                <span className="post-authorspec">Auteur</span>{' '}
                {props.data.contentfulBlogPost.author}
                <br />
                <span className="post-authorspec">Laatst bijgewerkt</span>{' '}
                {props.data.contentfulBlogPost.updatedAt}
              </div>
              <img className="author-mini" src={mini} alt="Gimmix Mini Logo" />
            </div>
          </div>
          <div className="clr" />
          <div className="specwhitespace" />
          <GoogleAds slot="3266975443" />
          <div className="specwhitespace" />
          <div className="disqussion">
            <DiscussionEmbed {...disqusConfig} />
          </div>
        </div>
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
