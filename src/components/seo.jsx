import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

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
  schemaMarkup,
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
        custom,
        image: custom || `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`,
        keywords:
          keywords ||
          'webmediabedrijf, menefex, amsterdam, website laten maken, wordpress, reactjs',
      };
      return (
        <>
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={seo.title}
            titleTemplate={titleTemplate}
            defer
          >
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
            />

            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="keywords" content={seo.keywords} />

            <meta property="fb:app_id" content="277486370179723" />

            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}

            {seo.image && <meta property="og:image" content={seo.image} />}

            <meta property="og:site_name" content="Menefex" />
            <meta property="og:locale" content="nl_NL" />

            {(article ? (
              false
            ) : (
              <meta property="og:type" content="website" />
            )) || <meta property="og:type" content="article" />}

            {/* <meta property="og:image:width" content="512" />
            <meta property="og:image:height" content="512" /> */}

            <meta property="twitter:card" content="summary" />
            {seo.url && <meta property="twitter:url" content={seo.url} />}
            {seo.title && <meta property="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta property="twitter:description" content={seo.description} />
            )}

            {seo.image && <meta property="twitter:image" content={seo.image} />}

            <meta property="twitter:site" content={twitterUsername} />
            {twitterUsername && (
              <meta property="twitter:creator" content={twitterUsername} />
            )}

            {/* Links Rel: Extentions & Plugins */}

            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
            />

            <link
              rel="alternate"
              type="application/rss+xml"
              title="Menefex WMB: RSS Feeds"
              href="https://menefex.nl/rss.xml"
            />

            {schemaMarkup && (
              <script type="application/ld+json">
                {JSON.stringify(schemaMarkup)}
              </script>
            )}
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
  schemaMarkup: PropTypes.instanceOf(Object),
};
SEO.defaultProps = {
  lang: 'nl',
  title: null,
  description: null,
  image: null,
  pathname: null,
  custom: null,
  keywords: null,
  article: false,
  schemaMarkup: null,
};
