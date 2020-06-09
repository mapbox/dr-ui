import PlaygroundImage from '../playground-image';

const testCases = {};

testCases.basic = {
  component: PlaygroundImage,
  description: 'Basic'
};

testCases.bigger = {
  component: PlaygroundImage,
  description: 'Bigger',
  props: {
    size: 120
  }
};

export { testCases };
