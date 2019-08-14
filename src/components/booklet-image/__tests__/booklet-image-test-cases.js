import BookletImage from '../booklet-image';

const testCases = {};

testCases.basic = {
  component: BookletImage,
  description: 'Basic'
};

testCases.bigger = {
  component: BookletImage,
  description: 'Bigger icon',
  props: {
    size: 120
  }
};

export { testCases };
