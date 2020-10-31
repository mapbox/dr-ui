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
    expect(buildNavigation('/help', helpDebug).accordion).toMatchSnapshot();
  });

  it('accordion pages are sorted by order', () => {
    console.log(buildNavigation('/api', apiDebug));
    expect(buildNavigation('/api', apiDebug).accordion).toEqual({
      '/api/': [
        {
          path: '/api/',
          title: 'Introduction'
        },
        {
          path: '/api/maps/',
          title: 'Maps service'
        },
        {
          path: '/api/navigation/',
          title: 'Navigation service'
        },
        {
          path: '/api/search/',
          title: 'Search service'
        },

        {
          path: '/api/accounts/',
          title: 'Accounts service'
        },
        {
          path: '/api/changelog/',
          title: 'Changelog'
        }
      ]
    });
  });

  it('hideFromNav, removes items', () => {
    expect(
      buildNavigation(siteBasePath, {
        pages: [
          {
            path: '/dr-ui/level-one/',
            frontMatter: {
              title: 'Top page',
              layout: 'accordion',
              navOrder: 1
            }
          },
          {
            path: '/dr-ui/level-one/a/',
            frontMatter: {
              title: 'Page a',
              layout: 'accordion',
              hideFromNav: true
            }
          },
          {
            path: '/dr-ui/level-one/b/',
            frontMatter: {
              title: 'Page b',
              layout: 'accordion'
            }
          }
        ]
      })
    ).toMatchSnapshot();
  });
});
