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
  const {
    options,
    leadText
  } = {
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
  return /*#__PURE__*/React.createElement("div", {
    id: `${helpful ? 'yes' : 'no'}-options-list`
  }, /*#__PURE__*/React.createElement("p", {
    className: "txt-fancy txt-m"
  }, leadText), /*#__PURE__*/React.createElement(ControlRadioSet, {
    value: categoryType,
    themeRadioContainer: "txt-m block mb6 flex",
    id: "feedback-category-like",
    onChange: onCategoryTypeChange,
    options: options
  }), /*#__PURE__*/React.createElement(FeedbackButton, {
    onClick: onSubmit,
    disabled: submitDisabled
  }));
};
export default OptionsList;