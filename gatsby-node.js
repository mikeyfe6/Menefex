const path = require("path");
const fs = require("fs").promises;

const puppeteer = require("puppeteer");

const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");
const { BLOCKS, INLINES } = require("@contentful/rich-text-types");

const fetchLastCommitDate = require("./src/utils/fetchLastCommitDate");

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    ContentfulBlogPostBody: {
      rssHtml: {
        type: "String",
        resolve: (source) => {
          const document = JSON.parse(source.raw);
          const options = {
            preserveWhitespace: false,
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const entryId = node.data.target.sys.id;

                const menefexImages = [
                  {
                    id: "7mV6EvJJrv9UThjCKcOuou",
                    url: "//images.ctfassets.net/nn38kx5zm1zj/2iIqFM7QetWndzLPyglJlu/ba6d761b45ea9cadb0408f686cb0c5f4/seomnfx.jpeg",
                    alt: "Call to action",
                  },
                  {
                    id: "2iIqFM7QetWndzLPyglJlu",
                    url: "//images.ctfassets.net/nn38kx5zm1zj/2iIqFM7QetWndzLPyglJlu/ba6d761b45ea9cadb0408f686cb0c5f4/seomnfx.jpeg",
                    alt: "SEO Beschrijving",
                  },
                  {
                    id: "7AnjWCrI6e85kwDRPEIi8l",
                    url: "//images.ctfassets.net/nn38kx5zm1zj/7AnjWCrI6e85kwDRPEIi8l/93811f33d083916a530e892e81574e66/Digital_Transformation.jpg",
                    alt: "SEO The Road 2 Digital Success",
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
                  return "";
                }
              },
              [INLINES.ENTRY_HYPERLINK]: (node) => {
                const entryId = node.data.target.sys.id;
                const siteUrl = "https://www.menefex.nl";

                const menefexFeeds = [
                  {
                    id: "5Tap9uH6wexAo43jcttwx8",
                    slug: "seo-onmisbare-tool",
                  },
                  {
                    id: "19yMVb2hV6xPsivk9T3fQk",
                    slug: "verschillen-webapplicatie-en-website",
                  },
                ];

                const matchedFeed = menefexFeeds.find(
                  (feed) => feed.id === entryId
                );

                if (matchedFeed) {
                  const slug = matchedFeed.slug;
                  const content = node.content
                    .map((content) => content.value)
                    .join("");
                  return `<a href="${siteUrl}/blog/${slug}">${content}</a>`;
                } else {
                  return "";
                }
              },
            },
          };
          return documentToHtmlString(document, options);
        },
      },
    },

    Query: {
      getLastModifiedDate: {
        type: "String",
        args: {
          filePath: "String!",
        },
        resolve: async (_, { filePath }) => {
          if (process.env.NODE_ENV === "production") {
            return await fetchLastCommitDate(filePath);
          } else {
            return null;
          }
        },
      },
    },
  });
};

const captureScreenshot = async (url, filename, delay) => {
  const screenshotDir = path.resolve(__dirname, "public/project-images");
  const screenshotPath = `${screenshotDir}/${filename}.png`;
  const backupScreenshotPath = `${screenshotDir}/${filename}-backup.png`;

  try {
    const browser = await puppeteer.launch({
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-web-security",
        "--disable-features=IsolateOrigins,site-per-process",
        "--ignore-certificate-errors",
      ],
    });

    const page = await browser.newPage();
    await page.setCacheEnabled(false);
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });

    await page.goto(url, { waitUntil: "networkidle2" });
    await new Promise((resolve) => setTimeout(resolve, delay));

    await fs.mkdir(screenshotDir, { recursive: true });

    await page.screenshot({
      path: screenshotPath,
    });

    await fs.copyFile(screenshotPath, backupScreenshotPath);
    console.log(`Screenshot captured and backed up for ${url}`);

    await browser.close();
  } catch (error) {
    console.error(`Error capturing screenshot for ${url}:`, error);

    try {
      await fs.access(backupScreenshotPath);
      console.log(`Using backup screenshot for ${url}`);

      await fs.copyFile(backupScreenshotPath, screenshotPath);
    } catch (backupError) {
      console.error(`No backup screenshot available for ${url}:`, backupError);
    }
  }
};

exports.onPostBuild = async () => {
  await captureScreenshot("https://prio-zorg.nl", "priozorg", 2000);
  await captureScreenshot("https://keeptreal.nl", "keeptreal", 2000);
  await captureScreenshot("https://blackharmony.nl", "blackharmony", 0);
  await captureScreenshot("https://eternitydrum.com", "eternitydrum", 2000);
  await captureScreenshot("https://kn-acdig.com", "kn-acdig", 0);
  await captureScreenshot("https://dsmelodies.com", "dsmelodies", 0);
  await captureScreenshot("https://afrodiasphere.com", "afrodiasphere", 2000);
};

