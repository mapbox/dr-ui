/*
"page" layout.
*/
import React from 'react';
import PageLayout from '../page-layout';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <PageLayout
        constants={{
          SITE: 'dr-ui',
          BASEURL: '/dr-ui',
          FORWARD_EVENT_WEBHOOK: {
            production: '123',
            staging: '123'
          }
        }}
        location={{
          pathname: '/PageLayout/overview/worldview/'
        }}
        frontMatter={{
          title: 'Worldview',
          layout: 'page',
          group: true,
          headings: []
        }}
        navigation={{
          hierarchy: {
            '/PageLayout/overview/': {
              parent: '/PageLayout/',
              title: 'Overview'
            },
            '/PageLayout/overview/worldview/': {
              parent: '/PageLayout/overview/',
              title: 'Overview'
            },
            '/PageLayout/overview/worldview/border-styling/': {
              parent: '/PageLayout/overview/worldview/',
              title: 'Worldview'
            }
          },
          navTabs: [
            {
              path: '/PageLayout/overview/',
              title: 'Overview',
              id: 'overview',
              pages: [
                {
                  path: '/PageLayout/overview/annotations/',
                  title: 'Annotations'
                },
                {
                  path: '/PageLayout/overview/worldview/',
                  title: 'Worldview',
                  subPages: [
                    {
                      title: 'Available worldviews',
                      description:
                        'Identify geographic features whose characteristics are defined differently by audiences belonging to various regional, cultural, or political groups.',
                      path: '/PageLayout/overview/worldview/avilable-worldviews/',
                      groupOrder: 1,
                      id: 'sp-one'
                    },
                    {
                      title: 'Border styling',
                      description:
                        'When creating a map style with a tileset that uses worldviews, you must apply a filter to any layers that include a worldview data field.',
                      path: '/PageLayout/overview/worldview/border-styling/',
                      groupOrder: 2,
                      id: 'sp-two'
                    },
                    {
                      title: 'Data sources',
                      description:
                        'Some Mapbox vector tilesets, including Mapbox Streets v8 and Boundaries v3, include the worldview data field in several layers.',
                      path: '/PageLayout/overview/worldview/data-sources/',
                      groupOrder: 3,
                      id: 'sp-three'
                    }
                  ]
                },
                {
                  path: '/PageLayout/overview/expressions/',
                  title: 'Expressions'
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
        }}
      ></PageLayout>
    );
  }
}
