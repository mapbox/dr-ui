import TroubleshootImage from '../troubleshoot-image';

const testCases = {};

testCases.basic = {
  component: TroubleshootImage,
  description: 'Basic'
};

testCases.bigger = {
  component: TroubleshootImage,
  description: 'Bigger icon',
  props: {
    size: 120
  }
};

export { testCases };
