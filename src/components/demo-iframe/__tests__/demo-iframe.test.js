import React from 'react';
import renderer from 'react-test-renderer';
import { testCases, noRenderCases } from './demo-iframe-test-cases.js';

describe('demo-iframe', () => {
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

  describe(noRenderCases.token.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = noRenderCases.token;
      wrapper = renderer.create(
        React.createElement(testCase.component, testCase.props)
      );
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.missing.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.missing;
      wrapper = renderer.create(
        React.createElement(testCase.component, testCase.props)
      );
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toBe(null);
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.nogl.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.nogl;
      wrapper = renderer.create(
        React.createElement(testCase.component, testCase.props)
      );
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree.children[0].type).toBe('iframe');
      expect(tree).toMatchSnapshot();
    });
  });
});
