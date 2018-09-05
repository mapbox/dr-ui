import LevelIndicator from '../level-indicator';

const testCases = {};

testCases.levelOne = {
  component: LevelIndicator,
  description: 'Level one',
  props: {
    level: 1
  }
};

testCases.levelTwo = {
  component: LevelIndicator,
  description: 'Level two',
  props: {
    level: 2
  }
};

testCases.levelThree = {
  component: LevelIndicator,
  description: 'Level three',
  props: {
    level: 3
  }
};

export default { testCases };
