const rc = require('@mapbox/remark-config-docs');
const config = {
  siteBasePath: 'dr-ui',
  siteOrigin: 'https://mapbox.github.com',
  pages: 'docs/src/pages/',
  constants: 'docs/src/constants.json',
  ignoreLinks: 'conf/ignore-links.json'
};

exports.plugins = [...rc.plugins(config)];
