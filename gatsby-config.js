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
    description: 'Wij bouwen websites & webapps bouwen met oog voor detail.',
    twitterUsername: '@GimmixWMB',
    email: 'info@gimmix.nl',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-120057209-5',
        head: true,
        anonymize: true,
        respectDNT: true,
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
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
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
                email
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,

        setup: ({ query: { site } }, options) => ({
          ...options,
          title: "Gimmix' RSS Feed",
          description: site.siteMetadata.description,
          site_url: site.siteMetadata.siteUrl,
          feed_url: `${site.siteMetadata.siteUrl}/rss.xml`,
          image_url: 'https://i.postimg.cc/8PY02mwS/Gx-FAVICON.png',
          webMaster: `${site.siteMetadata.author} ${site.siteMetadata.email}`,
          managingEditor: site.siteMetadata.author,
          copyright: `${new Date().getFullYear()} ${site.siteMetadata.title}`,
          language: 'nl',
          generator: 'GatsbyJS',
          custom_namespaces: {},
          custom_elements: [{}],
        }),

        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              return allContentfulBlogPost.edges.map((edge) => {
                return {
                  title: edge.node.title,
                  author: site.siteMetadata.author,
                  description: edge.node.subtitle,
                  date: edge.node.publishedDate,
                  url: `${site.siteMetadata.siteUrl}/blog/${edge.node.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/blog/${edge.node.slug}`,
                  custom_elements: [
                    {
                      'content:encoded': JSON.stringify(edge.node.body.json),
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
                      publishedDate
                      body {
                        json
                      }
                    }
                  }
                }
              }
            `,

            output: '/rss.xml',
            title: "Gimmix' RSS Feed",
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
              lastmod: edge.node.context.updatedAt,
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
        description: `Websites & webapps bouwen met gevoel voor detail`,
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
