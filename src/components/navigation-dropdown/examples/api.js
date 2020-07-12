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
          themeButton="relative inline-block px6 mr24 w-full py12"
          label="API Reference"
          options={[
            { label: '15.0.0', latest: true, value: '/api/maps/15.0.0' },
            { label: '14.0.0', latest: false, value: '/api/maps/14.0.0' },
            { label: '13.0.0', latest: false, value: '/api/maps/13.0.0' },
            { label: '11.0.0', latest: false, value: '/api/maps/11.0.0' },
            { label: '10.0.0', latest: false, value: '/api/maps/10.0.0' },
            { label: '9.0.0', latest: false, value: '/api/maps/9.0.0' },
            { label: '8.0.0', latest: false, value: '/api/maps/8.0.0' },
            { label: '7.0.0', latest: false, value: '/api/maps/7.0.0' },
            { label: '6.0.0', latest: false, value: '/api/maps/6.0.0' },
            { label: '5.0.0', latest: false, value: '/api/maps/5.0.0' },
            { label: '4.0.0', latest: false, value: '/api/maps/4.0.0' },
            { label: '3.0.0', latest: false, value: '/api/maps/3.0.0' },
            { label: '2.0.0', latest: false, value: '/api/maps/2.0.0' },
            { label: '1.0.0', latest: false, value: '/api/maps/1.0.0' }
          ]}
        />
        <p>Nested example. Non-value items are treated as headings:</p>
        <NavigationDropdown
          id="api-reference-menu-nested"
          themeButton="relative inline-block px6 mr24 w-full py12"
          label="API Reference"
          options={[
            { label: '90.0.0', latest: true },
            {
              label: 'vision-sdk',
              value: '/api/vision-sdk/90.0.0',
              latest: true
            },
            {
              label: 'vision-ar',
              value: '/api/vision-ar/90.0.0',
              latest: true
            },
            {
              label: 'vision-safety',
              value: '/api/vision-safety/90.0.0',
              latest: true
            },
            { label: '80.0.0', latest: false },
            {
              label: 'vision-sdk',
              value: '/api/vision-sdk/80.0.0',
              latest: false
            },
            {
              label: 'vision-ar',
              value: '/api/vision-ar/80.0.0',
              latest: false
            },
            {
              label: 'vision-safety',
              value: '/api/vision-safety/80.0.0',
              latest: false
            },
            { label: '70.0.0', latest: false },
            {
              label: 'vision-sdk',
              value: '/api/vision-sdk/70.0.0',
              latest: false
            },
            {
              label: 'vision-ar',
              value: '/api/vision-ar/70.0.0',
              latest: false
            },
            {
              label: 'vision-safety',
              value: '/api/vision-safety/70.0.0',
              latest: false
            },
            { label: '60.0.0', latest: false },
            {
              label: 'vision-sdk',
              value: '/api/vision-sdk/60.0.0',
              latest: false
            },
            {
              label: 'vision-ar',
              value: '/api/vision-ar/60.0.0',
              latest: false
            },
            {
              label: 'vision-safety',
              value: '/api/vision-safety/60.0.0',
              latest: false
            },
            { label: '50.0.0', latest: false },
            {
              label: 'vision-sdk',
              value: '/api/vision-sdk/50.0.0',
              latest: false
            },
            {
              label: 'vision-ar',
              value: '/api/vision-ar/50.0.0',
              latest: false
            },
            {
              label: 'vision-safety',
              value: '/api/vision-safety/50.0.0',
              latest: false
            }
          ]}
        />
      </div>
    );
  }
}
