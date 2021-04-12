/**
    https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const sass = require('sass');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://gimmix.nl',
    url: 'https://gimmix.nl',
    tel: '+31611054318',
    image: '/Gimmix-logo.png',
    title: 'Gimmix',
    titleTemplate: '%s · Gimmix',
    author: 'Michael Fransman',
    description: 'Wij bouwen websites & webapps met oog voor detail.',
    twitterUsername: '@GimmixWMB',
    bizEmail: 'info@gimmix.nl',
    authorEmail: 'michaelfransman@gimmix.nl',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-5X6VS2L',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                author
                description
                bizEmail
                authorEmail
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,

        setup: ({ query: { site } }, options) => ({
          ...options,
          title: 'Gimmix WMB: RSS Feeds',
          description: site.siteMetadata.description,
          site_url: site.siteMetadata.siteUrl,
          feed_url: `${site.siteMetadata.siteUrl}/rss.xml`,
          image_url: 'https://i.postimg.cc/JnqZPb3f/Gx-FAVICON.png',
          webMaster: `${site.siteMetadata.bizEmail} (${site.siteMetadata.title})`,
          managingEditor: `${site.siteMetadata.authorEmail} (${site.siteMetadata.author})`,
          copyright: `© 2019 - ${new Date().getFullYear()} ${
            site.siteMetadata.title
          }, Alle rechten voorbehouden.`,
          language: 'nl',
          generator: 'GatsbyJS',
          ttl: '60',
          custom_namespaces: {
            webfeeds: 'http://webfeeds.org/rss/1.0',
          },
          custom_elements: [
            {
              'webfeeds:cover': {
                _attr: {
                  image: 'https://i.postimg.cc/WbsmfwKc/Gx-NEWLOGO.png',
                },
              },
            },
            { 'webfeeds:icon': 'https://i.postimg.cc/JnqZPb3f/Gx-FAVICON.png' },
            { 'webfeeds:logo': 'https://i.postimg.cc/JnqZPb3f/Gx-FAVICON.png' },
            { 'webfeeds:accentColor': 'FFCC00' },
            {
              'webfeeds:related': {
                _attr: {
                  layout: 'card',
                  target: 'browser',
                },
              },
            },
          ],
        }),

        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) =>
              allContentfulBlogPost.edges.map((edge) => ({
                title: edge.node.title,
                author: site.siteMetadata.authorEmail,
                description: edge.node.subtitle,
                date: edge.node.updatedAt,
                url: `${site.siteMetadata.siteUrl}/blog/${edge.node.slug}`,
                guid: edge.node.updatedAt,
                enclosure: {
                  url: `https:${edge.node.image.file.url}`,
                },
                custom_elements: [
                  {
                    'webfeeds:featuredImage': `https:${edge.node.image.file.url}`,
                  },
                  {
                    'content:encoded': edge.node.body.rssHtml,
                  },
                ],
              })),

            query: `
              {
                allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
                  edges {
                    node {
                      title
                      subtitle
                      slug
                      updatedAt
                      body {
                        rssHtml
                      }
                      image {
                        file {
                          url
                        }
                      }
                    }
                  }
                }
              }
            `,

            output: '/rss.xml',
            title: 'Gimmix WMB: RSS Feeds',
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/',
            // optional configuration to specify external rss feed, such as feedburner
            link: 'https://feeds.feedburner.com/GimmixWMB',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gimmix.nl',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: sass,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        base64Width: 20,
        forceBase64Format: 'webp', // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === 'MOZJPEG',
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 250,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-plugin-smoothscroll',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: '#656565',
        // Disable the loading spinner.
        showSpinner: true,
        minimum: 0.1,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
                context {
                  updatedAt
                }
              }
            }
          }
      }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map((edge) => ({
            url: `${site.siteMetadata.siteUrl}${edge.node.path}`,
            changefreq: 'daily',
            priority: 0.7,
            lastmodISO: edge.node.context.updatedAt,
          })),
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gimmix',
        short_name: 'Gimmix',
        description: 'Wij bouwen websites & webapps met oog voor detail.',
        start_url: '/',
        background_color: '#a9a9a9',
        lang: 'nl',
        theme_color: '#FFCC00',
        display: 'standalone',
        icon: 'src/img/Gimmix-applogo.png',
        icon_options: {
          purpose: 'any maskable',
        },
        crossOrigin: 'use-credentials',
      },
    },
    'gatsby-plugin-offline',
  ],
};
