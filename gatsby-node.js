const path = require('path');
const fs = require('fs').promises;
const React = require('react');

const puppeteer = require('puppeteer');

const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');
const { BLOCKS, INLINES } = require('@contentful/rich-text-types');

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    ContentfulBlogPostBody: {
      rssHtml: {
        type: 'String',
        resolve: (source) => {
          const document = JSON.parse(source.raw);
          const options = {
            preserveWhitespace: false,
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const entryId = node.data.target.sys.id;

                const menefexImages = [
                  {
                    id: '7mV6EvJJrv9UThjCKcOuou',
                    url: '//images.ctfassets.net/nn38kx5zm1zj/2iIqFM7QetWndzLPyglJlu/ba6d761b45ea9cadb0408f686cb0c5f4/seomnfx.jpeg',
                    alt: 'Call to action',
                  },
                  {
                    id: '2iIqFM7QetWndzLPyglJlu',
                    url: '//images.ctfassets.net/nn38kx5zm1zj/2iIqFM7QetWndzLPyglJlu/ba6d761b45ea9cadb0408f686cb0c5f4/seomnfx.jpeg',
                    alt: 'SEO Beschrijving',
                  },
                  {
                    id: '7AnjWCrI6e85kwDRPEIi8l',
                    url: '//images.ctfassets.net/nn38kx5zm1zj/7AnjWCrI6e85kwDRPEIi8l/93811f33d083916a530e892e81574e66/Digital_Transformation.jpg',
                    alt: 'SEO The Road 2 Digital Success',
                  },
                ];

                const matchedAsset = menefexImages.find(
                  (asset) => asset.id === entryId
                );

                if (matchedAsset) {
                  const url = matchedAsset.url;
                  const alt = matchedAsset.alt;

                  return `<img src="https:${url}" alt="${alt}" style="height: 100%; width: 100%;">`;
                } else {
                  return '';
                }
              },
              [INLINES.ENTRY_HYPERLINK]: (node) => {
                const entryId = node.data.target.sys.id;
                const siteUrl = 'https://www.menefex.nl';

                const menefexFeeds = [
                  { id: '5Tap9uH6wexAo43jcttwx8', slug: 'seo-onmisbare-tool' },
                  {
                    id: '19yMVb2hV6xPsivk9T3fQk',
                    slug: 'verschillen-webapplicatie-en-website',
                  },
                ];

                const matchedFeed = menefexFeeds.find(
                  (feed) => feed.id === entryId
                );

                if (matchedFeed) {
                  const slug = matchedFeed.slug;
                  const content = node.content
                    .map((content) => content.value)
                    .join('');
                  return `<a href="${siteUrl}/blog/${slug}">${content}</a>`;
                } else {
                  return '';
                }
              },
            },
          };
          return documentToHtmlString(document, options);
        },
      },
    },
  });
};

const captureScreenshot = async (url, filename, delay) => {
  try {
    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process',
      ],
    });
    const page = await browser.newPage();

    await page.setCacheEnabled(false);

    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });

    await page.goto(url);

    await new Promise((resolve) => setTimeout(resolve, delay));

    await fs.mkdir('./public/project-images', { recursive: true });

    await page.screenshot({
      path: `./public/project-images/${filename}.png`,
    });

    console.log(`Done capturing screenshot for ${url}`);
    await browser.close();
  } catch (error) {
    console.error(`Error capturing screenshot for ${url}:`, error);
  }
};

exports.onPostBuild = async () => {
  await captureScreenshot('https://keeptreal.nl', 'keeptreal', 0);
  await captureScreenshot('https://blackharmony.nl', 'blackharmony', 0);
  await captureScreenshot('https://eternitydrum.com', 'eternitydrum', 0);
  await captureScreenshot('https://kn-acdig.com', 'kn-acdig', 0);
  await captureScreenshot('https://dsmelodies.com', 'dsmelodies', 0);
  await captureScreenshot('https://afrodiasphere.com', 'afrodiasphere', 3000);
};

exports.onPreBootstrap = async () => {
  await captureScreenshot('https://keeptreal.nl', 'keeptreal', 0);
  await captureScreenshot('https://blackharmony.nl', 'blackharmony', 0);
  await captureScreenshot('https://eternitydrum.com', 'eternitydrum', 0);
  await captureScreenshot('https://kn-acdig.com', 'kn-acdig', 0);
  await captureScreenshot('https://dsmelodies.com', 'dsmelodies', 0);
  await captureScreenshot('https://afrodiasphere.com', 'afrodiasphere', 3000);
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blogtemplate.jsx');
  const topicTemplate = path.resolve('./src/templates/topictemplate.jsx');
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            contentful_id
            subtitle
            slug
            keywords
            author
            image {
              file {
                url
              }
            }
            publishedPost: createdAt(
              formatString: "dddd D MMMM YYYY, HH:mm"
              locale: "nl"
            )
            updatedPost: updatedAt(
              formatString: "dddd D MMMM YYYY, HH:mm"
              locale: "nl"
            )
            publishedSchema: createdAt
            updatedSchema: updatedAt
            body {
              raw
              references {
                ... on ContentfulAsset {
                  contentful_id
                  __typename
                  title
                  file {
                    url
                    details {
                      size
                      image {
                        width
                        height
                      }
                    }
                    fileName
                  }
                }
                ... on ContentfulBlogPost {
                  contentful_id
                  __typename
                  slug
                }
              }
            }
            topics {
              id
              name
              slug
              bdcolor
              blog_post {
                contentful_id
                title
                subtitle
                slug
                image {
                  title
                  gatsbyImageData(
                    width: 300
                    height: 225
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                  )
                }
              }
            }
          }
        }
      }

      allContentfulTopic {
        edges {
          node {
            contentful_id
            name
            slug
            bdcolor
            description {
              description
            }
            blog_post {
              contentful_id
              id
              title
              slug
              subtitle
              author
              image {
                title
                file {
                  url
                }
              }
              createdAt(formatString: "dddd D MMMM YYYY", locale: "nl")
            }
          }
        }
      }
    }
  `);

  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}/`,
      ownerNodeId: edge.node.contentful_id,
      context: {
        slug: edge.node.slug,
        updatedPost: edge.node.updatedPost,
        publishedPost: edge.node.publishedPost,
        title: edge.node.title,
        subtitle: edge.node.subtitle,
        keywords: edge.node.keywords,
        author: edge.node.author,
        image: edge.node.image,
        body: edge.node.body,
        topics: edge.node.topics,
        updatedSchema: edge.node.updatedSchema,
        publishedSchema: edge.node.publishedSchema,
      },
    });
  });

  res.data.allContentfulTopic.edges.forEach((edge) => {
    createPage({
      component: topicTemplate,
      path: `/topics/${edge.node.slug}/`,
      ownerNodeId: edge.node.contentful_id,
      context: {
        topicPosts: edge.node.blog_post,
        name: edge.node.name,
        bdcolor: edge.node.bdcolor,
        description: edge.node.description.description,
        slug: edge.node.slug,
        title: edge.node.title,
      },
    });
  });
};
