/* eslint-disable xss/no-mixed-html */
import React from 'react';
import Basic from '../examples/basic';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'Basic example',
  element: <Basic />
};

export { testCases, noRenderCases };
