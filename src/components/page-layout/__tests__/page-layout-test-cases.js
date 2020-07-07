import React from 'react';
import Page from '../examples/basic';
import Example from '../examples/example';
import ExamplePage from '../examples/example-page';
import Accordion from '../examples/accordion';
import Full from '../examples/full';

const testCases = {};

testCases.full = {
  description: 'full layout',
  element: <Full />
};

testCases.accordion = {
  description: 'Accordion layout',
  element: <Accordion />
};

testCases.page = {
  description: 'Page layout',
  element: <Page />
};

testCases.example = {
  description: 'Example (index) layout',
  element: <Example />
};

testCases.examplePage = {
  description: 'Example page layout',
  element: <ExamplePage />
};

export { testCases };
