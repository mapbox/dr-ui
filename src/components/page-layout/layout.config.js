export default {
  page: {
    sidebar: 'toc', // heading table of contents
    sidebarTheme: '' // blank sidebar background
  },
  accordion: {
    sidebar: 'accordion' // NavigationAccordion sidebar
  },
  example: {
    aside: 'none', // do not show aside
    sidebar: 'sectioned', // SectionedNavigation sidebar
    hideSubItems: false, // show headings and subitems in sitebar
    includeFilterBar: false // hide filter bar
  },
  exampleIndex: {
    aside: 'none', // do not show aside
    sidebar: 'sectioned', // SectionedNavigation sidebar
    hideSubItems: true, // only show sidebar headings
    showCards: true, // show example cards
    hideFeedback: true, // hide feedback module
    includeFilterBar: false // hide filter bar
  },
  full: {
    aside: 'none', // do not show aside
    sidebar: 'none' // no sidebar
  }
};
