'use strict';

const path = require('path');
const pageShellDir = path.join(__dirname, './vendor/docs-page-shell');
module.exports = () => {
  const config = {
    siteOrigin: 'https://docs.mapbox.com',
    siteBasePath: '/demo',
    productionDevtool: 'source-map',
    pagesDirectory: path.join(__dirname, 'src/pages/'),
    outputDirectory: path.join(__dirname, '_site/'),
    temporaryDirectory: path.join(__dirname, '_site_tmp/'),
    stylesheets: [
      require.resolve('@mapbox/mbx-assembly/dist/assembly.css'),
      path.join(pageShellDir, 'page-shell-styles.css'),
      path.join(__dirname, './src/css/site.css'),
      require.resolve('../pkg/css/docs-prose.css'),
      require.resolve('../pkg/css/prism.css')
    ],
    applicationWrapperPath: path.join(
      __dirname,
      'src/components/application-wrapper.js'
    ),
    inlineJs: [{ filename: path.join(pageShellDir, 'page-shell-script.js') }],
    jsxtremeMarkdownOptions: {
      wrapper: path.join(
        __dirname,
        'src/components/markdown-page-shell.js'
      ),
      rehypePlugins: [
        require('rehype-slug'),
        require('@mapbox/rehype-prism'),
        require('../pkg/plugins/add-links-to-headings'),
        require('../pkg/plugins/create-sections'),
        require('../pkg/plugins/make-table-scroll')
      ]
    },
    devBrowserslist: false,
    babelInclude: ['mimic-fn', 'debounce-fn'],
    dataSelectors: {
      listSubFolders: data => {
        const folders = data.pages.filter(
          file => file.path.split(path.sep).length === 4
        );
        return folders;
      },
      orderedPages: data => {
        // get all pages and the meta we need to process
        const pages = data.pages.map(p => ({
          title: p.frontMatter.title,
          description: p.frontMatter.description,
          path: p.path,
          order: p.frontMatter.order || undefined,
          navOrder: p.frontMatter.navOrder || undefined,
          layout: p.frontMatter.layout || undefined,
          topic: p.frontMatter.topic || undefined,
          thumbnail: p.frontMatter.thumbnail || undefined
        }));
        // get top level nav items
        const navItems = pages
          .filter(p => p.navOrder)
          .sort((a, b) => parseFloat(a.navOrder) - parseFloat(b.navOrder));
        // add second level items
        const items = navItems.reduce((obj, parent) => {
          const children = pages.filter(page =>
            page.path.startsWith(parent.path)
          );

          const topics = [
            ...new Set(
              children.reduce((arr, page) => {
                if (page.topic) arr = arr.concat(page.topic);
                return arr;
              }, [])
            )
          ];

          obj[parent.path] = {
            title: parent.title,
            description: parent.description,
            order: parent.order,
            navOrder: parent.navOrder,
            path: parent.path,
            layout: parent.layout,
            topics: topics,
            pages: children
              .reduce((arr, child) => {
                // if parent layout is accordion, set childen layout to accordion
                if (parent.layout === 'accordion') {
                  child.layout = parent.layout;
                }
                arr = arr.concat(child);
                return arr;
              }, [])
              .sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
          };
          return obj;
        }, {});
        return items;
      }
    }
  };
  return config;
};
