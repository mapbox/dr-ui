import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { testCases } from './tab-list-test-cases';

describe('TabList', () => {
  let testCase;
  let wrapper;

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

  describe(testCases.dropdown.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.dropdown;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.simple.description, () => {
    beforeEach(() => {
      testCase = testCases.simple;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('onChange is called', () => {
      wrapper.find('button').first().props().onClick('one');
      expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
      expect(testCase.props.onChange).toHaveBeenCalledWith('one');
    });

    test('activeItem prop updates active item', () => {
      wrapper.setProps({ activeItem: 'one' });
      wrapper.update();
    });
  });
  describe(testCases.links.description, () => {
    beforeEach(() => {
      testCase = testCases.links;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(
        toJson(shallow(React.createElement(testCase.component, testCase.props)))
      ).toMatchSnapshot();
    });

    test('activeItem prop updates active item', () => {
      wrapper.setProps({ activeItem: 'one' });
      wrapper.update();
    });
  });
  describe(testCases.truncateAll.description, () => {
    beforeEach(() => {
      testCase = testCases.truncateAll;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(
        toJson(shallow(React.createElement(testCase.component, testCase.props)))
      ).toMatchSnapshot();
    });

    test('activeItem prop updates active item', () => {
      wrapper.setProps({ activeItem: 'one' });
      wrapper.update();
    });
  });
  describe(testCases.labelNode.description, () => {
    beforeEach(() => {
      testCase = testCases.labelNode;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('onChange is called', () => {
      wrapper.find('button').first().props().onClick('one');
      expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
      expect(testCase.props.onChange).toHaveBeenCalledWith('one');
    });

    test('activeItem prop updates active item', () => {
      wrapper.setProps({ activeItem: 'one' });
      wrapper.update();
    });
  });
});
