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

  test('android grouped pages', () => {
    expect(
      getSubPages(
        {
          hierarchy: {
            '/PageLayout/guides/': {
              parent: '/PageLayout/',
              title: 'Guides'
            },
            '/PageLayout/guides/worldview/': {
              parent: '/PageLayout/guides/',
              title: 'Guides'
            },
            '/PageLayout/guides/worldview/border-styling/': {
              parent: '/PageLayout/guides/worldview/',
              title: 'Worldview'
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
                  subPages: [
                    {
                      title: 'Web maps using older library versions',
                      description:
                        'Identify geographic features whose characteristics are defined differently by audiences belonging to various regional, cultural, or political groups.',
                      path: '/PageLayout/guides/worldview/avilable-worldviews/',
                      groupOrder: 1,
                      id: 'sp-one'
                    },
                    {
                      title: 'Mobile applications using older SDK versions',
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
            },
            {
              path: '/PageLayout/specification/',
              title: 'Specification',
              id: 'specification'
            },
            {
              path: '/PageLayout/examples/',
              title: 'Examples',
              id: 'examples'
            },
            {
              path: '/PageLayout/demo/',
              title: 'Demo',
              id: 'demo'
            }
          ]
        },
        '/PageLayout/guides/worldview/',
        {
          title: 'Worldview',
          layout: 'page',
          group: true,
          headings: []
        }
      )
    ).toMatchInlineSnapshot(`
      Array [
        Object {
          "description": "Identify geographic features whose characteristics are defined differently by audiences belonging to various regional, cultural, or political groups.",
          "groupOrder": 1,
          "id": "sp-one",
          "path": "/PageLayout/guides/worldview/avilable-worldviews/",
          "title": "Web maps using older library versions",
        },
        Object {
          "description": "When creating a map style with a tileset that uses worldviews, you must apply a filter to any layers that include a worldview data field.",
          "groupOrder": 2,
          "id": "sp-two",
          "path": "/PageLayout/guides/worldview/border-styling/",
          "title": "Mobile applications using older SDK versions",
        },
        Object {
          "description": "Some Mapbox vector tilesets, including Mapbox Streets v8 and Boundaries v3, include the worldview data field in several layers.",
          "groupOrder": 3,
          "id": "sp-three",
          "path": "/PageLayout/guides/worldview/data-sources/",
          "title": "Data sources",
        },
      ]
    `);
  });

  test('non-guides grouped', () => {
    expect(
      getSubPages(
        {
          navTabs: [
            {
              navOrder: 1,
              title: 'Style guide',
              pages: [
                {
                  title: 'Build and publish docs',
                  path: '/documentation/style-guide/publish/',
                  order: 1
                },
                {
                  title: 'Content types',
                  path: '/documentation/style-guide/content-types/',
                  order: 2,
                  group: true,
                  subPages: [
                    {
                      title: 'Example',
                      path: '/documentation/style-guide/content-types/example/',
                      groupOrder: 1
                    },
                    {
                      title: 'Tutorial',
                      path: '/documentation/style-guide/content-types/tutorial/',
                      groupOrder: 1
                    }
                  ]
                }
              ],
              id: 'style-guide',
              path: '/documentation/style-guide/'
            }
          ],
          hierarchy: {
            '/documentation/style-guide/': {
              title: 'Style guide',
              parent: '/documentation/style-guide/'
            },
            '/documentation/style-guide/content-types/': {
              title: 'Style guide',
              parent: '/documentation/style-guide/'
            },
            '/documentation/style-guide/content-types/example/': {
              title: 'Content types',
              parent: '/documentation/style-guide/content-types/'
            },
            '/documentation/style-guide/content-types/tutorial/': {
              title: 'Content types',
              parent: '/documentation/style-guide/content-types/'
            }
          }
        },
        '/documentation/style-guide/content-types/',
        {
          title: 'Content types',
          group: true
        }
      )
    ).toMatchInlineSnapshot(`undefined`);
  });

  test('grouped guides, pathname not set on index', () => {
    expect(
      getSubPages(
        {
          hierarchy: {
            '/PageLayout/guides/': { parent: '/PageLayout/', title: 'Guides' },
            '/PageLayout/guides/worldview/': {
              parent: '/PageLayout/guides/',
              title: 'Guides'
            },
            '/PageLayout/guides/worldview/border-styling/': {
              parent: '/PageLayout/guides/worldview/',
              title: 'Worldview'
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
            },
            {
              path: '/PageLayout/specification/',
              title: 'Specification',
              id: 'specification'
            },
            {
              path: '/PageLayout/examples/',
              title: 'Examples',
              id: 'examples'
            },
            { path: '/PageLayout/demo/', title: 'Demo', id: 'demo' }
          ]
        },
        '/PageLayout/guides/worldview/border-styling/',
        { title: 'Border styling', layout: 'page', groupOrder: 2 }
      )
    ).toMatchInlineSnapshot(`
      Array [
        Object {
          "description": "Identify geographic features whose characteristics are defined differently by audiences belonging to various regional, cultural, or political groups.",
          "groupOrder": 1,
          "id": "sp-one",
          "path": "/PageLayout/guides/worldview/avilable-worldviews/",
          "title": "Available worldviews",
        },
        Object {
          "description": "When creating a map style with a tileset that uses worldviews, you must apply a filter to any layers that include a worldview data field.",
          "groupOrder": 2,
          "id": "sp-two",
          "path": "/PageLayout/guides/worldview/border-styling/",
          "title": "Border styling",
        },
        Object {
          "description": "Some Mapbox vector tilesets, including Mapbox Streets v8 and Boundaries v3, include the worldview data field in several layers.",
          "groupOrder": 3,
          "id": "sp-three",
          "path": "/PageLayout/guides/worldview/data-sources/",
          "title": "Data sources",
        },
      ]
    `);
  });
});
