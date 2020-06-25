import React from 'react';
import Basic from '../examples/basic';
import Custom from '../examples/custom';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.withToggle = {
  description: 'With a toggle',
  element: <Custom />
};

export { testCases };
