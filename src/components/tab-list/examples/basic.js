/*
Basic.
*/
import React from 'react';
import TabList from '../tab-list';

export default class Basic extends React.Component {
  render() {
    return (
      <TabList
        activeItem="specification"
        items={[
          {
            href: '/dr-ui/overview/',
            id: 'overview',
            label: 'Overview'
          },
          {
            href: '/dr-ui/specification/',
            id: 'specification',
            label: 'Specification'
          },
          {
            href: '/dr-ui/examples/',
            id: 'examples',
            label: 'Examples'
          },
          {
            href: '/dr-ui/demo/',
            id: 'demo',
            label: 'Demo'
          }
        ]}
      />
    );
  }
}
