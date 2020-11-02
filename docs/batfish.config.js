const path = require('path');
const {
  buildNavigation,
  buildItems,
  buildSplitPages,
  formatTopics
} = require('../src/helpers/batfish/index.js');
const relatedJson = require('../src/helpers/batfish/__tests__/fixtures/related-mts.json');

const siteBasePath = '/dr-ui';

const appendTopics = formatTopics('/dr-ui', 'help', relatedJson);

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
      getWrapper: (resource) => {
        if (/\/sections\//.test(resource)) {
          return path.join(__dirname, './src/components/split-page-shell.js');
        } else {
          return path.join(__dirname, 'src/components/page-shell.js');
        }
      },
      rehypePlugins: [
        require('rehype-slug'),
        require('@mapbox/rehype-prism'),
        require('../src/plugins/add-links-to-headings'),
        require('../src/plugins/make-table-scroll')
      ]
    },
    dataSelectors: {
      navigation: (data) => buildNavigation(siteBasePath, data),
      topics: (data) =>
        buildItems({ data, append: appendTopics, itemType: 'topics' }),
      level: (data) => buildItems({ data, itemType: 'level' }),
      language: (data) => buildItems({ data, itemType: 'language' }),
      products: (data) => buildItems({ data, itemType: 'products' }),
      videos: (data) => buildItems({ data, itemType: 'videos' }),
      splitPages: (data) => buildSplitPages(data),
      sync: (data) => {
        /* syncs data to fixtures to properly test batfish selectors */
        const sortBy = (key) => {
          return (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
        };
        // cleans up file path and sorts by filepath to keep a consistent order
        const pages = data.pages
          .map((page) => ({
            ...page,
            filePath: `.${page.filePath.split('dr-ui')[1]}`
          }))
          .sort(sortBy('filePath'));
        require('fs').writeFileSync(
          './src/helpers/batfish/__tests__/fixtures/data.json',
          JSON.stringify({ pages: pages }, null, 2)
        );
      }
    }
  };
};
