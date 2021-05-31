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

testCases.examplePageFilters = {
  description:
    'Example page layout, does not show filters because "showFilters" sets only "topics" and "topics" has one option.',
  element: (
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
        pathname: '/PageLayout/examples/'
      }}
      frontMatter={{
        title: 'Examples',
        layout: 'exampleIndex',
        description: 'Lots of handy examples.',
        fullWidthCards: true,
        showFilters: ['topics']
      }}
      navigation={{
        hierarchy: {
          '/PageLayout/examples/': {
            parent: '/PageLayout/examples/',
            title: 'Examples'
          }
        },
        navTabs: [
          {
            path: '/PageLayout/overview/',
            title: 'Overview',
            id: 'overview'
          },
          {
            path: '/PageLayout/examples/',
            title: 'Examples',
            id: 'examples'
          }
        ]
      }}
      filters={{
        '/PageLayout/examples/': {
          contentType: 'example',
          description: 'Replace me.',
          layout: 'example',
          navOrder: 3,
          path: '/PageLayout/',
          title: 'Examples',
          topics: ['Getting started'],
          languages: ['Java', 'JavaScript'],
          products: ['Documentation', 'Mapbox GL JS'],
          pages: [
            {
              contentType: 'example',
              description: 'Replace me.',
              language: ['JavaScript'],
              layout: 'example',
              path: '/PageLayout/example-1/',
              text: 'Example 1',
              thumbnail: 'header-image',
              title: 'Example 1',
              topics: ['Getting started'],
              products: ['Documentation', 'Mapbox GL JS'],
              url: '/PageLayout/example-1/'
            },
            {
              contentType: 'example',
              description: 'Replace me.',
              language: ['JavaScript'],
              layout: 'example',
              path: '/PageLayout/example-2/',
              text: 'Example 2',
              thumbnail: 'header-image',
              title: 'Example 2',
              topics: ['Getting started'],
              products: ['Documentation', 'Mapbox GL JS'],
              url: '/PageLayout/example-2/'
            },
            {
              contentType: 'example',
              description: 'Replace me.',
              language: ['Java'],
              layout: 'example',
              path: '/PageLayout/example-3/',
              text: 'Example 3',
              thumbnail: 'header-image',
              title: 'Example 3',
              topics: ['Getting started'],
              products: ['Documentation', 'Mapbox GL JS'],
              url: '/PageLayout/example-3/'
            }
          ]
        }
      }}
    />
  )
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
