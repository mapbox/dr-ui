import React from 'react';
import Phone from '../phone';
import Video from '../../video';

const testCases = {};

testCases.iosHori = {
  component: Phone,
  description: 'iOS landscape',
  props: {
    children: <Video src="./files/browser-example.mp4" title="example" />,
    mode: 'landscape',
    platform: 'ios'
  }
};

testCases.iosVert = {
  component: Phone,
  description: 'iOS portrait',
  props: {
    children: <img src="./files/ios-vertical.png" alt="example" />,
    mode: 'portrait',
    platform: 'ios'
  }
};

testCases.androidLandscape = {
  component: Phone,
  description: 'Android landscape',
  props: {
    children: <img src="./files/ios-horizontal.png" alt="example" />,
    mode: 'landscape',
    platform: 'android'
  }
};
testCases.androidVert = {
  component: Phone,
  description: 'Android portrait',
  props: {
    children: <img src="./files/ios-vertical.png" alt="example" />,
    mode: 'portrait',
    platform: 'android'
  }
};

export { testCases };
