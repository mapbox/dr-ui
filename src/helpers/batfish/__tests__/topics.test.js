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
    expect(buildTopics(data, null, ['Awesome', 'Cool'])).toMatchSnapshot();
  });
});
