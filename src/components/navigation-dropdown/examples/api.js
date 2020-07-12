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
        themeButton="relative inline-block px6 mr24 w-full py12"
        label="API Reference"
        options={[15, 14, 13, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map(
          (item) => ({
            label: `${item}.0.0`,
            latest: item === 15,
            value: `/api/maps/${item}.0.0`
          })
        )}
      />
    );
  }
}
