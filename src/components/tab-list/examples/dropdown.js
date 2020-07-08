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
            label: 'API Reference',
            id: 'api-reference',
            href: '/ios/api/maps/5.9.0/index.html',
            items: [
              {
                title: '5.9.0',
                href: '/ios/api/maps/5.9.0/index.html',
                latest: true
              },
              {
                title: '5.8.0',
                href: '/ios/api/maps/5.8.0/index.html',
                latest: false
              },
              {
                title: '5.7.0',
                href: '/ios/api/maps/5.7.0/index.html',
                latest: false
              },
              {
                title: '5.6.0',
                href: '/ios/api/maps/5.6.0/index.html',
                latest: false
              }
            ]
          }
        ]}
      />
    );
  }
}
