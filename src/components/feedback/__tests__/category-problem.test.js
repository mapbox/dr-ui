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

  test('2 - Report a problem', () => {
    const btn = feedback.find('button[value="Report a problem"]');
    btn.simulate('click', { target: { value: 'Report a problem' } }); // the event doesn't get sent automatically?
    expect(feedback.state().category).toEqual('Report a problem');
    expect(feedback.state().helpful).toBeFalsy();
    expect(toJson(feedback)).toMatchSnapshot();
  });

  test('3 - Select option', () => {
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
    const submitButton = feedback.find('button#dr-ui--feedback-submit-button');
    expect(submitButton.props().disabled).toBeTruthy();
  });

  test('4 - Enter text feedback', () => {
    testTextArea(feedback);
  });

  test('5 - Submit feedback', () => {
    const submitButton = feedback.find('#dr-ui--feedback-submit-button');
    submitButton.simulate('click');
    expect(feedback.state().sentFeedback).toBeTruthy();
    expect(feedback.state().category).toEqual('Report a problem');
    expect(feedback.state().categoryType).toEqual('I see an error message');
    expect(feedback.state().feedback).toEqual(
      "I found a sandwich and I want to know why there isn't any mayonnaise."
    );
    // After submit, expect to see the thank you message
    expectThankYou(feedback);
  });
});
