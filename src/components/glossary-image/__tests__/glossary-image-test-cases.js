import GlossaryImage from '../glossary-image';

const testCases = {};

testCases.basic = {
  component: GlossaryImage,
  description: 'Basic'
};

testCases.bigger = {
  component: GlossaryImage,
  description: 'Bigger',
  props: {
    size: 120
  }
};

export { testCases };
