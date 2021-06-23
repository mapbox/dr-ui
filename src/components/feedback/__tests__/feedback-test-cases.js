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
      staging:
        'https://evj5gwoa8j.execute-api.us-east-1.amazonaws.com/hookshot/webhook',
      production:
        'https://2n40g6lyc9.execute-api.us-east-1.amazonaws.com/hookshot/webhook'
    },
    location: {}
  }
};

export { testCases };
