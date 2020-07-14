import React from 'react';
import renderer from 'react-test-renderer';
import { testCases } from './android-activity-toggle-test-cases.js';

describe('android-activity-toggle', () => {
  describe(testCases.basic.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.basic;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.twoLang.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.twoLang;
      wrapper = renderer.create(
        React.createElement(testCase.component, testCase.props)
      );
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.kotlinOnly.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.kotlinOnly;
      wrapper = renderer.create(
        React.createElement(testCase.component, testCase.props)
      );
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
