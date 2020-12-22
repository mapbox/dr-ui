import renderer from 'react-test-renderer';
import { testCases } from './gl-wrapper-test-cases.js';

describe('gl-wrapper', () => {
  describe(testCases.basic.description, () => {
    test('renders as expected', () => {
      const testCase = testCases.basic;
      const wrapper = renderer.create(testCase.element);
      const tree = wrapper.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
