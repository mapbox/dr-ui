/*
Basic.
*/
import React from 'react';
import CodeToggle from '../code-toggle';

export default class Example extends React.Component {
  render() {
    return (
      <CodeToggle
        id="one"
        onChange={() => {}}
        options={[
          {
            language: 'swift',
            preferredLanguage: true
          },
          {
            language: 'objective-c',
            preferredLanguage: false
          }
        ]}
      />
    );
  }
}
