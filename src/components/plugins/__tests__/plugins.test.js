import renderer from 'react-test-renderer';
import { testCases } from './plugins-test-cases.js';

describe('Plugins', () => {
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
});
