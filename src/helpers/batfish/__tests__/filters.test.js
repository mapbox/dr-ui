const { buildFilters } = require('../index.js');
const data = require('./fixtures/data.json');
const dataMulti = require('./fixtures/data-multi.json');

describe('buildFilters', () => {
  it('single structure', () => {
    expect(buildFilters(data)).toMatchSnapshot();
  });

  it('multi structure', () => {
    expect(buildFilters(dataMulti)).toMatchSnapshot();
  });
});
