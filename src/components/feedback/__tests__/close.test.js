import React from 'react';
import Feedback from '../feedback';
import { mount } from 'enzyme';
import forwardEvent from '../forward-event';

jest.mock('../forward-event');

describe('Click "close" before submitting feedback', () => {
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
  // Skip ahead in the flow
  feedback.setState({
    isOpen: true,
    category: 'Something is confusing',
    anonymousId: '123',
    helpful: false
  });
  test('Click close, set state', () => {
    const close = feedback.find('button#feedback-close-button');
    close.simulate('click');
  });
  test('Send data to Segment', () => {
    expect(forwardEvent).toHaveBeenCalledWith(
      {
        anonymousId: '123',
        event: 'Sent docs feedback',
        properties: {
          anonymousId: '123',
          category: 'Something is confusing',
          categoryType: undefined,
          contactSupport: false,
          environment: 'staging',
          exited: true, // This is true because they exited early
          helpful: false,
          page: {
            hash: '#lnglat',
            pathname: '/mapbox-gl-js/api/'
          },
          section: undefined,
          sessionId: undefined,
          site: 'dr-ui',
          userId: undefined
        }
      },
      { production: '', staging: '' },
      expect.any(Function)
    );
  });
  test('Reset state', () => {
    expect(feedback.state()).toEqual({
      anonymousId: undefined,
      category: undefined,
      categoryType: undefined,
      contactSupport: false,
      exited: false,
      feedback: undefined,
      helpful: undefined,
      isOpen: false,
      sentFeedback: false,
      sessionId: undefined,
      user: undefined
    });
  });
  test('Show "Share your feedback" button', () => {
    expect(feedback.find('button[value="Share"]').exists()).toBeTruthy();
  });
});

describe('Click "close" after submitting feedback', () => {
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
  // Skip ahead in the flow
  feedback.setState({
    isOpen: true,
    category: 'Something is confusing',
    anonymousId: '123',
    helpful: false,
    sentFeedback: true,
    feedback: 'I do not understand'
  });
  test('Click close, set state', () => {
    const close = feedback.find('button#feedback-close-button');
    close.simulate('click');
  });
  test('Send data to Segment', () => {
    expect(forwardEvent).toHaveBeenCalledWith(
      {
        anonymousId: '123',
        event: 'Sent docs feedback',
        properties: {
          anonymousId: '123',
          category: 'Something is confusing',
          categoryType: undefined,
          contactSupport: false,
          environment: 'staging',
          exited: false, // This is false because they did not exit early
          feedback: 'I do not understand',
          helpful: false,
          page: {
            hash: '#lnglat',
            pathname: '/mapbox-gl-js/api/'
          },
          section: undefined,
          sessionId: undefined,
          site: 'dr-ui',
          userId: undefined
        }
      },
      { production: '', staging: '' },
      expect.any(Function)
    );
  });
  test('Reset state', () => {
    expect(feedback.state()).toEqual({
      anonymousId: undefined,
      category: undefined,
      categoryType: undefined,
      contactSupport: false,
      exited: false,
      feedback: undefined,
      helpful: undefined,
      isOpen: false,
      sentFeedback: false,
      sessionId: undefined,
      user: undefined
    });
  });
  test('Show "Share your feedback" button', () => {
    expect(feedback.find('button[value="Share"]').exists()).toBeTruthy();
  });
});
