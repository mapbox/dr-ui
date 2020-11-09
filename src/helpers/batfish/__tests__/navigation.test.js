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
});
