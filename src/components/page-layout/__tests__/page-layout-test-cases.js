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
            href: '/PageLayout/',
            id: '/PageLayout/',
            label: 'Overview'
          },
          {
            href: '/PageLayout/specification/',
            id: '/PageLayout/specification/',
            label: 'Specification'
          },
          {
            href: '/PageLayout/examples/',
            id: '/PageLayout/examples/',
            label: 'Examples'
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
        navTabs: []
      }}
    />
  )
};
export { testCases };
