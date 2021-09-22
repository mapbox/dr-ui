import renderer from 'react-test-renderer';
import { testCases } from './page-layout-test-cases.js';

describe('page-layout', () => {
  describe(testCases.page.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.page;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.example.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.example;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.full.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.full;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.examplePage.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.examplePage;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.noSidebar.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.noSidebar;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.groupIndexPage.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      Object.defineProperty(document, 'body', {
        value: {
          clientWidth: 1000
        }
      });

      testCase = testCases.groupIndexPage;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
