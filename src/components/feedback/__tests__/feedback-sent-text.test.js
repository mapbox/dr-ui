import React from 'react';
import Feedback from '..';
import toJson from 'enzyme-to-json';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Sent text feedback', () => {
  const feedback = shallow(
    <Feedback
      key="idk2"
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
