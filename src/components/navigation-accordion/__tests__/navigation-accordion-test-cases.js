// import React from 'react';
import NavigationAccordion from '../navigation-accordion';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  component: NavigationAccordion,
  props: {
    currentPath: 'page-one',
    contents: {
      firstLevelItems: [
        {
          title: 'Title one',
          path: 'page-one'
        },
        {
          title: 'Title two',
          path: 'page-two'
        }
      ],
      seccondLevelItems: [
        {
          level: 2,
          slug: 'heading-one',
          text: 'Heading one'
        },
        {
          level: 2,
          slug: 'heading-two',
          text: 'Heading two'
        }
      ]
    }
  }
};

testCases.noSecondLevelItems = {
  description: 'No second level items',
  component: NavigationAccordion,
  props: {
    currentPath: 'page-one',
    contents: {
      firstLevelItems: [
        {
          title: 'Title one',
          path: 'page-one'
        },
        {
          title: 'Title two',
          path: 'page-two'
        }
      ]
    }
  }
};

export { testCases };
