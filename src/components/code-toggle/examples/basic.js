/*
Basic.
*/
import React from 'react';
import CodeToggle from '../code-toggle';

export default class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'swift'
    };
  }

  changeLanguage = (language) => this.setState({ language });

  render() {
    return (
      <CodeToggle
        id="one"
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
    );
  }
}
