// builds all the data you need for a given page's path
// see: data/README.md to learn more about buildPages

const slugify = require('slugify');

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
        if (page.topic) arr = arr.concat(page.topic);
        return arr;
      }, [])
    )
  ];
  // loop through data and slot them in
  return uniqTopics.reduce((set, topic) => {
    const subPages = pages.reduce((arr, page) => {
      if (page.topic) {
        if (page.topic.indexOf(topic) > -1) {
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
