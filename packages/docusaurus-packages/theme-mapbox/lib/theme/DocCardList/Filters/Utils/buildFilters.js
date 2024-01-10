// builds all the data you need to power exampleIndex layout
// see: https://mapbox.github.io/dr-ui/batfish-helpers/#filters
import { sortAlpha } from './utils';

function buildFilters(items) {
  let obj = {};
  if (items.length > 0) {
    obj = {
      topics: generateTopics(items),
      levels: generateLevels(items),
      languages: combineArrays(items, 'language'),
      videos: items.filter((f) => f.video).length > 0, // returns bool
      products: combineArrays(items, 'products'),
      pages: pageSorter(items)
    };
  }
  return obj;
}

// combines arrays, makes them unique, and sorts them
function combineArrays(pages, prop) {
  return [
    ...new Set(
      pages
        .filter((f) => f.customProps[prop])
        .reduce((arr, item) => [...arr, ...item.customProps[prop]], [])
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
        if (page.customProps.topics) arr = arr.concat(page.customProps.topics);
        if (page.customProps.topic) arr.push(page.customProps.topic);
        return arr;
      }, [])
    )
  ].sort();

  return topics;
}

function hasTopic(page, topic) {
  return (
    (page.customProps.topic && page.customProps.topic === topic) ||
    (page.customProps.topics && page.customProps.topics.indexOf(topic) > -1)
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
  const gettingStarted = pages.filter((page) =>
    hasTopic(page, 'Getting started')
  );
  const notGettingStarted = (page) => !hasTopic(page, 'Getting started');

  // exclude withTopic values
  const withLevel = pages.filter(
    (page) => page.customProps.level && notGettingStarted(page)
  );

  const withOrder = pages.filter(
    (page) => page.customProps.order && notGettingStarted(page)
  );

  // exclude withTopic and withLevel values
  const theRest = pages.filter(
    (page) =>
      !page.customProps.level &&
      !page.customProps.order &&
      notGettingStarted(page)
  );

  // sortedByLevelOrder prevents 'level' and 'order' from interacting.
  // DO NOT USE 'level' AND 'order' IN THE SAME FRONTMATTER.
  // If you do, this filter will completely ignore `order`.
  let sortedByLevelOrOrder = sortBy(withLevel, 'level');
  if (withLevel.length === 0) {
    sortedByLevelOrOrder = sortBy(withOrder, 'order');
  }

  return [
    // add items with topic
    ...gettingStarted,
    // add items sorted by level, or by order if level does not exist in the collection of items
    ...sortedByLevelOrOrder,
    // add all other items and sort them alphabetically by title
    ...sortAlpha(theRest)
  ];
}

export default buildFilters;
