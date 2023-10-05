const {
  join
} = require('path');
function prepareSitemap(_ref) {
  let {
    pages,
    siteBasePath,
    docsPath = '',
    outputDirectory = '_site'
  } = _ref;
  // find pages with `hideFromSearchEngines: true` in frontMatter or `splitPage: true`
  // we do not want these pages to appear in the sitemap
  return pages.filter(_ref2 => {
    let {
      frontMatter
    } = _ref2;
    return frontMatter.hideFromSearchEngines || frontMatter.splitPage;
  }).map(_ref3 => {
    let {
      path,
      filePath
    } = _ref3;
    // append index.html to files ending in index.js
    if (filePath.endsWith('index.js')) {
      return path.replace(siteBasePath, join(process.cwd(), docsPath, outputDirectory)).replace(/\/$/, '/index.html');
    } else {
      return path.replace(siteBasePath, join(process.cwd(), docsPath, outputDirectory));
    }
  });
}
module.exports = prepareSitemap;