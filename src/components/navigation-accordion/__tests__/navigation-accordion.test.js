import React from 'react';
import renderer from 'react-test-renderer';
import { testCases } from './navigation-accordion-test-cases.js';
import { mount } from 'enzyme';

describe('navigation-accordion', () => {
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

    test('toggle navigation', () => {
      // mount the test case
      const component = mount(testCase.element);
      // assert that subpages are not visible
      expect(component.find('#menu-guides').exists()).toBeFalsy();
      // find the first button (chevron-down icon)
      const navLink = component.find('button').first();
      // click the button
      navLink.simulate('click');
      // after click, assert that subpages are now visible
      component.update();
      expect(component.find('#menu-guides').exists()).toBeTruthy();
    });
  });

  describe(testCases.withTags.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.withTags;
      wrapper = renderer.create(
        React.createElement(testCase.component, testCase.props)
      );
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.noParent.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      Object.defineProperty(document, 'body', {
        value: {
          clientWidth: 1000
        }
      });

      testCase = testCases.noParent;
      wrapper = renderer.create(
        React.createElement(testCase.component, testCase.props)
      );
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.withTags.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.withTags;
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
