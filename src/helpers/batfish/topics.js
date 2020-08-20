// builds all the data you need for a given page's path
// see: https://mapbox.github.io/dr-ui/batfish-helpers/#topics

const slugify = require('slugify');

const sortBy = (key) => {
  return (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
};

function buildTopics(data, append, sortingArr) {
  let obj = {};

  const pages = data.pages.map((p) => ({
    path: p.path, // each path is the page's primary key
    ...p.frontMatter
  }));

  pages
    .filter((p) => p.navOrder)
    .forEach((parent) => {
      // find the subpages
      const children = pages.filter((page) =>
        page.path.startsWith(parent.path)
      );

      const topics = sortTopics(
        generateTopics(parent.path, children),
        sortingArr
      );

      if (topics.length > 0) {
        obj[parent.path] = parent;
        parent.topics = topics;
      }
    });

  return Object.assign(obj, append);
}

module.exports = {
  buildTopics
};

function sortTopics(topics, sortingArr) {
  if (sortingArr) {
    return sortTopicsByArr(topics, sortingArr);
  } else {
    return sortByCount(topics);
  }
}

function sortByCount(topics) {
  return topics.sort(sortBy('count')).reverse();
}

function sortTopicsByArr(topics, sortingArr) {
  // set topicOrder to the index of the topic name in sortingArr
  const preSort = topics.map((topic) => ({
    ...topic,
    topicOrder: sortingArr.indexOf(topic.name)
  }));
  // create array of topics that do not have a topicOrder
  // this happens when the topic name is not defined in the sortingArr
  // so they will get added to the bottom and then sorted by count
  const unSorted = sortByCount(preSort.filter((f) => f.topicOrder === -1));
  // create array of topics that have a topicOrder
  const sorted = preSort.filter((f) => f.topicOrder > -1);
  return sorted
    .sort(sortBy('topicOrder')) // sort the array with topicOrder first
    .concat(unSorted) // append the unsorted array
    .map((topic) => {
      // delete topicOrder
      delete topic.topicOrder;
      return topic;
    });
}

function generateTopics(path, pages) {
  // get unique topics
  const uniqTopics = [
    ...new Set(
      pages.reduce((arr, page) => {
        if (page.topics) arr = arr.concat(page.topics);
        if (page.topic) arr.push(page.topic);
        return arr;
      }, [])
    )
  ];
  // loop through data and slot them in
  return uniqTopics.reduce((set, topic) => {
    const subPages = pages.reduce((arr, page) => {
      if (page.topics) {
        if (page.topics.indexOf(topic) > -1) {
          arr.push({
            text: page.title, // needed for sectionednavigation
            url: page.path, // needed for sectionednavigation
            ...page
          });
        }
      }
      if (page.topic) {
        if (page.topic === topic) {
          arr.push({
            text: page.title, // needed for sectionednavigation
            url: page.path, // needed for sectionednavigation
            ...page
          });
        }
      }
      return arr;
    }, []);
    // TODO: investigate why non-strings can be passed here
    if (topic && typeof topic === 'string') {
      set.push({
        name: topic,
        pages: subPages,
        count: subPages.length,
        url: `${path}#${slugify(topic, {
          lower: true
        })}`
      });
    }
    return set;
  }, []);
}
