import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import useSiteMetadata from '../hooks/use-site-metadata';

import * as topicStyles from '../styles/modules/topics.module.scss';

// TODO: images naar GatsbyImage verwerken

const DefaultInfo = ({ text }) => (
  <p>
    <br /> <b>{text}</b>
  </p>
);

const Topic = ({ pageContext: { name, topicPosts, bdcolor } }) => (
  <Layout>
    <h1 className="page-title">
      Topics<span>.</span>
    </h1>

    <p className="page-sub">
      <span style={{ color: bdcolor, fontWeight: 'bold' }}>#</span> {name}
    </p>

    <ul className={topicStyles.posts}>
      {topicPosts === null ? (
        <DefaultInfo text="* Oeps! Nog geen blogposts..." />
      ) : (
        topicPosts.map(
          ({
            slug,
            contentful_id: contentfulId,
            title,
            subtitle,
            createdAt,
            author,
            image,
          }) => (
            <li key={contentfulId}>
              <Link to={`/blog/${slug}/`}>
                <div>
                  <h4>{title}</h4>
                  <p> {subtitle}</p>
                  <span>
                    Gepost: <strong>{createdAt}</strong> ⌁ Auteur:{' '}
                    <strong>{author}</strong>
                  </span>
                </div>

                <img src={image.file.url} alt={image.title} />
              </Link>
            </li>
          ),
        )
      )}
    </ul>

    <Link to="/topics/" className={topicStyles.backBtn}>
      <i className="fa-solid fa-angles-left" /> Alle &apos;Topics&apos;
    </Link>
  </Layout>
);
export default Topic;

export const Head = ({ pageContext: { name, description, slug } }) => {
  const { title, siteUrl } = useSiteMetadata();

  const breadcrumbSchema = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: title,
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Topics',
        item: siteUrl + '/topics/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: name,
        item: siteUrl + '/topics/' + slug + '/',
      },
    ],
  };

  return (
    <SEO
      title={name}
      description={description}
      pathname={`/topics/${slug}/`}
      schemaMarkup={breadcrumbSchema}
    />
  );
};
