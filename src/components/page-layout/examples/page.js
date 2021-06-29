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
          pathname: '/PageLayout/guides/worldview/border-styling/'
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
          <h2 id="set-a-filter">Set a filter</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 id="style-the-line">Style the line</h2>
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
