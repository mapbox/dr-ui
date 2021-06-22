/* eslint es/no-async-functions:0 */

import React from 'react';
import Feedback from '../feedback';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { expectThankYou, testTextArea } from './shared';
import forwardEvent from '../forward-event';
import * as Sentry from '@sentry/browser';

jest.mock('@sentry/browser');
jest.mock('../forward-event');

const SentryMockScope = { setTag: jest.fn(), setLevel: jest.fn() };
Sentry.configureScope.mockImplementation((callback) => {
  callback(SentryMockScope);
});

describe('Workflow', () => {
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

  test('1 - Open feedback', () => {
    const btn = feedback.find('button');
    btn.simulate('click');
    expect(feedback.state().isOpen).toBeTruthy();
    expect(Sentry.init).not.toHaveBeenCalled();
    expect(forwardEvent).toHaveBeenCalledWith(
      {
        anonymousId: expect.anything(),
        event: 'Sent docs feedback',
        properties: {
          anonymousId: expect.anything(),
          category: undefined,
          categoryType: undefined,
          environment: 'staging',
          helpful: undefined,
          location: {
            hash: '#lnglat',
            host: undefined,
            hostname: undefined,
            href: undefined,
            origin: undefined,
            pathname: '/mapbox-gl-js/api/',
            search: undefined
          },
          page: { hash: '#lnglat', pathname: '/mapbox-gl-js/api/' },
          section: undefined,
          sessionId: expect.anything(),
          site: 'dr-ui'
        }
      },
      { production: '', staging: '' },
      expect.anything()
    );
  });

  test('2 - I like this page', () => {
    const btn = feedback.find('button[value="I like this page"]');
    btn.simulate('click', { target: { value: 'I like this page' } }); // the event doesn't get sent automatically?
    expect(feedback.state().category).toEqual('I like this page');
    expect(feedback.state().helpful).toBeTruthy();
    // The textarea is not available until the user selects an option
    expect(feedback.find('textarea').exists()).toBeFalsy();
    // The button is disabled until the user selects an option
    const submitButton = feedback.find('button#dr-ui--feedback-submit-button');
    expect(submitButton.props().disabled).toBeTruthy();
    expect(toJson(feedback)).toMatchSnapshot();
    // Send nothing to Sentry
    expect(Sentry.init).not.toHaveBeenCalled();
    // Send an event to Segment
    expect(forwardEvent).toHaveBeenCalledWith(
      {
        anonymousId: expect.anything(),
        event: 'Sent docs feedback',
        properties: {
          anonymousId: expect.anything(),
          category: 'I like this page',
          categoryType: undefined,
          environment: 'staging',
          helpful: true,
          location: {
            hash: '#lnglat',
            host: undefined,
            hostname: undefined,
            href: undefined,
            origin: undefined,
            pathname: '/mapbox-gl-js/api/',
            search: undefined
          },
          page: { hash: '#lnglat', pathname: '/mapbox-gl-js/api/' },
          section: undefined,
          sessionId: expect.anything(),
          site: 'dr-ui'
        }
      },
      { production: '', staging: '' },
      expect.anything()
    );
  });

  test('3 - Select option', () => {
    feedback
      .find('input[value="I found what I need"]')
      .props()
      .onChange({ target: { value: 'I found what I need' } });
    feedback.update();
    // The textarea is now available
    expect(feedback.find('textarea').exists()).toBeTruthy();
    // The button is enabled now
    const submitButton = feedback.find('button#dr-ui--feedback-submit-button');
    expect(submitButton.props().disabled).toBeFalsy();
    expect(Sentry.init).not.toHaveBeenCalled();
  });

  test('4 - Enter text feedback', () => {
    testTextArea(feedback);
  });

  test('5 - Submit feedback', () => {
    const btn = feedback.find('#dr-ui--feedback-submit-button');
    btn.simulate('click');
    expect(feedback.state().sentFeedback).toBeTruthy();
    expect(feedback.state().category).toEqual('I like this page');
    expect(feedback.state().categoryType).toEqual('I found what I need');
    expect(feedback.state().feedback).toEqual(
      "I found a sandwich and I want to know why there isn't any mayonnaise."
    );
    // After submit, expect to see the thank you message
    expectThankYou(feedback);
  });

  test('6 - On submit, send to Sentry', () => {
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

  test('7 - On submit, send to Segment', () => {
    expect(forwardEvent).toHaveBeenCalledWith(
      {
        anonymousId: expect.anything(),
        event: 'Sent docs feedback',
        properties: {
          anonymousId: expect.anything(),
          category: 'I like this page',
          categoryType: 'I found what I need',
          environment: 'staging',
          feedback:
            "I found a sandwich and I want to know why there isn't any mayonnaise.",
          helpful: true,
          location: {
            hash: '#lnglat',
            host: undefined,
            hostname: undefined,
            href: undefined,
            origin: undefined,
            pathname: '/mapbox-gl-js/api/',
            search: undefined
          },
          page: { hash: '#lnglat', pathname: '/mapbox-gl-js/api/' },
          section: undefined,
          sessionId: expect.anything(),
          site: 'dr-ui'
        }
      },
      { production: '', staging: '' },
      expect.anything()
    );
  });
});

describe('Workflow, Something else', () => {
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

  test('1 - Open feedback', () => {
    const btn = feedback.find('button');
    btn.simulate('click');
    expect(feedback.state().isOpen).toBeTruthy();
  });

  test('2 - I like this page', () => {
    const btn = feedback.find('button[value="I like this page"]');
    btn.simulate('click', { target: { value: 'I like this page' } }); // the event doesn't get sent automatically?
    expect(feedback.state().category).toEqual('I like this page');
    expect(feedback.state().helpful).toBeTruthy();
    // The textarea is not available until the user selects an option
    expect(feedback.find('textarea').exists()).toBeFalsy();
    // The button is disabled until the user selects an option
    const submitButton = feedback.find('button#dr-ui--feedback-submit-button');
    expect(submitButton.props().disabled).toBeTruthy();
  });

  test('3 - Select option', () => {
    feedback
      .find('input[value="Something else"]')
      .props()
      .onChange({ target: { value: 'Something else' } });
    feedback.update();
    // The textarea is now available
    expect(feedback.find('textarea').exists()).toBeTruthy();
    // The button is disabled until user submits feedback or selects an additional category
    const submitButton = feedback.find('button#dr-ui--feedback-submit-button');
    expect(submitButton.props().disabled).toBeTruthy();
  });

  test('4 - Enter text feedback', () => {
    testTextArea(feedback);
  });
});

describe('Workflow, Select multiple; do not submit text feedback', () => {
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

  test('1 - Open feedback', () => {
    const btn = feedback.find('button');
    btn.simulate('click');
    expect(feedback.state().isOpen).toBeTruthy();
  });

  test('2 - I like this page', () => {
    const btn = feedback.find('button[value="I like this page"]');
    btn.simulate('click', { target: { value: 'I like this page' } }); // the event doesn't get sent automatically?
    expect(feedback.state().category).toEqual('I like this page');
    expect(feedback.state().helpful).toBeTruthy();
    // The textarea is not available until the user selects an option
    expect(feedback.find('textarea').exists()).toBeFalsy();
    // The button is disabled until the user selects an option
    const submitButton = feedback.find('button#dr-ui--feedback-submit-button');
    expect(submitButton.props().disabled).toBeTruthy();
  });

  test('3 - Select option', () => {
    feedback
      .find('input[value="Something else"]')
      .props()
      .onChange({
        target: { value: 'Something else,The information is accurate' }
      });
    feedback.update();
    // The textarea is now available
    expect(feedback.find('textarea').exists()).toBeTruthy();
    // The button is now enabled
    const submitButton = feedback.find('button#dr-ui--feedback-submit-button');
    expect(submitButton.props().disabled).toBeFalsy();
  });

  test('4 - Submit feedback', () => {
    const btn = feedback.find('#dr-ui--feedback-submit-button');
    btn.simulate('click');
    expect(feedback.state().sentFeedback).toBeTruthy();
    expect(feedback.state().category).toEqual('I like this page');
    expect(feedback.state().categoryType).toEqual(
      'Something else,The information is accurate'
    );
    expect(feedback.state().feedback).toEqual('');
    // After submit, expect to see the thank you message
    expectThankYou(feedback);
  });
});
