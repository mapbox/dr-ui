import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackTextarea, FeedbackButton, feedbackMinimum } from './forms.js';
import ControlRadioSet from '@mapbox/mr-ui/control-radio-set';

export default class CategoryProblem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
      feedback: undefined,
      overLimit: false,
      validationErrorMinimum: false
    };
    this.handleRadios = this.handleRadios.bind(this);
    this.handleFeedback = this.handleFeedback.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleRadios(value) {
    this.setState({ value });
  }

  handleFeedback({ value, overLimit }) {
    const { validationErrorMinimum, feedback } = this.state;
    this.setState({ feedback: value, overLimit }, () => {
      // remove validation error as the user is typing and reaches feedbackMinimum
      if (validationErrorMinimum && feedback.length >= feedbackMinimum) {
        this.setState({ validationErrorMinimum: false });
      }
    });
  }

  submit() {
    const { feedback, value } = this.state;
    const { submitFeedback } = this.props;
    if (feedback.trim().length < feedbackMinimum) {
      this.setState({ validationErrorMinimum: true });
    } else {
      submitFeedback({
        categoryType: value,
        feedback
      });
    }
  }

  render() {
    const { value, feedback, overLimit, validationErrorMinimum } = this.state;
    const { options, leadText } = this.props;
    return (
      <>
        <p>{leadText}</p>
        <div className="mb6">
          <ControlRadioSet
            id="feedback-problem-options"
            onChange={this.handleRadios}
            themeRadio="mr6 radio--gray radio--s-label inline-block"
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
              validationErrorMinimum={validationErrorMinimum}
            />
            <FeedbackButton
              onClick={this.submit}
              disabled={!feedback || overLimit}
            />
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
