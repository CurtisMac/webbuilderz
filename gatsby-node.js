const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const legal = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "legal" } }) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)
  legal.data.allFile.edges.forEach(({ node }, i) => {
    createPage({
      path: node.childMarkdownRemark.fields.slug,
      component: path.resolve(`./src/templates/legalPages.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.childMarkdownRemark.fields.slug,
      },
    })
  })
  const blogPosts = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)
  blogPosts.data.allFile.edges.forEach(({ node }) => {
    const url = `/blog${node.childMarkdownRemark.fields.slug}`
    createPage({
      path: url,
      component: path.resolve(`./src/templates/blogPosts.js`),
      context: {
        slug: node.childMarkdownRemark.fields.slug,
      },
    })
  })
}
