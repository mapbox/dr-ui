import React from 'react';
import Basic from '../examples/basic';
import GLWrapper from '../../gl-wrapper';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

noRenderCases.ie = {
  description: "reason='insufficient ECMAScript 6 support'",
  element: (
    <GLWrapper reason="insufficient ECMAScript 6 support">
      Your browser supports Mapbox GL!
    </GLWrapper>
  )
};

noRenderCases.webgl = {
  description: "reason='insufficient WebGL support'",
  element: (
    <GLWrapper reason="insufficient WebGL support">
      Your browser supports Mapbox GL!
    </GLWrapper>
  )
};

export { testCases, noRenderCases };
