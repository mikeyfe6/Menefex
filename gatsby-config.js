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
            {
              'webfeeds:analytics': {
                _attr: {
                  id: 'G-XWVP0BZJLR',
                  engine: 'GoogleAnalytics',
                },
              },
            },
          ],
        }),
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) =>
              allContentfulBlogPost.edges.map((edge) => {
                const { siteUrl } = site.siteMetadata;
                const {
                  contentful_id,
                  title,
                  subtitle,
                  slug,
                  createdAt,
                  body,
                  image,
                  topics,
                } = edge.node;

                return {
                  title: title,
                  description: subtitle,
                  categories: topics.map((topic) => topic.name),
                  date: createdAt,
                  url: `${siteUrl}/blog/${slug}`,
                  guid: contentful_id,
                  lat: 52.30994007862562,
                  long: 4.974422834381031,
                  enclosure: {
                    url: `https:${image.file.url}`,
                  },
                  custom_elements: [
                    {
                      'webfeeds:featuredImage': `https:${image.file.url}`,
                    },
                    {
                      'content:encoded': body.rssHtml,
                    },
                  ],
                };
              }),
            query: `
              {
                allContentfulBlogPost(sort: {createdAt: DESC}) {
                  edges {
                    node {
                      contentful_id
                      title
                      subtitle
                      slug
                      createdAt
                      body {
                        rssHtml
                        references {
                          ... on ContentfulAsset {
                            contentful_id
                            __typename
                          }
                          ... on ContentfulBlogPost {
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
                      topics {
                        name
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Menefex WMB: RSS Feeds',
            link: 'https://feeds.feedburner.com/MenefexWMB',
            match: '^/blog/',
            language: 'nl-NL',
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
              }
            }
            allContentfulBlogPost {
              nodes {
                slug
                updatedAt
              }
            }
          }
        `,
        resolveSiteUrl: () => superSiteUrl,
        resolvePages: ({ allSitePage, allContentfulBlogPost }) => {
          const blogPostsMap = allContentfulBlogPost.nodes.reduce(
            (acc, post) => {
              const { slug, updatedAt } = post;
              acc[`/blog/${slug}/`] = { path: `/blog/${slug}/`, updatedAt };
              return acc;
            },
            {},
          );

          const sitePagesMap = allSitePage.nodes.reduce((acc, page) => {
            acc[page.path] = { path: page.path };
            return acc;
          }, {});

          const pagesMap = { ...sitePagesMap, ...blogPostsMap };

          return Object.values(pagesMap);
        },
        serialize: ({ path, updatedAt }) => ({
          url: path,
          changefreq: 'daily',
          priority: 0.7,
          lastmod: updatedAt,
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
