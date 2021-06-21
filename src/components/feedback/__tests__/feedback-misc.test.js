import React from 'react';
import Feedback, { returnGenericType } from '../feedback';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

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
