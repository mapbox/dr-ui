// creates a page hierarchy based on top navigation item (as dictated by frontMatter.navOrder)
// see: https://mapbox.github.io/dr-ui/batfish-helpers/
const slugify = require('slugify');
function buildNavigation({
  siteBasePath,
  data,
  sections,
  addPages
}) {
  let obj = {};
  // get page data ready to be organized
  let pages = formatPages(siteBasePath, data, sections);
  if (addPages) pages = pages.concat(addPages);
  // if sections are defined, organize by sections first to build a multi-structured structure
  if (sections) {
    obj = buildMultiLevels(sections, pages);
  } else {
    // otherwise build a single structure
    const organized = organizePages(pages);
    obj.navTabs = buildNavTabs(organized);
    obj.hierarchy = buildHierarchy(pages, organized);
  }
  return obj;
}

// return the section name that the page falls under
function findSection(siteBasePath, page, sections) {
  return sections.reduce((str, section) => {
    if (page.path.indexOf(`${siteBasePath}/${section.path}/`) > -1) str = section.path;
    return str;
  }, '');
}
function buildHierarchy(pages, organized, section) {
  // Create an object containing the title for each
  // path that is the index for a group of guides
  const groups = pages.reduce((obj, page) => {
    if (page.group) obj[page.path] = page.title;
    return obj;
  }, {});
  // Iterate through the organized pages
  return Object.keys(organized).reduce((obj, contentType) => {
    organized[contentType].pages.map(page => {
      // Create keys in the accumulator
      obj[page.path] = {};
      // If the page is in a group of guides
      if (page.groupOrder) {
        // Get the path of the group index
        const groupPath = page.path.match(/(.*\/)(.*\/)$/)[1];
        // Get the title from the object of groups created above
        obj[page.path].title = groups[groupPath];
        obj[page.path].parent = groupPath;
      } else {
        obj[page.path].title = organized[contentType].title;
        obj[page.path].parent = contentType;
      }
      // If there's a section, add it to the object
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
  // Filter and sort pages
  const sortedPages = pages.filter(page => page.path.startsWith(parent.path)).filter(page => !page.splitPage) // exclude individual `splitPage` from navAccordion
  .sort((a, b) => parseInt(a.order) - parseInt(b.order));
  // Find all pages that are group indexes, and add a
  // subPages key to the object and set the value to an array
  // of guides and sort them by the groupOrder
  sortedPages.filter(page => page.group === true).forEach(page => {
    page.subPages = sortedPages.filter(subPage => subPage.groupOrder && subPage.path.indexOf(page.path) > -1).sort((a, b) => parseInt(a.groupOrder) - parseInt(b.groupOrder));
  });
  return sortedPages;
}
function organizePages(pages) {
  // get top level nav items
  const navItems = pages.filter(p => p.navOrder).sort((a, b) => a.navOrder - b.navOrder);
  // add second level items
  return navItems.reduce((obj, parent) => {
    obj[parent.path] = {
      navOrder: parent.navOrder,
      title: parent.title,
      ...(parent.hideSubpages && {
        hideSubpages: parent.hideSubpages
      }),
      pages: findChildren(pages, parent)
    };
    return obj;
  }, {});
}

// format pages with data we need to process the content
function formatPages(siteBasePath, data, sections) {
  return data.pages.filter(f => !f.is404) // remove the batfish 404 page
  .map(p => ({
    title: p.frontMatter.title,
    description: p.frontMatter.description,
    path: p.path,
    ...(p.frontMatter.navOrder && {
      navOrder: p.frontMatter.navOrder
    }),
    ...(p.frontMatter.order && {
      order: p.frontMatter.order
    }),
    ...(p.frontMatter.groupOrder && {
      groupOrder: p.frontMatter.groupOrder
    }),
    ...(p.frontMatter.group && {
      group: p.frontMatter.group
    }),
    ...(p.frontMatter.tag && {
      tag: p.frontMatter.tag
    }),
    ...(p.frontMatter.customTagProps && {
      customTagProps: p.frontMatter.customTagProps
    }),
    ...(p.frontMatter.layout && {
      layout: p.frontMatter.layout
    }),
    ...(sections && {
      section: findSection(siteBasePath, p, sections)
    }),
    ...(p.frontMatter.splitPage && {
      splitPage: p.frontMatter.splitPage
    }),
    ...(p.frontMatter.splitPages && {
      splitPages: p.frontMatter.splitPages
    }),
    ...(p.frontMatter.hideSubpages && {
      hideSubpages: p.frontMatter.hideSubpages
    }),
    ...(p.frontMatter.hideFromNav && {
      hideFromNav: p.frontMatter.hideFromNav
    })
  }));
}
function buildMultiLevels(sections, pages) {
  return sections.reduce((obj, section) => {
    let sectionPages = pages.filter(f => f.section === section.path);
    if (section.addPages) sectionPages = sectionPages.concat(section.addPages);
    const organized = organizePages(sectionPages);
    obj[section.path] = {
      path: section.path,
      title: section.title,
      ...(section.tag && {
        tag: section.tag
      }),
      navTabs: buildNavTabs(organized)
    };
    obj.hierarchy = Object.assign(obj.hierarchy, buildHierarchy(pages, organized, section));
    return obj;
  }, {
    hierarchy: {}
  });
}
function buildNavTabs(organized) {
  const navTabs = Object.keys(organized).map(path => {
    const isExternal = isUrlExternal(path);
    return {
      ...organized[path],
      title: organized[path].title,
      id: slugify(organized[path].title, {
        replacement: '-',
        lower: true
      }),
      path: path,
      ...(isExternal && {
        external: true
      })
    };
  });
  return navTabs.reduce((arr, tab) => {
    arr.push({
      ...tab,
      pages: subPageSorter(organized[tab.path].pages.filter(f => f.path !== tab.path && f.layout === 'page' && !f.navOrder && !f.hideFromNav && !f.splitPage))
    });
    return arr;
  }, []);
}
function isUrlExternal(url) {
  const re = new RegExp('^(http|https)://', 'i');
  return re.test(url);
}
function subPageSorter(arr) {
  const formatted = arr.map(item => ({
    ...item,
    // assign an empty string if there is no title
    ...(!item.title && {
      title: ''
    })
  }));
  const withOrder = formatted.filter(f => f.order);
  const withOutOrder = formatted.filter(f => !f.order);
  return [
  // add items with `order` and sort them
  ...sortOrder(withOrder),
  // add items without `order` and sort them alphabetically
  ...sortAlpha(withOutOrder)];
}
function sortOrder(arr) {
  return arr.sort((a, b) => parseInt(a.order) - parseInt(b.order));
}
function sortAlpha(arr) {
  return arr.sort((a, b) => a.title.localeCompare(b.title, {
    sensitivity: 'base'
  }));
}
module.exports = {
  buildNavigation,
  findSection,
  sortAlpha
};