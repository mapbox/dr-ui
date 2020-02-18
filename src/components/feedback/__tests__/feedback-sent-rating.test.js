import React from 'react';
import Feedback from '..';
import toJson from 'enzyme-to-json';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Sent helpful rating', () => {
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

  test('basic', () => {
    expect(toJson(feedback)).toMatchSnapshot();
  });
});
