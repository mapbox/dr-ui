import React from 'react';
import Feedback from '..';
import toJson from 'enzyme-to-json';
import { configure, shallow, mount } from 'enzyme';
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
      .find('#dr-ui--feedback-submit-button')
      .at(0)
      .props();
    expect(submitBtn.disabled).toBe(false);

    // make sure overlimit warning is not shown
    const overlimitWarning = feedback.find('#dr-ui--feedback-overlimit').at(0);
    expect(overlimitWarning.exists()).toBe(false);

    // make sure character counter is equal
    const charCounter = feedback.find('#dr-ui--feedback-char-counter').at(0);
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
      .find('#dr-ui--feedback-submit-button')
      .at(0)
      .props();
    expect(submitBtn.disabled).toBe(true);

    // make sure overlimit warning is shown
    const overlimitWarning = feedback.find('#dr-ui--feedback-overlimit').at(0);
    expect(overlimitWarning.exists()).toBe(true);

    // make sure character counter is equal
    const charCounter = feedback.find('#dr-ui--feedback-char-counter').at(0);
    expect(charCounter.props().children).toEqual(-340);
    // snapshot
    expect(toJson(feedback)).toMatchSnapshot();
  });
});
