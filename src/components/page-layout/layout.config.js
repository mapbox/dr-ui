export default {
  page: {
    sidebar: 'toc', // heading table of contents
    sidebarTheme: '' // blank sidebar background
  },
  accordion: {
    sidebar: 'accordion', // NavigationAccordion sidebar
    sidebarTheme: 'bg-gray-faint' // sidebar background
  },
  example: {
    sidebar: 'sectioned', // SectionedNavigation sidebar
    hideSubItems: false, // show headings and subitems in sitebar
    sidebarTheme: 'bg-gray-faint', // sidebar background
    includeFilterBar: false // hide filter bar
  },
  exampleIndex: {
    sidebar: 'sectioned', // SectionedNavigation sidebar
    hideSubItems: true, // only show sidebar headings
    showCards: true, // show example cards
    hideFeedback: true, // hide feedback module
    sidebarTheme: 'bg-gray-faint', // sidebar background
    includeFilterBar: false // hide filter bar
  },
  full: {
    sidebar: 'none' // no sidebar
  }
};
