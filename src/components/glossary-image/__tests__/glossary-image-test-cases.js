import React from 'react';
import GlossaryImage from '../glossary-image';
import Basic from '../examples/basic';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.bigger = {
  component: GlossaryImage,
  description: 'Bigger',
  props: {
    size: 120
  }
};

export { testCases };
