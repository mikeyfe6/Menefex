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

import mini from '../logo/Menefex-icon.svg';

import * as singlepostStyle from '../styles/modules/singlepost.module.scss';

// TODO: google ads space ook conditional maken

const websiteUrl = 'https://menefex.nl';

const Blog = ({ pageContext }) => {
  const {
    contentfulId,
    title,
    subtitle,
    topics,
    image,
    body,
    slug,
    publishedPost,
    updatedPost,
    author,
  } = pageContext;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b>{text}</b>,
      [MARKS.CODE]: (text) => <code>{text}</code>,
      [MARKS.ITALIC]: (text) => <i>{text}</i>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const {
          data: {
            target: { title, file },
          },
        } = node;

        return (
          <img alt={title} src={file.url} className={singlepostStyle.assets} />
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => (
        <div>Im an embedded entry, {node}</div>
      ),

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

      [BLOCKS.HR]: (node, children) => (
        <hr className={singlepostStyle.horizontness} />
      ),

      [INLINES.HYPERLINK]: ({ data }, children) => {
        const isInternal = data.uri.startsWith(websiteUrl);

        if (isInternal) {
          return (
            <Link className={singlepostStyle.hyperlinkness} to={data.uri}>
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
    },
  };

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      const script = document.createElement('script');

      script.src =
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3158048130288702';
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
  const relatedPosts = postTopic
    .flatMap((topic) =>
      topic.blogPost.filter(
        (post) => post.contentfulId !== contentfulId && post.slug !== slug,
      ),
    )
    .slice(0, 3);

  return (
    <Layout>
      <div className={singlepostStyle.singlepost}>
        <section className={singlepostStyle.view}>
          <Link to="/blog/" className={singlepostStyle.backbtn}>
            <i className="fa-solid fa-angles-left" /> ALLE BLOGPOSTS
          </Link>

          <hr className="thick" />

          <div>
            <div className={singlepostStyle.header}>
              <img src={mini} alt="Menefex Icon" />
              <div>
                <h1 className={singlepostStyle.title}>{title}</h1>
              </div>
            </div>

            <hr className={singlepostStyle.thin} />

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
                      identifier: contentfulId,
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
                    {author}
                    <br />
                    <br />
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
                      {relatedPosts?.map((post) => (
                        <li key={post.contentfulId}>
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
                  <li
                    key={relTopic.id}
                    style={{ borderColor: relTopic.bdcolor }}
                  >
                    <Link to={`/topics/${relTopic.slug}/`} key={relTopic.id}>
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
                    <li key={post?.contentfulId}>
                      <Link to={`/blog/${post?.slug}/`}>
                        <GatsbyImage
                          image={projectImg}
                          alt={post?.image?.title}
                          // className={slideCont}
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
      ogimage={`https:${image.file.url}`}
      schemaMarkup={schema}
      article
    />
  );
};
