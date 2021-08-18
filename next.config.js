const withImages = require('next-images');

module.exports = withImages({
  target: 'serverless',
  cssModules: true,
  esModule: true,
  images: {
    domains: ['fontmeme.com'],
  },
});
