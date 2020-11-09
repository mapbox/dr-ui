/*
"full" layout.
*/
import React from 'react';
import PageLayout from '../page-layout';

export default class Basic extends React.Component {
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
          pathname: '/PageLayout/'
        }}
        frontMatter={{
          title: 'Overview',
          layout: 'full'
        }}
        navigation={{
          hierarchy: {
            '/PageLayout/': {
              parent: '/PageLayout/',
              title: 'Overview'
            }
          },
          navTabs: [
            {
              title: 'Overview',
              path: '/PageLayout/'
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
