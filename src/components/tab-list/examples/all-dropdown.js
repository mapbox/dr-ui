/*
Use `truncateAll` to turn TabList into dropdown.
*/
import React from 'react';
import TabList from '../tab-list';

export default class Basic extends React.Component {
  render() {
    return (
      <TabList
        truncateAll={true}
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
          }
        ]}
      />
    );
  }
}
