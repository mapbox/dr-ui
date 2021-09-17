import React from 'react';
import Feedback from '../feedback';
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
