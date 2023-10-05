// builds all the data you need to power exampleIndex layout
// see: https://mapbox.github.io/dr-ui/batfish-helpers/#filters
const {
  sortAlpha
} = require('./navigation');
const gettingStarted = {
  en: 'Getting started',
  jp: 'まず始めに'
};
function buildFilters(data) {
  // format page data
  const pages = data.pages.map(p => ({
    path: p.path,
    // each path is the page's primary key
    ...p.frontMatter
  })).filter(f => f.title); // page must have title

  // find every example index page
  const exampleIndexPages = pages.filter(p => p.navOrder && p.layout === 'example' || p.layout === 'exampleIndex');

  // for each example index page, find sub pages and collect uniq filter option arrays
  return exampleIndexPages.reduce((obj, parent) => {
    // find the subpages for each example index page
    const children = pages.filter(page => page.path.startsWith(parent.path) && page.path !== parent.path);
    if (children.length > 0) {
      obj[parent.path] = {
        topics: generateTopics(children),
        levels: generateLevels(children),
        languages: combineArrays(children, 'language'),
        videos: children.filter(f => f.video).length > 0,
        // returns bool
        products: combineArrays(children, 'products'),
        pages: pageSorter(children)
      };
    }
    return obj;
  }, {});
}

// combines arrays, makes them unique, and sorts them
function combineArrays(pages, prop) {
  return [...new Set(pages.filter(f => f[prop]).reduce((arr, item) => [...arr, ...item[prop]], []))].sort();
}

// creates an array of unique levels and sorts them
function generateLevels(pages) {
  return [...new Set(pages.filter(f => f.level).map(f => f.level))].sort();
}

// creates an array of unique topic(s) and sorts them
function generateTopics(pages) {
  const topics = [...new Set(pages.reduce((arr, page) => {
    if (page.topics) arr = arr.concat(page.topics);
    if (page.topic) arr.push(page.topic);
    return arr;
  }, []))].sort();
  // check if "Getting started" topic exists (en and jp)
  const indexEn = topics.indexOf(gettingStarted.en);
  const indexJp = topics.indexOf(gettingStarted.jp);
  // if exists, splice the array, and move "Getting started/まず始めに" to the front of the list
  return [...(indexEn > -1 ? [...topics.splice(indexEn, 1)] : []), ...(indexJp > -1 ? [...topics.splice(indexJp, 1)] : []), ...topics];
}
function hasTopic(page, topic) {
  return page.topic && page.topic === topic || page.topics && page.topics.indexOf(topic) > -1;
}
function sortBy(arr, prop) {
  return arr.sort((a, b) => parseInt(a[prop]) - parseInt(b[prop]));
}

// sorts the array of pages in the following order:
// 1. The "Getting started" topic(s), if it exists. This will make sure the examples on product pages show getting started examples first.
// 2. By `level`, if it exists. This will make sure that beginner level tutorials will appear first on the tutorials page.
// 3. All remaining pages are sorted alphabetically by title.
function pageSorter(pages) {
  const withTopicEn = pages.filter(page => hasTopic(page, gettingStarted.en));
  const withTopicJp = pages.filter(page => hasTopic(page, gettingStarted.jp));
  const notGettingStarted = page => !hasTopic(page, gettingStarted.en) && !hasTopic(page, gettingStarted.jp);
  // exclude withTopic values
  const withLevel = pages.filter(page => page.level && notGettingStarted(page));
  const withOrder = pages.filter(page => page.order && notGettingStarted(page));

  // exclude withTopic and withLevel values
  const theRest = pages.filter(page => !page.level && !page.order && notGettingStarted(page));

  // sortedByLevelOrder prevents 'level' and 'order' from interacting.
  // DO NOT USE 'level' AND 'order' IN THE SAME FRONTMATTER.
  // If you do, this filter will completely ignore `order`.
  let sortedByLevelOrOrder = sortBy(withLevel, 'level');
  if (withLevel.length === 0) {
    sortedByLevelOrOrder = sortBy(withOrder, 'order');
  }
  return [
  // add items with topic
  ...withTopicEn, ...withTopicJp,
  // add items sorted by level, or by order if level does not exist in the collection of items
  ...sortedByLevelOrOrder,
  // add all other items and sort them alphabetically by title
  ...sortAlpha(theRest)];
}
module.exports = {
  buildFilters,
  pageSorter,
  generateTopics,
  generateLevels,
  combineArrays,
  hasTopic
};