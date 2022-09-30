import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';
import { Animated } from 'react-animated-css';

import Layout from '../components/layout';
import SEO from '../components/seo';

import {
  posts,
  post,
  posthead,
  contsubtext,
} from '../styles/modules/topics.module.scss';

// TODO: images naar GatsbyImage verwerken

// CONTENTFUL blogposts genereren
const TopicgPage = () => {
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
          <ol className={posts}>
            {data.allContentfulTopic.edges.map((edge) => (
              <li className={post} key={edge.node.contentful_id}>
                <Link
                  to={`/topics/${edge.node.slug}/`}
                  style={{ borderColor: edge.node.bdcolor }}
                >
                  <div>
                    {' '}
                    <h4 className={posthead}>
                      <span
                        style={{ color: edge.node.bdcolor, fontWeight: 'bold' }}
                      >
                        #
                      </span>{' '}
                      {edge.node.name}
                    </h4>
                    <span className={contsubtext}>
                      {edge.node.description.description}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </Animated>
        <div className="whitespace" />
      </div>
    </Layout>
  );
};

export default TopicgPage;

export const Head = () => (
  <SEO
    title="Topics"
    description="Waar gaan onze blog onderwerpen allemaal over? Hier vindt je een overzicht!"
    keywords="onderwerpen, posts, topics, views, nieuws, stories, content, news, mind, actualiteiten, actueel"
    pathname="/topics/"
  />
);
