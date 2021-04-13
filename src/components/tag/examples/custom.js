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
        customStyles={{
          background: '#FEDADA',
          color: '#bb2224',
          borderColor: '#FD8383'
        }}
      />
    );
  }
}
