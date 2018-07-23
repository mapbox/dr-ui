'use strict';

const visit = require('unist-util-visit');

const headings = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

module.exports = () => {
  return transformer;

  function transformer(tree) {
    visit(tree, visitor);
  }

  function visitor(node) {
    if (node.tagName && headings.has(node.tagName)) {
      linkifyHeading(node);
    }
  }

  function linkifyHeading(headingNode) {
    const headingId = headingNode.properties.id;
    const linkNode = {
      type: 'element',
      tagName: 'a',
      properties: {
        href: `#${headingId}`,
        className: 'unprose color-blue-on-hover'
      },
      children: headingNode.children
    };
    headingNode.children = [linkNode];
  }
};
