import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackTextarea, FeedbackButton } from './forms.js';

export default class CategoryConfusing extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      feedback: undefined,
      overLimit: false
    };
    this.handleFeedback = this.handleFeedback.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleFeedback({ value, overLimit }) {
    this.setState({ feedback: value, overLimit });
  }

  submit() {
    this.props.submitFeedback({ feedback: this.state.feedback });
  }

  render() {
    const { feedback, overLimit } = this.state;
    const { option, placeholder } = this.props;
    return (
      <>
        <FeedbackTextarea
          id="feedback-problem-textarea"
          label={option}
          value={feedback}
          onChange={this.handleFeedback}
          placeholder={placeholder}
        />
        <FeedbackButton
          onClick={this.submit}
          disabled={!feedback || overLimit}
        />
      </>
    );
  }
}

CategoryConfusing.propTypes = {
  submitFeedback: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};
