import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackTextarea, FeedbackButton } from './forms.js';
import ControlCheckboxSet from '@mapbox/mr-ui/control-checkbox-set';

export default class CategoryLike extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: [], feedback: '', overLimit: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleFeedback = this.handleFeedback.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  handleFeedback({ value, overLimit }) {
    this.setState({ feedback: value, overLimit });
  }

  submit() {
    this.props.submitFeedback({
      categoryType: this.state.value.join(','),
      feedback: this.state.feedback
    });
  }

  render() {
    const { value, feedback, overLimit } = this.state;
    const { options, leadText, placeholder } = this.props;
    const onlySomethingElse =
      value.length === 1 && value[0] === 'Something else';
    return (
      <>
        <p>{leadText}</p>
        <ControlCheckboxSet
          legend="Select all that apply"
          value={value}
          id="feedback-category-like"
          onChange={this.handleChange}
          options={options.map((option) => ({
            value: option,
            label: option
          }))}
        />
        {value.length > 0 && (
          <FeedbackTextarea
            value={feedback}
            onChange={this.handleFeedback}
            id="feedback-category-like-textarea"
            placeholder={placeholder}
          />
        )}
        <FeedbackButton
          onClick={this.submit}
          disabled={
            !value.length || (!feedback && onlySomethingElse) || overLimit
          }
        />
      </>
    );
  }
}

CategoryLike.propTypes = {
  submitFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  leadText: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};
