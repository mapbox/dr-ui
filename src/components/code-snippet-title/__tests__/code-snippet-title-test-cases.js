import React from 'react';
import CodeSnippetTitle from '../code-snippet-title';
import CodeToggle from '../../code-toggle/code-toggle';

const testCases = {};

testCases.basic = {
  component: CodeSnippetTitle,
  description: 'Basic',
  props: {
    filename: 'MainActivity.java'
  }
};

testCases.withLink = {
  component: CodeSnippetTitle,
  description: 'With a link',
  props: {
    filename: 'MainActivity.java',
    link: 'https://github.com/mapbox/'
  }
};

testCases.withToggle = {
  component: CodeSnippetTitle,
  description: 'With a toggle',
  props: {
    filename: 'ViewController',
    link: 'https://github.com/mapbox/',
    toggle: (
      <CodeToggle
        id="some-id"
        onChange={() => {}}
        options={[
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
        ]}
      />
    )
  }
};

export { testCases };
