import React from 'react';
import ContactImage from '../contact-image';
import Basic from '../examples/basic';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.bigger = {
  component: ContactImage,
  description: 'Bigger icon',
  props: {
    size: 120
  }
};

export { testCases };
