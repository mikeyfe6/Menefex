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
      <script src="https://unpkg.com/react-id-swiper@2.3.2/lib/react-id-swiper.js" />
      <script src="https://unpkg.com/react-id-swiper@2.3.2/lib/react-id-swiper.min.js" />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
      />
    </Helmet>
  );
};

export default SEO;
