import React from 'react';
import Feedback from '../feedback';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { expectThankYou, textTooLong, textJustRight } from './shared';
import forwardEvent from '../forward-event';
import * as Sentry from '@sentry/browser';

jest.mock('@sentry/browser');
jest.mock('../forward-event');

const SentryMockScope = { setTag: jest.fn(), setLevel: jest.fn() };
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

  describe('2 - I like this page', () => {
    test('Select I like this page, then set state', () => {
      const btn = feedback.find('button[value="I like this page"]');
      btn.simulate('click', { target: { value: 'I like this page' } });
      expect(feedback.state().category).toEqual('I like this page');
      expect(feedback.state().helpful).toBeTruthy();
    });
    test('Check UI element state', () => {
      // The textarea is not available until the user selects an option
      expect(feedback.find('textarea').exists()).toBeFalsy();
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
          anonymousId: expect.anything(),
          event: 'Sent docs feedback',
          properties: {
            anonymousId: expect.anything(),
            category: 'I like this page',
            categoryType: undefined,
            contactSupport: false,
            environment: 'staging',
            helpful: true,
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
        .find('input[value="I found what I need"]')
        .props()
        .onChange({ target: { value: 'I found what I need' } });
      feedback.update();
      // The textarea is now available
      expect(feedback.find('textarea').exists()).toBeTruthy();
      // The button is enabled now
      const submitButton = feedback.find('button#feedback-submit-button');
      expect(submitButton.props().disabled).toBeFalsy();
    });
  });

  describe('4 - Enter text feedback', () => {
    test('Text over limit', () => textTooLong(feedback));
    test('Text under limit', () => textJustRight(feedback));
  });

  describe('5 - Submit feedback', () => {
    test('Click submit, set state', () => {
      const btn = feedback.find('#feedback-submit-button');
      btn.simulate('click');
      expect(feedback.state().sentFeedback).toBeTruthy();
      expect(feedback.state().category).toEqual('I like this page');
      expect(feedback.state().categoryType).toEqual('I found what I need');
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
        ['category', 'I like this page'],
        ['categoryType', 'I found what I need'],
        ['referrer', ''],
        ['helpful', true]
      ]);
      expect(SentryMockScope.setLevel).toHaveBeenCalledWith('info');
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
            category: 'I like this page',
            categoryType: 'I found what I need',
            contactSupport: false,
            environment: 'staging',
            feedback:
              "I found a sandwich and I want to know why there isn't any mayonnaise.",
            helpful: true,
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

describe('Workflow, Something else', () => {
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

  // Set up
  feedback.find('button').simulate('click');
  feedback
    .find('button[value="I like this page"]')
    .simulate('click', { target: { value: 'I like this page' } });

  describe('1 - Select option', () => {
    test('Select option', () => {
      feedback
        .find('input[value="Something else"]')
        .props()
        .onChange({ target: { value: 'Something else' } });
      feedback.update();
      // The textarea is now available
      expect(feedback.find('textarea').exists()).toBeTruthy();
      // The button is disabled (until text entered)
      const submitButton = feedback.find('button#feedback-submit-button');
      expect(submitButton.props().disabled).toBeTruthy();
    });
  });

  describe('2 - Enter text feedback', () => {
    test('Text over limit', () => textTooLong(feedback));
    test('Text under limit', () => textJustRight(feedback));
  });

  describe('3 - Submit feedback', () => {
    test('Click submit, set state', () => {
      const btn = feedback.find('#feedback-submit-button');
      btn.simulate('click');
      expect(feedback.state().sentFeedback).toBeTruthy();
      expect(feedback.state().category).toEqual('I like this page');
      expect(feedback.state().categoryType).toEqual('Something else');
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
        ['category', 'I like this page'],
        ['categoryType', 'Something else'],
        ['referrer', ''],
        ['helpful', true]
      ]);
      expect(SentryMockScope.setLevel).toHaveBeenCalledWith('info');
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
            category: 'I like this page',
            categoryType: 'Something else',
            contactSupport: false,
            environment: 'staging',
            feedback:
              "I found a sandwich and I want to know why there isn't any mayonnaise.",
            helpful: true,
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

describe('Workflow, Select multiple; do not submit text feedback', () => {
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

  // Set up
  feedback.find('button').simulate('click');
  feedback
    .find('button[value="I like this page"]')
    .simulate('click', { target: { value: 'I like this page' } });

  describe('1 - Select option', () => {
    test('Select option, then be able to enter text', () => {
      feedback
        .find('input[value="Something else"]')
        .props()
        .onChange({
          target: { value: 'Something else,The information is accurate' }
        });
      feedback.update();
      // The textarea is now available
      expect(feedback.find('textarea').exists()).toBeTruthy();
      // The button is enabled now
      const submitButton = feedback.find('button#feedback-submit-button');
      expect(submitButton.props().disabled).toBeFalsy();
    });
  });

  describe('2 - Submit feedback', () => {
    test('Click submit, set state', () => {
      const btn = feedback.find('#feedback-submit-button');
      btn.simulate('click');
      expect(feedback.state().sentFeedback).toBeTruthy();
      expect(feedback.state().category).toEqual('I like this page');
      expect(feedback.state().categoryType).toEqual(
        'Something else,The information is accurate'
      );
      expect(feedback.state().feedback).toEqual('');
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
        ['category', 'I like this page'],
        ['categoryType', 'Something else,The information is accurate'],
        ['referrer', ''],
        ['helpful', true]
      ]);
      expect(SentryMockScope.setLevel).toHaveBeenCalledWith('info');
      expect(Sentry.captureMessage).toHaveBeenCalledWith('');
    });

    test('Then send to Segment', () => {
      expect(forwardEvent).toHaveBeenCalledWith(
        {
          anonymousId: expect.anything(),
          event: 'Sent docs feedback',
          properties: {
            anonymousId: expect.anything(),
            category: 'I like this page',
            categoryType: 'Something else,The information is accurate',
            contactSupport: false,
            environment: 'staging',
            helpful: true,
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
