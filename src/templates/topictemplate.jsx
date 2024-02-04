/* eslint-disable indent */
import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import {} from '../styles/modules/blog.module.scss';

// TODO: images naar GatsbyImage verwerken

const DefaultInfo = ({ text }) => (
  <p className="page-sub" style={{ marginLeft: '5%' }}>
    <b>{text}</b>
  </p>
);

// CONTENTFUL topics genereren
const Topic = ({ pageContext: { name, topicPosts, bdcolor } }) => (
  <Layout>
    <div>
      <div className="smallwhitespace" />
      <h1 className="page-title">
        Topics<span>.</span>
      </h1>
      <br />
      <p className="page-sub" style={{ fontSize: '1.25rem' }}>
        <span style={{ color: bdcolor, fontWeight: 'bold' }}>#</span> &apos;{' '}
        {name}
      </p>

      <ol className={posts}>
        {topicPosts === null ? (
          <DefaultInfo text="* Oeps! Nog geen blogposts..." />
        ) : (
          topicPosts.map(
            ({
              slug,
              contentful_id: contentfulId,
              title,
              subtitle,
              publishedDate,
              author,
              image,
            }) => (
              <li className={post} key={contentfulId}>
                <Link to={`/blog/${slug}/`}>
                  <div>
                    {' '}
                    <h4 className={posthead}>{title}</h4>
                    <span className={contsubtext}> {subtitle}</span>
                    <p className={bloggepost}>
                      {' '}
                      Gepost: <strong>{publishedDate}</strong> ⌁ Auteur:{' '}
                      <strong>{author}</strong>{' '}
                    </p>
                  </div>

                  <img
                    src={image.file.url}
                    alt={image.title}
                    className={blogimg}
                  />
                </Link>
              </li>
            ),
          )
        )}
      </ol>
      <Link to="/topics/">
        <p
          style={{
            textAlign: 'right',
            margin: '2em 2em 0 0',
            fontWeight: 'bold',
          }}
        >
          Naar alle &apos;Topics&apos;
        </p>
      </Link>
    </div>
  </Layout>
);
export default Topic;

// eslint-disable-next-line react/prop-types
export const Head = ({ pageContext: { name, description, slug } }) => (
  <SEO title={name} description={description} pathname={`/topics/${slug}/`} />
);
