import React from 'react';
import PropTypes from 'prop-types';
import ControlTextarea from '@mapbox/mr-ui/control-textarea';
import Icon from '@mapbox/mr-ui/icon';
import classnames from 'classnames';

// character limit for the feedback textarea
export const feedbackLimit = 1000;

// Textarea for the user to submit text feedback
export class FeedbackTextarea extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      feedback: ''
    };
  }

  handleFeedback = (value) => {
    this.setState({ feedback: value }, () => {
      this.props.onChange({ value, overLimit: this.isOverLimit() });
    });
  };

  isOverLimit() {
    return this.state.feedback.length > feedbackLimit;
  }

  renderOverLimit = (feedbackLength) => {
    return (
      <div
        id="feedback-overlimit"
        className="color-red txt-s bg-red-faint round py3 pl6 pr12 mt6"
      >
        <Icon name="alert" inline={true} /> Your message is over the{' '}
        {feedbackLength} character limit.
      </div>
    );
  };

  render() {
    const { id, label, placeholder, value } = this.props;
    const feedbackLength = this.state.feedback
      ? feedbackLimit - this.state.feedback.length
      : feedbackLimit;
    const feedbackOverLimit = this.isOverLimit();
    return (
      <>
        <div className="relative">
          <ControlTextarea
            themeControlTextarea="textarea hmin120 bg-white"
            themeLabel="txt-m mb6"
            id={id}
            label={label}
            value={value}
            onChange={this.handleFeedback}
            placeholder={placeholder}
          />
          <div
            id="feedback-length"
            className={classnames(
              'absolute bottom right mb6 mr18 txt-mono bg-lighten75 px3 txt-s',
              {
                'color-red': this.feedbackOverLimit
              }
            )}
          >
            {feedbackLength}
          </div>
        </div>
        {feedbackOverLimit && this.renderOverLimit(feedbackLimit)}
      </>
    );
  }
}

FeedbackTextarea.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export class FeedbackButton extends React.PureComponent {
  render() {
    const { onClick, disabled } = this.props;
    return (
      <button
        id="dr-ui--feedback-submit-button"
        onClick={onClick}
        disabled={disabled}
        className="btn mt6"
      >
        Submit feedback
      </button>
    );
  }
}

FeedbackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};
