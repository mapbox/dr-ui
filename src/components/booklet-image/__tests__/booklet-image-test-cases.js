import React from 'react';
import BookletImage from '../booklet-image';
import Basic from '../examples/basic';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.bigger = {
  component: BookletImage,
  description: 'Bigger icon',
  props: {
    size: 120
  }
};

export { testCases };
