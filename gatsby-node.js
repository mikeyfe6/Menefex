const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blogs.jsx');
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
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
