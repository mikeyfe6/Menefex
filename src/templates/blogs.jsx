import React from 'react';
import { graphql, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { DiscussionEmbed } from 'disqus-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Animated } from 'react-animated-css';

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
      publishedDate(formatString: "dddd D MMMM YYYY, HH:mm", locale: "nl")
      updatedAt(formatString: "dddd D MMMM YYYY, HH:mm", locale: "nl")
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
        const alt = node.data.target.fields.title['nl-NL'];
        // eslint-disable-next-line prefer-destructuring
        const url = node.data.target.fields.file['nl-NL'].url;
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
      <div className="smallwhitespace" />
      <div className="container">
        <SEO
          title={props.data.contentfulBlogPost.title}
          description={props.data.contentfulBlogPost.subtitle}
          keywords={props.data.contentfulBlogPost.keywords}
          pathname={`/blog/${props.data.contentfulBlogPost.slug}/`}
          custom={`https:${props.data.contentfulBlogPost.image.file.url}`}
          article
        />
        <Link to="/blog/">
          <button type="button" className="gobackbtn">
            <FontAwesomeIcon icon="backward" />{' '}
            <span className="gobacktext"> &nbsp;ALLE BLOGPOSTS </span>
          </button>
        </Link>
        <hr className="thick" />
        <br />{' '}
        <div className="postcenterit">
          {' '}
          <Animated
            animationIn="fadeIn"
            animationInDelay={750}
            animationInDuration={2000}
          >
            <img className="blog-mini" src={mini} alt="Gimmix Mini Logo" />

            <div className="nexttologo">
              <h1 className="post-title">
                {props.data.contentfulBlogPost.title}
              </h1>
              <p className="post-date">
                Gepost op {props.data.contentfulBlogPost.publishedDate}
              </p>
            </div>
          </Animated>
          <div className="clr" />
          <Animated
            animationIn="fadeIn"
            animationInDelay={1500}
            animationInDuration={2000}
          >
            <hr className="thin" />
          </Animated>
          <Animated
            animationIn="fadeIn"
            animationInDelay={2250}
            animationInDuration={2000}
          >
            <h5 className="post-subtitle">
              {props.data.contentfulBlogPost.subtitle}
            </h5>{' '}
          </Animated>
          <Animated
            animationIn="fadeIn"
            animationInDelay={3000}
            animationInDuration={2000}
          >
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
                  <span className="post-authorspec">
                    Laatst bijgewerkt
                  </span>{' '}
                  {props.data.contentfulBlogPost.updatedAt}
                </div>
                <img
                  className="author-mini"
                  src={mini}
                  alt="Gimmix Mini Logo"
                />
              </div>
            </div>
          </Animated>
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
