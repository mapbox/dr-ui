// builds all the data you need for a given page's path
// see: https://mapbox.github.io/dr-ui/batfish-helpers/#topics

const slugify = require('slugify');

const sortBy = (key) => {
  return (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
};

function buildItems({ data, append, sortingArr, itemType }) {
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

      const items = sortItems(
        generateItems(parent.path, children, itemType),
        sortingArr
      );

      if (items.length > 0) {
        obj[parent.path] = parent;
        parent[itemType] = items;
      }
    });

  return Object.assign(obj, append);
}

module.exports = {
  buildItems
};

function sortItems(items, sortingArr) {
  if (sortingArr) {
    return sortItemsByArr(items, sortingArr);
  } else {
    return sortByCount(items);
  }
}

function sortByCount(items) {
  return items.sort(sortBy('count')).reverse();
}

function sortItemsByArr(items, sortingArr) {
  // set itemOrder to the index of the item name in sortingArr
  const preSort = items.map((item) => ({
    ...item,
    itemOrder: sortingArr.indexOf(item.name)
  }));
  // create array of items that do not have a itemOrder
  // this happens when the item name is not defined in the sortingArr
  // so they will get added to the bottom and then sorted by count
  const unSorted = sortByCount(preSort.filter((f) => f.itemOrder === -1));
  // create array of items that have a itemOrder
  const sorted = preSort.filter((f) => f.itemOrder > -1);
  return sorted
    .sort(sortBy('itemOrder')) // sort the array with itemOrder first
    .concat(unSorted) // append the unsorted array
    .map((item) => {
      // delete itemOrder
      delete item.itemOrder;
      return item;
    });
}

function generateItems(path, pages, itemType) {
  // get unique Items
  const uniqueItems = [
    ...new Set(
      pages.reduce((arr, page) => {
        if (page[itemType]) arr = arr.concat(page[itemType]);
        return arr;
      }, [])
    )
  ];

  // loop through data and slot them in
  return uniqueItems.reduce((set, item) => {
    const subPages = pages.reduce((arr, page) => {
      if (itemType === 'level' && typeof item === 'number') {
        item = item.toString();
      }
      if (itemType === 'videos' && typeof item === 'boolean' && !!item) {
        item = item.toString();
      }
      if (page[itemType]) {
        if (page[itemType].toString().indexOf(item) > -1) {
          arr.push({
            text: page.title, // needed for sectionednavigation
            url: page.path, // needed for sectionednavigation
            ...page
          });
        }
      }

      // Special case for singular topic entries
      // This doesn't actually work because of the itemType argument in batfish config
      if (page.topic) {
        if (page.topic === item) {
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
    if (item && typeof item === 'string') {
      set.push({
        name: item,
        pages: subPages,
        count: subPages.length,
        url: `${path}#${slugify(item, {
          lower: true
        })}`
      });
    }
    return set;
  }, []);
}
