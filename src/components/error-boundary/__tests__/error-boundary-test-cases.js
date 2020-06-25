import React from 'react';
import Basic from '../examples/basic';
import Oops from '../examples/oops';
import ErrorBoundary from '../error-boundary';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.oops = {
  component: ErrorBoundary,
  element: <Oops />
};

export { testCases };
