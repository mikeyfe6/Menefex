/* eslint-disable no-shadow */
const path = require('path');

const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');

// const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

// exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
//   console.log(`Webpack stage ${stage}`);
//   const config = getConfig();
//   const minimizer = config?.optimization?.minimizer;
//   if (stage === 'build-javacsript' && minimizer) {
//     console.log('Override CssMinimizerWebpackPlugin');
//     const indexOfCssMinimizerPlugin = minimizer.findIndex(
//       (minimizer) =>
//         minimizer.constructor.name === CssMinimizerWebpackPlugin.name,
//     );
//     if (indexOfCssMinimizerPlugin > -1) {
//       const currentCssMinimizerPlugin = minimizer[indexOfCssMinimizerPlugin];
//       minimizer[indexOfCssMinimizerPlugin] = new CssMinimizerWebpackPlugin({
//         test: /\.css(\?.*)?$/i,
//         warningsFilter: () => false,
//         parallel: currentCssMinimizerPlugin.options.parallel,
//         minimizerOptions: currentCssMinimizerPlugin.options.minimizerOptions,
//       });
//       actions.replaceWebpackPlugin(config);
//     }
//   }
// };

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    contentfulBlogPostBody: {
      rssHtml: {
        type: 'String',
        resolve: (source) => documentToHtmlString(source),
      },
    },
  });
};

// --------------------------------------- //

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blogs.jsx');
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
            updatedAt(formatString: "YYYY-MM-DD", locale: "nl")
          }
        }
      }
    }
  `);

  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}/`,
      context: {
        slug: edge.node.slug,
        updatedAt: edge.node.updatedAt,
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
