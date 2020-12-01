import React from 'react';
import Basic from '../examples/basic';
import Video from '../video';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

noRenderCases.reducedMotion = {
  component: Video,
  description: 'Reduced motion',
  props: {
    src: '/files/browser-example.mp4',
    title: 'A video!'
  }
};

export { testCases, noRenderCases };
