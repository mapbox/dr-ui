const { join } = require('path');

function prepareSitemap({
  pages,
  siteBasePath,
  docsPath = '',
  outputDirectory = '_site'
}) {
  // find pages with `hideFromSearchEngines: true` in frontMatter
  return pages
    .filter(({ frontMatter }) => frontMatter.hideFromSearchEngines)
    .map(({ path }) => {
      // fix root index path to return full path
      if (path === `${siteBasePath}/`) {
        return path.replace(
          join(siteBasePath, '/'),
          join(process.cwd(), docsPath, outputDirectory, 'index.html')
        );
      } else {
        return path.replace(
          siteBasePath,
          join(process.cwd(), docsPath, outputDirectory)
        );
      }
    });
}

module.exports = prepareSitemap;
