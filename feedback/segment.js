import forwardEvent from './forward-event';
import * as Sentry from '@sentry/browser';
import env from '../analytics-shell/env';

// Send the event to Segment with forward event
export function sendToSegment(_ref) {
  let {
    state,
    props
  } = _ref;
  const event = createSegmentEvent({
    state,
    props
  });
  console.log('segmentEvent', event);
  forwardEvent(event, props.webhook, err => {
    if (err) Sentry.captureException(err);
  });
}

// Creates event to send to Segment
function createSegmentEvent(_ref2) {
  let {
    state,
    props
  } = _ref2;
  const {
    user,
    anonymousId,
    helpful,
    feedback,
    sessionId,
    category,
    categoryType,
    contactSupport,
    exited
  } = state;
  const {
    site,
    section,
    location
  } = props;
  // set user if available else set anonymousId (needed for forward-event request)
  const identity = {
    ...(user && user.id ? {
      userId: user.id
    } : {
      anonymousId: anonymousId
    })
  };
  return {
    event: 'Sent docs feedback',
    ...identity,
    properties: {
      // true, false
      helpful,
      // the unique id for the feedbak session
      sessionId,
      // the feedback category that the user selected
      category,
      // the sub type for the category
      categoryType,
      // the user clicked "contact support" button
      contactSupport,
      // text feedback, if available
      ...(feedback && {
        feedback: feedback
      }),
      // if true, the user exited/closed feedback before submitting
      exited,
      // name of current site (important for filtering in Mode)
      site,
      // (optional) name of section for longer pagers, helpful for fitering in Mode and identifying section areas
      section,
      // get page context
      page: location || undefined,
      // set user if available else set anonymousId (needed for Mode)
      userId: user && user.id ? user.id : undefined,
      anonymousId: anonymousId,
      // set plan, if available
      ...(user && user.plan && {
        plan: user.plan.id
      }),
      // get environment: staging or production
      environment: env()
    }
  };
}