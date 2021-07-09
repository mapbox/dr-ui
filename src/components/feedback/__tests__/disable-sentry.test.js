import React from 'react';
import Feedback from '../feedback';
import { mount } from 'enzyme';
import { expectThankYou, textJustRight } from './shared';

import * as Sentry from '@sentry/browser';

jest.mock('@sentry/browser');

const SentryMockScope = { setTag: jest.fn(), setLevel: jest.fn() };
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
  // Add state to skip ahead of the workflow
  feedback.setState({
    isOpen: true,
    category: 'Something is confusing'
  });

  describe('Submit feedback', () => {
    test('Enter text feedback', () => textJustRight(feedback));
    test('Click submit, set state', () => {
      const submitButton = feedback.find('#feedback-submit-button');
      submitButton.simulate('click');
      expect(feedback.state().sentFeedback).toBeTruthy();
      expect(feedback.state().category).toEqual('Something is confusing');
      expect(feedback.state().categoryType).toEqual();
      expect(feedback.state().feedback).toEqual(
        "I found a sandwich and I want to know why there isn't any mayonnaise."
      );
    });
    test('After submit, expect to see the thank you message', () => {
      expectThankYou(feedback);
    });
    test('Sentry is not called', () => {
      expect(Sentry.init).not.toHaveBeenCalled();
      expect(Sentry.captureMessage).not.toHaveBeenCalled();
    });
  });
});
