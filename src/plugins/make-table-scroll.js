/** Use this plugin to wrap a scrollable div around tables.
    Add to the batfish.config.js file as a rehypePlugin
    within the jsxtremeMarkdownOptions object.
    See https://github.com/mapbox/batfish/blob/master/docs/configuration.md#jsxtrememarkdownoptions */

const visit = require('unist-util-visit');
const h = require('hastscript');

module.exports = () => {
  return transformer;

  function transformer(tree) {
    visit(tree, 'element', visitor);
  }

  function visitor(node, index, parent) {
    if (node.tagName && node.tagName === 'table') {
      parent.children[index] = h('div.overflow-auto.mb18', node);
    }
  }
};
