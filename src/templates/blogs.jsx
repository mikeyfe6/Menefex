/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';

import { graphql, Link } from 'gatsby';
import { Animated } from 'react-animated-css';
import { Disqus } from 'gatsby-plugin-disqus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import SEO from '../components/seo';
import GoogleAds from '../components/ads';
import Layout from '../components/layout';

import mini from '../logo/Menefex-icon.svg';

import '../styles/blogpost.scss';

// TODO: Add 'author' & fix the blogpost page accordingly to Traversy Media

export const query = graphql`
  query ($slug: String!) {
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
      publishedPost: publishedDate(
        formatString: "dddd D MMMM YYYY, HH:mm"
        locale: "nl"
      )
      updatedPost: updatedAt(
        formatString: "dddd D MMMM YYYY, HH:mm"
        locale: "nl"
      )
      publishedSchema: publishedDate
      updatedSchema: updatedAt
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            fixed(width: 1600) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;

const websiteUrl = 'https://menefex.nl/';

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <img
        alt={'lol' || node.data.target.fields.title['nl-NL']}
        src={node.data.target.fixed.src}
        className="img-resize"
      />
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (node) => (
      // manipulate here your embedded entry
      <>
        <div>Im an embedded entry, {node}</div>
      </>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Text style={{ color: 'red !important' }}>{children}</Text>
    ),

    [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
    [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
    [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
    [BLOCKS.HEADING_4]: (node, children) => <Heading4>{children}</Heading4>,
    [BLOCKS.HEADING_5]: (node, children) => <Heading5>{children}</Heading5>,
    [BLOCKS.HEADING_6]: (node, children) => <Heading6>{children}</Heading6>,

    [BLOCKS.UL_LIST]: (node, children) => <UnOrdList>{children}</UnOrdList>,
    [BLOCKS.OL_LIST]: (node, children) => <OrdList>{children}</OrdList>,
    [BLOCKS.LIST_ITEM]: (node, children) => <DotList>{children}</DotList>,

    [BLOCKS.HR]: (node, children) => <Horizontal>{children}</Horizontal>,

    [INLINES.HYPERLINK]: ({ data }, children) => (
      <a
        className="hyperlinkness"
        href={data.uri}
        target={`${data.uri.startsWith(websiteUrl) ? '_self' : '_blank'}`}
        rel={`${data.uri.startsWith(websiteUrl) ? '' : 'noopener noreferrer'}`}
      >
        {children}
      </a>
    ),
  },
};

const Bold = ({ children }) => <span className="boldness">{children}</span>;

const Text = ({ children }) => <p className="paragraphness">{children}</p>;

const Heading1 = ({ children }) => <h1 className="headoneness">{children}</h1>;
const Heading2 = ({ children }) => <h2 className="headtwoness">{children}</h2>;
const Heading3 = ({ children }) => (
  <h3 className="headthreeness">{children}</h3>
);
const Heading4 = ({ children }) => <h4 className="headfourness">{children}</h4>;
const Heading5 = ({ children }) => <h5 className="headfiveness">{children}</h5>;
const Heading6 = ({ children }) => <h6 className="headsixness">{children}</h6>;

const UnOrdList = ({ children }) => (
  <ul className="orderedlistness">{children}</ul>
);
const OrdList = ({ children }) => (
  <ol className="orderedlistness">{children}</ol>
);
const DotList = ({ children }) => <li className="listitemness">{children}</li>;

const Horizontal = () => <hr className="horizontness" />;

const Blog = (props) => {
  // const options = {
  //   renderNode: {
  //     'embedded-asset-block': (node) => {
  //       const alt = node.data.target.fields.title['nl-NL'];
  //       const url = node.data.target.fields.file['nl-NL'].url;
  //       return <img alt={alt} src={url} className="img-resize" />;
  //     },
  //   },
  // };

  // prettier-ignore
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://menefex.nl/blog/${props.data.contentfulBlogPost.slug}/`,
    },
    headline: props.data.contentfulBlogPost.title,
    description: props.data.contentfulBlogPost.subtitle,
    image: `https:${props.data.contentfulBlogPost.image.file.url}`,
    author: {
      '@type': 'Person',
      name: props.data.contentfulBlogPost.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Menefex',
      logo: {
        '@type': 'ImageObject',
        url: 'https://i.postimg.cc/YSf8SKzs/Menefex-FAVI.png',
      },
    },
    datePublished: props.data.contentfulBlogPost.publishedSchema,
    dateModified: props.data.contentfulBlogPost.updatedSchema,
  };

  useEffect(() => {
    const script = document.createElement('script');

    script.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.async = true;

    document.body.appendChild(script);
    // console.log('GXWMB: Google Adsense is geladen!');

    return () => {
      document.body.removeChild(script);
      // console.log('GXWMB: Google Adsense is gestopt!');
    };
  }, []);

  return (
    <Layout>
      <div className="smallwhitespace" />
      <div className="container">
        <SEO
          title={props.data.contentfulBlogPost.title}
          description={props.data.contentfulBlogPost.subtitle}
          keywords={props.data.contentfulBlogPost.keywords.join(', ')}
          pathname={`/blog/${props.data.contentfulBlogPost.slug}/`}
          custom={`https:${props.data.contentfulBlogPost.image.file.url}`}
          schemaMarkup={schema}
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
            <img className="blog-mini" src={mini} alt="Menefex Icon" />

            <div className="nexttologo">
              <h1 className="post-title">
                {props.data.contentfulBlogPost.title}
              </h1>
              <p className="post-date">
                Gepost op {props.data.contentfulBlogPost.publishedPost}
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
            <h2 className="post-subtitle">
              {props.data.contentfulBlogPost.subtitle}
            </h2>{' '}
          </Animated>
          <Animated
            animationIn="fadeIn"
            animationInDelay={3000}
            animationInDuration={2000}
          >
            <img
              src={`https:${props.data.contentfulBlogPost.image.file.url}`}
              alt={props.data.contentfulBlogPost.title}
              className="blogheadimage webfeedsFeaturedVisual"
            />
            <div className="post-content">
              {renderRichText(props.data.contentfulBlogPost.body, options)}

              <div className="smallwhitespace" />

              <div className="post-authorcont">
                <div className="post-author">
                  <span className="post-authorspec">Auteur</span>{' '}
                  {props.data.contentfulBlogPost.author}
                  <br />
                  <span className="post-authorspec">
                    Laatst bijgewerkt
                  </span>{' '}
                  {props.data.contentfulBlogPost.updatedPost}
                </div>
                <img className="author-mini" src={mini} alt="Menefex Icon" />
              </div>

              <div className="clr" />

              <div className="feedlysub">
                <a
                  href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fmenefex.nl%2Frss.xml"
                  title="Menefex WMB: RSS Feeds"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    id="feedlyFollow"
                    src="https://s3.feedly.com/img/follows/feedly-follow-circle-flat-green_2x.png"
                    alt="Lees op Feedly"
                    width="18"
                    height="18"
                    className="imagerss"
                  />
                </a>
                &nbsp;
                <a
                  href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fmenefex.nl%2Frss.xml"
                  type="application/rss+xml"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Lees op Feedly
                </a>
              </div>
              <div className="rsssub">
                <a
                  href="https://feeds.feedburner.com/MenefexWMB"
                  type="application/rss+xml"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://feedburner.google.com/fb/images/pub/feed-icon16x16.png"
                    alt="Abonneer via RSS Reader"
                    className="imagerss"
                  />
                </a>
                &nbsp;
                <a
                  href="https://feeds.feedburner.com/MenefexWMB"
                  type="application/rss+xml"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Abonneer via RSS Reader
                </a>
              </div>
            </div>
          </Animated>
          <div className="clr" />
          <div className="specwhitespace" />
          <Animated
            animationIn="fadeIn"
            animationInDelay={3750}
            animationInDuration={2000}
          >
            <GoogleAds slot="3266975443" />
          </Animated>
          <div className="specwhitespace" />
          <Animated
            animationIn="fadeIn"
            animationInDelay={4500}
            animationInDuration={2000}
          >
            <div className="disqussion">
              <Disqus
                config={{
                  url: `https://menefex.nl/blog/${props.data.contentfulBlogPost.slug}/`,
                  identifier: props.data.contentfulBlogPost.id,
                  title: props.data.contentfulBlogPost.title,
                }}
              />
            </div>
          </Animated>
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
