var fontFamilyies = []
try {
  fontConfig = require("./static/fonts/font-config.json").fonts
} catch (e) {}

// Add any manual font family names to this array
const fontFamilies = [...new Set(fontConfig.map(font => font.postScriptName))]
module.exports = {
  siteMetadata: {
    title: "Devular Gatsby Starter",
    description: "Preconfigured with Theme UI and MDX Blog Loading",
    author: "Devular",
    social: [
      { name: "Twitter", url: "https://twitter.com/devular" },
      { name: "Github", url: "https://github.com/devular" },
    ],
    postsPrefix: "posts",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: fontFamilies,
          urls: ["/fonts/auto-fonts.css", "/fonts/manual-fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-shiki`,
            options: {
              theme: "monokai",
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
