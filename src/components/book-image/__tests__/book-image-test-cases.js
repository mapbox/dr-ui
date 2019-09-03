import BookImage from '../book-image';

const testCases = {};

testCases.basic = {
  component: BookImage,
  description: 'Basic'
};

testCases.bigger = {
  component: BookImage,
  description: 'Basic',
  props: {
    size: 120
  }
};

export { testCases };
