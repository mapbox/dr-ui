const { buildNavigation } = require('./navigation');
const { buildTopics } = require('./topics');
const { buildSplitPages } = require('./split-pages');
const { formatTopics } = require('./format-topics');

module.exports = {
  buildNavigation,
  buildTopics,
  buildSplitPages,
  formatTopics
};
