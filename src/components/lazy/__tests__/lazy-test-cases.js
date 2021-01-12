import React from 'react';
import Basic from '../examples/basic';
import Lazy from '../../lazy/lazy';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.larger = {
  description: 'A larger example',
  element: (
    <Lazy
      lazyHeight={850}
      lazyComponent={() => import('../../video/examples/basic.js')}
    />
  )
};

export { testCases, noRenderCases };
