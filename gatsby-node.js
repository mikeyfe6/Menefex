const path = require('path');
const fs = require('fs').promises;

const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');

const puppeteer = require('puppeteer');

const captureScreenshot = async (url, filename, delay) => {
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process',
      ],
    });
    const page = await browser.newPage();

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
  await captureScreenshot('https://blackharmony.nl', 'blackharmony', 0);
  await captureScreenshot('https://eternitydrum.com', 'eternitydrum', 0);
  await captureScreenshot('https://kn-acdig.com', 'kn-acdig', 0);
  await captureScreenshot('https://dsmelodies.com', 'dsmelodies', 0);
  await captureScreenshot('https://afrodiasphere.com', 'afrodiasphere', 3000);
};

exports.onPreBootstrap = async () => {
  await captureScreenshot('https://blackharmony.nl', 'blackharmony', 0);
  await captureScreenshot('https://eternitydrum.com', 'eternitydrum', 0);
  await captureScreenshot('https://kn-acdig.com', 'kn-acdig', 0);
  await captureScreenshot('https://dsmelodies.com', 'dsmelodies', 0);
  await captureScreenshot('https://afrodiasphere.com', 'afrodiasphere', 3000);
};

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    ContentfulBlogPostBody: {
      rssHtml: {
        type: 'String',
        resolve: (source) => documentToHtmlString(JSON.parse(source.raw)),
      },
    },
  });
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
            contentful_id
            slug
            updatedAt(formatString: "YYYY-MM-DD", locale: "nl")
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
              publishedDate(formatString: "dddd D MMMM YYYY", locale: "nl")
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
        updatedAt: edge.node.updatedAt,
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
      },
    });
  });
};
