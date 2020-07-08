import React from 'react';
import DemoIframe from '../demo-iframe';
import Basic from '../examples/basic';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.token = {
  component: DemoIframe,
  description: 'With token',
  props: {
    src:
      'https://api.mapbox.com/styles/v1/examples/cjj0b5ie80ec32so5uo8ox21m.html?fresh=true&title=true&access_token=MapboxAccessToken#15/40.751589/-73.986485/-28/60',
    MapboxAccessToken: 'p.key10101010101010101010'
  }
};

testCases.nogl = {
  component: DemoIframe,
  description: '`gl` is false',
  props: {
    src: 'https://giphy.com/embed/ule4vhcY1xEKQ',
    gl: false
  }
};

testCases.missing = {
  component: DemoIframe,
  description: 'Missing token will return null component',
  props: {
    src:
      'https://api.mapbox.com/styles/v1/examples/cjj0b5ie80ec32so5uo8ox21m.html?fresh=true&title=true&access_token=MapboxAccessToken#15/40.751589/-73.986485/-28/60'
  }
};

export { testCases, noRenderCases };
