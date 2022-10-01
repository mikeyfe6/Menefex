import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';
import { Animated } from 'react-animated-css';

import Layout from '../components/layout';
import SEO from '../components/seo';

import {
  topics,
  topic,
  topichead,
  contsubtext,
} from '../styles/modules/topics.module.scss';

// TODO: images naar GatsbyImage verwerken

// CONTENTFUL blogposts genereren
const TopicPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTopic(sort: { fields: name, order: ASC }) {
        edges {
          node {
            contentful_id
            name
            slug
            bdcolor
            description {
              description
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div>
        <div className="smallwhitespace" />
        <h1 className="page-title">
          Topics<span className="headdots">.</span>
        </h1>
        <br />
        <p className="page-sub">Al onze blog onderwerpen op een rijtje..</p>
        <Animated
          animationIn="fadeIn"
          animationInDelay={750}
          animationInDuration={2000}
        >
          <ol className={topics}>
            {data.allContentfulTopic.edges.map(
              ({
                node: {
                  contentful_id: contentfulId,
                  slug,
                  bdcolor,
                  name,
                  description,
                },
              }) => (
                <li className={topic} key={contentfulId}>
                  <Link
                    to={`/topics/${slug}/`}
                    style={{ borderColor: bdcolor }}
                  >
                    <div>
                      {' '}
                      <h4 className={topichead}>
                        <span style={{ color: bdcolor, fontWeight: 'bold' }}>
                          #
                        </span>{' '}
                        {name}
                      </h4>
                      <span className={contsubtext}>
                        {description.description}
                      </span>
                    </div>
                  </Link>
                </li>
              ),
            )}
          </ol>
        </Animated>
        <div className="whitespace" />
      </div>
    </Layout>
  );
};

export default TopicPage;

export const Head = () => (
  <SEO
    title="Topics"
    description="Waar gaan onze blog onderwerpen allemaal over? Hier vindt je een overzicht!"
    keywords="onderwerpen, posts, topics, views, nieuws, stories, content, news, mind, actualiteiten, actueel"
    pathname="/topics/"
  />
);
