/*
Custom.
*/
import React from 'react';
import Tag from '../tag';

export default class Custom extends React.PureComponent {
  render() {
    return (
      <Tag
        theme="custom"
        customLabel="Limited access"
        customTooltipText="Contact us for access to this feature."
        customBackground="bg-red-light"
        customColor="color-red-dark"
        customBorder="border--red"
      />
    );
  }
}
