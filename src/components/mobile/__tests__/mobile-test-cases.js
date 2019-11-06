import React from 'react';
import Mobile from '../mobile';
import Video from '../../video';

const testCases = {};

testCases.iosHori = {
  component: Mobile,
  description: 'iOS landscape',
  props: {
    asset: <Video src="./assets/browser-example.mp4" title="example" />,
    alt: 'manage styles',
    mode: 'landscape',
    platform: 'ios'
  }
};

testCases.iosVert = {
  component: Mobile,
  description: 'iOS portrait',
  props: {
    asset: <img src="./assets/ios-vertical.png" alt="example" />,
    mode: 'portrait',
    platform: 'ios'
  }
};

testCases.androidLandscape = {
  component: Mobile,
  description: 'Android landscape',
  props: {
    asset: <img src="./assets/ios-horizontal.png" alt="example" />,
    mode: 'landscape',
    platform: 'android'
  }
};
testCases.androidVert = {
  component: Mobile,
  description: 'Android portrait',
  props: {
    asset: <img src="./assets/ios-vertical.png" alt="example" />,
    mode: 'portrait',
    platform: 'android'
  }
};

export { testCases };
