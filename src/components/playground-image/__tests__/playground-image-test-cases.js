import React from 'react';
import PlaygroundImage from '../playground-image';
import Basic from '../examples/basic';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.bigger = {
  component: PlaygroundImage,
  description: 'Bigger',
  props: {
    size: 120
  }
};

export { testCases };
