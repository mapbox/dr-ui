function prepareSitemap({ pages, siteBasePath }) {
  // find pages with `hideFromSearchEngines: true` in frontMatter
  return pages
    .filter(({ frontMatter }) => frontMatter.hideFromSearchEngines)
    .map(({ path }) => {
      // fix root index path to return full path
      if (path === `${siteBasePath}/`) {
        return path.replace(
          `${siteBasePath}/`,
          `${process.cwd()}/_site/index.html`
        );
      } else {
        return path.replace(siteBasePath, `${process.cwd()}/_site`);
      }
    });
}

module.exports = prepareSitemap;
