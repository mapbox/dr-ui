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

const FeedbackWrapper = ({ children }) => {
  return (
    <div className="dr-ui--feedback">
      <div className="flex flex--column">
        <div className="mb6 prose">{children}</div>
      </div>
    </div>
  );
};

FeedbackWrapper.propTypes = {
  children: PropTypes.node
};

const Feedback = (props) => {
  const { type } = props;

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
      sendToSegment({ state: gatherState(), props });
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
    sendToSegment({ state: gatherState(), props });
    sendToSentry({ state: gatherState(), props });
  }

  /** This component returns early to improve code clarity **/

  // Initial stage: the user has not clicked on feedback
  if (!isOpen) {
    return (
      <div className="txt-fancy txt-m flex flex--center-cross">
        Was this {type} helpful?
        <span className="ml18" style={{ lineHeight: 0 }}>
          <Button
            size="medium"
            width="small"
            corners
            passthroughProps={{ id: 'feedback-button-yes' }}
            onClick={openYesFeedback}
          >
            <IconText iconBefore={<ThumbsUpIcon />}>Yes</IconText>
          </Button>
        </span>
        <span className="ml12" style={{ lineHeight: 0 }}>
          <Button
            size="medium"
            width="small"
            corners
            passthroughProps={{ id: 'feedback-button-no' }}
            onClick={openNoFeedback}
          >
            <IconText iconBefore={<ThumbsDownIcon />}>No</IconText>
          </Button>
        </span>
      </div>
    );
  }

  // Final stage: a confirmation after the user sends feedback
  if (isOpen && sentFeedback) {
    return (
      <FeedbackWrapper>
        <div className="align-center prose relative">
          <div className="inline-block">
            <BookImage size={75} />
          </div>
          <p>
            <strong>Thank you!</strong>
          </p>
          <p>
            Our documentation team will read your feedback. Thank you for
            helping us improve this {type}.
          </p>
        </div>
      </FeedbackWrapper>
    );
  }
  // Middle stages: Select category and complete the category workflow
  return (
    <FeedbackWrapper>
      <OptionsList
        type={type}
        helpful={helpful}
        categoryType={categoryType}
        onCategoryTypeChange={handleCategoryTypeChange}
        feedback={feedback}
        onFeedbackChange={handleFeedbackChange}
        onSubmit={submitFeedback}
      />
    </FeedbackWrapper>
  );
};

Feedback.propTypes = {
  /** The type of content the user is a evaluating. */
  type: PropTypes.string,
  /** The site name. This is same value as the `site` value passed to ReactPageShell. */
  site: PropTypes.string.isRequired,
  /** The name of section the feedback component falls under. This is used by multi-structured sites. */
  section: PropTypes.string,
  /** This prop is generated by Batfish and provides location context for the current page. */
  location: PropTypes.object.isRequired,
  /** The staging and production webhook URLs to send forward event data to. */
  webhook: PropTypes.shape({
    staging: PropTypes.string.isRequired,
    production: PropTypes.string.isRequired
  }),
  /** The user's preferred code language, if available. */
  preferredLanguage: PropTypes.string,
  /** The Sentry DSN (URL) to send text feedback to for issue management or `false` to prevent sending feedback to Sentry. */
  feedbackSentryDsn: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

Feedback.defaultProps = {
  type: 'page',
  feedbackSentryDsn:
    'https://eccc8b561b9a461990309b01d33d54e3@sentry.io/1848287'
};

export default Feedback;
