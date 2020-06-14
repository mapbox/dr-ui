import React from 'react';
import renderer from 'react-test-renderer';
import { testCases } from './phone-test-cases.js';

describe('phone', () => {
  describe(testCases.iosHori.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      window.matchMedia = jest.fn().mockImplementation((query) => {
        return {
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn()
        };
      });

      testCase = testCases.iosHori;
      wrapper = renderer.create(
        React.createElement(testCase.component, testCase.props)
      );
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.iosVert.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.iosVert;
      wrapper = renderer.create(
        React.createElement(testCase.component, testCase.props)
      );
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });
  describe(testCases.androidLandscape.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.androidLandscape;
      wrapper = renderer.create(
        React.createElement(testCase.component, testCase.props)
      );
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });
  describe(testCases.androidVert.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.androidVert;
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
