/*
"full" layout with custom "domain" prop
*/
import React from 'react';
import PageLayout from '../page-layout';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <PageLayout
        constants={{
          SITE: 'Mapbox Tiling Service',
          BASEURL: '/dr-ui',
          FORWARD_EVENT_WEBHOOK: {
            production: '123',
            staging: '123'
          }
        }}
        domain={{
          title: 'Documentation',
          path: 'https://mapbox.github.io/dr-ui/'
        }}
        location={{
          pathname: '/PageLayout/'
        }}
        frontMatter={{
          title: 'Guides',
          layout: 'full'
        }}
        navigation={{
          tag: 'beta',
          hierarchy: {
            '/PageLayout/': {
              parent: '/PageLayout/',
              title: 'Guides'
            }
          },
          navTabs: [
            {
              title: 'Guides',
              path: '/PageLayout/',
              id: 'guides'
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
