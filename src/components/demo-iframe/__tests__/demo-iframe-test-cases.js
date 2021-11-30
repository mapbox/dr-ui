import React from 'react';
import DemoIframe from '../demo-iframe';
import Basic from '../examples/basic';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

noRenderCases.token = {
  component: DemoIframe,
  description: 'Overrides the MapboxAccessToken with another token',
  props: {
    src: 'https://api.mapbox.com/styles/v1/examples/cjj0b5ie80ec32so5uo8ox21m.html?fresh=true&title=true&access_token=MapboxAccessToken#15/40.751589/-73.986485/-28/60',
    title: 'Static API request',
    MapboxAccessToken: 'p.key10101010101010101010',
    gl: false
  }
};

testCases.nogl = {
  component: DemoIframe,
  description: '`gl` is false',
  props: {
    src: 'https://giphy.com/embed/ule4vhcY1xEKQ',
    title: 'Cool gif',
    gl: false
  }
};

testCases.missing = {
  component: DemoIframe,
  description: 'Missing token will return null component',
  props: {
    title: 'Static API request',
    src: 'https://api.mapbox.com/styles/v1/examples/cjj0b5ie80ec32so5uo8ox21m.html?fresh=true&title=true&access_token=MapboxAccessToken#15/40.751589/-73.986485/-28/60'
  }
};

testCases.height = {
  component: DemoIframe,
  description: 'Custom height used for iframe.',
  props: {
    title: 'Static API request',
    src: './files/ios-horizontal.png',
    height: 100
  }
};

export { testCases, noRenderCases };
