/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Disqus } from 'gatsby-plugin-disqus';

import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from '../components/layout';
import SEO from '../components/seo';

import GoogleAdsDisplay from '../components/google/adsdisp';
import GoogleAdsMulti from '../components/google/adsmulti';

import useSiteMetadata from '../hooks/use-site-metadata';

import mini from '../logo/Menefex-icon.svg';

import * as singlepostStyle from '../styles/modules/singlepost.module.scss';

const Blog = ({ pageContext }) => {
  const {
    contentful_id,
    title,
    subtitle,
    topics,
    image,
    body,
    slug,
    updatedPost,
    publishedPost,
    author,
  } = pageContext;

  const { siteUrl } = useSiteMetadata();

  const options = {
    preserveWhitespace: false,
    renderMark: {
      [MARKS.BOLD]: (text) => <b>{text}</b>,
      [MARKS.CODE]: (text) => <code>{text}</code>,
      [MARKS.ITALIC]: (text) => <i>{text}</i>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const {
          data: {
            target: { title, file },
          },
        } = node;

        return (
          <img alt={title} src={file.url} className={singlepostStyle.assets} />
        );
      },

      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        // // const {
        // //   data: {
        // //     target: { title, file },
        // //   },
        // // } = node;
        // console.log('huhhhh');
        // console.log('MFNXWMB: EMBEDDED_ENTRY', node); // Changed comma to semicolon
        // return <img alt="" src="" />;
      },

      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={singlepostStyle.paragraphness}>{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className={singlepostStyle.headoneness}>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className={singlepostStyle.headtwoness}>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className={singlepostStyle.headthreeness}>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className={singlepostStyle.headfourness}>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className={singlepostStyle.headfiveness}>{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className={singlepostStyle.headsixness}>{children}</h6>
      ),

      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className={singlepostStyle.unorderedlistness}>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className={singlepostStyle.orderedlistness}>{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className={singlepostStyle.listitemness}>{children}</li>
      ),

      [BLOCKS.HR]: () => <hr className={singlepostStyle.horizontness} />,

      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className={singlepostStyle.quoteness}>
          {children}
        </blockquote>
      ),

      [INLINES.HYPERLINK]: ({ data }, children) => {
        const isInternal = data.uri.startsWith(siteUrl);
        const strippedUrl = isInternal
          ? data.uri.replace(siteUrl, '')
          : data.uri;

        if (isInternal) {
          return (
            <Link className={singlepostStyle.hyperlinkness} to={strippedUrl}>
              {children}
            </Link>
          );
        } else {
          return (
            <a
              className={singlepostStyle.hyperlinkness}
              href={data.uri}
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          );
        }
      },

      [INLINES.ENTRY_HYPERLINK]: ({ data }, children) => {
        const { slug } = data.target;

        return (
          <Link className={singlepostStyle.hyperlinkness} to={'/blog/' + slug}>
            {children}
          </Link>
        );
      },

      [INLINES.ASSET_HYPERLINK]: ({ data }, children) => {
        const { slug } = data.target;

        return (
          <Link className={singlepostStyle.hyperlinkness} to={slug}>
            {children}
          </Link>
        );
      },

      [INLINES.EMBEDDED_ENTRY]: ({ data }, children) => {
        const { slug } = data.target;

        return (
          <Link className={singlepostStyle.hyperlinkness} to={'/blog/' + slug}>
            {children}
          </Link>
        );
      },
    },
  };

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      const script = document.createElement('script');

      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GATSBY_GOOGLE_CA_PUB}}`;
      script.async = true;

      document.body.appendChild(script);
      console.log('MFNXWMB: Google Adsense is geladen!');

      return () => {
        document.body.removeChild(script);
        console.log('MFNXWMB: Google Adsense is gestopt!');
      };
    }
  }, []);

  const postTopic = topics;
  const relatedPostsSet = new Set();
  const relatedPosts = [];

  const currentPostSlug = slug;

  postTopic.forEach((topic) => {
    topic.blog_post.forEach((post) => {
      if (post.slug !== currentPostSlug && !relatedPostsSet.has(post.slug)) {
        relatedPostsSet.add(post.slug);
        relatedPosts.push(post);
      }
    });
  });

  return (
    <Layout>
      <div className={singlepostStyle.singlepost}>
        <section className={singlepostStyle.view}>
          <Link to="/blog/" className={singlepostStyle.backbtn}>
            <i className="fa-solid fa-angles-left" /> ALLE BLOGPOSTS
          </Link>

          <hr className={singlepostStyle.thickHr} />

          <div>
            <div className={singlepostStyle.header}>
              <img src={mini} alt="Menefex Icon" />
              <div>
                <h1 className={singlepostStyle.title}>{title}</h1>
              </div>
            </div>

            <hr className={singlepostStyle.thinHr} />

            <div className={singlepostStyle.main}>
              <section>
                <img
                  src={`https:${image.file.url}`}
                  alt={title}
                  className={singlepostStyle.image}
                />

                <h2 className={singlepostStyle.subtitle}>{subtitle}</h2>
                <div className={singlepostStyle.content}>
                  {renderRichText(body, options)}
                </div>

                <div className={singlepostStyle.rss}>
                  <div className={singlepostStyle.feedly}>
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
                      />{' '}
                      Lees / Abonneer op Feedly
                    </a>
                  </div>
                  <div className={singlepostStyle.feedburner}>
                    <a
                      href="https://feeds.feedburner.com/MenefexWMB"
                      type="application/rss+xml"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src="https://feedburner.google.com/fb/images/pub/feed-icon32x32.png"
                        alt="Abonneer via RSS Reader"
                      />{' '}
                      RAW data via Feedburner
                    </a>
                  </div>
                </div>

                <section className={singlepostStyle.disqus}>
                  <Disqus
                    config={{
                      url: `https://menefex.nl/blog/${slug}/`,
                      identifier: contentful_id,
                      language: 'nl_NL',
                      title,
                    }}
                  />
                </section>
              </section>
              <aside>
                <div className={singlepostStyle.gepost}>
                  Gepost op {publishedPost}
                </div>
                <div className={singlepostStyle.sidebar}>
                  <div className={singlepostStyle.author}>
                    <span>
                      <u>Auteur</u>
                    </span>
                    <a
                      href="https://www.linkedin.com/in/michaelfransman/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {author}
                    </a>
                    <span>
                      <u>Laatst bijgewerkt</u>
                    </span>
                    {updatedPost}
                  </div>

                  {relatedPosts?.length === 0 ? null : <hr />}

                  <div className={singlepostStyle.related}>
                    {relatedPosts?.length === 0 ? null : (
                      <div>
                        <h6>
                          <u>Gerelateerde Artikelen</u>
                        </h6>
                      </div>
                    )}

                    <ul>
                      {relatedPosts?.slice(0, 3).map((post) => (
                        <li key={post.contentful_id}>
                          <Link to={`/blog/${post.slug}/`}>
                            <h5>{post.title}</h5>
                            <p>{post.subtitle}</p>
                            <span>Lees meer... </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>

            <div className={singlepostStyle.topics}>
              <ul>
                {postTopic.map((relTopic) => (
                  <li key={relTopic.id}>
                    <Link
                      to={`/topics/${relTopic.slug}/`}
                      key={relTopic.id}
                      style={{ borderColor: relTopic.bdcolor }}
                    >
                      {relTopic.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link to="/blog/" className={singlepostStyle.backbtn}>
                <i className="fa-solid fa-angles-left" /> ALLE BLOGPOSTS
              </Link>
            </div>

            <section className={singlepostStyle.family}>
              {relatedPosts?.length === 0 ? null : (
                <h6>Gerelateerde Artikelen</h6>
              )}

              <ul>
                {relatedPosts?.slice(0, 3).map((post) => {
                  const projectImg = getImage(post?.image?.gatsbyImageData);

                  return (
                    <li key={post?.contentful_id}>
                      <Link to={`/blog/${post?.slug}/`}>
                        <GatsbyImage
                          image={projectImg}
                          alt={post?.image?.title}
                        />
                        <h5>{post?.title}</h5>
                        <p>{post?.subtitle}</p>
                        <span>Lees meer...</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>

            {process.env.NODE_ENV !== 'development' && (
              <GoogleAdsDisplay slot="3266975443" />
            )}

            {process.env.NODE_ENV !== 'development' && (
              <GoogleAdsMulti slot="1625762341" />
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;

export const Head = ({ pageContext }) => {
  const { title: siteTitle, siteUrl, favicon } = useSiteMetadata();

  const {
    title,
    subtitle,
    author,
    image,
    slug,
    publishedSchema,
    updatedSchema,
    keywords,
  } = pageContext;

  const breadcrumbSchema = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: siteTitle,
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: siteUrl + '/blog/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: siteUrl + '/blog/' + slug + '/',
      },
    ],
  };

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteUrl + '/blog/' + slug + '/',
    },
    headline: title,
    description: subtitle,
    image: 'https:' + image.file.url,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteTitle,
      logo: {
        '@type': 'ImageObject',
        url: siteUrl + favicon,
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
      ogimage={`https:${image.file.url}`}
      schemaMarkup={[breadcrumbSchema, blogPostingSchema]}
      article
    />
  );
};
