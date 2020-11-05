const { buildFilters } = require('../index.js');
const { pageSorter, generateTopics } = require('../filters.js');
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

describe('generateTopics', () => {
  it('works', () => {
    expect(
      generateTopics([
        {
          topic: 'Carrot'
        },
        {
          topics: ['Carrot', 'Radish']
        },
        {
          topics: ['Getting started', 'Cucumber']
        },
        {
          topic: 'Getting started'
        }
      ])
    ).toEqual(['Getting started', 'Carrot', 'Cucumber', 'Radish']);
    expect(
      generateTopics([
        {
          topic: 'Carrot'
        },
        {
          topics: ['Carrot', 'Radish']
        },
        {
          topics: ['Cucumber']
        }
      ])
    ).toEqual(['Carrot', 'Cucumber', 'Radish']);
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
