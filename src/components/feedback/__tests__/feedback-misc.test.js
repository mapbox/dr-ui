import React from 'react';
import Feedback, { returnGenericType } from '../feedback';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

test('Feedback too long', () => {
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

  feedback.setState({
    isOpen: true,
    category: 'Something is confusing'
  });
  const textarea = feedback.find('textarea');
  textarea.simulate('change', {
    target: {
      value:
        "I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise. I found a sandwich and I want to know why there isn't any mayonnaise."
    }
  });
  const feedbackLength = feedback.find('#feedback-length');
  expect(feedbackLength.text()).toEqual('-1099');
  const overLimit = feedback.find('#feedback-overlimit');
  expect(overLimit.text()).toEqual(
    ' Your message is over the 1000 character limit.'
  );
  // Submit button is disabled when user enters too long text
  const submitBtn = feedback.find('#dr-ui--feedback-submit-button');
  expect(submitBtn.props().disabled).toBeTruthy();
});

test('Generate snapshot for feedback confirmation', () => {
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
  feedback.setState({
    isOpen: true,
    sentFeedback: true,
    category: 'Something is confusing',
    feedback: 'I do not understand'
  });
  expect(toJson(feedback)).toMatchSnapshot();
});

test('returnGenericType', () => {
  expect(returnGenericType('page')).toEqual('page');
  expect(returnGenericType('example')).toEqual('example');
  expect(returnGenericType('playground')).toEqual('playground');
  expect(returnGenericType('pages')).toEqual('content');
  expect(returnGenericType('section on AccessToken')).toEqual('content');
});
