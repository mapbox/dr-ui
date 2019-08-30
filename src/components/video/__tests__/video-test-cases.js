import Video from '../video';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: Video,
  description: 'Basic',
  props: {
    src:
      'https://github.com/mapbox/android-docs/blob/publisher-production/src/video/example-bathymetry-activity.mp4?raw=true',
    title: 'A video!'
  }
};

noRenderCases.reducedMotion = {
  component: Video,
  description: 'Reduced motion',
  props: {
    src:
      'https://github.com/mapbox/android-docs/blob/publisher-production/src/video/example-bathymetry-activity.mp4?raw=true',
    title: 'A video!'
  }
};

export { testCases, noRenderCases };
