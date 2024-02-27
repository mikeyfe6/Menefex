import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import useSiteMetadata from '../hooks/use-site-metadata';

import * as blogpostStyles from '../styles/modules/blog.module.scss';

// TODO: images naar GatsbyImage verwerken

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { createdAt: DESC }) {
        edges {
          node {
            id
            title
            slug
            subtitle
            author
            image {
              title
              file {
                url
              }
            }
            createdAt(formatString: "dddd D MMMM YYYY", locale: "nl")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1 className="page-title">
        Blog<span>.</span>
      </h1>

      <p className="page-sub">What goes through our mind..</p>

      <section>
        <ul className={blogpostStyles.blogposts}>
          {data.allContentfulBlogPost.edges.map((edge) => (
            <li key={edge.node.id}>
              <Link to={`/blog/${edge.node.slug}/`}>
                <div>
                  <h4>{edge.node.title}</h4>
                  <p>{edge.node.subtitle}</p>
                  <span>
                    Gepost: <strong>{edge.node.createdAt}</strong> ⌁ Auteur:{' '}
                    <strong>{edge.node.author}</strong>
                  </span>
                </div>

                {/* TODO: image naar GatsbyImage */}

                <img
                  src={edge.node.image.file.url}
                  alt={edge.node.image.title}
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/topics/" className={blogpostStyles.backBtn}>
          &apos;Topics&apos; <i className="fa-solid fa-angles-right" />
        </Link>
      </section>
    </Layout>
  );
};

export default BlogPage;

export const Head = () => {
  const { title, siteUrl } = useSiteMetadata();

  const breadcrumbSchema = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    '@id': siteUrl + '/#breadcrumb',
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
        name: 'Blog',
        item: siteUrl + '/blog/',
      },
    ],
  };

  return (
    <SEO
      title="Blog"
      description="What goes through our mind... Our views on life, technology, culture, the past, the future and more..."
      keywords="blog, posts, views, nieuws, stories, nieuws, content, verhalen, news, mind, actualiteiten, actueel"
      pathname="/blog/"
      schemaMarkup={breadcrumbSchema}
    />
  );
};
