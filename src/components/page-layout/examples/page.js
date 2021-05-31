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
          pathname: '/PageLayout/overview/worldview/sub-page-one/'
        }}
        frontMatter={{
          title: 'Sub page one',
          layout: 'page',
          headings: [
            { text: 'Section 1', slug: 'section-1', level: 2 },
            { text: 'Section 2', slug: 'section-2', level: 2 }
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
            '/PageLayout/overview/worldview/sub-page-one/': {
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
                      title: 'Sub page one',
                      path: '/PageLayout/overview/worldview/sub-page-one/',
                      id: 'sp-one'
                    },
                    {
                      title: 'Sub page two',
                      path: '/PageLayout/overview/worldview/sub-page-two/',
                      id: 'sp-two'
                    },
                    {
                      title: 'Sub page three',
                      path: '/PageLayout/overview/worldview/sub-page-three/',
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
          <h2 id="section-1">Section 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 id="section-2">Section 2</h2>
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
