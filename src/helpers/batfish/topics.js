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
    return topics.sort(
      (a, b) => sortingArr.indexOf(a.name) - sortingArr.indexOf(b.name)
    );
  } else {
    return topics.sort(sortBy('count')).reverse();
  }
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

    set.push({
      name: topic,
      pages: subPages,
      count: subPages.length,
      url: `${path}#${slugify(topic, {
        lower: true
      })}`
    });
    return set;
  }, []);
}
