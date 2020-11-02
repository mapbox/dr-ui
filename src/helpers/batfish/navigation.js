// creates a page hierarchy based on top navigation item (as dictated by frontMatter.navOrder)
// see: https://mapbox.github.io/dr-ui/batfish-helpers/

function buildNavigation(siteBasePath, data, sections) {
  let obj = {};
  // get page data ready to be organized
  const pages = formatPages(siteBasePath, data, sections);
  // if sections are defined, organize by sections first to build a multi-structured structure
  if (sections) {
    obj = buildMultiLevels(sections, pages);
  } else {
    // otherwise build a single structure
    const organized = organizePages(pages);
    obj.navTabs = buildNavTabs(organized);
    obj.hierarchy = buildHierarchy(organized);
  }
  return obj;
}

// return the section name that the page falls under
function findSection(siteBasePath, page, sections) {
  return sections.reduce((str, section) => {
    if (page.path.indexOf(`${siteBasePath}/${section.path}/`) > -1)
      str = section.path;
    return str;
  }, '');
}

function buildHierarchy(organized, section) {
  return Object.keys(organized).reduce((obj, group) => {
    organized[group].pages.map((page) => {
      (obj[page.path] = {}), (obj[page.path].title = organized[group].title);
      obj[page.path].parent = group;
      if (section) {
        obj[page.path].section = {
          title: section.title,
          path: section.path
        };
      }
    });
    return obj;
  }, {});
}

function findChildren(pages, parent) {
  return pages
    .filter((page) => page.path.startsWith(parent.path))
    .filter((page) => !page.splitPage) // exclude individual `splitPage` from navAccordion
    .sort((a, b) => parseInt(a.order) - parseInt(b.order));
}

function organizePages(pages) {
  // get top level nav items
  const navItems = pages
    .filter((p) => p.navOrder)
    .sort((a, b) => a.navOrder - b.navOrder);
  // add second level items
  return navItems.reduce((obj, parent) => {
    obj[parent.path] = {
      navOrder: parent.navOrder,
      title: parent.title,
      pages: findChildren(pages, parent)
    };
    return obj;
  }, {});
}

// format pages with data we need to process the content
function formatPages(siteBasePath, data, sections) {
  return data.pages
    .filter((f) => !f.is404) // remove the batfish 404 page
    .map((p) => ({
      title: p.frontMatter.title,
      path: p.path,
      ...(p.frontMatter.order && { order: p.frontMatter.order }),
      ...(p.frontMatter.navOrder && { navOrder: p.frontMatter.navOrder }),
      ...(p.frontMatter.tag && { tag: p.frontMatter.tag }),
      ...(p.frontMatter.customTagProps && {
        customTagProps: p.frontMatter.customTagProps
      }),
      ...(p.frontMatter.layout && { layout: p.frontMatter.layout }),
      ...(sections && { section: findSection(siteBasePath, p, sections) }),
      ...(p.frontMatter.splitPage && { splitPage: p.frontMatter.splitPage }),
      ...(p.frontMatter.splitPages && { splitPages: p.frontMatter.splitPages }),
      ...(p.frontMatter.hideFromNav && {
        hideFromNav: p.frontMatter.hideFromNav
      })
    }));
}

function buildMultiLevels(sections, pages) {
  return sections.reduce(
    (obj, section) => {
      const sectionPages = pages.filter((f) => f.section === section.path);
      const organized = organizePages(sectionPages);
      obj[section.path] = {
        path: section.path,
        title: section.title,
        ...(section.tag && { tag: section.tag }),
        navTabs: buildNavTabs(organized)
      };

      obj.hierarchy = Object.assign(
        obj.hierarchy,
        buildHierarchy(organized, section)
      );
      return obj;
    },
    { hierarchy: {} }
  );
}

function buildNavTabs(organized) {
  const navTabs = Object.keys(organized).map((path) => {
    return {
      ...organized[path],
      title: organized[path].title,
      path: path
    };
  });

  return navTabs.reduce((arr, tab) => {
    arr.push({
      ...tab,
      pages: subPageSorter(
        organized[tab.path].pages.filter(
          (f) =>
            f.path !== tab.path &&
            f.layout === 'page' &&
            !f.hideFromNav &&
            !f.splitPage
        )
      )
    });
    return arr;
  }, []);
}

function subPageSorter(arr) {
  const formatted = arr.map((item) => ({
    ...item,
    // assign an empty string if there is no title
    ...(!item.title && { title: '' })
  }));
  const withOrder = formatted.filter((f) => f.order);
  const withOutOrder = formatted.filter((f) => !f.order);
  return [
    // add items with `order` and sort them
    ...sortOrder(withOrder),
    // add items without `order` and sort them alphabetically
    ...sortAlpha(withOutOrder)
  ];
}

function sortOrder(arr) {
  return arr.sort((a, b) => parseInt(a.order) - parseInt(b.order));
}

function sortAlpha(arr) {
  return arr.sort((a, b) =>
    a.title.localeCompare(b.title, { sensitivity: 'base' })
  );
}

module.exports = {
  buildNavigation,
  findSection
};
