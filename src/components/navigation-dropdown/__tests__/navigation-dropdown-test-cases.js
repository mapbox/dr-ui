import React from 'react';
import Basic from '../examples/basic';
import Menu from '../examples/menu';
import Label from '../examples/label';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
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
