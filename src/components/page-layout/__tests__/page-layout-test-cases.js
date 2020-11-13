import React from 'react';
import Page from '../examples/page';
import Example from '../examples/example';
import ExamplePage from '../examples/example-page';
import Full from '../examples/full';
import PageLayout from '../../page-layout';

const testCases = {};

testCases.full = {
  description: 'full layout',
  element: <Full />
};

testCases.page = {
  description: 'Page layout',
  element: <Page />
};

testCases.example = {
  description: 'Example (index) layout',
  element: <Example />
};

testCases.examplePage = {
  description: 'Example page layout',
  element: <ExamplePage />
};

testCases.noSidebar = {
  description: 'No sidebar, show Breadcrumbs on mobile',
  element: (
    <PageLayout
      constants={{
        SITE: 'Dr. UI',
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
        layout: 'full',
        hideSidebar: true
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
            path: '/PageLayout/',
            id: 'overview'
          }
        ]
      }}
    >
      <React.Fragment>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </React.Fragment>
    </PageLayout>
  )
};

export { testCases };
