import React from 'react';
import classnames from 'classnames';

export function buildSections(headings) {
  if (!headings) return [];
  return headings
    .filter((heading) => heading.level === 2 || heading.level === 3)
    .map((heading) => ({
      title: heading.text,
      url: `#${heading.slug}`,
      level: heading.level
    }));
}

export function buildScollspyItems(sections) {
  return sections.map((heading) => heading.url.replace('#', ''));
}

export function buildToc(sections) {
  return sections.map((heading, index) => {
    const nextHeading = sections[index + 1] || null;
    const headingClasses = classnames('', {
      pb6: heading.level === 2,
      'mb6 color-gray': heading.level === 3,
      mb24: nextHeading && nextHeading.level === 2 && heading.level === 3,
      mb6: nextHeading && nextHeading.level === 2 && heading.level === 2
    });
    return (
      <li key={index} className={headingClasses}>
        <a href={heading.url} className="color-blue-on-hover">
          {heading.title}
        </a>
      </li>
    );
  });
}

export function describePageStructure(navigation, parentPath) {
  // navigation.pages -- just uses "organized" for now
  const { pages, navTabs } = navigation;
  const tabIndex = navTabs.findIndex((tab) => tab.id === parentPath);
  if (!tabIndex) return;

  let filteredPages = [];
  // End up with an array of page objects
  Object.keys(pages).forEach((page) => {
    const isChild = page === navTabs[tabIndex].id;
    // Possibly need to account for empty pages lists
    if (isChild) {
      // Only get pages with "page" layout,
      const matchingPages = pages[page].pages.filter((child) => {
        const isPageParent = child.path === parentPath;
        if (isPageParent) return false;
        if (!child.layout || child.layout !== 'page') return false;
        return true;
      });
      filteredPages.push(...matchingPages);
    }
  });

  // Only add filtered pages to active tab
  navTabs[tabIndex].pages = [...filteredPages];

  return navTabs;
}
