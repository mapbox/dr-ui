/*
With toggle
*/
import React from 'react';
import CodeSnippetTitle from '../code-snippet-title';
import CodeToggle from '../../code-toggle';

export default class Custom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'swift'
    };
  }

  changeLanguage = (language) => this.setState({ language });
  render() {
    return (
      <CodeSnippetTitle
        filename="ViewController"
        link="https://github.com/mapbox/"
        toggle={
          <CodeToggle
            id="some-id"
            onChange={this.changeLanguage}
            options={[
              {
                label: 'Swift',
                language: 'swift',
                preferredLanguage: this.state.language === 'swift'
              },
              {
                label: 'Objective-C',
                language: 'objectiveC',
                preferredLanguage: this.state.language === 'objectiveC'
              }
            ]}
          />
        }
      />
    );
  }
}
