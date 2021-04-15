import React from 'react';
import Basic from '../examples/basic';
import Settings from '../examples/settings';
import Video from '../video';

const testCases = {};
const noRenderCases = {};

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia !== undefined
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

testCases.basic = {
  description: `Basic. Your system settings${
    prefersReducedMotion ? ' ' : ' do not '
  }prefer reduced motion, the video will${
    prefersReducedMotion ? ' not ' : ' '
  }autoplay (unless your browser settings block autoplay).`,
  element: <Basic />
};

testCases.settings = {
  description:
    'The video will not autoplay. Sets autoplay={false} and loop={false}',
  element: <Settings />
};

noRenderCases.reducedMotion = {
  component: Video,
  description: 'Reduced motion',
  props: {
    src: '../files/browser-example.mp4',
    title: 'A video!'
  }
};

export { testCases, noRenderCases };
