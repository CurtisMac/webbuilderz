/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "WebBuilderz",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/data/img`, name: "images" },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/data/`, name: "data" },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/data/content`, name: "content" },
    },
    `gatsby-plugin-netlify-cms-paths`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        plugins: [`gatsby-plugin-netlify-cms-paths`],
      },
    },
  ],
}
