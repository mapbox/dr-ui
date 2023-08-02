const {
  buildNavigation
} = require('./navigation');
const {
  buildFilters
} = require('./filters');
const {
  buildSplitPages
} = require('./split-pages');
const prepareSitemap = require('./sitemap');
module.exports = {
  buildNavigation,
  buildFilters,
  buildSplitPages,
  prepareSitemap
};