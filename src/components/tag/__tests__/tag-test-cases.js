import React from 'react';
import Tag from '../tag';
import Basic from '../examples/basic';
import Custom from '../examples/custom';

const testCases = {};
const noRenderCases = {};

testCases.beta = {
  description: 'Beta tag',
  element: <Basic />
};

testCases.fundamentals = {
  component: Tag,
  description: 'Fundamentals tag',
  props: {
    theme: 'fundamentals'
  }
};

testCases.legacy = {
  component: Tag,
  description: 'Legacy tag',
  props: {
    theme: 'legacy'
  }
};

testCases.new = {
  component: Tag,
  description: 'New tag',
  props: {
    theme: 'new'
  }
};

testCases.custom = {
  description: 'Custom tag',
  element: <Custom />
};

export { testCases, noRenderCases };
