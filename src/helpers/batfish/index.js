const { buildNavigation } = require('./navigation');
const { buildFilters } = require('./filters');
const { buildSplitPages } = require('./split-pages');
const { formatTopics } = require('./format-topics');

module.exports = {
  buildNavigation,
  buildFilters,
  buildSplitPages,
  formatTopics
};
