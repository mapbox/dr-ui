/* eslint es/no-async-functions:0 */

import React from 'react';
import Feedback from '../feedback';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

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
    expect(toJson(feedback)).toMatchSnapshot();
  });

  test('2 - Contact support', () => {
    delete global.window.location;
    window.location = { assign: jest.fn() };
    const btn = feedback.find('button[value="Contact support"]');
    btn.simulate('click');
    expect(feedback.state().category).toBeUndefined();
    expect(feedback.state().contactSupport).toBeTruthy();
    expect(feedback.state().helpful).toBeUndefined();
    expect(toJson(feedback)).toMatchSnapshot();
    expect(window.location.assign).toBeCalledWith(
      'https://support.mapbox.com/'
    );
  });
});
