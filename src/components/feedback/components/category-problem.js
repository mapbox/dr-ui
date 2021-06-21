import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackTextarea, FeedbackButton } from './assets.js';
import ControlRadioSet from '@mapbox/mr-ui/control-radio-set';

export default class CategoryProblem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
      feedback: undefined
    };
    this.handleRadios = this.handleRadios.bind(this);
    this.handleFeedback = this.handleFeedback.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleRadios(value) {
    this.setState({ value });
  }
  handleFeedback(value) {
    this.setState({ feedback: value });
  }

  submit() {
    this.props.submitFeedback({
      categoryType: this.state.value,
      feedback: this.state.feedback
    });
  }

  render() {
    const { value, feedback } = this.state;
    const { options, leadText } = this.props;
    return (
      <>
        <p>{leadText}</p>
        <div className="mb6">
          <ControlRadioSet
            id="feedback-problem-options"
            onChange={this.handleRadios}
            value={value}
            options={Object.keys(options).map((option) => ({
              value: option,
              label: option
            }))}
          />
        </div>
        {value !== undefined && (
          <>
            <FeedbackTextarea
              id="feedback-problem-textarea"
              label={options[value].question}
              value={feedback}
              onChange={this.handleFeedback}
              placeholder={options[value].placeholder}
            />
            <FeedbackButton onClick={this.submit} disabled={!feedback} />
          </>
        )}
      </>
    );
  }
}

CategoryProblem.propTypes = {
  submitFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  leadText: PropTypes.string.isRequired
};
