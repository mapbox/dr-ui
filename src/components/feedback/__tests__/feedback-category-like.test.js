/* eslint es/no-async-functions:0 */

import React from 'react';
import Feedback from '../feedback';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { expectThankYou } from './shared';

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
  });

  test('4 - Enter text feedback', () => {
    const textarea = feedback.find('textarea');
    textarea.simulate('change', {
      target: {
        value:
          "I found a sandwich and I want to know why there isn't any mayonnaise."
      }
    });
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
    const textarea = feedback.find('textarea');
    textarea.simulate('change', {
      target: {
        value:
          "I found a sandwich and I want to know why there isn't any mayonnaise."
      }
    });
    // The button is enabled now
    const submitButton = feedback.find('button#dr-ui--feedback-submit-button');
    expect(submitButton.props().disabled).toBeFalsy();
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
