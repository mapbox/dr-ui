const {
  join
} = require('path');
function prepareSitemap({
  pages,
  siteBasePath,
  docsPath = '',
  outputDirectory = '_site'
}) {
  // find pages with `hideFromSearchEngines: true` in frontMatter or `splitPage: true`
  // we do not want these pages to appear in the sitemap
  return pages.filter(({
    frontMatter
  }) => frontMatter.hideFromSearchEngines || frontMatter.splitPage).map(({
    path,
    filePath
  }) => {
    // append index.html to files ending in index.js
    if (filePath.endsWith('index.js')) {
      return path.replace(siteBasePath, join(process.cwd(), docsPath, outputDirectory)).replace(/\/$/, '/index.html');
    } else {
      return path.replace(siteBasePath, join(process.cwd(), docsPath, outputDirectory));
    }
  });
}
module.exports = prepareSitemap;