/**
    https://www.gatsbyjs.org/docs/gatsby-config/
 */

const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

module.exports = {
  siteMetadata: {
    siteUrl: `https://gimmix.nl`,
    url: 'https://gimmix.nl',
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-120057209-5',
        head: true,
        respectDNT: true,
        defer: false,
        cookieDomain: 'gimmix.nl',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-5X6VS2L',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: 'dataLayer',
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          // trackingId: 'UA-120057209-5', // leave empty if you want to disable the tracker
          // cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        googleTagManager: {
          // trackingId: 'GTM-5X6VS2L', // leave empty if you want to disable the tracker
          // cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
          defaultDataLayer: { platform: 'gatsby' },
        },
        facebookPixel: {
          pixelId: '388358162140938', // leave empty if you want to disable the tracker
          // cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production'],
      },
    },

    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
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
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              return allContentfulBlogPost.edges.map((edge) => {
                return {
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
                      // image: [
                      //   {
                      //     url: `https:${edge.node.image.file.url}`,
                      //   },
                      //   { title: edge.node.title },
                      //   {
                      //     link: `${site.siteMetadata.siteUrl}/blog/${edge.node.slug}`,
                      //   },
                      // ],
                      'webfeeds:featuredImage': `https:${edge.node.image.file.url}`,
                    },
                    {
                      'content:encoded': edge.node.body.rssHtml,
                    },
                  ],
                };
              });
            },

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
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://gimmix.nl`,
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
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
        toFormat: `WEBP`,
      },
    },
    `gatsby-transformer-sharp`,
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
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#FFCC00`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
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
          allSitePage.edges.map((edge) => {
            return {
              url: `${site.siteMetadata.siteUrl}${edge.node.path}`,
              changefreq: `daily`,
              priority: 0.7,
              lastmodISO: edge.node.context.updatedAt,
            };
          }),
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gimmix`,
        short_name: `Gimmix`,
        description: `Wij bouwen websites & webapps met oog voor detail.`,
        start_url: `/`,
        background_color: `#a9a9a9`,
        lang: `nl`,
        theme_color: `#FFCC00`,
        display: `standalone`,
        icon: 'src/img/Gimmix-applogo.png',
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`,
  ],
};
