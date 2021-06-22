import React from 'react';
import Feedback from '../feedback';
import { mount } from 'enzyme';

describe('Close button', () => {
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
  test('Click close, set state', () => {
    const close = feedback.find('button#feedback-close-button');
    close.simulate('click');
    expect(feedback.state()).toEqual({
      anonymousId: undefined,
      category: undefined,
      categoryType: undefined,
      contactSupport: false,
      feedback: undefined,
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
