import WarningImage from '../warning-image';

const testCases = {};

testCases.warning = {
  component: WarningImage,
  description: 'Warning',
  props: {
    color: 'orange'
  }
};

testCases.bigger = {
  component: WarningImage,
  description: 'Bigger icon',
  props: {
    size: 120,
    color: 'orange'
  }
};

testCases.error = {
  component: WarningImage,
  description: 'Error',
  props: {
    color: 'red'
  }
};

testCases.biggerRed = {
  component: WarningImage,
  description: 'Bigger icon',
  props: {
    size: 120,
    color: 'red'
  }
};

export { testCases };
