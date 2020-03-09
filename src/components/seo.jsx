import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;

const SEO = ({
  title,
  description,
  image,
  pathname,
  article,
  lang,
  keywords,
  custom,
}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        custom: custom,
        image: custom || `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`,
        keywords:
          keywords ||
          `webmediabedrijf, gimmix, amsterdam, website laten maken, wordpress, reactjs`,
      };
      return (
        <>
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={seo.title}
            titleTemplate={titleTemplate}
          >
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="keywords" content={seo.keywords} />

            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.url && <meta property="twitter:url" content={seo.url} />}

            {(article ? (
              false
            ) : (
              <meta property="og:type" content="website" />
            )) || <meta property="og:type" content="article" />}

            {seo.title && <meta property="og:title" content={seo.title} />}

            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}

            {seo.image && <meta property="og:image" content={seo.image} />}

            <meta property="og:site_name" content="Gimmix" />
            <meta property="og:locale" content="nl_NL" />
            <meta name="twitter:card" content="summary_large_image" />

            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}

            {seo.title && <meta name="twitter:title" content={seo.title} />}

            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}

            {seo.image && <meta name="twitter:image" content={seo.image} />}

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
          </Helmet>
        </>
      );
    }}
  />
);

export default SEO;
SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  keywords: PropTypes.string,
  custom: PropTypes.string,
};
SEO.defaultProps = {
  lang: `nl`,
  title: null,
  description: null,
  image: null,
  pathname: null,
  custom: null,
  keywords: null,
  article: false,
};
