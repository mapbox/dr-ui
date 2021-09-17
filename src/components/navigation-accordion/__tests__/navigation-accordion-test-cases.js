import React from 'react';
import NavigationAccordion from '../navigation-accordion';
import Basic from '../examples/basic';

const testCases = {};

testCases.basic = {
  description: 'Basic NavigationAccordion',
  element: <Basic />
};

testCases.withTags = {
  description: 'Titles with tags',
  component: NavigationAccordion,
  props: {
    location: { pathname: 'heading-one' },
    parentPage: 'page-one',
    navigation: [
      {
        title: 'Title one',
        path: 'page-one',
        id: 'title-one',
        pages: [
          {
            title: 'Heading one',
            path: 'heading-one',
            id: 'heading-one',
            tag: 'beta'
          },
          {
            title: 'Heading two',
            path: 'heading-two',
            id: 'heading-two',
            tag: 'custom',
            customTagProps: {
              customLabel: 'Custom',
              customTooltipText: 'This is a custom tag.',
              customStyles: {
                background: '#FEDADA',
                color: '#bb2224',
                borderColor: '#FD8383'
              },
              customIcon: 'alert'
            }
          }
        ]
      },
      {
        title: 'Title two',
        tag: 'beta',
        path: 'page-two',
        id: 'page-two'
      }
    ]
  }
};

testCases.withSubPages = {
  description: 'Sub pages',
  component: NavigationAccordion,
  props: {
    location: { pathname: 'page-one/heading-two/sub-page-one/' },
    parentPage: 'page-one',
    navigation: [
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
            path: 'heading-two',
            id: 'heading-two',
            subPages: [
              {
                title: 'Sub page one',
                path: 'page-one/heading-two/sub-page-one/',
                id: 'sp-one'
              },
              {
                title: 'Sub page two',
                path: 'page-one/heading-two/sub-page-two/',
                id: 'sp-two'
              },
              {
                title: 'Sub page three',
                path: 'page-one/heading-two/sub-page-three/',
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
      },
      {
        title: 'Title two',
        path: 'page-two',
        id: 'page-two'
      }
    ]
  }
};

testCases.noParent = {
  description: 'An active (hidden) page without a parent',
  component: NavigationAccordion,
  props: {
    location: { pathname: 'heading-one' },
    parentPage: undefined,
    navigation: [
      {
        title: 'Title one',
        path: 'page-one',
        id: 'title-one'
      }
    ]
  }
};

export { testCases };
