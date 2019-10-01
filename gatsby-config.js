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
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/data/img`, name: "images" },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/data/`, name: "data" },
    },
    `gatsby-transformer-json`,
  ],
}
