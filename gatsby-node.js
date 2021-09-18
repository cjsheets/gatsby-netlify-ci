const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const stepsTemplate = path.resolve('src/templates/steps.jsx');
  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
            slug
            order
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.nodes.forEach(({ frontmatter }) => {
    createPage({
      path: `${frontmatter.slug}`,
      component: stepsTemplate,
      context: {
        slug: frontmatter.slug,
        title: frontmatter.title,
      },
    });
  });
};
