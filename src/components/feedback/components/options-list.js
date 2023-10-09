import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackButton, feedbackMinimum, feedbackLimit } from './forms.js';
import ControlRadioSet from '@mapbox/mr-ui/control-radio-set';
import { getOptionsData } from '../get-options-data.js';

const OptionsList = ({
  type,
  helpful,
  categoryType,
  onCategoryTypeChange,
  feedback,
  onFeedbackChange,
  onSubmit
}) => {
  const overLimit = feedback && feedback.length > feedbackLimit;

  const { options, leadText } = {
    ...getOptionsData({
      type,
      helpful,
      feedback,
      categoryType,
      onFeedbackChange
    })
  };
  let submitDisabled = false;

  if (!categoryType) submitDisabled = true;
  if (overLimit) submitDisabled = true;
  if (categoryType === 'another-reason') {
    if (!feedback) {
      submitDisabled = true;
    }

    if (feedback && feedback.length < feedbackMinimum) {
      submitDisabled = true;
    }
  }

  return (
    <div id={`${helpful ? 'yes' : 'no'}-options-list`}>
      <p className="txt-fancy txt-m">{leadText}</p>
      <ControlRadioSet
        value={categoryType}
        themeRadioContainer="txt-m block mb6 flex"
        id="feedback-category-like"
        onChange={onCategoryTypeChange}
        options={options}
      />
      <FeedbackButton onClick={onSubmit} disabled={submitDisabled} />
    </div>
  );
};

export default OptionsList;

OptionsList.propTypes = {
  type: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  helpful: PropTypes.bool,
  categoryType: PropTypes.string,
  onCategoryTypeChange: PropTypes.func,
  feedback: PropTypes.string,
  onFeedbackChange: PropTypes.func
};
