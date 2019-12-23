import React from 'react';
import renderer from 'react-test-renderer';
import { testCases } from './tag-test-cases.js';

describe('back-top-top-button', () => {
  describe(testCases.beta.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.beta;
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
