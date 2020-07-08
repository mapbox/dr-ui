import React from 'react';
import ExampleImage from '../example-image';
import Basic from '../examples/basic';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.bigger = {
  component: ExampleImage,
  description: 'Bigger',
  props: {
    size: 120
  }
};

export { testCases };
