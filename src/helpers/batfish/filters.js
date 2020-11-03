// builds all the data you need to power examples index layout
// see: https://mapbox.github.io/dr-ui/batfish-helpers/#filters
const { accordionSorter } = require('./navigation');

function buildFilters(data) {
  // format page data
  const pages = data.pages.map((p) => ({
    path: p.path, // each path is the page's primary key
    ...p.frontMatter
  }));

  // find every example index page
  const exampleIndexPages = pages.filter(
    (p) => (p.navOrder && p.layout === 'example') || p.layout === 'exampleIndex'
  );

  // for each example index page, find sub pages and collect uniq filter option arrays
  return exampleIndexPages.reduce((obj, parent) => {
    // find the subpages for each example index page
    const children = pages.filter(
      (page) => page.path.startsWith(parent.path) && page.path !== parent.path
    );

    if (children.length > 0) {
      obj[parent.path] = {
        topics: generateTopics(parent.path, children),
        levels: generateLevels(children),
        languages: [
          ...new Set(
            children
              .filter((f) => f.language)
              .reduce((arr, item) => [...arr, ...item.language], [])
          )
        ].sort(),
        videos: accordionSorter(children.filter((f) => f.video)),
        pages: accordionSorter(children)
      };
    }
    return obj;
  }, {});
}

module.exports = {
  buildFilters
};

function generateLevels(pages) {
  return [...new Set(pages.filter((f) => f.level).map((f) => f.level))].sort();
}

function generateTopics(path, pages) {
  // get unique topics
  return [
    ...new Set(
      pages.reduce((arr, page) => {
        if (page.topics) arr = arr.concat(page.topics);
        if (page.topic) arr.push(page.topic);
        return arr;
      }, [])
    )
  ].sort();
}
