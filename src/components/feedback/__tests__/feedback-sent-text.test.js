import React from 'react';
import Feedback from '..';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';

describe('Sent text feedback', () => {
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
    user: {
      id: 'crocsfan19',
      email: 'crocsfan19@mapbox.com',
      plan: {
        id: 'starter'
      }
    }
  });

  test('clicked yes and sent feedback', () => {
    // click yes
    feedback.setState({
      helpful: true
    });
    // simulate typing feedback
    feedback
      .find('[data-test="dr-ui--feedback-page-text"]')
      .at(0)
      .props()
      .onChange('cool beans!');
    // simulate submit button click
    feedback
      .find('[data-test="dr-ui--feedback-page-submit"]')
      .at(0)
      .simulate('click');

    expect(feedback.state()).toEqual({
      event: {
        event: 'Sent docs feedback',
        userId: 'crocsfan19',
        properties: {
          environment: 'staging',
          feedback: 'cool beans!',
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
          page: {
            hash: '#lnglat',
            pathname: '/mapbox-gl-js/api/'
          },
          plan: 'starter',
          section: undefined,
          site: 'dr-ui',
          userId: 'crocsfan19'
        }
      },
      feedback: 'cool beans!',
      feedbackSent: true,
      helpful: true,
      user: {
        id: 'crocsfan19',
        email: 'crocsfan19@mapbox.com',
        plan: {
          id: 'starter'
        }
      }
    });
  });
});

describe('Sent text feedback', () => {
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
    helpful: true,
    feedback: 'Please add an example',
    feedbackSent: true
  });

  test('snapshot', () => {
    expect(toJson(feedback)).toMatchSnapshot();
  });
});
