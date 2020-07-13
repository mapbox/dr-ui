/*
API Reference dropdown.
*/
import React from 'react';
import NavigationDropdown from '../navigation-dropdown';

export default class Basic extends React.Component {
  render() {
    return (
      <div>
        <NavigationDropdown
          id="api-reference-menu"
          themeButtonOption="menuItem"
          label="API Reference"
          dropdownOptions={[
            { title: '15.0.0', latest: true, path: '/api/maps/15.0.0' },
            { title: '14.0.0', latest: false, path: '/api/maps/14.0.0' },
            { title: '13.0.0', latest: false, path: '/api/maps/13.0.0' },
            { title: '11.0.0', latest: false, path: '/api/maps/11.0.0' },
            { title: '10.0.0', latest: false, path: '/api/maps/10.0.0' },
            { title: '9.0.0', latest: false, path: '/api/maps/9.0.0' },
            { title: '8.0.0', latest: false, path: '/api/maps/8.0.0' },
            { title: '7.0.0', latest: false, path: '/api/maps/7.0.0' },
            { title: '6.0.0', latest: false, path: '/api/maps/6.0.0' },
            { title: '5.0.0', latest: false, path: '/api/maps/5.0.0' },
            { title: '4.0.0', latest: false, path: '/api/maps/4.0.0' },
            { title: '3.0.0', latest: false, path: '/api/maps/3.0.0' },
            { title: '2.0.0', latest: false, path: '/api/maps/2.0.0' },
            { title: '1.0.0', latest: false, path: '/api/maps/1.0.0' }
          ]}
        />
        <p>Nested example. Non-value items are treated as headings:</p>
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
      </div>
    );
  }
}
