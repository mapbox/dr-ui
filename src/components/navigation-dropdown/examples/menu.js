/*
Missing `currentPath`.
*/
import React from 'react';
import NavigationDropdown from '../navigation-dropdown';

export default class Basic extends React.Component {
  render() {
    return (
      <NavigationDropdown
        id="menu"
        dropdownOptions={[
          {
            title: 'Title one',
            path: 'page-one'
          },
          {
            title: 'Title two',
            path: 'page-two'
          }
        ]}
      />
    );
  }
}
