import React from 'react';
import renderer from 'react-test-renderer';
import { testCases } from './error-boundary-test-cases.js';
import { mount } from 'enzyme';

describe('error-boundary', () => {
  describe(testCases.basic.description, () => {
    const testCase = testCases.basic;

    test('renders as expected', () => {
      const wrapper = renderer.create(testCase.element).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    test('no error', () => {
      const wrapper = mount(testCase.element);
      expect(wrapper.state()).toEqual(null);
    });
  });

  describe(testCases.oops.description, () => {
    const testCase = testCases.oops;

    test('renders as expected', () => {
      const wrapper = renderer
        .create(React.createElement(testCase.component, testCase.props))
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    test('error is caught', () => {
      const wrapper = mount(
        React.createElement(testCase.component, testCase.props)
      );
      const err = new Error(
        'BadFunction(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.'
      );
      expect(wrapper.state()).toEqual({ hasError: true, error: err });
    });
  });

  describe(testCases.oopsCustom.description, () => {
    const testCase = testCases.oopsCustom;

    test('renders as expected', () => {
      const wrapper = renderer
        .create(React.createElement(testCase.component, testCase.props))
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    test('error is caught', () => {
      const wrapper = mount(
        React.createElement(testCase.component, testCase.props)
      );
      const err = new Error(
        'BadFunction(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.'
      );
      expect(wrapper.state()).toEqual({ hasError: true, error: err });
    });
  });
});
