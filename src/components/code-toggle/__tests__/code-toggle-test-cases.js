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
        language: 'swift',
        preferredLanguage: true
      },
      {
        language: 'objective-c',
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
        language: 'swift',
        preferredLanguage: false
      },
      {
        language: 'objective-c',
        preferredLanguage: true
      }
    ]
  }
};

testCases.objectiveC = {
  component: CodeToggle,
  description: 'Objective C preferred',
  props: {
    id: 'three',
    onChange: () => {},
    options: [
      {
        language: 'javascript',
        preferredLanguage: false
      },
      {
        language: 'java',
        preferredLanguage: true
      },
      {
        language: 'swift',
        preferredLanguage: false
      },
      {
        language: 'objective-c',
        preferredLanguage: false
      }
    ]
  }
};

export default { testCases, noRenderCases };
