const { buildNavigation } = require('../index.js');
const data = require('./fixtures/data.json');
const dataMulti = require('./fixtures/data-multi.json');
const sections = require('./fixtures/sections.json');

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
