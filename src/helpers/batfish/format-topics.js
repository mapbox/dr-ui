const GithubSlugger = require('github-slugger');

const slugger = new GithubSlugger();

function getPages(pages, product, title, url) {
  const filteredPages = pages.filter((p) => p.products.indexOf(product) > -1);
  if (filteredPages && filteredPages.length > 0) {
    return {
      count: filteredPages.length,
      name: title,
      url: `${url}#${slugger.slug(title)}`,
      pages: filteredPages.map((page) => formatEachGuide(page))
    };
  }
  slugger.reset();
}

function topicsWithProducts(baseurl, tabName, contentTypesArr, products) {
  return products.reduce((obj, product) => {
    const url = createUrl(baseurl, tabName, product);
    const topics = contentTypesArr.reduce((arr, type) => {
      const pages = getPages(type.pages, product, type.title, url);
      if (pages) {
        arr.push(pages);
      }
      return arr;
    }, []);
    obj[url] = {
      url,
      topics: sortByCount(topics)
    };
    return obj;
  }, {});
}

function formatEachGuide(page) {
  return {
    ...page,
    text: page.title,
    url: page.path
  };
}

function sortByCount(arr) {
  return arr
    .sort((a, b) => (a.count > b.count ? 1 : b.count > a.count ? -1 : 0))
    .reverse();
}

function topicsWithoutProducts(contentTypesArr, url) {
  return sortByCount(
    contentTypesArr.reduce((arr, type) => {
      const pages = type.pages.map((page) => formatEachGuide(page));
      arr.push({
        ...type,
        count: pages.length,
        url: `${url}#${slugger.slug(type.title)}`,
        pages
      });
      slugger.reset();
      return arr;
    }, [])
  );
}

function createUrl(baseurl, tabName, product) {
  return `${baseurl}/${product ? `${product}/` : ''}${
    tabName ? `${tabName}/` : ''
  }`;
}

// create topics for each product
function formatTopics(baseurl, tabName, contentTypesArr, products) {
  if (products)
    return topicsWithProducts(baseurl, tabName, contentTypesArr, products);
  else {
    const url = createUrl(baseurl, tabName);
    return {
      [url]: topicsWithoutProducts(contentTypesArr, url)
    };
  }
}

module.exports = {
  formatTopics
};
