import React from 'react';
import Feedback from '../feedback';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { expectThankYou, textTooLong, textJustRight } from './shared';
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

describe('Workflow with logged in user information', () => {
  global.MapboxPageShell.afterUserCheck = (callback) => callback();
  global.MapboxPageShell.getUser = () => ({
    id: 'friend-of-the-docs',
    plan: { id: 'starter' }
  });

  const feedback = mount(
    <Feedback
      site="dr-ui"
      location={{
        pathname: '/mapbox-gl-js/api/',
        hash: undefined
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
          event: 'Sent docs feedback',
          properties: {
            anonymousId: expect.anything(),
            category: undefined,
            categoryType: undefined,
            contactSupport: false,
            environment: 'staging',
            exited: false,
            helpful: undefined,
            page: { hash: undefined, pathname: '/mapbox-gl-js/api/' },
            plan: 'starter',
            section: undefined,
            sessionId: expect.anything(),
            site: 'dr-ui',
            userId: 'friend-of-the-docs'
          },
          userId: 'friend-of-the-docs'
        },
        { production: '', staging: '' },
        expect.any(Function)
      );
    });
  });

  describe('2 - Something is confusing', () => {
    test('Select Something is confusing, then set state', () => {
      const btn = feedback.find('button[value="Something is confusing"]');
      btn.simulate('click', { target: { value: 'Something is confusing' } });
      expect(feedback.state().category).toEqual('Something is confusing');
      expect(feedback.state().helpful).toBeFalsy();
    });
    test('Check UI element state', () => {
      // The button is disabled until the user selects an option
      const submitButton = feedback.find('button#feedback-submit-button');
      expect(submitButton.props().disabled).toBeTruthy();
      expect(toJson(feedback)).toMatchSnapshot();
    });
    test('Do not send data to Sentry', () => {
      expect(Sentry.init).not.toHaveBeenCalled();
    });
    test('Send data to Segment', () => {
      expect(forwardEvent).toHaveBeenCalledWith(
        {
          event: 'Sent docs feedback',
          properties: {
            anonymousId: expect.anything(),
            category: 'Something is confusing',
            categoryType: undefined,
            contactSupport: false,
            environment: 'staging',
            exited: false,
            helpful: false,
            page: { hash: undefined, pathname: '/mapbox-gl-js/api/' },
            plan: 'starter',
            section: undefined,
            sessionId: expect.anything(),
            site: 'dr-ui',
            userId: 'friend-of-the-docs'
          },
          userId: 'friend-of-the-docs'
        },
        { production: '', staging: '' },
        expect.any(Function)
      );
    });
  });

  describe('3 - Enter feedback', () => {
    test('Text over limit', () => textTooLong(feedback));
    test('Text under limit', () => textJustRight(feedback));
  });

  describe('4 - Submit feedback', () => {
    test('Click submit, set state', () => {
      const btn = feedback.find('#feedback-submit-button');
      btn.simulate('click');
      expect(feedback.state().sentFeedback).toBeTruthy();
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
      expect(Sentry.setUser).toHaveBeenCalledWith({
        data: { plan: 'starter' },
        username: 'friend-of-the-docs'
      });
      expect(SentryMockScope.setTag.mock.calls).toEqual([
        ['site', 'dr-ui'],
        ['category', 'Something is confusing'],
        ['referrer', ''],
        ['helpful', false],
        ['plan', 'starter']
      ]);
      expect(SentryMockScope.setLevel).toHaveBeenCalledWith('info');
      expect(SentryMockScope.setFingerprint).toHaveBeenCalledWith([
        'dr-ui',
        'Something is confusing',
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
          event: 'Sent docs feedback',
          properties: {
            anonymousId: expect.anything(),
            category: 'Something is confusing',
            categoryType: undefined,
            contactSupport: false,
            feedback:
              "I found a sandwich and I want to know why there isn't any mayonnaise.",
            environment: 'staging',
            exited: false,
            helpful: false,
            page: { hash: undefined, pathname: '/mapbox-gl-js/api/' },
            plan: 'starter',
            section: undefined,
            sessionId: expect.anything(),
            site: 'dr-ui',
            userId: 'friend-of-the-docs'
          },
          userId: 'friend-of-the-docs'
        },
        { production: '', staging: '' },
        expect.any(Function)
      );
    });
  });
});
