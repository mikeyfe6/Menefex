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
      {/* Scripts: Extentions & Plugins */}

      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />

      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js" />

      <script src="https://cdn.jsdelivr.net/npm/gsap@3.0.1/dist/gsap.min.js" />

      {/* Links Rel: Fonts */}

      <link
        href="https://fonts.googleapis.com/css?family=Quando&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Lato&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        rel="stylesheet"
      />

      {/* Links Rel: Extentions & Plugins */}

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      />

      {/* <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      /> */}
    </Helmet>
  );
};

export default SEO;
