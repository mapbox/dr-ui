import React from 'react';
import Phone from '../phone';
import Video from '../../video';

const testCases = {};

testCases.iosHori = {
  component: Phone,
  description: 'iOS landscape',
  props: {
    asset: <Video src="./assets/browser-example.mp4" title="example" />,
    alt: 'manage styles',
    mode: 'landscape',
    platform: 'ios'
  }
};

testCases.iosVert = {
  component: Phone,
  description: 'iOS portrait',
  props: {
    asset: <img src="./assets/ios-vertical.png" alt="example" />,
    mode: 'portrait',
    platform: 'ios'
  }
};

testCases.androidLandscape = {
  component: Phone,
  description: 'Android landscape',
  props: {
    asset: <img src="./assets/ios-horizontal.png" alt="example" />,
    mode: 'landscape',
    platform: 'android'
  }
};
testCases.androidVert = {
  component: Phone,
  description: 'Android portrait',
  props: {
    asset: <img src="./assets/ios-vertical.png" alt="example" />,
    mode: 'portrait',
    platform: 'android'
  }
};

export { testCases };
