/** Use this plugin to add div.section around h2s and h3s.
Add to the batfish.config.js file as a rehypePlugin
within the jsxtremeMarkdownOptions object.
See https://github.com/mapbox/batfish/blob/master/docs/configuration.md#jsxtrememarkdownoptions */

const wrap = require('rehype-sectionize-headings');

module.exports = () => {
  return transformer;

  function transformer(tree) {
    return wrap.default(tree, {
      h2: {
        sectionClass: ['section', 'section-h2']
      },
      h3: {
        sectionClass: ['section', 'section-h3']
      }
    });
  }
};
