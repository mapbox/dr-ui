/*
Basic.
*/
import React from 'react';
import CodeToggle from '../code-toggle';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <CodeToggle
        id="one"
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
    );
  }
}
