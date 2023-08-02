/** Use this plugin to add links to all headings in
    markdown files in a Batfish site.
    Add to the batfish.config.js file as a rehypePlugin
    within the jsxtremeMarkdownOptions object.
    See https://github.com/mapbox/batfish/blob/master/docs/configuration.md#jsxtrememarkdownoptions */

const visit = require('unist-util-visit');

// Since this is a backend plugin, we can use Set
const headings = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']); // eslint-disable-line es/no-set

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
    headingNode.properties.className = 'anchor'; // required by OnThisPage component to identify headings
    headingNode.children = [linkNode];
  }
};