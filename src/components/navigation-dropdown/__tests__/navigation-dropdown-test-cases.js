import React from 'react';
import Basic from '../examples/basic';
import Api from '../examples/api';
import ApiNested from '../examples/api-nested';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.api = {
  description: 'API Reference',
  element: <Api />
};

testCases.apiNested = {
  description: 'API Reference, nested',
  element: <ApiNested />
};

export { testCases };
