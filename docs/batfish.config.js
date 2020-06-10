const path = require('path');

module.exports = () => {
  return {
    siteBasePath: '/dr-ui',
    outputDirectory: path.join(__dirname, '_site/'),
    temporaryDirectory: path.join(__dirname, '_site_tmp/'),
    stylesheets: [
      require.resolve('@mapbox/mbx-assembly/dist/assembly.css'),
      require.resolve('../src/css/docs-prose.css'),
      require.resolve('../src/css/prism.css'),
      path.join(__dirname, './src/css/site.css')
    ]
  };
};
