import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackTextarea, FeedbackButton, feedbackMinimum } from './forms.js';
export default class CategoryConfusing extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      feedback: undefined,
      overLimit: false,
      validationErrorMinimum: false
    };
    this.handleFeedback = this.handleFeedback.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleFeedback(_ref) {
    let {
      value,
      overLimit
    } = _ref;
    const {
      validationErrorMinimum,
      feedback
    } = this.state;
    this.setState({
      feedback: value,
      overLimit
    }, () => {
      // remove validation error as the user is typing and reaches feedbackMinimum
      if (validationErrorMinimum && feedback.length >= feedbackMinimum) {
        this.setState({
          validationErrorMinimum: false
        });
      }
    });
  }
  submit() {
    const {
      feedback
    } = this.state;
    const {
      submitFeedback
    } = this.props;
    if (feedback.trim().length < feedbackMinimum) {
      this.setState({
        validationErrorMinimum: true
      });
    } else {
      submitFeedback({
        feedback
      });
    }
  }
  render() {
    const {
      feedback,
      overLimit,
      validationErrorMinimum
    } = this.state;
    const {
      option,
      placeholder
    } = this.props;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FeedbackTextarea, {
      id: "feedback-problem-textarea",
      label: option,
      value: feedback,
      onChange: this.handleFeedback,
      placeholder: placeholder,
      validationErrorMinimum: validationErrorMinimum
    }), /*#__PURE__*/React.createElement(FeedbackButton, {
      onClick: this.submit,
      disabled: !feedback || overLimit
    }));
  }
}