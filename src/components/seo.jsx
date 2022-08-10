import React from 'react';

import { StaticQuery, graphql, Script } from 'gatsby';
import PropTypes from 'prop-types';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
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
          'webmediabedrijf, menefex, amsterdam, website, webshop, webapplicatie laten maken, wordpress, reactjs',
      };

      return (
        <>
          <title>{`${seo.title} · ${defaultTitle}`}</title>

          {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
          /> */}

          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />
          <meta name="keywords" content={seo.keywords} />
          <meta property="fb:app_id" content={process.env.GATSBY_FB_APP_ID} />

          {/* OG / Facebook etc. Meta Tags ! */}

          {seo.url && <meta property="og:url" content={seo.url} />}
          {seo.title && <meta property="og:title" content={seo.title} />}
          {seo.description && (
            <meta property="og:description" content={seo.description} />
          )}
          {seo.image && <meta property="og:image" content={seo.image} />}
          <meta property="og:site_name" content={defaultTitle} />
          <meta property="og:locale" content="nl_NL" />
          {(article ? (
            false
          ) : (
            <meta property="og:type" content="website" />
          )) || <meta property="og:type" content="article" />}
          {/* <meta property="og:image:width" content="512" />
            <meta property="og:image:height" content="512" /> */}

          {/* Twitter Meta Tags ! */}

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

          {schemaMarkup && (
            <Script type="application/ld+json">
              {JSON.stringify(schemaMarkup)}
            </Script>
          )}
        </>
      );
    }}
  />
);

export default SEO;

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  keywords: PropTypes.string,
  custom: PropTypes.string,
  schemaMarkup: PropTypes.instanceOf(Object),
};
SEO.defaultProps = {
  description: null,
  image: null,
  pathname: null,
  custom: null,
  keywords: null,
  article: false,
  schemaMarkup: null,
};
