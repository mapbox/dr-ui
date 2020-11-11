const { buildNavigation } = require('../index.js');
const data = require('./fixtures/data.json');
const dataMulti = require('./fixtures/data-multi.json');
const sections = require('./fixtures/sections.json');

const apiDebug = require('./fixtures/api-debug.json');
const helpDebug = require('./fixtures/help-debug.json');

const siteBasePath = '/docs-starter-kit';

describe('buildNavigation', () => {
  it('single structure', () => {
    expect(buildNavigation(siteBasePath, data)).toMatchSnapshot();
  });

  it('multi structure', () => {
    expect(
      buildNavigation(siteBasePath, dataMulti, sections)
    ).toMatchSnapshot();
  });

  it('help glossary is sorted alphabetical', () => {
    expect(buildNavigation('/help', helpDebug).navTabs).toMatchSnapshot();
  });

  it('pages are sorted by order', () => {
    expect(buildNavigation('/api', apiDebug).navTabs).toEqual([
      {
        id: 'introduction',
        navOrder: 1,
        pages: [
          {
            layout: 'page',
            order: 2,
            path: '/api/maps/',
            splitPages: true,
            title: 'Maps service'
          },
          {
            layout: 'page',
            order: 3,
            path: '/api/navigation/',
            splitPages: true,
            title: 'Navigation service'
          },
          {
            layout: 'page',
            order: 4,
            path: '/api/search/',
            splitPages: true,
            title: 'Search service'
          },
          {
            layout: 'page',
            order: 5,
            path: '/api/accounts/',
            splitPages: true,
            title: 'Accounts service'
          },
          {
            layout: 'page',
            order: 6,
            path: '/api/changelog/',
            title: 'Changelog'
          }
        ],
        path: '/api/',
        title: 'Introduction'
      }
    ]);
  });

  it('hideFromNav, removes items', () => {
    expect(
      buildNavigation(siteBasePath, {
        pages: [
          {
            path: '/dr-ui/level-one/',
            frontMatter: {
              title: 'Top page',
              layout: 'page',
              navOrder: 1
            }
          },
          {
            path: '/dr-ui/level-one/a/',
            frontMatter: {
              title: 'Page a',
              layout: 'page',
              hideFromNav: true
            }
          },
          {
            path: '/dr-ui/level-one/b/',
            frontMatter: {
              title: 'Page b',
              layout: 'page'
            }
          }
        ]
      })
    ).toMatchSnapshot();
  });

  it('single structure - addPages works', () => {
    expect(
      buildNavigation('/api', apiDebug, null, [
        {
          title: 'Tutorial',
          path: 'https://docs.mapbox.com/help/tutorials?product=api',
          navOrder: 2
        },
        {
          title: 'Troubleshooting',
          path: 'https://docs.mapbox.com/help/troubleshooting?product=api',
          navOrder: 3
        }
      ]).navTabs
    ).toEqual([
      {
        id: 'introduction',
        navOrder: 1,
        pages: [
          {
            layout: 'page',
            order: 2,
            path: '/api/maps/',
            splitPages: true,
            title: 'Maps service'
          },
          {
            layout: 'page',
            order: 3,
            path: '/api/navigation/',
            splitPages: true,
            title: 'Navigation service'
          },
          {
            layout: 'page',
            order: 4,
            path: '/api/search/',
            splitPages: true,
            title: 'Search service'
          },
          {
            layout: 'page',
            order: 5,
            path: '/api/accounts/',
            splitPages: true,
            title: 'Accounts service'
          },
          {
            layout: 'page',
            order: 6,
            path: '/api/changelog/',
            title: 'Changelog'
          }
        ],
        path: '/api/',
        title: 'Introduction'
      },
      {
        external: true,
        id: 'tutorial',
        title: 'Tutorial',
        pages: [],
        path: 'https://docs.mapbox.com/help/tutorials?product=api',
        navOrder: 2
      },
      {
        external: true,
        id: 'troubleshooting',
        title: 'Troubleshooting',
        pages: [],
        path: 'https://docs.mapbox.com/help/troubleshooting?product=api',
        navOrder: 3
      }
    ]);
  });

  it('multi structure - addPages works', () => {
    expect(
      buildNavigation(siteBasePath, dataMulti, [
        {
          path: 'maps',
          title: 'Maps SDK for iOS',
          addPages: [
            {
              title: 'Tutorial',
              path: 'https://docs.mapbox.com/help/tutorials?product=api',
              navOrder: 4
            },
            {
              title: 'Troubleshooting',
              path: 'https://docs.mapbox.com/help/troubleshooting?product=api',
              navOrder: 5
            }
          ]
        }
      ]).maps.navTabs
    ).toEqual([
      {
        id: 'overview',
        navOrder: 1,
        pages: [
          {
            layout: 'page',
            order: 2,
            path: '/docs-starter-kit/maps/overview/layouts/',
            section: 'maps',
            title: 'Layouts'
          },
          {
            layout: 'page',
            order: 3,
            path: '/docs-starter-kit/maps/overview/navigation/',
            section: 'maps',
            title: 'Navigation'
          },
          {
            layout: 'page',
            order: 4,
            path: '/docs-starter-kit/maps/overview/images/',
            section: 'maps',
            title: 'Images and videos'
          },
          {
            layout: 'page',
            order: 5,
            path: '/docs-starter-kit/maps/overview/constants/',
            section: 'maps',
            title: 'Constants'
          },
          {
            layout: 'page',
            order: 6,
            path: '/docs-starter-kit/maps/overview/frontmatter/',
            section: 'maps',
            tag: 'fundamentals',
            title: 'Frontmatter'
          }
        ],
        path: '/docs-starter-kit/maps/overview/',
        title: 'Overview'
      },
      {
        id: 'specification',
        navOrder: 2,
        pages: [],
        path: '/docs-starter-kit/maps/specification/',
        title: 'Specification'
      },
      {
        id: 'examples',
        navOrder: 3,
        pages: [],
        path: '/docs-starter-kit/maps/examples/',
        title: 'Examples'
      },
      {
        external: true,
        id: 'tutorial',
        title: 'Tutorial',
        pages: [],
        path: 'https://docs.mapbox.com/help/tutorials?product=api',
        navOrder: 4
      },
      {
        external: true,
        id: 'troubleshooting',
        title: 'Troubleshooting',
        pages: [],
        path: 'https://docs.mapbox.com/help/troubleshooting?product=api',
        navOrder: 5
      }
    ]);
  });
});
