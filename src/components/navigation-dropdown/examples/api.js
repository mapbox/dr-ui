/*
API Reference dropdown.
*/
import React from 'react';
import NavigationDropdown from '../navigation-dropdown';

export default class Basic extends React.Component {
  render() {
    return (
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
    );
  }
}
