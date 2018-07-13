// import React from 'react';
import NavigationDropdown from '../navigation-dropdown';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  component: NavigationDropdown,
  props: {
    currentPath: 'page-one',
    dropdownOptions: [
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
};

export { testCases };
