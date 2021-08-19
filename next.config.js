const withImages = require('next-images');
const optimizedImages = require('next-optimized-images');

module.exports = withImages({
  target: 'serverless',
  cssModules: true,
  esModule: true,
  optimizedImages,
});
