const { buildFilters } = require('../index.js');
const { pageSorter } = require('../filters.js');
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

describe('pageSorter', () => {
  it('works', () => {
    expect(
      pageSorter([
        {
          title: 'Donkey'
        },
        {
          title: 'Spider Monkey',
          level: 1
        },
        {
          title: 'Zebra',
          topic: 'Getting started'
        },
        {
          title: 'Zedonk',
          topics: ['Getting started']
        },
        {
          title: 'Giraffe',
          level: 3
        }
      ])
    ).toEqual([
      {
        title: 'Zebra',
        topic: 'Getting started'
      },
      {
        title: 'Zedonk',
        topics: ['Getting started']
      },
      {
        title: 'Spider Monkey',
        level: 1
      },
      {
        title: 'Giraffe',
        level: 3
      },
      {
        title: 'Donkey'
      }
    ]);
  });
});
