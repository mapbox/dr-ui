// creates a page hierarchy based on top navigation item (as dictated by frontMatter.navOrder)
// see: data/README.md to learn more about navigation
const slugify = require('slugify');

function buildNavigation(siteBasePath, data, sections) {
  let obj = {};
  // get page data ready to be organized
  const pages = formatPages(siteBasePath, data, sections);
  // if sections are defined, organize by sections first to build a multi-level structure
  if (sections) {
    obj = buildMultiLevels(sections, pages);
  } else {
    // otherwise build a single level structure
    const organized = organizePages(pages);
    obj.navTabs = buildNavTabs(organized);
    obj.accordion = buildAccordion(organized);
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
  return data.pages.map((p) => ({
    title: p.frontMatter.title,
    path: p.path,
    ...(p.frontMatter.order && { order: p.frontMatter.order }),
    ...(p.frontMatter.navOrder && { navOrder: p.frontMatter.navOrder }),
    ...(p.frontMatter.tag && { tag: p.frontMatter.tag }),
    ...(p.frontMatter.customTagProps && {
      customTagProps: p.frontMatter.customTagProps
    }),
    ...(p.frontMatter.layout && { layout: p.frontMatter.layout }),
    ...(sections && { section: findSection(siteBasePath, p, sections) })
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
        navTabs: buildNavTabs(organized, section),
        accordion: buildAccordion(organized)
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

function buildNavTabs(organized, section) {
  const tabs = Object.keys(organized).map((path) => {
    return {
      label: organized[path].title,
      id: path,
      href: path
    };
  });

  if (section && section.dropdown) {
    tabs.push({
      label: section.dropdown.label,
      href: section.dropdown.items[0].href,
      id: slugify(section.dropdown.label),
      items: section.dropdown.items
    });
  }

  return tabs;
}

function buildAccordion(organized) {
  return Object.keys(organized).reduce((obj, path) => {
    const pages = organized[path].pages;
    const findAccordionLayout = pages.filter((p) => p.layout === 'accordion');
    if (findAccordionLayout.length > 0) {
      obj[path] = pages.map((p) => ({
        title: p.title,
        path: p.path,
        ...(p.tag && { tag: p.tag }),
        ...(p.customTagProps && { customTagProps: p.customTagProps })
      }));
    }
    return obj;
  }, {});
}

module.exports = {
  buildNavigation,
  findSection
};
