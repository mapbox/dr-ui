const path = require('path');

module.exports = () => {
  return {
    siteBasePath: '/dr-ui',
    outputDirectory: path.join(__dirname, '_site/'),
    temporaryDirectory: path.join(__dirname, '_site_tmp/')
  };
};
