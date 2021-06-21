import forwardEvent from './forward-event';
import * as Sentry from '@sentry/browser';
import env from '../analytics-shell/env';

// Send the event to Segment with forward event
export function sendToSegment({ state, props }) {
  const event = createSegmentEvent({ state, props });
  forwardEvent(event, props.webhook, (err) => Sentry.captureException(err));
}

// Creates event to send to Segment
export function createSegmentEvent({ state, props }) {
  const {
    user,
    anonymousId,
    helpful,
    feedback,
    sessionId,
    category,
    categoryType
  } = state;
  const { site, section, location } = props;
  // set user if available else set anonymousId (needed for forward-event request)
  const identity = {
    ...(user && user.id ? { userId: user.id } : { anonymousId: anonymousId })
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
      // text feedback, if available
      ...(feedback && { feedback: feedback }),
      // name of current site (important for filtering in Mode)
      site,
      // (optional) name of section for longer pagers, helpful for fitering in Mode and identifying section areas
      section,
      // get page context
      page: location || undefined,
      // set user if available else set anonymousId (needed for Mode)
      ...identity,
      // set plan, if available
      ...(user && user.plan && { plan: user.plan.id }),
      // get environment: staging or production
      environment: env(),
      // get full window location
      location: {
        hash: location.hash,
        host: location.host,
        hostname: location.hostname,
        href: location.href,
        origin: location.origin,
        pathname: location.pathname,
        search: location.search
      }
    }
  };
}
