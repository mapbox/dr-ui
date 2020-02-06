import React from 'react';
import renderer from 'react-test-renderer';
import { testCases } from './feedback-test-cases.js';
import Feedback from '..';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('feedback', () => {
  describe(testCases.basic.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.basic;
      wrapper = renderer.create(
        React.createElement(testCase.component, testCase.props)
      );
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.type.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.type;
      wrapper = renderer.create(
        React.createElement(testCase.component, testCase.props)
      );
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.common.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.common;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('feedback interactions', () => {
  let feedback;
  beforeEach(() => {
    feedback = mount(<Feedback site="dr-ui" location={{}} />);
  });

  test('character limit ok, user can submit feedback', () => {
    feedback.setState({
      helpful: true,
      feedback: 'Lorem ipsum dolor sit amet'
    });
    // make sure submit button is not disabled
    const submitBtn = feedback
      .find('#docs-feedback-submit')
      .at(0)
      .props();
    expect(submitBtn.disabled).toBe(false);
  });

  test('character limit too long, user cannot submit feedback', () => {
    feedback.setState({
      helpful: true,
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    });
    // make sure submit button is disabled
    const submitBtn = feedback
      .find('#docs-feedback-submit')
      .at(0)
      .props();
    expect(submitBtn.disabled).toBe(true);
  });
});
