import React from 'react';
import Basic from '../examples/basic';
import Custom from '../examples/custom';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.noImage = {
  description: 'Full width',
  element: <Custom />
};

export { testCases };
