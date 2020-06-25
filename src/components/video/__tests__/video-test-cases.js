import React from 'react';
import Basic from '../examples/basic';
import Settings from '../examples/settings';
import Video from '../video';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.settings = {
  description: 'Turn off autoplay and loop',
  element: <Settings />
};

noRenderCases.reducedMotion = {
  component: Video,
  description: 'Reduced motion',
  props: {
    src: './files/browser-example.mp4',
    title: 'A video!'
  }
};

export { testCases, noRenderCases };
