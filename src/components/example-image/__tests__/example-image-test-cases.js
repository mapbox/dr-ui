import ExampleImage from '../example-image';

const testCases = {};

testCases.basic = {
  component: ExampleImage,
  description: 'Basic'
};

testCases.bigger = {
  component: ExampleImage,
  description: 'Bigger',
  props: {
    size: 120
  }
};

export { testCases };
