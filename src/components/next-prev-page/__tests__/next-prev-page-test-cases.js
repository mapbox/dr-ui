import React from 'react';
import NextPrevPage from '../next-prev-page';

const testCases = {};

testCases.basic = {
  description: 'Basic NextPrevPage',
  element: (
    <NextPrevPage
      pathname="page-one/heading-two/sub-page-two/"
      frontMatter={{
        groupOrder: 2
      }}
      navigation={{
        hierarchy: {
          'page-one/heading-two/': {
            parent: 'page-one/',
            title: 'Page one'
          },
          'page-one/heading-two/sub-page-one/': {
            parent: 'page-one/heading-two/',
            title: 'Heading Two'
          },
          'page-one/heading-two/sub-page-two/': {
            parent: 'page-one/heading-two/',
            title: 'Heading Two'
          },
          'page-one/heading-two/sub-page-three/': {
            parent: 'page-one/heading-two/',
            title: 'Heading Two'
          }
        },
        navTabs: [
          {
            title: 'Title one',
            path: 'page-one',
            id: 'title-one',
            pages: [
              {
                title: 'Heading one',
                path: 'page-one/heading-one/',
                id: 'heading-one',
                subPages: [
                  {
                    title: 'Sub page one',
                    path: 'page-one/heading-one/sub-page-one/',
                    id: 'sp-one'
                  },
                  {
                    title: 'Sub page two',
                    path: 'page-one/heading-one/sub-page-two/',
                    id: 'sp-two'
                  }
                ]
              },
              {
                title: 'Heading two',
                path: 'page-one/heading-two/',
                id: 'heading-two',
                subPages: [
                  {
                    title: 'Sub page one',
                    description: 'First description',
                    groupOrder: 1,
                    path: 'page-one/heading-two/sub-page-one/',
                    id: 'sp-one'
                  },
                  {
                    title: 'Sub page two',
                    description: 'Second description',
                    path: 'page-one/heading-two/sub-page-two/',
                    groupOrder: 2,
                    id: 'sp-two'
                  },
                  {
                    title: 'Sub page three',
                    description: 'Third description',
                    path: 'page-one/heading-two/sub-page-three/',
                    groupOrder: 3,
                    id: 'sp-three'
                  }
                ]
              },
              {
                title: 'Heading three',
                path: 'page-one/heading-three/',
                id: 'heading-three'
              },
              {
                title: 'Heading four',
                path: 'page-one/heading-four/',
                id: 'heading-four'
              }
            ]
          }
        ]
      }}
    />
  )
};

export { testCases };
