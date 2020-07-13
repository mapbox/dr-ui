import React from 'react';
import safeSpy from '../../../test-utils/safe-spy';
import TabList from '../tab-list';
import Basic from '../examples/basic';
import Dropdown from '../examples/dropdown';
import AllDropdown from '../examples/all-dropdown';
import Icon from '@mapbox/mr-ui/icon';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.dropdown = {
  description: 'Dropdown',
  element: <Dropdown />
};

testCases.allDropdown = {
  description:
    'Use `truncateAll` to turn TabList into dropdown. (Used by Help.)',
  element: <AllDropdown />
};

testCases.simple = {
  description: 'simple',
  component: TabList,
  props: {
    onChange: safeSpy(),
    activeItem: 'three',
    items: [
      { id: 'one', label: 'Label one' },
      { id: 'two', label: 'Label two' },
      { id: 'three', label: 'Label three' },
      { id: 'four', label: 'Label four' }
    ]
  }
};

testCases.links = {
  description: 'links',
  component: TabList,
  props: {
    activeItem: 'one',
    items: [
      { id: 'one', label: 'Label one', href: '#' },
      { id: 'two', label: 'Label two', href: '#' },
      { id: 'three', label: 'Label three', href: '#' },
      { id: 'four', label: 'Label four', href: '#' }
    ]
  }
};

testCases.truncateAll = {
  description: 'truncate all',
  component: TabList,
  props: {
    activeItem: 'one',
    truncateBy: 0,
    items: [
      { id: 'one', label: 'Label one', href: '#' },
      { id: 'two', label: 'Label two', href: '#' },
      { id: 'three', label: 'Label three', href: '#' },
      { id: 'four', label: 'Label four', href: '#' }
    ]
  }
};

testCases.labelNode = {
  description: 'a label contains a node',
  component: TabList,
  props: {
    onChange: safeSpy(),
    activeItem: 'three',
    items: [
      { id: 'one', label: <Icon name="star" /> },
      { id: 'two', label: 'Label two' },
      { id: 'three', label: 'Label three' },
      { id: 'four', label: 'Label four' }
    ]
  }
};

export { testCases };
