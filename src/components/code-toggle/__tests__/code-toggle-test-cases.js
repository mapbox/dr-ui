import React from 'react';
import CodeToggle from '../code-toggle';
import Basic from '../examples/basic';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'Swift preferred',
  element: <Basic />
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
