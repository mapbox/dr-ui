import React from 'react';
import Basic from '../examples/basic';
import Api from '../examples/api';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.api = {
  description: 'API Reference',
  element: <Api />
};

export { testCases };
