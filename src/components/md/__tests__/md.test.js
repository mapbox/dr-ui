import renderer from 'react-test-renderer';
import { testCases } from './md-test-cases.js';

describe('Md', () => {
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
