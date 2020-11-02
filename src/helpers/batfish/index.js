const { buildNavigation } = require('./navigation');
const { buildItems } = require('./topics');
const { buildSplitPages } = require('./split-pages');
const { formatTopics } = require('./format-topics');

module.exports = {
  buildNavigation,
  buildItems,
  buildSplitPages,
  formatTopics
};
