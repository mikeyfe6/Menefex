import * as React from 'react';

import { useStaticQuery, graphql, Script } from 'gatsby';

const SEO = ({
  title,
  description,
  children,
  keywords,
  article,
  pathname,
  ogimage,
  schemaMarkup,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          url
          image
          twitterUsername
        }
      }
    }
  `);

  const { url, twitterUsername, image } = site.siteMetadata;

  const metaDescription = description || site.siteMetadata.description;
  const siteTitle = site.siteMetadata?.title;
  const pageImage = ogimage || `${url}${image}`;
  const siteUrl = `${url}${pathname || ''}`;

  // console.log('title::', title);
  // console.log('siteTitle::', siteTitle);
  // console.log('metaDescription::', metaDescription);
  // console.log('author::', author);
  // console.log('twitterUsername::', twitterUsername);
  // console.log('url::', url);
  // console.log('siteUrl::', siteUrl);
  // console.log('image::', image);
  // console.log('pageImage::', pageImage);
  // console.log('schemaMarkup::', schemaMarkup);
  // console.log('article::', article);
  // console.log('keywords::', keywords);
  // console.log(' children::', children);

  return (
    <>
      <title>{siteTitle ? `${title} · ${siteTitle}` : title}</title>

      {/* <meta
             name="viewport"
             content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
          /> */}

      <meta name="description" content={metaDescription} />
      <meta name="image" content={pageImage} />
      <meta name="keywords" content={keywords} />

      {/* --- OG / Facebook etc. Meta Tags ! --- */}

      <meta property="fb:app_id" content={process.env.GATSBY_FB_APP_ID} />

      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {pageImage && <meta property="og:image" content={pageImage} />}
      <meta property="og:site_name" content={siteTitle} />
      {siteUrl && <meta property="og:url" content={siteUrl} />}
      <meta property="og:locale" content="nl_NL" />
      {(article ? false : <meta property="og:type" content="website" />) || (
        <meta property="og:type" content="article" />
      )}
      {/* <meta property="og:image:width" content="512" />
            <meta property="og:image:height" content="512" /> */}

      {/* --- Twitter Meta Tags ! --- */}

      {title && <meta property="twitter:title" content={title} />}
      {description && (
        <meta property="twitter:description" content={description} />
      )}
      {pageImage && <meta property="twitter:image" content={pageImage} />}
      <meta property="twitter:card" content="summary" />
      {siteUrl && <meta property="twitter:url" content={siteUrl} />}
      <meta property="twitter:site" content={twitterUsername} />
      {twitterUsername && (
        <meta property="twitter:creator" content={twitterUsername} />
      )}

      {/* --- Link Tags ! --- */}

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      {/* --- SchemaMarkup ! --- */}

      {schemaMarkup && (
        <Script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </Script>
      )}

      {children}
    </>
  );
};

export default SEO;
