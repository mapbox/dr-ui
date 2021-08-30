import { createUniqueCrumbs, getSubPages } from '../utils.js';

describe('createUniqueCrumbs', () => {
  test('unique titles', () => {
    expect(
      createUniqueCrumbs([
        {
          title: 'Maps service',
          path: '/api/maps/'
        },
        {
          title: 'Overview',
          path: '/api/'
        },
        {
          title: 'API',
          path: '/api/'
        }
      ])
    ).toEqual([
      { path: '/api/maps/', title: 'Maps service' },
      { path: '/api/', title: 'Overview' }
    ]);
  });
});

describe('getSubPages', () => {
  const navigation = {
    hierarchy: {
      '/PageLayout/guides/': {
        parent: '/PageLayout/',
        title: 'Guides'
      },
      '/PageLayout/guides/annotations/': {
        parent: '/PageLayout/guides/',
        title: 'Guides'
      },
      '/PageLayout/guides/worldview/': {
        parent: '/PageLayout/guides/',
        title: 'Guides'
      },
      '/PageLayout/guides/worldview/avilable-worldviews/': {
        parent: '/PageLayout/guides/worldview/',
        title: 'Worldview'
      },
      '/PageLayout/guides/worldview/border-styling/': {
        parent: '/PageLayout/guides/worldview/',
        title: 'Worldview'
      },
      '/PageLayout/guides/worldview/data-sources/': {
        parent: '/PageLayout/guides/worldview/',
        title: 'Worldview'
      },
      '/PageLayout/guides/expressions/': {
        parent: '/PageLayout/guides/',
        title: 'Guides'
      }
    },
    navTabs: [
      {
        path: '/PageLayout/guides/',
        title: 'Guides',
        id: 'guides',
        pages: [
          {
            path: '/PageLayout/guides/annotations/',
            title: 'Annotations',
            id: 'annotations'
          },
          {
            path: '/PageLayout/guides/worldview/',
            title: 'Worldview',
            id: 'worldview',
            group: true,
            subPages: [
              {
                title: 'Available worldviews',
                description:
                  'Identify geographic features whose characteristics are defined differently by audiences belonging to various regional, cultural, or political groups.',
                path: '/PageLayout/guides/worldview/avilable-worldviews/',
                groupOrder: 1,
                id: 'sp-one'
              },
              {
                title: 'Border styling',
                description:
                  'When creating a map style with a tileset that uses worldviews, you must apply a filter to any layers that include a worldview data field.',
                path: '/PageLayout/guides/worldview/border-styling/',
                groupOrder: 2,
                id: 'sp-two'
              },
              {
                title: 'Data sources',
                description:
                  'Some Mapbox vector tilesets, including Mapbox Streets v8 and Boundaries v3, include the worldview data field in several layers.',
                path: '/PageLayout/guides/worldview/data-sources/',
                groupOrder: 3,
                id: 'sp-three'
              }
            ]
          },
          {
            path: '/PageLayout/guides/expressions/',
            title: 'Expressions',
            id: 'expressions'
          }
        ]
      }
    ]
  };
  const frontMatter = {
    title: 'Worldview',
    description: 'Docs on how worldviews work.',
    path: '/PageLayout/guides/worldview/',
    group: true
  };
  test('unique titles', () => {
    expect(
      getSubPages(navigation, '/PageLayout/guides/worldview/', frontMatter)
    ).toEqual([
      {
        title: 'Available worldviews',
        description:
          'Identify geographic features whose characteristics are defined differently by audiences belonging to various regional, cultural, or political groups.',
        path: '/PageLayout/guides/worldview/avilable-worldviews/',
        groupOrder: 1,
        id: 'sp-one'
      },
      {
        title: 'Border styling',
        description:
          'When creating a map style with a tileset that uses worldviews, you must apply a filter to any layers that include a worldview data field.',
        path: '/PageLayout/guides/worldview/border-styling/',
        groupOrder: 2,
        id: 'sp-two'
      },
      {
        title: 'Data sources',
        description:
          'Some Mapbox vector tilesets, including Mapbox Streets v8 and Boundaries v3, include the worldview data field in several layers.',
        path: '/PageLayout/guides/worldview/data-sources/',
        groupOrder: 3,
        id: 'sp-three'
      }
    ]);
  });
});
