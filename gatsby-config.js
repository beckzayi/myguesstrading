module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      }
    },
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
