import React from 'react';
import TroubleshootImage from '../troubleshoot-image';
import Basic from '../examples/basic';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.bigger = {
  component: TroubleshootImage,
  description: 'Bigger icon',
  props: {
    size: 120
  }
};

export { testCases };
