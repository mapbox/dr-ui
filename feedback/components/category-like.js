import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackTextarea, FeedbackButton, feedbackMinimum } from './forms.js';
import ControlCheckboxSet from '@mapbox/mr-ui/control-checkbox-set';
export default class CategoryLike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      feedback: '',
      overLimit: false,
      validationErrorMinimum: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFeedback = this.handleFeedback.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange(value) {
    this.setState({
      value
    });
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
      feedback,
      value
    } = this.state;
    const {
      submitFeedback
    } = this.props;
    // textarea length validated on when "Something else" is the only selected type
    if (feedback.trim().length < feedbackMinimum && this.onlySomethingElse()) {
      this.setState({
        validationErrorMinimum: true
      });
    } else {
      submitFeedback({
        categoryType: value.join(','),
        feedback: feedback
      });
    }
  }
  onlySomethingElse() {
    return this.state.value.length === 1 && this.state.value[0] === 'Something else';
  }
  render() {
    const {
      value,
      feedback,
      overLimit,
      validationErrorMinimum
    } = this.state;
    const {
      options,
      leadText,
      placeholder
    } = this.props;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, leadText), /*#__PURE__*/React.createElement(ControlCheckboxSet, {
      legend: "Select all that apply",
      value: value,
      themeCheckbox: "mr6 inline-block checkbox--gray checkbox--s-label",
      id: "feedback-category-like",
      onChange: this.handleChange,
      options: options
    }), value.length > 0 && /*#__PURE__*/React.createElement(FeedbackTextarea, {
      value: feedback,
      onChange: this.handleFeedback,
      id: "feedback-category-like-textarea",
      placeholder: placeholder,
      validationErrorMinimum: validationErrorMinimum
    }), /*#__PURE__*/React.createElement(FeedbackButton, {
      onClick: this.submit,
      disabled: !value.length || !feedback && this.onlySomethingElse() || overLimit
    }));
  }
}