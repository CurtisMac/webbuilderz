/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "WebBuilderz",
    siteUrl: `https://webbuilderz.io`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          "/contact/",
          "/terms-of-use",
          "/acceptable-use-policy/",
          "/privacy-policy/",
          "/cookie-policy/",
        ],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
        serialize: ({ site, allSitePage }) => {
          return allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
            }
          })
        },
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/data/img`, name: "images" },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/data/blog`, name: "blog" },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/data/content/legal`, name: "legal" },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/data/`, name: "data" },
    },
    `gatsby-plugin-netlify-cms-paths`,
    `gatsby-transformer-json`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        plugins: [
          `gatsby-plugin-netlify-cms-paths`,
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              tracedSVG: "true",
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: "›",
              aliases: { sh: "bash" },
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PLHF577",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ],
}
