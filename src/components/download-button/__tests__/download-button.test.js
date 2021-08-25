import React from 'react';
import renderer from 'react-test-renderer';
import { testCases } from './download-button-test-cases.js';

describe('DownloadButton', () => {
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

  describe(testCases.png.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.png;
      wrapper = renderer.create(
        React.createElement(testCase.component, testCase.props)
      );
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.zip.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.zip;
      wrapper = renderer.create(
        React.createElement(testCase.component, testCase.props)
      );
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.prose.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.prose;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
