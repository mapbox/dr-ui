// builds all the data you need for a given page's path
// see: https://mapbox.github.io/dr-ui/batfish-helpers/#topics

const slugify = require('slugify');
const removeMd = require('remove-markdown');

function buildTopics(data) {
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

      const topics = generateTopics(parent.path, children);
      if (topics.length > 0) {
        obj[parent.path] = parent;
        parent.topics = topics;
      }
    });

  return obj;
}

module.exports = {
  buildTopics
};

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
            description: removeMd(page.description),
            ...page
          });
        }
      }
      if (page.topic) {
        if (page.topic === topic) {
          arr.push({
            text: page.title, // needed for sectionednavigation
            url: page.path, // needed for sectionednavigation
            description: removeMd(page.description),
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
