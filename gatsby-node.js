/* eslint-disable no-shadow */
const path = require('path');

const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');

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

// --------------------------------------- //

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
      },
    });
  });

  //  ! MD locale post weergeven
  // module.exports.onCreateNode = ({ node, actions }) => {
  //   const { createNode, createNodeField } = actions

  //   if (node.internal.type === "MarkdownRemark") {
  //  ! geeft de md files aan
  //     const slug = path.basename(node.fileAbsolutePath, ".md")

  //  ! geeft alleen slugnaam weer voor md files
  //     createNodeField({
  //       node,
  //       name: "slug",
  //       value: slug,
  //     })
  //   }
  // }

  //  ! creeer nieuwe pagina's met MD
  // module.exports.createPages = async ({ graphql, actions }) => {
  //   const { createPage } = actions
  //   const blogTemplate = path.resolve("./src/templates/blogs.js")
  //   const res = await graphql(`
  //     query {
  //       allMarkdownRemark {
  //         edges {
  //           node {
  //             fields {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)

  //  ! wat moet createPage doen? met MD
  // res.data.allMarkdownRemark.edges.forEach(edge => {
  //   createPage({
  //     component: blogTemplate,
  //     path: `/blogs/${edge.node.fields.slug}`,
  //     context: {
  //       slug: edge.node.fields.slug,
  //     },
  //   })
  // })
};
