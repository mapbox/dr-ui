import React from 'react';
import renderer from 'react-test-renderer';
import { testCases } from './search-test-cases';
// import visit from 'unist-util-visit';

describe('search', () => {
  describe(testCases.basic.description, () => {
    const component = renderer.create(
      React.createElement(testCases.basic.component, testCases.basic.props)
    );
    const tree = component.toJSON();

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.dark.description, () => {
    const component = renderer.create(testCases.dark.element);
    const tree = component.toJSON();
    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.disableModal.description, () => {
    const component = renderer.create(testCases.disableModal.element);
    const tree = component.toJSON();
    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.narrow.description, () => {
    const component = renderer.create(testCases.narrow.element);
    const tree = component.toJSON();
    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.withLayout.description, () => {
    const component = renderer.create(testCases.withLayout.element);
    const tree = component.toJSON();
    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
