import React from 'react';
import Tag from '../tag';
import Basic from '../examples/basic';
import Custom from '../examples/custom';
import Small from '../examples/small';
import Icon from '../examples/icon';

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

testCases.pricing = {
  component: Tag,
  description: 'Pricing tag',
  props: {
    theme: 'pricing'
  }
};

testCases.custom = {
  description: 'Custom tag',
  element: <Custom />
};

testCases.small = {
  description: 'small variant',
  element: <Small />
};

testCases.icon = {
  description: 'Use icon prop',
  element: <Icon />
};

export { testCases, noRenderCases };
