import React from 'react';
import HelpPage from '../help-page';

import Basic from '../examples/basic';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.tutorials = {
  component: HelpPage,
  description: 'Tutorials only, no heading',
  props: {
    data: [
      {
        pages: [
          {
            title: 'Example one',
            description:
              'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            path: 'path'
          },
          {
            title: 'Example two',
            description:
              'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            path: 'path'
          }
        ]
      }
    ]
  }
};

export { testCases };
