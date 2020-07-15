const path = require('path');

const { buildNavigation } = require('../src/helpers/batfish/navigation.js');
const { buildTopics } = require('../src/helpers/batfish/topics.js');

const siteBasePath = '/dr-ui';

module.exports = () => {
  return {
    siteBasePath: siteBasePath,
    outputDirectory: path.join(__dirname, '_site/'),
    temporaryDirectory: path.join(__dirname, '_site_tmp/'),
    stylesheets: [
      require.resolve('@mapbox/mbx-assembly/dist/assembly.css'),
      require.resolve('../src/css/docs-prose.css'),
      require.resolve('../src/css/prism.css'),
      require.resolve('./src/css/site.css')
    ],
    applicationWrapperPath: path.join(__dirname, 'src/components/wrapper.js'),
    jsxtremeMarkdownOptions: {
      wrapper: path.join(__dirname, 'src/components/page-shell.js'),
      rehypePlugins: [
        require('rehype-slug'),
        require('../src/plugins/add-links-to-headings'),
        require('../src/plugins/create-sections'),
        require('../src/plugins/make-table-scroll')
      ]
    },
    dataSelectors: {
      navigation: (data) => buildNavigation(siteBasePath, data),
      topics: (data) => buildTopics(data)
    }
  };
};
