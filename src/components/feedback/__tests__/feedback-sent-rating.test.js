import React from 'react';
import Feedback from '..';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';

describe('Sent helpful rating - yes', () => {
  const feedback = mount(
    <Feedback
      site="dr-ui"
      location={{
        pathname: '/mapbox-gl-js/api/',
        hash: '#lnglat'
      }}
      user={{
        id: 'crocsfan19',
        email: 'crocsfan19@mapbox.com',
        plan: {
          id: 'starter'
        }
      }}
      webhook={{
        production: '',
        staging: ''
      }}
    />
  );
  test('clicked yes', () => {
    feedback.find('#dr-ui--feedback-page-yes').simulate('click');
    expect(feedback.state()).toEqual({
      event: {
        event: 'Sent docs feedback',
        userId: 'crocsfan19',
        properties: {
          environment: 'staging',
          helpful: true,
          location: {
            hash: '',
            host: 'localhost',
            hostname: 'localhost',
            href: 'http://localhost/',
            origin: 'http://localhost',
            pathname: '/',
            search: ''
          },
          page: { hash: '#lnglat', pathname: '/mapbox-gl-js/api/' },
          plan: 'starter',
          section: undefined,
          site: 'dr-ui',
          userId: 'crocsfan19'
        }
      },
      feedback: undefined,
      feedbackSent: undefined,
      helpful: true
    });
  });
});

describe('Sent helpful rating - no', () => {
  const feedback = mount(
    <Feedback
      site="dr-ui"
      location={{
        pathname: '/mapbox-gl-js/api/',
        hash: '#lnglat'
      }}
      user={{
        id: 'crocsfan19',
        email: 'crocsfan19@mapbox.com',
        plan: {
          id: 'starter'
        }
      }}
      webhook={{
        production: '',
        staging: ''
      }}
    />
  );
  test('clicked no', () => {
    feedback.find('#dr-ui--feedback-page-no').simulate('click');
    expect(feedback.state()).toEqual({
      event: {
        event: 'Sent docs feedback',
        userId: 'crocsfan19',
        properties: {
          environment: 'staging',
          helpful: false,
          location: {
            hash: '',
            host: 'localhost',
            hostname: 'localhost',
            href: 'http://localhost/',
            origin: 'http://localhost',
            pathname: '/',
            search: ''
          },
          page: { hash: '#lnglat', pathname: '/mapbox-gl-js/api/' },
          plan: 'starter',
          section: undefined,
          site: 'dr-ui',
          userId: 'crocsfan19'
        }
      },
      feedback: undefined,
      feedbackSent: undefined,
      helpful: false
    });
  });
});

describe('Sent helpful rating snapshot', () => {
  const feedback = shallow(
    <Feedback
      site="dr-ui"
      location={{
        pathname: '/mapbox-gl-js/api/',
        hash: '#lnglat'
      }}
    />
  );
  feedback.setState({
    helpful: true
  });

  test('snapshot', () => {
    expect(toJson(feedback)).toMatchSnapshot();
  });
});

describe('Feedback character limit', () => {
  let feedback;
  beforeEach(() => {
    feedback = mount(<Feedback site="dr-ui" location={{}} />);
  });

  test('Character limit ok, user can submit feedback', () => {
    feedback.setState({
      helpful: true,
      feedback: 'Lorem ipsum dolor sit amet'
    });
    // make sure submit button is not disabled
    const submitBtn = feedback
      .find('#dr-ui--feedback-page-submit')
      .at(0)
      .props();
    expect(submitBtn.disabled).toBe(false);

    // make sure overlimit warning is not shown
    const overlimitWarning = feedback
      .find('#dr-ui--feedback-page-overlimit')
      .at(0);
    expect(overlimitWarning.exists()).toBe(false);

    // make sure character counter is equal
    const charCounter = feedback.find('#dr-ui--feedback-page-counter').at(0);
    expect(charCounter.props().children).toEqual(974);
    // snapshot
    expect(toJson(feedback)).toMatchSnapshot();
  });

  test('Character limit too long, user cannot submit feedback', () => {
    feedback.setState({
      helpful: true,
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    });
    // make sure submit button is disabled
    const submitBtn = feedback
      .find('#dr-ui--feedback-page-submit')
      .at(0)
      .props();
    expect(submitBtn.disabled).toBe(true);

    // make sure overlimit warning is shown
    const overlimitWarning = feedback
      .find('#dr-ui--feedback-page-overlimit')
      .at(0);
    expect(overlimitWarning.exists()).toBe(true);

    // make sure character counter is equal
    const charCounter = feedback.find('#dr-ui--feedback-page-counter').at(0);
    expect(charCounter.props().children).toEqual(-340);
    // snapshot
    expect(toJson(feedback)).toMatchSnapshot();
  });
});
