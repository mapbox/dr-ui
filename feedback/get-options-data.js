/* eslint es/no-computed-properties: off */
import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackTextarea } from './components/forms';
// This function holds the majority of text for the Feedback component
// It returns an object:
// - The key is the category's name
// - `helpful` infers if the user found the content helpful
// - `component` returns the component for the category
// To add, remove, or change the categories, update the object and the Feedback will automatically update with your changes.

const LabelItem = ({
  title,
  subTitle,
  selected,
  onFeedbackChange
}) => {
  let placeholder = '(Optional) Try to be as specific as possible.';
  if (title === 'Another reason') {
    placeholder = '';
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-child-grow",
    style: {
      position: 'relative',
      top: '-3px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "txt-ms"
  }, title), subTitle && /*#__PURE__*/React.createElement("div", {
    className: "txt-light txt-s"
  }, subTitle), selected && /*#__PURE__*/React.createElement(FeedbackTextarea, {
    id: 'feedback',
    placeholder: placeholder,
    onChange: onFeedbackChange
  }));
};
const helpfulOptionsRaw = [{
  value: 'accurate',
  title: 'Accurate',
  subTitle: 'Accurately describes the product or feature.'
}, {
  value: 'solved-my-problem',
  title: 'Solved my problem',
  subTitle: 'Helped me resolve an issue.'
}, {
  value: 'easy-to-understand',
  title: 'Easy to understand',
  subTitle: 'Easy to follow and comprehend.'
}, {
  value: 'helped-decide-to-use',
  title: 'Helped me decide to use the product',
  subTitle: 'Convinced me to adopt the product or feature.'
}];
const notHelpfulOptionsRaw = [{
  value: 'inaccurate',
  title: 'Inaccurate',
  subTitle: "Doesn't accurately describe the product or feature."
}, {
  value: 'could-not-find',
  title: "Couldn't find what I was looking for",
  subTitle: 'Missing important information.'
}, {
  value: 'hard-to-understand',
  title: 'Hard to understand',
  subTitle: 'Too complicated or unclear.'
}, {
  value: 'code-sample-errors',
  title: 'Code sample errors',
  subTitle: 'One or more code samples are incorrect.'
}];
export function getOptionsData({
  helpful,
  categoryType,
  onFeedbackChange
}) {
  const anotherReasonOption = {
    label: /*#__PURE__*/React.createElement(LabelItem, {
      title: "Another reason",
      selected: categoryType === 'another-reason',
      onFeedbackChange: onFeedbackChange
    }),
    value: 'another-reason'
  };
  if (helpful) {
    return {
      leadText: 'What did you like?',
      options: [...helpfulOptionsRaw.map(({
        value,
        title,
        subTitle
      }) => {
        return {
          label: /*#__PURE__*/React.createElement(LabelItem, {
            title: title,
            subTitle: subTitle,
            selected: categoryType === value,
            onFeedbackChange: onFeedbackChange
          }),
          value
        };
      }), anotherReasonOption]
    };
  } else {
    return {
      leadText: 'What went wrong?',
      options: [...notHelpfulOptionsRaw.map(({
        value,
        title,
        subTitle
      }) => {
        return {
          label: /*#__PURE__*/React.createElement(LabelItem, {
            title: title,
            subTitle: subTitle,
            selected: categoryType === value,
            onFeedbackChange: onFeedbackChange
          }),
          value
        };
      }), anotherReasonOption]
    };
  }
}