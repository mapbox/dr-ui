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
