/*
Basic.
*/
import React from 'react';
import NavigationDropdown from '../navigation-dropdown';

export default class Basic extends React.Component {
  render() {
    return (
      <div>
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

        <p>Another section</p>
        <button className="btn btn--s">Another focusable area</button>
      </div>
    );
  }
}
