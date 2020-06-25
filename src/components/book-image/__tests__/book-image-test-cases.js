import React from 'react';
import BookImage from '../book-image';
import Basic from '../examples/basic';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.bigger = {
  component: BookImage,
  description: 'Basic',
  props: {
    size: 120
  }
};

export { testCases };
