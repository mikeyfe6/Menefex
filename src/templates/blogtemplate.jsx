/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Disqus } from 'gatsby-plugin-disqus';
import { Animated } from 'react-animated-css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import SEO from '../components/seo';
import Layout from '../components/layout';

import GoogleAdsDisplay from '../components/adsdisp';
import GoogleAdsMulti from '../components/adsmulti';

import mini from '../logo/Menefex-icon.svg';

import '../styles/blogpost.scss';

// TODO: google ads space ook conditional maken

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      contentfulId: contentful_id
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
            title
            file {
              url
              details {
                size
                image {
                  width
                  height
                }
              }
              fileName
            }
          }
        }
      }
      topics {
        id
        name
        slug
        bdcolor
        blogPost: blog_post {
          contentfulId: contentful_id
          title
          subtitle
          slug
          image {
            title
            gatsbyImageData(
              width: 300
              height: 225
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
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
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const {
        data: {
          target: { title, file },
        },
      } = node;

      return <img alt={title} src={file.url} className="img-resize" />;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => (
      // manipulate here your embedded entry
      <div>Im an embedded entry, {node}</div>
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

// console.log(options);

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
  const {
    data: {
      contentfulBlogPost: {
        title,
        publishedPost,
        subtitle,
        image,
        body,
        author,
        updatedPost,
        slug,
        contentfulId,
        topics,
      },
    },
  } = props;

  // const options = {
  //   renderNode: {
  //     'embedded-asset-block': (node) => {
  //       const alt = node.data.target.fields.title['nl-NL'];
  //       const url = node.data.target.fields.file['nl-NL'].url;
  //       return <img alt={alt} src={url} className="img-resize" />;
  //     },
  //   },
  // };

  const postTopic = topics;
  const relatedPosts = postTopic.map((topic) =>
    topic.blogPost.filter((post) => post.contentfulId !== contentfulId),
  ); // filter out the current post

  const postsOneArray = relatedPosts.flat(Infinity); // flatten the array

  const set = new Set();
  const uniquePosts = postsOneArray.filter((item) => {
    const alreadyHas = set.has(item.slug);
    set.add(item.slug);

    return !alreadyHas;
  }); // filter out the duplicates

  useEffect(() => {
    const script = document.createElement('script');

    script.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.async = true;

    document.body.appendChild(script);
    console.log('MFNXWMB: Google Adsense is geladen!');

    return () => {
      document.body.removeChild(script);
      console.log('MFNXWMB: Google Adsense is gestopt!');
    };
  }, []);

  return (
    <Layout>
      <div className="smallwhitespace" />
      <div className="container">
        <Link to="/blog/">
          <button type="button" className="gobackbtn">
            <FontAwesomeIcon icon="backward" />{' '}
            <span className="gobacktext"> &nbsp;ALLE BLOGPOSTS </span>
          </button>
        </Link>
        <hr className="thick" />

        <div className="postcenterit">
          {' '}
          <Animated
            animationIn="fadeIn"
            animationInDelay={250}
            animationInDuration={2000}
          >
            <img className="blog-mini" src={mini} alt="Menefex Icon" />

            <div className="nexttologo">
              <h1 className="post-title">{title}</h1>
              <p className="post-date">Gepost op {publishedPost}</p>
            </div>

            <div className="clr" />

            <hr className="thin" />
          </Animated>
          <Animated
            animationIn="fadeIn"
            animationInDelay={1000}
            animationInDuration={2000}
          >
            <h2 className="post-subtitle">{subtitle}</h2>{' '}
          </Animated>
          <Animated
            animationIn="fadeIn"
            animationInDelay={1750}
            animationInDuration={2000}
          >
            <img
              src={`https:${image.file.url}`}
              alt={title}
              className="blogheadimage webfeedsFeaturedVisual"
            />
            <div className="post-content">
              {renderRichText(body, options)}

              <div className="whitespace" />

              <div className="post-authorcont">
                <div className="post-author">
                  <span className="post-authorspec">Auteur</span> {author}
                  <br />
                  <span className="post-authorspec">
                    Laatst bijgewerkt
                  </span>{' '}
                  {updatedPost}
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
                  Lees / Abonneer op Feedly
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
                  RAW data via Feedburner
                </a>
              </div>
            </div>
          </Animated>
          <div className="clr" />
          <div className="smallwhitespace" />
          <div className="topicsBackButton">
            <div className="relatedTopicContainer">
              <ul className="relatedTopic">
                {postTopic.map((relTopic) => (
                  <Link to={`/topics/${relTopic.slug}/`} key={relTopic.id}>
                    <li
                      key={relTopic.id}
                      style={{ borderColor: relTopic.bdcolor }}
                    >
                      {relTopic.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <Link to="/blog/">
              <button type="button" className="gobackbtnLOW">
                <FontAwesomeIcon icon="backward" />
                <span className="gobacktext"> &nbsp;ALLE BLOGPOSTS </span>
              </button>
            </Link>
          </div>
          {relatedPosts[0].length === 0 ? null : (
            <div className="relatedHead">
              <p>Gerelateerde Artikelen</p>
            </div>
          )}
          <div className="relatedPostsContainer">
            <ul className="relatedPosts">
              {uniquePosts.slice(0, 3).map((post) => {
                const projectImg = getImage(post.image.gatsbyImageData);

                return (
                  <li key={post.contentfulId}>
                    <Link to={`/blog/${post.slug}/`}>
                      <GatsbyImage
                        image={projectImg}
                        alt={post.image.title}
                        // className={slideCont}
                      />
                      <p className="relatedPostsTitle">{post.title}</p>
                      <p className="relatedPostsSubtitle">{post.subtitle}</p>
                      <p className="relatedPostsButton">Lees meer... </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="smallwhitespace" />
          <Animated
            animationIn="fadeIn"
            animationInDelay={2500}
            animationInDuration={2000}
          >
            <GoogleAdsDisplay slot="3266975443" />
          </Animated>
          <div className="smallwhitespace" />
          <Animated
            animationIn="fadeIn"
            animationInDelay={3250}
            animationInDuration={2000}
          >
            <div className="disqussion">
              <Disqus
                config={{
                  url: `https://menefex.nl/blog/${slug}/`,
                  identifier: contentfulId,
                  title,
                }}
              />
            </div>
            <GoogleAdsMulti slot="1625762341" />
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

export const Head = (props) => {
  const {
    data: {
      contentfulBlogPost: {
        title,
        subtitle,
        author,
        image,
        slug,
        publishedSchema,
        updatedSchema,
        keywords,
      },
    },
  } = props;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://menefex.nl/blog/${slug}/`,
    },
    headline: title,
    description: subtitle,
    image: `https:${image.file.url}`,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Menefex',
      logo: {
        '@type': 'ImageObject',
        url: 'https://menefex.nl/Menefex-favi.png',
      },
    },
    datePublished: publishedSchema,
    dateModified: updatedSchema,
  };
  return (
    <SEO
      title={title}
      description={subtitle}
      keywords={keywords.join(', ')}
      pathname={`/blog/${slug}/`}
      custom={`https:${image.file.url}`}
      schemaMarkup={schema}
      article
    />
  );
};

Bold.propTypes = {
  children: PropTypes.node.isRequired,
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

Heading1.propTypes = {
  children: PropTypes.node.isRequired,
};

Heading2.propTypes = {
  children: PropTypes.node.isRequired,
};

Heading3.propTypes = {
  children: PropTypes.node.isRequired,
};

Heading4.propTypes = {
  children: PropTypes.node.isRequired,
};

Heading5.propTypes = {
  children: PropTypes.node.isRequired,
};

Heading6.propTypes = {
  children: PropTypes.node.isRequired,
};

UnOrdList.propTypes = {
  children: PropTypes.node.isRequired,
};

OrdList.propTypes = {
  children: PropTypes.node.isRequired,
};

DotList.propTypes = {
  children: PropTypes.node.isRequired,
};

Blog.propTypes = {
  data: PropTypes.shape({
    contentfulBlogPost: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      author: PropTypes.string,
      image: PropTypes.shape({
        file: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
      publishedPost: PropTypes.string,
      updatedPost: PropTypes.string,
      body: PropTypes.shape({
        json: PropTypes.shape({
          content: PropTypes.arrayOf(),
        }),
      }),
      slug: PropTypes.string,
      contentfulId: PropTypes.string,
    }),
  }).isRequired,
};

// Head.propTypes = {
//   data: PropTypes.shape({
//     contentfulBlogPost: PropTypes.shape({
//       title: PropTypes.string,
//       subtitle: PropTypes.string,
//       author: PropTypes.string,
//       image: PropTypes.shape({
//         file: PropTypes.shape({
//           url: PropTypes.string,
//         }),
//       }),
//       publishedSchema: PropTypes.string,
//       updatedSchema: PropTypes.string,
//       slug: PropTypes.string,
//       keywords: PropTypes.arrayOf(PropTypes.string),
//     }),
//   }).isRequired,
// };
