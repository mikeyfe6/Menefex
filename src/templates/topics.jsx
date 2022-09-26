/* eslint-disable indent */
import React from 'react';

import { Link } from 'gatsby';
import PropTypes from 'prop-types';

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

// TODO: images naar GatsbyImage verwerken

const DefaultInfo = ({ text }) => (
  <p className="page-sub" style={{ marginLeft: '5%' }}>
    <b>{text}</b>
  </p>
);

// CONTENTFUL topics genereren
const Topic = ({ pageContext }) => {
  const topicData = pageContext;

  // CONTENTFUL blogposts genereren
  return (
    <Layout>
      <div>
        <div className="smallwhitespace" />
        <h1 className="page-title">
          Topics<span className="headdots">.</span>
        </h1>
        <br />
        <p className="page-sub" style={{ fontSize: '1.25rem' }}>
          <b>#</b> &apos; {topicData.name}
        </p>
        <Animated
          animationIn="fadeIn"
          animationInDelay={750}
          animationInDuration={2000}
        >
          <ol className={posts}>
            {topicData.topicData === null ? (
              <DefaultInfo text="* Oeps! Nog geen blogposts..." />
            ) : (
              topicData.topicData.map((edge) => (
                <li className={post} key={edge.contentful_id}>
                  <Link to={`/blog/${edge.slug}/`}>
                    <div>
                      {' '}
                      <h4 className={posthead}>{edge.title}</h4>
                      <span className={contsubtext}> {edge.subtitle}</span>
                      <p className={bloggepost}>
                        {' '}
                        Gepost: <strong>{edge.publishedDate}</strong> ⌁ Auteur:{' '}
                        <strong>{edge.author}</strong>{' '}
                      </p>
                    </div>

                    <img
                      src={edge.image.file.url}
                      alt={edge.image.title}
                      className={blogimg}
                    />
                  </Link>
                </li>
              ))
            )}
          </ol>
        </Animated>
        <div className="whitespace" />
      </div>
    </Layout>
  );
};

export default Topic;

export const Head = () => (
  <SEO
    title="Topics"
    description="topics hierrrr"
    // keywords="alle topics"
    pathname="/topic/"
  />
);

DefaultInfo.propTypes = {
  text: PropTypes.string.isRequired,
};

Topic.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),
};

Topic.defaultProps = {
  pageContext: {},
};
