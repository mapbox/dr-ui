import CodeToggle from '../code-toggle';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: CodeToggle,
  description: 'Swift preferred',
  props: {
    id: 'one',
    onChange: () => {},
    options: [
      {
        label: 'Swift',
        language: 'swift',
        preferredLanguage: true
      },
      {
        label: 'Objective-C',
        language: 'objectiveC',
        preferredLanguage: false
      }
    ]
  }
};

testCases.objectiveC = {
  component: CodeToggle,
  description: 'Objective C preferred',
  props: {
    id: 'two',
    onChange: () => {},
    options: [
      {
        label: 'Swift',
        language: 'swift',
        preferredLanguage: false
      },
      {
        label: 'Objective-C',
        language: 'objectiveC',
        preferredLanguage: true
      }
    ]
  }
};

testCases.objectiveC2 = {
  component: CodeToggle,
  description: 'Java preferred',
  props: {
    id: 'three',
    onChange: () => {},
    options: [
      {
        label: 'JavaScript',
        language: 'javascript',
        preferredLanguage: false
      },
      {
        label: 'Java',
        language: 'java',
        preferredLanguage: true
      },
      {
        label: 'Swift',
        language: 'swift',
        preferredLanguage: false
      },
      {
        label: 'Objective-C',
        language: 'objectiveC',
        preferredLanguage: false
      }
    ]
  }
};

export { testCases, noRenderCases };
