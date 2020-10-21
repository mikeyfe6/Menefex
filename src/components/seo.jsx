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
            defer
          >
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
            />

            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="keywords" content={seo.keywords} />

            {/* Schema Markup Data */}

            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  "name": "Gimmix Webmediabedrijf",
                  "founder": {
                    "@type": "Person",
                    "name": "Michael Fransman"
                  },
                  "image": "https://gimmix.nl/Gimmix-logo.png",
                  "logo": "https://i.postimg.cc/rsf0PJv0/Gx-FAVICON-X.png",
                  "@id": "https://gimmix.nl/#localbusiness",
                  "url": "https://gimmix.nl",
                  "telephone": "+31611054318",
                  "email": "info@gimmix.nl",
                  "priceRange": "$$",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Karspeldreef 1450",
                    "addressLocality": "Amsterdam",
                    "postalCode": "1104SE",
                    "addressCountry": "NL"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 52.31482399999999,
                    "longitude": 4.9755936
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "09:00",
                    "closes": "19:00"
                  },
                  "sameAs": [
                    "https://www.facebook.com/GimmixWMB",
                    "https://www.twitter.com/GimmixWMB",
                    "https://www.instagram.com/gimmixwmb/",
                    "https://www.linkedin.com/company/gimmixwmb/",
                    "https://github.com/mikeyfe6",
                    "https://www.patreon.com/gimmixWMB",
                    "https://feeds.feedburner.com/GimmixWMB",
                    "https://wa.me/31611054318",
                    "https://open.spotify.com/playlist/08UGoWTjvpuooABCWyPx0m?si=caXZyz28R8u8Ck683qLgQA"
                  ]
                }
              `}
            </script>
            <script type="application/ld+json">
              {`
                {
                  "@context": "http://schema.org",
                  "@type": "WebPage",
                  "@id": "https://gimmix.nl/#webpage",
                  "url": "https://gimmix.nl",
                  "name": "Gimmix Webmediabedrijf"
                  }
                `}
            </script>
            {/* <script type="application/ld+json">
              {`
                {
                  "@context": "http://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement":
                  [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "item":
                      {
                        "@type": "Website",
                        "@id": "https://gimmix.nl",
                        "name": "Gimmix Webmediabedrijf"
                      }
                    }
                  ]
                }
             `}
            </script> */}

            <meta property="fb:app_id" content="388358162140938" />

            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}

            {seo.image && <meta property="og:image" content={seo.image} />}

            <meta property="og:site_name" content="Gimmix" />
            <meta property="og:locale" content="nl_NL" />

            {(article ? (
              false
            ) : (
              <meta property="og:type" content="website" />
            )) || <meta property="og:type" content="article" />}

            {/* <meta property="og:image:width" content="512" />
            <meta property="og:image:height" content="512" /> */}

            <meta property="twitter:card" content="summary_large_image" />
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

            {/* Links Rel: Fonts */}

            {/* Google Adsense */}

            <script
              data-ad-client="ca-pub-3158048130288702"
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
              async
            />

            {/* Scripts: Extentions & Plugins */}

            <script src="https://unpkg.com/swiper/swiper-bundle.min.js" async />

            {/* Links Rel: Extentions & Plugins */}

            <link
              rel="stylesheet preload"
              href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
            />

            <link
              rel="alternate"
              type="application/rss+xml"
              title="Gimmix WMB: RSS Feeds"
              href="https://gimmix.nl/rss.xml"
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
