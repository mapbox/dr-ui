// builds all the data you need to power exampleIndex layout
// see: https://mapbox.github.io/dr-ui/batfish-helpers/#filters
const { sortAlpha } = require('./navigation');

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
        topics: generateTopics(children),
        levels: generateLevels(children),
        languages: combineArrays(children, 'language'),
        videos: children.filter((f) => f.video).length > 0, // returns bool
        products: combineArrays(children, 'products'),
        pages: pageSorter(children)
      };
    }
    return obj;
  }, {});
}

// combines arrays, makes them unique, and sorts them
function combineArrays(pages, prop) {
  return [
    ...new Set(
      pages
        .filter((f) => f[prop])
        .reduce((arr, item) => [...arr, ...item[prop]], [])
    )
  ].sort();
}

// creates an array of unique levels and sorts them
function generateLevels(pages) {
  return [...new Set(pages.filter((f) => f.level).map((f) => f.level))].sort();
}

// creates an array of unique topic(s) and sorts them
function generateTopics(pages) {
  const topics = [
    ...new Set(
      pages.reduce((arr, page) => {
        if (page.topics) arr = arr.concat(page.topics);
        if (page.topic) arr.push(page.topic);
        return arr;
      }, [])
    )
  ].sort();
  // check if "Getting started" topic exists
  const index = topics.indexOf('Getting started');
  // if "Getting started" exists, splice the array, and move "Getting started" to the front of the list
  return index > -1 ? [...topics.splice(index, 1), ...topics] : topics;
}

function hasTopic(page, topic) {
  return (
    (page.topic && page.topic === topic) ||
    (page.topics && page.topics.indexOf(topic) > -1)
  );
}

function sortBy(arr, prop) {
  return arr.sort((a, b) => parseInt(a[prop]) - parseInt(b[prop]));
}

// sorts the array of pages in the following order:
// 1. The "Getting started" topic(s), if it exists. This will make sure the examples on product pages show getting started examples first.
// 2. By `level`, if it exists. This will make sure that beginner level tutorials will appear first on the tutorials page.
// 3. All remaining pages are sorted alphabetically by title.
function pageSorter(pages) {
  const withTopic = pages.filter((page) => hasTopic(page, 'Getting started'));
  // exclude withTopic values
  const withLevel = pages
    .filter((x) => !withTopic.includes(x))
    .filter((page) => page.level && !hasTopic(page, 'Getting started'));
  // exclude withTopic and withLevel values
  const theRest = pages
    .filter((x) => !withLevel.includes(x) && !withTopic.includes(x))
    .filter((page) => !page.level && !hasTopic(page, 'Getting started'));
  return [
    // add items with topic
    ...withTopic,
    // add items with level and sort them by level
    ...sortBy(withLevel, 'level'),
    // add all other items and sort them alphabetically by title
    ...sortAlpha(theRest)
  ];
}

module.exports = {
  buildFilters,
  pageSorter,
  generateTopics,
  generateLevels,
  combineArrays,
  hasTopic
};
