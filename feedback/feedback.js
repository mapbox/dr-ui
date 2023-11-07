/* eslint react/no-unused-state: off */
/* eslint react/no-unused-prop-types: off */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BookImage from '../book-image/book-image';
import Button from '@mapbox/mr-ui/button';
import IconText from '@mapbox/mr-ui/icon-text';
import { sendToSegment } from './segment';
import { sendToSentry } from './sentry';
import OptionsList from './components/options-list';
import { v4 as uuidv4 } from 'uuid';
import { ThumbsUpIcon, ThumbsDownIcon } from './components/icons';
const FeedbackWrapper = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "dr-ui--feedback"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex--column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb6 prose"
  }, children)));
};
const Feedback = props => {
  const {
    type
  } = props;
  const [user, setUser] = useState(undefined);
  const [anonymousId, setAnonymousId] = useState(undefined);
  const [sessionId, setSessionId] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [categoryType, setCategoryType] = useState(undefined);
  const [sentFeedback, setSentFeedback] = useState(false);
  const [helpful, setHelpful] = useState(undefined);
  const [feedback, setFeedback] = useState();
  const anAnonymousId = uuidv4();
  function openYesFeedback() {
    setHelpful(true);
  }
  function openNoFeedback() {
    setHelpful(false);
  }
  useEffect(() => {
    if (helpful !== undefined) {
      openFeedback();
    }
  }, [helpful]);
  useEffect(() => {
    if (isOpen) {
      // Add row to Segment when the user first interacts with the component
      sendToSegment({
        state: gatherState(),
        props
      });
    }
  }, [isOpen]);
  function gatherState() {
    return {
      user,
      anonymousId,
      sessionId,
      isOpen,
      sentFeedback,
      helpful,
      category: helpful ? 'helpful' : 'not helpful',
      categoryType,
      feedback
    };
  }

  // User opens feedback
  function openFeedback() {
    if (user === undefined && typeof MapboxPageShell !== 'undefined') {
      MapboxPageShell.afterUserCheck(() => {
        setUser(MapboxPageShell.getUser() || undefined);
      });
    }
    setAnonymousId(anAnonymousId);
    setSessionId(`${Date.now()}-${anAnonymousId}`);
    setIsOpen(true);
  }
  function handleCategoryTypeChange(value) {
    setCategoryType(value);
  }
  function handleFeedbackChange(value) {
    setFeedback(value);
  }

  // User submits feedback
  function submitFeedback() {
    setSentFeedback(true);
    sendToSegment({
      state: gatherState(),
      props
    });
    sendToSentry({
      state: gatherState(),
      props
    });
  }

  /** This component returns early to improve code clarity **/

  // Initial stage: the user has not clicked on feedback
  if (!isOpen) {
    return /*#__PURE__*/React.createElement("div", {
      className: "txt-fancy txt-m flex flex--center-cross"
    }, "Was this ", type, " helpful?", /*#__PURE__*/React.createElement("span", {
      className: "ml18",
      style: {
        lineHeight: 0
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "medium",
      width: "small",
      corners: true,
      passthroughProps: {
        id: 'feedback-button-yes'
      },
      onClick: openYesFeedback
    }, /*#__PURE__*/React.createElement(IconText, {
      iconBefore: /*#__PURE__*/React.createElement(ThumbsUpIcon, null)
    }, "Yes"))), /*#__PURE__*/React.createElement("span", {
      className: "ml12",
      style: {
        lineHeight: 0
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "medium",
      width: "small",
      corners: true,
      passthroughProps: {
        id: 'feedback-button-no'
      },
      onClick: openNoFeedback
    }, /*#__PURE__*/React.createElement(IconText, {
      iconBefore: /*#__PURE__*/React.createElement(ThumbsDownIcon, null)
    }, "No"))));
  }

  // Final stage: a confirmation after the user sends feedback
  if (isOpen && sentFeedback) {
    return /*#__PURE__*/React.createElement(FeedbackWrapper, null, /*#__PURE__*/React.createElement("div", {
      className: "align-center prose relative"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inline-block"
    }, /*#__PURE__*/React.createElement(BookImage, {
      size: 75
    })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Thank you!")), /*#__PURE__*/React.createElement("p", null, "Our documentation team will read your feedback. Thank you for helping us improve this ", type, ".")));
  }
  // Middle stages: Select category and complete the category workflow
  return /*#__PURE__*/React.createElement(FeedbackWrapper, null, /*#__PURE__*/React.createElement(OptionsList, {
    type: type,
    helpful: helpful,
    categoryType: categoryType,
    onCategoryTypeChange: handleCategoryTypeChange,
    feedback: feedback,
    onFeedbackChange: handleFeedbackChange,
    onSubmit: submitFeedback
  }));
};
Feedback.defaultProps = {
  type: 'page',
  feedbackSentryDsn: 'https://eccc8b561b9a461990309b01d33d54e3@sentry.io/1848287'
};
export default Feedback;