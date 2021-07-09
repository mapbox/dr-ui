import React from 'react';
import Feedback from '../feedback';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
  expectThankYou,
  textTooLong,
  textJustRight,
  textTooShort
} from './shared';
import forwardEvent from '../forward-event';
import * as Sentry from '@sentry/browser';

jest.mock('@sentry/browser');
jest.mock('../forward-event');

const SentryMockScope = {
  setTag: jest.fn(),
  setLevel: jest.fn(),
  setFingerprint: jest.fn()
};
Sentry.withScope.mockImplementation((callback) => {
  callback(SentryMockScope);
});

describe('Workflow', () => {
  afterAll(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  const feedback = mount(
    <Feedback
      site="dr-ui"
      location={{
        pathname: '/mapbox-gl-js/api/',
        hash: '#lnglat'
      }}
      webhook={{
        production: '',
        staging: ''
      }}
    />
  );

  describe('1 - Open feedback', () => {
    test('Click button, then set state', () => {
      const btn = feedback.find('button');
      btn.simulate('click');
      expect(feedback.state().isOpen).toBeTruthy();
    });
    test('Do not send data to Sentry', () => {
      expect(Sentry.init).not.toHaveBeenCalled();
    });
    test('Send data to Segment', () => {
      expect(forwardEvent).toHaveBeenCalledWith(
        {
          anonymousId: expect.anything(),
          event: 'Sent docs feedback',
          properties: {
            anonymousId: expect.anything(),
            category: undefined,
            categoryType: undefined,
            contactSupport: false,
            environment: 'staging',
            exited: false,
            helpful: undefined,
            page: { hash: '#lnglat', pathname: '/mapbox-gl-js/api/' },
            section: undefined,
            sessionId: expect.anything(),
            site: 'dr-ui'
          }
        },
        { production: '', staging: '' },
        expect.any(Function)
      );
    });
  });

  describe('2 - Report a problem', () => {
    test('Select Report a problem, then set state', () => {
      const btn = feedback.find('button[value="Report a problem"]');
      btn.simulate('click', { target: { value: 'Report a problem' } });
      expect(feedback.state().category).toEqual('Report a problem');
      expect(feedback.state().helpful).toBeFalsy();
    });
    test('Check UI element state', () => {
      // The textarea and button is not available until the user selects an option
      expect(feedback.find('textarea').exists()).toBeFalsy();
      expect(
        feedback.find('button#feedback-submit-button').exists()
      ).toBeFalsy();
      expect(toJson(feedback)).toMatchSnapshot();
    });
    test('Do not send data to Sentry', () => {
      expect(Sentry.init).not.toHaveBeenCalled();
    });
    test('Send data to Segment', () => {
      expect(forwardEvent).toHaveBeenCalledWith(
        {
          anonymousId: expect.anything(),
          event: 'Sent docs feedback',
          properties: {
            anonymousId: expect.anything(),
            category: 'Report a problem',
            categoryType: undefined,
            contactSupport: false,
            environment: 'staging',
            exited: false,
            helpful: false,
            page: { hash: '#lnglat', pathname: '/mapbox-gl-js/api/' },
            section: undefined,
            sessionId: expect.anything(),
            site: 'dr-ui'
          }
        },
        { production: '', staging: '' },
        expect.any(Function)
      );
    });
  });

  describe('3 - Select option', () => {
    test('Select option, then be able to enter text', () => {
      feedback
        .find('input[value="I see an error message"]')
        .props()
        .onChange({ target: { value: 'I see an error message' } });
      feedback.update();
      const textAreaLabel = feedback.find(
        'label[htmlFor="feedback-problem-textarea"]'
      );
      expect(feedback.find('textarea').props().placeholder).toEqual(
        'Let us know about the error message you see.'
      );
      expect(textAreaLabel.text()).toEqual(
        'What error do you see and when did you encounter it? '
      );
      // The button is disabled until the user submits text feedback
      const submitButton = feedback.find('button#feedback-submit-button');
      expect(submitButton.props().disabled).toBeTruthy();
    });
  });

  describe('4 - Enter text feedback', () => {
    test('Text over limit', () => textTooLong(feedback));
    test('Text under minimum', () => textTooShort(feedback));
    test('Text under limit', () => textJustRight(feedback));
  });

  describe('5 - Submit feedback', () => {
    test('Click submit, set state', () => {
      const submitButton = feedback.find('#feedback-submit-button');
      submitButton.simulate('click');
      expect(feedback.state().sentFeedback).toBeTruthy();
      expect(feedback.state().category).toEqual('Report a problem');
      expect(feedback.state().categoryType).toEqual('I see an error message');
      expect(feedback.state().feedback).toEqual(
        "I found a sandwich and I want to know why there isn't any mayonnaise."
      );
    });
    test('After submit, expect to see the thank you message', () => {
      expectThankYou(feedback);
    });

    test('Then send to Sentry', () => {
      expect(Sentry.init).toHaveBeenCalledWith({
        dsn: expect.anything(),
        environment: 'staging',
        maxValueLength: 1000
      });
      expect(SentryMockScope.setTag.mock.calls).toEqual([
        ['site', 'dr-ui'],
        ['category', 'Report a problem'],
        ['categoryType', 'I see an error message'],
        ['referrer', ''],
        ['helpful', false]
      ]);
      expect(SentryMockScope.setLevel).toHaveBeenCalledWith('info');
      expect(SentryMockScope.setFingerprint).toHaveBeenCalledWith([
        'dr-ui',
        'Report a problem',
        expect.anything(),
        expect.any(Date)
      ]);
      expect(Sentry.captureMessage).toHaveBeenCalledWith(
        "I found a sandwich and I want to know why there isn't any mayonnaise."
      );
    });

    test('Then send to Segment', () => {
      expect(forwardEvent).toHaveBeenCalledWith(
        {
          anonymousId: expect.anything(),
          event: 'Sent docs feedback',
          properties: {
            anonymousId: expect.anything(),
            category: 'Report a problem',
            categoryType: 'I see an error message',
            contactSupport: false,
            environment: 'staging',
            exited: false,
            feedback:
              "I found a sandwich and I want to know why there isn't any mayonnaise.",
            helpful: false,
            page: { hash: '#lnglat', pathname: '/mapbox-gl-js/api/' },
            section: undefined,
            sessionId: expect.anything(),
            site: 'dr-ui'
          }
        },
        { production: '', staging: '' },
        expect.any(Function)
      );
    });
  });
});
