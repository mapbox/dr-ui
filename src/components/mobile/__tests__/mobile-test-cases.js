import Mobile from '../mobile';

const testCases = {};

testCases.iosHori = {
  component: Mobile,
  description: 'iOS landscape',
  props: {
    imagePath:
      'https://dl.dropbox.com/s/asvxjgtil5cp0hv/ios-landscape.png?dl=0',
    alt: 'manage styles',
    mode: 'landscape',
    platform: 'ios'
  }
};

testCases.iosVert = {
  component: Mobile,
  description: 'iOS portrait',
  props: {
    imagePath: 'https://dl.dropbox.com/s/yd4hr9yxeu3pm7o/ios-portrait.png',
    alt: 'manage styles',
    mode: 'portrait',
    platform: 'ios'
  }
};

testCases.androidLandscape = {
  component: Mobile,
  description: 'Android landscape',
  props: {
    imagePath:
      'https://dl.dropbox.com/s/asvxjgtil5cp0hv/ios-landscape.png?dl=0',
    alt: 'manage styles',
    mode: 'landscape',
    platform: 'android'
  }
};
testCases.androidVert = {
  component: Mobile,
  description: 'Android portrait',
  props: {
    imagePath: 'https://dl.dropbox.com/s/yd4hr9yxeu3pm7o/ios-portrait.png',
    alt: 'manage styles',
    mode: 'portrait',
    platform: 'android'
  }
};

export { testCases };
