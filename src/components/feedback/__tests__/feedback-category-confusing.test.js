/* eslint es/no-async-functions:0 */

import React from 'react';
import Feedback from '../feedback';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { expectThankYou, testTextArea } from './shared';

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
  });

  test('2 - Something is confusing', () => {
    const btn = feedback.find('button[value="Something is confusing"]');
    btn.simulate('click', { target: { value: 'Something is confusing' } }); // the event doesn't get sent automatically?
    expect(feedback.state().category).toEqual('Something is confusing');
    expect(feedback.state().helpful).toBeFalsy();
    expect(toJson(feedback)).toMatchSnapshot();
    // Button is disabled until user enters text
    expect(
      feedback.find('#dr-ui--feedback-submit-button').props().disabled
    ).toBeTruthy();
  });

  test('3 - Enter feedback', () => {
    testTextArea(feedback);
  });
  test('4 - Submit feedback', () => {
    const btn = feedback.find('#dr-ui--feedback-submit-button');
    btn.simulate('click');
    expect(feedback.state().sentFeedback).toBeTruthy();
    expect(feedback.state().feedback).toEqual(
      "I found a sandwich and I want to know why there isn't any mayonnaise."
    );
    // After submit, expect to see the thank you message
    expectThankYou(feedback);
  });
});
