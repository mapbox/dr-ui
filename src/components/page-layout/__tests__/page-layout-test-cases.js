import React from 'react';
import Page from '../examples/page';
import Example from '../examples/example';

const testCases = {};

testCases.page = {
  description: 'Page layout',
  element: <Page />
};

testCases.example = {
  description: 'Example (index) layout',
  element: <Example />
};

export { testCases };
