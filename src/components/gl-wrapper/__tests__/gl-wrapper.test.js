import renderer from 'react-test-renderer';
import { testCases, noRenderCases } from './gl-wrapper-test-cases.js';

describe('gl-wrapper', () => {
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

  describe(noRenderCases.ie.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = noRenderCases.ie;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(noRenderCases.webgl.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = noRenderCases.webgl;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
