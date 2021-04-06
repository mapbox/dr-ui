/*
Basic.
*/
import React from 'react';
import CodeToggle from '../code-toggle';

export default class Basic extends React.Component {
  handleChange = () => {};
  render() {
    return (
      <CodeToggle
        id="one"
        onChange={this.handleChange}
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
