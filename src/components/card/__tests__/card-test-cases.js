import React from 'react';
import Basic from '../examples/basic';
import Custom from '../examples/custom';
import NoDesc from '../examples/no-description';

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

testCases.noDescription = {
  description: 'Card without description',
  element: <NoDesc />
};

export { testCases, noRenderCases };
