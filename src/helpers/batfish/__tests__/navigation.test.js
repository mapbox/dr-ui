const { buildNavigation } = require('../navigation.js');
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
});
