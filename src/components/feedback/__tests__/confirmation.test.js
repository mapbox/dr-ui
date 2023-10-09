import React from 'react';
import Feedback from '../feedback';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { textJustRight } from './shared';

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

  // click Yes
  const btn = feedback.find('button').first();
  btn.simulate('click');

  // choose 'Solved my problem'
  const radioInput = feedback.find('input').first();
  radioInput.simulate('change', { target: { value: 'solved-my-problem' } });

  textJustRight(feedback);

  expect(toJson(feedback)).toMatchSnapshot();
});
