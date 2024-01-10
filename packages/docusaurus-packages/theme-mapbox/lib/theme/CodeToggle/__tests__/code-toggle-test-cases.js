import React from 'react';
import CodeToggle from '../code-toggle';
import Basic from '../examples/basic';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'Swift preferred (interactive)',
  element: <Basic />
};

testCases.objectiveC = {
  component: CodeToggle,
  description: 'Objective C preferred (not interactive)',
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
  description: 'Java preferred (not interactive)',
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
