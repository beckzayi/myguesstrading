module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Playfair Display',
          'Fira Sans'
        ]
      }
    }
  ],
  siteMetadata: {
    title: 'My Guess Trading',
    description: 'A subscription service providing daily options trading signals'
  }
};
