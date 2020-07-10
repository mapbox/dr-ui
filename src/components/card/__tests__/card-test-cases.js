import React from 'react';
import Basic from '../examples/basic';
import Custom from '../examples/custom';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'Card with image',
  element: <Basic />
};

testCases.noImage = {
  description: 'Card with no image',
  element: <Custom />
};

export { testCases, noRenderCases };
