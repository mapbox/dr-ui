import React from 'react';
import Basic from '../examples/basic';
import Custom from '../examples/custom';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.custom = {
  description: 'With link to GitHub file',
  element: <Custom />
};

export { testCases };
