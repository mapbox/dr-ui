import React from 'react';
import Feedback from '..';
import toJson from 'enzyme-to-json';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Sent text feedback', () => {
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

  test('clicked yes and sent feedback', () => {
    // click yes
    feedback.setState({
      helpful: true
    });
    // simulate typing feedback
    feedback
      .find('#docs-feedback')
      .at(0)
      .props()
      .onChange('cool beans!');
    // simulate submit button click
    feedback
      .find('#docs-submit-feedback')
      .at(0)
      .simulate('click');

    expect(feedback.state()).toEqual({
      event: {
        event: 'Sent docs feedback',
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
          section: undefined,
          site: 'dr-ui',
          userId: 'decorah'
        }
      },
      feedback: 'cool beans!',
      feedbackSent: true,
      helpful: true
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

  test('basic', () => {
    expect(toJson(feedback)).toMatchSnapshot();
  });
});
