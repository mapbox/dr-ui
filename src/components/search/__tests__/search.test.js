import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './search-test-cases';

describe('search', () => {
  describe(testCases.basic.description, () => {
    const wrapper = shallow(
      React.createElement(testCases.basic.component, testCases.basic.props)
    );

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.dark.description, () => {
    const wrapper = shallow(testCases.dark.element);

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.disableModal.description, () => {
    const wrapper = shallow(testCases.disableModal.element);

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.narrow.description, () => {
    const wrapper = shallow(testCases.narrow.element);

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
