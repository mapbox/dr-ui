import React from 'react';
import PageLayout from '../page-layout';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  component: PageLayout,
  props: {
    sidebarContent: <div>Some content</div>,
    sidebarTitle: 'Some title',
    children: <div>Doc content</div>
  }
};

testCases.allTheOptions = {
  description: 'All the options',
  component: PageLayout,
  props: {
    sidebarContent: <div>Some content</div>,
    children: <div>Doc content</div>,
    sidebarTheme: 'bg-white',
    sidebarContentStickyTop: 10,
    sidebarStackedOnNarrowScreens: true
  }
};

export { testCases };
