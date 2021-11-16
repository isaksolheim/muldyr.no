const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://muldyr.no',
    title: 'muldyr.no',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
