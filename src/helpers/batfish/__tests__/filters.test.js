const { buildFilters } = require('../index.js');
const {
  pageSorter,
  generateTopics,
  generateLevels,
  combineArrays,
  hasTopic
} = require('../filters.js');
const data = require('./fixtures/data.json');
const dataMulti = require('./fixtures/data-multi.json');
const glJsDebug = require('./fixtures/gl-js-debug.json');

describe('buildFilters', () => {
  it('single structure', () => {
    expect(buildFilters(data)).toMatchSnapshot();
  });

  it('filter out pages without titles', () => {
    // GL JS has page redirects that do not have title
    // and need to be filtered out to prevent errors
    expect(() => {
      buildFilters(glJsDebug);
    }).not.toThrow();
  });

  it('multi structure', () => {
    expect(buildFilters(dataMulti)).toMatchSnapshot();
  });
});

describe('hasTopic', () => {
  it('works', () => {
    expect(
      hasTopic({ topic: 'Getting started' }, 'Getting started')
    ).toBeTruthy();
    expect(
      hasTopic({ topics: ['Getting started'] }, 'Getting started')
    ).toBeTruthy();
    expect(
      hasTopic({ topics: ['Getting started', 'Map design'] }, 'Getting started')
    ).toBeTruthy();
    expect(
      hasTopic({ topics: ['Getting started', 'Map design'] }, 'Carrots')
    ).not.toBeTruthy();
  });
});

describe('combineArrays', () => {
  it('sorted and unique', () => {
    expect(
      combineArrays(
        [
          {
            language: ['JavaScript']
          },
          {
            language: ['JavaScript']
          },
          {
            language: ['Kotlin', 'Java']
          },
          {
            language: ['No code']
          }
        ],
        'language'
      )
    ).toEqual(['Java', 'JavaScript', 'Kotlin', 'No code']);
  });
});

describe('generateLevels', () => {
  it('sorted and unique', () => {
    expect(
      generateLevels([
        {
          level: 2
        },
        {
          level: 1
        },
        {
          level: 1
        },
        {
          level: 3
        },
        {}
      ])
    ).toEqual([1, 2, 3]);
  });
});

describe('generateTopics', () => {
  it('sorted and unique', () => {
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

  it('sorted and unique, jp', () => {
    expect(
      generateTopics([
        {
          topic: 'データの可視化'
        },
        {
          topics: ['データの可視化', 'Webアプリ']
        },
        {
          topics: ['まず始めに', 'カメラ']
        },
        {
          topic: 'まず始めに'
        }
      ])
    ).toEqual(['まず始めに', 'Webアプリ', 'カメラ', 'データの可視化']);
  });
});

describe('pageSorter', () => {
  it('works, level', () => {
    expect(
      pageSorter([
        {
          title: 'Donkey',
          topic: '3D'
        },
        {
          title: 'Spider Monkey',
          level: 1
        },
        {
          title: 'Zebra',
          topic: 'Getting started',
          level: 3
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
      { title: 'Zebra', topic: 'Getting started', level: 3 },
      { title: 'Zedonk', topics: ['Getting started'] },
      { level: 1, title: 'Spider Monkey' },
      { level: 3, title: 'Giraffe' },
      { title: 'Donkey', topic: '3D' }
    ]);
  });

  it('works, order', () => {
    expect(
      pageSorter([
        {
          title: 'Donkey',
          topic: '3D'
        },
        {
          title: 'Spider Monkey',
          order: 1
        },
        {
          title: 'Zebra',
          topic: 'Getting started',
          order: 3
        },
        {
          title: 'Zedonk',
          topics: ['Getting started']
        },
        {
          title: 'Giraffe',
          order: 3
        }
      ])
    ).toEqual([
      { title: 'Zebra', topic: 'Getting started', order: 3 },
      { title: 'Zedonk', topics: ['Getting started'] },
      { order: 1, title: 'Spider Monkey' },
      { order: 3, title: 'Giraffe' },
      { title: 'Donkey', topic: '3D' }
    ]);
  });

  it('works, level, jp', () => {
    expect(
      pageSorter([
        {
          title: 'Donkey',
          topic: 'Webアプリ'
        },
        {
          title: 'Spider Monkey',
          level: 1
        },
        {
          title: 'Zebra',
          topic: 'まず始めに'
        },
        {
          title: 'Zedonk',
          topics: ['まず始めに']
        },
        {
          title: 'Giraffe',
          level: 3
        }
      ])
    ).toEqual([
      { title: 'Zebra', topic: 'まず始めに' },
      { title: 'Zedonk', topics: ['まず始めに'] },
      { level: 1, title: 'Spider Monkey' },
      { level: 3, title: 'Giraffe' },
      { title: 'Donkey', topic: 'Webアプリ' }
    ]);
  });

  it('works, order, jp', () => {
    expect(
      pageSorter([
        {
          title: 'Donkey',
          topic: 'Webアプリ'
        },
        {
          title: 'Spider Monkey',
          order: 1
        },
        {
          title: 'Zebra',
          topic: 'まず始めに'
        },
        {
          title: 'Zedonk',
          topics: ['まず始めに']
        },
        {
          title: 'Giraffe',
          order: 3
        }
      ])
    ).toEqual([
      { title: 'Zebra', topic: 'まず始めに' },
      { title: 'Zedonk', topics: ['まず始めに'] },
      { order: 1, title: 'Spider Monkey' },
      { order: 3, title: 'Giraffe' },
      { title: 'Donkey', topic: 'Webアプリ' }
    ]);
  });
});
