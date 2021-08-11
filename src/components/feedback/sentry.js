import * as Sentry from '@sentry/browser';
import env from '../analytics-shell/env';

const { feedbackLimit } = require('./components/forms.js');

// Send feedback to Sentry for triaging
export function sendToSentry({ state, props }) {
  const { site, section, preferredLanguage, feedbackSentryDsn } = props;
  // If feedbackSentryDsn is set to false, do not submit to Sentry
  if (feedbackSentryDsn === false) return;
  const { helpful, user, feedback, category, categoryType, anonymousId } =
    state;
  const referrer = 'referrer' in document;
  // initialize Sentry project to send the feedback
  Sentry.init({
    dsn: feedbackSentryDsn,
    maxValueLength: feedbackLimit,
    environment: env()
  });
  // set user attributes (if available)
  if (user) {
    Sentry.setUser({
      ...(user.id && { username: user.id }),
      ...(user.plan &&
        user.plan.id && {
          data: { plan: user.plan.id }
        })
    });
  }
  // configure data to send with feeedback
  Sentry.withScope((scope) => {
    // set tag for site name
    scope.setTag('site', site);
    // set tag for category
    scope.setTag('category', category);
    // set tag for category type
    if (categoryType) scope.setTag('categoryType', categoryType);
    // set tag for referrer, if available
    if (referrer) scope.setTag('referrer', document.referrer);
    // set tag for the user's boolean rating
    scope.setTag('helpful', helpful);
    // set tag for the section of the page (if available)
    if (section) scope.setTag('section', section);
    // set tags for the user's preferred language (if available)
    if (preferredLanguage) scope.setTag('preferredLanguage', preferredLanguage);
    // set tags for the user's plan (if available)
    if (user && user.plan && user.plan.id) scope.setTag('plan', user.plan.id);
    // set the message as "info" (rather than warning)
    scope.setLevel('info');
    // create fingerprint to prevent feedback from grouping together, important for text-less positive feedback
    scope.setFingerprint([site, category, anonymousId, new Date()]);
    // capture the feedback as a message
    Sentry.captureMessage(feedback);
  });
}
