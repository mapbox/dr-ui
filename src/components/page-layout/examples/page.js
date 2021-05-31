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
          pathname: '/PageLayout/overview/worldview/border-styling/'
        }}
        frontMatter={{
          title: 'Border styling',
          layout: 'page',
          groupOrder: 2,
          headings: [
            { text: 'Set a filter', slug: 'set-a-filter', level: 2 },
            { text: 'Style the line', slug: 'style-the-line', level: 2 }
          ]
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
      >
        <React.Fragment>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 id="section-1">Set a filter</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 id="section-2">Style the line</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </React.Fragment>
      </PageLayout>
    );
  }
}
