import Feedback from '../feedback';

import React from 'react';
import Basic from '../examples/basic';

const testCases = {};

testCases.basic = {
  component: Feedback,
  description: 'Basic',
  element: <Basic />
};

testCases.type = {
  component: Feedback,
  description: 'Change type',
  props: {
    type: 'section on AccessToken',
    site: 'dr-ui',
    webhook: {
      staging: 'staging-webhook',
      production: 'production-webhook'
    },
    location: {}
  }
};

testCases.noSentry = {
  component: Feedback,
  description: 'Does not send text feedback to Sentry',
  props: {
    site: 'dr-ui',
    webhook: {
      staging: 'staging-webhook',
      production: 'production-webhook'
    },
    feedbackSentryDsn: false,
    preferredLanguage: 'Swift',
    section: 'Maps',
    location: {
      pathname: '/dr-ui/api/',
      hash: '#lnglat'
    }
  }
};

export { testCases };
