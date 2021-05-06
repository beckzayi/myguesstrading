module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Playfair Display\:300,400,700',
          'Fira Sans\:300,400,700'
        ],
        display: 'swap'
      }
    }
  ],
  siteMetadata: {
    title: 'My Guess Trading',
    description: 'A subscription service providing daily options trading signals'
  }
};
