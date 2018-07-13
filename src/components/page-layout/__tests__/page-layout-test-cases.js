import React from 'react';
import PageLayout from '../page-layout';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  component: PageLayout,
  props: {
    sidebarContent: <div>Some content</div>,
    sectionTitle: 'Some title',
    children: <div>Doc content</div>
  }
};

testCases.color = {
  description: 'Specify background color',
  component: PageLayout,
  props: {
    sidebarContent: <div>Some content</div>,
    sectionTitle: 'Some title',
    sidebarColor: 'bg-white',
    children: <div>Doc content</div>
  }
};

export { testCases };
