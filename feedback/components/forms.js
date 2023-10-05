import React from 'react';
import PropTypes from 'prop-types';
import ControlTextarea from '@mapbox/mr-ui/control-textarea';
import classnames from 'classnames';

// character limit for the feedback textarea
export const feedbackLimit = 1000;
export const feedbackMinimum = 3;

// Textarea for the user to submit text feedback
export class FeedbackTextarea extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      feedback: ''
    };
    this.handleFeedback = this.handleFeedback.bind(this);
  }
  handleFeedback(value) {
    this.setState({
      feedback: value
    }, () => {
      this.props.onChange(value);
    });
  }
  isOverLimit() {
    return this.state.feedback.length > feedbackLimit;
  }
  render() {
    const {
      id,
      label,
      placeholder,
      validationErrorMinimum
    } = this.props;
    const {
      feedback
    } = this.state;
    const feedbackLength = this.state.feedback ? feedbackLimit - this.state.feedback.length : feedbackLimit;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "relative mt12"
    }, /*#__PURE__*/React.createElement(ControlTextarea, {
      themeControlTextarea: "textarea hmin60 bg-white txt-ms",
      themeLabel: "txt-m mb6",
      id: id,
      label: label,
      value: feedback,
      onChange: this.handleFeedback,
      placeholder: placeholder,
      validationError: (validationErrorMinimum ? 'Tell us more!' : '') || (this.isOverLimit() ? 'Your feedback is over the limit' : '')
    }), /*#__PURE__*/React.createElement("div", {
      id: "feedback-length",
      className: classnames('absolute bottom right mb6 mr18 txt-mono bg-lighten75 px3 txt-s', {
        'color-red-dark': this.isOverLimit()
      })
    }, feedbackLength)));
  }
}
export class FeedbackButton extends React.PureComponent {
  render() {
    const {
      onClick,
      disabled
    } = this.props;
    return /*#__PURE__*/React.createElement("button", {
      id: "feedback-submit-button",
      onClick: onClick,
      disabled: disabled,
      className: "btn btn--gray mt6"
    }, "Submit");
  }
}