exports.onPreBootstrap = exports.onPostBuild;

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/templates/blogtemplate.jsx");
  const topicTemplate = path.resolve("./src/templates/topictemplate.jsx");

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
              title
              gatsbyImageData
              file {
                url
              }
            }
            createdAt
            updatedAt
            body {
              raw
              references {
                ... on ContentfulAsset {
                  contentful_id
                  __typename
                  title
                  gatsbyImageData(layout: FULL_WIDTH)
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
                  image {
                    title
                    gatsbyImageData
                  }
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
                  gatsbyImageData
                }
              }
            }
            node_locale
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
                gatsbyImageData
              }
              createdAt
            }
            node_locale
          }
        }
      }
    }
  `);

  const blogPostsByLanguage = res.data.allContentfulBlogPost.edges.reduce(
    (acc, edge) => {
      const { node } = edge;
      const lang = node.node_locale;

      if (!acc[node.slug]) {
        acc[node.slug] = {
          nlContent: null,
          enContent: null,
        };
      }

      if (lang === "nl") {
        acc[node.slug].nlContent = node;
      } else if (lang === "en") {
        acc[node.slug].enContent = node;
      }

      return acc;
    },
    {}
  );

  Object.keys(blogPostsByLanguage).forEach((slug) => {
    const { nlContent, enContent } = blogPostsByLanguage[slug];

    createPage({
      component: blogTemplate,
      path: `/blog/${slug}/`,
      context: {
        nlContent: {
          contentful_id: nlContent ? nlContent.contentful_id : "",
          title: nlContent ? nlContent.title : "",
          subtitle: nlContent ? nlContent.subtitle : "",
          image: nlContent ? nlContent.image : {},
          body: nlContent ? nlContent.body : {},
          slug: nlContent ? nlContent.slug : "",
          updatedPost: nlContent ? nlContent.updatedAt : "",
          publishedPost: nlContent ? nlContent.createdAt : "",
          author: nlContent ? nlContent.author : "",
          topics: nlContent ? nlContent.topics : [],
          keywords: nlContent ? nlContent.keywords : [],
          subtitle: nlContent ? nlContent.subtitle : "",
        },
        enContent: {
          contentful_id: enContent ? enContent.contentful_id : "",
          title: enContent ? enContent.title : "",
          subtitle: enContent ? enContent.subtitle : "",
          image: enContent ? enContent.image : {},
          body: enContent ? enContent.body : {},
          slug: enContent ? enContent.slug : "",
          updatedPost: enContent ? enContent.updatedAt : "",
          publishedPost: enContent ? enContent.createdAt : "",
          author: enContent ? enContent.author : "",
          topics: enContent ? enContent.topics : [],
          keywords: enContent ? enContent.keywords : [],
          subtitle: enContent ? enContent.subtitle : "",
        },
      },
    });
  });

  const topicsByLanguage = res.data.allContentfulTopic.edges.reduce(
    (acc, edge) => {
      const { node } = edge;
      const lang = node.node_locale;

      if (!acc[node.slug]) {
        acc[node.slug] = {
          nlContent: null,
          enContent: null,
        };
      }

      if (lang === "nl") {
        acc[node.slug].nlContent = node;
      } else if (lang === "en") {
        acc[node.slug].enContent = node;
      }

      return acc;
    },
    {}
  );

  Object.keys(topicsByLanguage).forEach((slug) => {
    const { nlContent, enContent } = topicsByLanguage[slug];

    createPage({
      component: topicTemplate,
      path: `/topics/${slug}/`,
      context: {
        nlContent: {
          topicPosts: nlContent ? nlContent.blog_post : [],
          name: nlContent ? nlContent.name : "",
          bdcolor: nlContent ? nlContent.bdcolor : "",
          description: nlContent ? nlContent.description.description : "",
          slug: nlContent ? nlContent.slug : "",
          title: nlContent ? nlContent.title : "",
        },
        enContent: {
          topicPosts: enContent ? enContent.blog_post : [],
          name: enContent ? enContent.name : "",
          bdcolor: enContent ? enContent.bdcolor : "",
          description: enContent ? enContent.description.description : "",
          slug: enContent ? enContent.slug : "",
          title: enContent ? enContent.title : "",
        },
      },
    });
  });
};
