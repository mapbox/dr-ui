import Video from '../video';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: Video,
  description: 'Basic',
  props: {
    src: './assets/browser-example.mp4',
    title: 'A video!'
  }
};

noRenderCases.reducedMotion = {
  component: Video,
  description: 'Reduced motion',
  props: {
    src: './assets/browser-example.mp4',
    title: 'A video!'
  }
};

testCases.iframe = {
  component: Video,
  description: 'Load video with an iframe (for Vimeo, YouTube, etc)',
  props: {
    src: 'https://player.vimeo.com/video/388379420',
    themeVideoContainer: 'bg-gray-dark',
    iframe: true,
    title: 'Another video!'
  }
};

export { testCases, noRenderCases };
