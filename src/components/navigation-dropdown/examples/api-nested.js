/*
Nested API reference. Items without a `path` are treated as headings.
*/
import React from 'react';
import NavigationDropdown from '../navigation-dropdown';

export default class Basic extends React.Component {
  render() {
    return (
      <NavigationDropdown
        id="api-reference-menu-nested"
        themeButtonOption="menuItem"
        label="API Reference"
        dropdownOptions={[
          { title: '90.0.0', latest: true },
          {
            title: 'vision-sdk',
            path: '/api/vision-sdk/90.0.0',
            latest: true
          },
          {
            title: 'vision-ar',
            path: '/api/vision-ar/90.0.0',
            latest: true
          },
          {
            title: 'vision-safety',
            path: '/api/vision-safety/90.0.0',
            latest: true
          },
          { title: '80.0.0', latest: false },
          {
            title: 'vision-sdk',
            path: '/api/vision-sdk/80.0.0',
            latest: false
          },
          {
            title: 'vision-ar',
            path: '/api/vision-ar/80.0.0',
            latest: false
          },
          {
            title: 'vision-safety',
            path: '/api/vision-safety/80.0.0',
            latest: false
          },
          { title: '70.0.0', latest: false },
          {
            title: 'vision-sdk',
            path: '/api/vision-sdk/70.0.0',
            latest: false
          },
          {
            title: 'vision-ar',
            path: '/api/vision-ar/70.0.0',
            latest: false
          },
          {
            title: 'vision-safety',
            path: '/api/vision-safety/70.0.0',
            latest: false
          },
          { title: '60.0.0', latest: false },
          {
            title: 'vision-sdk',
            path: '/api/vision-sdk/60.0.0',
            latest: false
          },
          {
            title: 'vision-ar',
            path: '/api/vision-ar/60.0.0',
            latest: false
          },
          {
            title: 'vision-safety',
            path: '/api/vision-safety/60.0.0',
            latest: false
          },
          { title: '50.0.0', latest: false },
          {
            title: 'vision-sdk',
            path: '/api/vision-sdk/50.0.0',
            latest: false
          },
          {
            title: 'vision-ar',
            path: '/api/vision-ar/50.0.0',
            latest: false
          },
          {
            title: 'vision-safety',
            path: '/api/vision-safety/50.0.0',
            latest: false
          }
        ]}
      />
    );
  }
}
