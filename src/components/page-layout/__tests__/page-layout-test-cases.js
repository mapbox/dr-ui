import React from 'react';
import Page from '../examples/page';
import Example from '../examples/example';
import ExamplePage from '../examples/example-page';
import Accordion from '../examples/accordion';
import Full from '../examples/full';
import PageLayout from '../page-layout';

const testCases = {};

testCases.full = {
  description: 'full layout',
  element: <Full />
};

testCases.accordion = {
  description: 'Accordion layout',
  element: <Accordion />
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

testCases.hideSearch = {
  description: 'Set hideSearch to remove Search component',
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
        pathname: '/PageLayout/'
      }}
      frontMatter={{
        title: 'Overview',
        layout: 'page',
        headings: [
          { text: 'Section 1', slug: 'section-1', level: 2 },
          { text: 'Section 2', slug: 'section-2', level: 2 }
        ]
      }}
      hideSearch={true}
      navigation={{
        hierarchy: {
          '/PageLayout/': {
            parent: '/dr-ui/',
            title: 'Demo'
          }
        },
        navTabs: [
          {
            path: '/PageLayout/',
            title: 'Overview',
            id: 'overview',
            pages: [
              {
                path: '/dr-ui/overview/permissions/',
                title: 'Permissions'
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
            id: 'examples',
            pages: [
              {
                path: '/dr-ui/examples/basic/',
                title: 'Basic example'
              },
              {
                path: '/dr-ui/examples/fancy/',
                title: 'Fancy example'
              }
            ]
          }
        ]
      }}
    />
  )
};

testCases.friendOfDocs = {
  description: 'Customize Search, Feedback',
  element: (
    <PageLayout
      // connector={connector}
      placeholder="Search platform.mapbox.com"
      feedbackSentryDsn={false}
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
        layout: 'page',
        headings: [
          { text: 'Section 1', slug: 'section-1', level: 2 },
          { text: 'Section 2', slug: 'section-2', level: 2 }
        ]
      }}
      navigation={{
        hierarchy: {
          '/PageLayout/': {
            parent: '/dr-ui/',
            title: 'Demo'
          }
        },
        navTabs: [
          {
            title: 'Overview',
            path: '/dr-ui/overview/',
            pages: [
              {
                path: '/dr-ui/overview/permissions/',
                title: 'Permissions'
              }
            ]
          },
          {
            title: 'Examples',
            path: '/dr-ui/examples/',
            pages: [
              {
                path: '/dr-ui/examples/basic/',
                title: 'Basic example'
              },
              {
                path: '/dr-ui/examples/fancy/',
                title: 'Fancy example'
              }
            ]
          }
        ]
      }}
    />
  )
};
export { testCases };
