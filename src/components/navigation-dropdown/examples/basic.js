/*
Basic.
*/
import React from 'react';
import NavigationDropdown from '../navigation-dropdown';

export default class Example extends React.Component {
  render() {
    return (
      <NavigationDropdown
        currentPath="page-one"
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
        onChange={() => {}}
      />
    );
  }
}
