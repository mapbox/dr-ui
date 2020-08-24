import React from 'react';
import Basic from '../examples/basic';
import Custom from '../examples/custom';
import Cols from '../examples/cols';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.noImage = {
  description: 'Full width',
  element: <Custom />
};

testCases.cols = {
  description: 'Use cardColSize',
  element: <Cols />
};

export { testCases };
