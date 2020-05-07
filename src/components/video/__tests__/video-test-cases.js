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

testCases.settings = {
  component: Video,
  description: 'Turn off autoplay and loop',
  props: {
    src: './assets/browser-example.mp4',
    title: 'A video!',
    autoplay: false,
    loop: false
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

export { testCases, noRenderCases };
