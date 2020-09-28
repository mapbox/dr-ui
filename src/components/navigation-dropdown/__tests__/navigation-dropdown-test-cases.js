import React from 'react';
import NavigationDropdown from '../navigation-dropdown';
import Basic from '../examples/basic';
import Menu from '../examples/menu';
import Label from '../examples/label';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.many = {
  description: 'Many dropdown items',
  element: (
    <NavigationDropdown
      currentPath="page-7"
      id="many"
      dropdownOptions={Array.apply(null, { length: 15 }).map((item, index) => ({
        title: `Page ${index}`,
        path: `page-${index}`
      }))}
    />
  )
};

testCases.superLong = {
  description: 'Super long title will be truncated',
  element: (
    <NavigationDropdown
      currentPath="page-one"
      id="super"
      dropdownOptions={[
        {
          title:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
          path: 'page-one'
        },
        {
          title: 'Title two',
          path: 'page-two'
        }
      ]}
    />
  )
};

testCases.menu = {
  description: 'Missing `currentPath`',
  element: <Menu />
};

testCases.customLabel = {
  description: 'Custom label',
  element: <Label />
};

export { testCases };
