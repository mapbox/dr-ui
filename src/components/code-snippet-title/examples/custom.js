/*
With toggle
*/
import React from 'react';
import CodeSnippetTitle from '../code-snippet-title';
import CodeToggle from '../../code-toggle';

export default class Custom extends React.PureComponent {
  render() {
    return (
      <CodeSnippetTitle
        filename="ViewController"
        link="https://github.com/mapbox/"
        toggle={
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
        }
      />
    );
  }
}
