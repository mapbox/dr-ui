/*
Basic.
*/
import React from 'react';
import NavigationDropdown from '../navigation-dropdown';

export default class Basic extends React.Component {
  render() {
    return (
      <NavigationDropdown
        currentPath="page-one"
        options={[
          {
            label: 'Title one',
            value: 'page-one'
          },
          {
            label: 'Title two',
            value: 'page-two'
          }
        ]}
      />
    );
  }
}
