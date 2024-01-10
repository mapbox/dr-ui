import React from 'react';
import Basic from '../examples/basic';
import MapWrapper from '../../map-wrapper';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

noRenderCases.ie = {
  description: "reason='insufficient ECMAScript 6 support'",
  element: (
    <MapWrapper height={36} reason="insufficient ECMAScript 6 support">
      Your browser supports Mapbox GL!
    </MapWrapper>
  )
};

noRenderCases.webgl = {
  description: "reason='insufficient WebGL support'",
  element: (
    <MapWrapper height={36} reason="insufficient WebGL support">
      Your browser supports Mapbox GL!
    </MapWrapper>
  )
};

export { testCases, noRenderCases };
