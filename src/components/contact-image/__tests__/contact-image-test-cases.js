import ContactImage from '../contact-image';

const testCases = {};

testCases.basic = {
  component: ContactImage,
  description: 'Basic'
};

testCases.bigger = {
  component: ContactImage,
  description: 'Bigger icon',
  props: {
    size: 120
  }
};

export { testCases };
