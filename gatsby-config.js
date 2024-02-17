/**
    https://www.gatsbyjs.org/docs/gatsby-config/
 */

const superSiteUrl = process.env.URL || 'https://menefex.nl';

require('dotenv').config({
  // path: `.env.${process.env.NODE_ENV}`,
  path: '.env',
});

module.exports = {
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true,
    DETECT_NODE_MUTATIONS: false,
    // PARTIAL_HYDRATION: true,
  },
  siteMetadata: {
    siteUrl: 'https://menefex.nl',

    title: 'Menefex',
    company: 'Menefex Webmediabedrijf',
    description:
      'Bij Menefex bouwen wij websites, webshops & webapplicaties met oog voor detail.',

    bizTel: '+31611054318',
    bizEmail: 'info@menefex.nl',

    author: 'Michael Fransman',
    authorImage: '/MichaelFransman.jpeg',
    authorEmail: 'michaelfransman@menefex.nl',

    socialHandle: '@MenefexWMB',

    image: '/Menefex-scl.png',
    favicon: '/Menefex-favi.png',

    priceImage: '/Menefex-price.jpeg',
  },
  plugins: [
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

    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://menefex.nl',
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
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project-images',
        path: `${__dirname}/public/project-images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {
          placeholder: 'blurred',
          formats: ['auto', 'webp'],
          backgroundColor: 'transparent',
          quality: 100,
        },
        // Set to false to allow builds to continue on image errors
        failOn: 'warning',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'menefex',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: '#595858',
        // Disable the loading spinner.
        showSpinner: true,
        minimum: 0.1,
      },
    },
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
          title: 'Menefex WMB: RSS Feeds',
          description: site.siteMetadata.description,
          site_url: site.siteMetadata.siteUrl,
          feed_url: `${site.siteMetadata.siteUrl}/rss.xml`,
          image_url: `${site.siteMetadata.siteUrl}/Menefex-favi.png`,
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
                  image: `${site.siteMetadata.siteUrl}/Menefex-scl.png`,
                },
              },
            },
            {
              'webfeeds:icon': `${site.siteMetadata.siteUrl}/Menefex-favi.png`,
            },
            {
              'webfeeds:logo': `${site.siteMetadata.siteUrl}/Menefex-favi.png`,
            },
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
                id: edge.node.id,
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
                allContentfulBlogPost(sort: {publishedDate: DESC}) {
                  edges {
                    node {
                      id
                      title
                      subtitle
                      slug
                      updatedAt
                      body {
                        rssHtml
                        raw
                        references {
                          ... on ContentfulAsset {
                            contentful_id
                            __typename
                          }
                        }
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
            title: 'Menefex WMB: RSS Feeds',
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/',
            // optional configuration to specify external rss feed, such as feedburner
            link: 'https://feeds.feedburner.com/MenefexWMB',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'menefex.nl',
        sitemap: 'https://menefex.nl/sitemap-index.xml',
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
              nodes {
                path
                pageContext
              }
            }
          }
        `,

        resolveSiteUrl: () => superSiteUrl,
        resolvePages: ({ allSitePage }) => allSitePage.nodes,
        serialize: ({ path, pageContext }) => ({
          url: path,
          changefreq: 'daily',
          priority: 0.7,
          lastmod: pageContext?.updatedAt || null,
        }),
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Menefex Webmediabedrijf',
        short_name: 'Menefex',
        description: 'Wij bouwen websites & webapps met oog voor detail.',
        start_url: '/',
        background_color: '#a9a9a9',
        lang: 'nl',
        theme_color: '#FFCC00',
        display: 'standalone',
        icon: 'src/images/Menefex-icon.png',
        // icon_options: {
        //   purpose: 'any maskable',
        // },
        crossOrigin: 'use-credentials',
      },
    },
    'gatsby-plugin-offline',
  ],
};
