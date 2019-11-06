import Mobile from '../mobile';

const testCases = {};

testCases.iosHori = {
  component: Mobile,
  description: 'iOS landscape',
  props: {
    videoPath: './assets/browser-example.mp4',
    alt: 'manage styles',
    mode: 'landscape',
    platform: 'ios'
  }
};

testCases.iosVert = {
  component: Mobile,
  description: 'iOS portrait',
  props: {
    imagePath: './assets/ios-vertical.png',
    alt: 'manage styles',
    mode: 'portrait',
    platform: 'ios'
  }
};

testCases.androidLandscape = {
  component: Mobile,
  description: 'Android landscape',
  props: {
    imagePath: './assets/ios-horizontal.png',
    alt: 'manage styles',
    mode: 'landscape',
    platform: 'android'
  }
};
testCases.androidVert = {
  component: Mobile,
  description: 'Android portrait',
  props: {
    imagePath: './assets/ios-vertical.png',
    alt: 'manage styles',
    mode: 'portrait',
    platform: 'android'
  }
};

export { testCases };
