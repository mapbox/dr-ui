const { buildTopics } = require('../topics.js');
const data = require('./fixtures/data.json');
const dataMulti = require('./fixtures/data-multi.json');
const addTopics = require('./fixtures/multi-add-topics.json');

describe('buildTopics', () => {
  it('single structure', () => {
    expect(buildTopics(data)).toMatchSnapshot();
  });

  it('multi structure', () => {
    expect(buildTopics(dataMulti)).toMatchSnapshot();
  });

  it('append topics', () => {
    expect(buildTopics(data, addTopics)).toMatchSnapshot();
  });
});
