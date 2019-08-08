import GLWrapper from '../gl-wrapper';
import React from 'react';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: GLWrapper,
  description: 'Basic',
  props: {
    map: (
      <iframe src="https://docs.mapbox.com/help/demos/how-mapbox-works/map-design.html" />
    )
  }
};

export { testCases, noRenderCases };
