// builds all top level sections and their split pages
// this dataset is used by:
// API: IntroToc, IntroServicesList, and powers the headings for each section page
// Studio manual
// Accounts

const fs = require('fs');
const remark = require('remark-parse');
const unified = require('unified');
const visit = require('unist-util-visit');
const frontmatter = require('remark-frontmatter');
const GithubSlugger = require('github-slugger');

const slugger = new GithubSlugger();

const sortBy = (key) => {
  return (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
};

function buildSplitPages(data) {
  // get all pages with `splitPages: true`
  const mainSplitPages = data.pages.filter((f) => f.frontMatter.splitPages);
  // find each sub pages to the top level page
  return mainSplitPages.reduce((obj, page) => {
    const splitPages = findSplitPages(data, page);
    obj[page.path] = {
      ...page,
      pages: splitPages,
      headings: combineHeadings(splitPages)
    };
    return obj;
  }, {});
}

function findSplitPages(data, page) {
  return data.pages
    .filter((f) => f.path.startsWith(page.path) && f.frontMatter.splitPage)
    .map((page) => ({
      ...page,
      headings: getHeadings(page),
      slug: slugger.slug(page.frontMatter.title),
      order: page.frontMatter.order // pull out order for easy sorting
    }))
    .sort(sortBy('order'));
}

function combineHeadings(pages) {
  return pages.reduce((arr, page) => {
    if (page.headings) arr = arr.concat(page.headings);
    return arr;
  }, []);
}

function getHeadings(page) {
  let headings = [];
  const content = fs.readFileSync(page.filePath, 'utf-8');
  const ast = unified().use(remark).use(frontmatter, ['yaml']).parse(content);
  visit(ast, 'heading', (node) => {
    // only capture h2 and h3
    if (node.depth > 3) return;
    const label = node.children.reduce((str, n) => {
      if (n.type === 'text' && n.value) str += n.value;
      return str;
    }, '');
    const firstNode = node.children[0].value;

    headings.push({
      level: node.depth,
      text: label,
      slug: slugger.slug(firstNode),
      ...(page.frontMatter.tag && { tag: page.frontMatter.tag })
    });
  });
  slugger.reset(); // reset slugger
  return headings;
}

module.exports = {
  buildSplitPages
};
