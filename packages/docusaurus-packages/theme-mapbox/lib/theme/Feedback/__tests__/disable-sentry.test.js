import React from 'react';
import Feedback from '../feedback';
import { mount } from 'enzyme';
import { expectThankYou, textJustRight } from './shared';

import * as Sentry from '@sentry/browser';

jest.mock('@sentry/browser');

const SentryMockScope = {
  setTag: jest.fn(),
  setLevel: jest.fn(),
  setFingerprint: jest.fn()
};
Sentry.withScope.mockImplementation((callback) => {
  callback(SentryMockScope);
});

describe('Does not send event to Sentry', () => {
  const feedback = mount(
    <Feedback
      site="dr-ui"
      location={{
        pathname: '/mapbox-gl-js/api/',
        hash: '#lnglat'
      }}
      feedbackSentryDsn={false}
      webhook={{
        production: '',
        staging: ''
      }}
    />
  );
  // Click the Yes button
  const btn = feedback.find('button#feedback-button-yes');
  btn.simulate('click');

  describe('Choose an option and submit feedback', () => {
    test('Check that submit button is enabled after an option is selected', () => {
      const radioInput = feedback.find('input').first();
      radioInput.simulate('change', { target: { value: 'solved-my-problem' } });
    });

    test('Enter text feedback', () => textJustRight(feedback));

    test('After submit, expect to see the thank you message', () => {
      const submitButton = feedback.find('#feedback-submit-button');
      submitButton.simulate('click');
      expectThankYou(feedback);
    });
    test('Sentry is not called', () => {
      expect(Sentry.init).not.toHaveBeenCalled();
      expect(Sentry.captureMessage).not.toHaveBeenCalled();
    });
  });
});
