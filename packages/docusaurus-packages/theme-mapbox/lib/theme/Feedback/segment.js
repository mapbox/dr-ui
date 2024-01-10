import forwardEvent from './forward-event';
import * as Sentry from '@sentry/browser';
import env from '@theme/AnalyticsShell/env';

// Send the event to Segment with forward event
export function sendToSegment({ state, props }) {
  const event = createSegmentEvent({ state, props });
  forwardEvent(event, props.webhook, (err) => {
    if (err) Sentry.captureException(err);
  });
}

// Creates event to send to Segment
function createSegmentEvent({ state, props }) {
  const { user, anonymousId, feedback, sessionId, category, categoryType } =
    state;
  const { site, section, location } = props;
  // set user if available else set anonymousId (needed for forward-event request)
  const identity = {
    ...(user && user.id ? { userId: user.id } : { anonymousId: anonymousId })
  };

  return {
    event: 'Sent docs feedback',
    ...identity,
    properties: {
      // the unique id for the feedbak session
      sessionId,
      // the feedback category that the user selected (helpful for yes, unhelpful for no)
      category,
      // the sub type for the category
      categoryType,
      // text feedback, if available
      ...(feedback && { feedback: feedback }),
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
      ...(user && user.plan && { plan: user.plan.id }),
      // get environment: staging or production
      environment: env()
    }
  };
}
