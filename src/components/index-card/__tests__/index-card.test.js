import renderer from 'react-test-renderer';
import { testCases } from './index-card-test-cases.js';

describe('index-card', () => {
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

  describe(testCases.helpSection.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.helpSection;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
