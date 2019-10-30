import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Helmet
      title={`${title} | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: 'Webdevelopment die schiet naar de toekomst',
        },
        {
          name: 'keywords',
          content:
            'gimmix, webdevelopment, gatsby, amsterdam, website, bouwen, freelancer',
        },
      ]}
    >
      <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.css" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/swiper/css/swiper.min.css"
      />
    </Helmet>
  );
};

export default SEO;
