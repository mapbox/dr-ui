import NewImage from '../new-image';

const testCases = {};

testCases.basic = {
  component: NewImage,
  description: 'Basic'
};

testCases.bigger = {
  component: NewImage,
  description: 'Bigger icon',
  props: {
    size: 120
  }
};

export { testCases };
