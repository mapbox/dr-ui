import React from 'react';
import Feedback from '..';
import toJson from 'enzyme-to-json';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Sent helpful rating - yes', () => {
  const feedback = mount(
    <Feedback
      site="dr-ui"
      location={{
        pathname: '/mapbox-gl-js/api/',
        hash: '#lnglat'
      }}
      userName="decorah"
      webhook={{
        production: '',
        staging: ''
      }}
    />
  );
  test('clicked yes', () => {
    feedback.find('#dr-ui--feedback-yes').simulate('click');
    expect(feedback.state()).toEqual({
      event: {
        event: 'Sent docs feedback',
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
          section: undefined,
          site: 'dr-ui',
          userId: 'decorah'
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
      userName="decorah"
      webhook={{
        production: '',
        staging: ''
      }}
    />
  );
  test('clicked no', () => {
    feedback.find('#dr-ui--feedback-no').simulate('click');
    expect(feedback.state()).toEqual({
      event: {
        event: 'Sent docs feedback',
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
          section: undefined,
          site: 'dr-ui',
          userId: 'decorah'
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
