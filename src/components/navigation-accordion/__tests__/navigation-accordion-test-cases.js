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
    location: { pathName: 'heading-one' },
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
            tag: 'beta'
          },
          {
            title: 'Heading two',
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
            },
            path: 'heading-two'
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

export { testCases };
