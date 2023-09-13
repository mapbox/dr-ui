import React from 'react';
import Basic from '../examples/basic';

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

export { testCases, noRenderCases };
