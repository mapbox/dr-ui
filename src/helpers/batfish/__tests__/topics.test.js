const { buildTopics } = require('../index.js');
const data = require('./fixtures/data.json');
const dataMulti = require('./fixtures/data-multi.json');

describe('buildTopics', () => {
  it('single structure', () => {
    expect(buildTopics(data)).toMatchSnapshot();
  });

  it('multi structure', () => {
    expect(buildTopics(dataMulti)).toMatchSnapshot();
  });

  it('sortingArr', () => {
    expect(
      buildTopics(data, null, ['Geocoding', 'Navigation'])
    ).toMatchSnapshot();
  });
  it('sortingArr, only define one topic that should be at top', () => {
    expect(buildTopics(data, null, ['Geocoding'])).toMatchSnapshot();
  });
});
