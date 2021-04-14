/*
Icon.
*/
import React from 'react';
import Tag from '../tag';

export default class Icon extends React.Component {
  render() {
    return (
      <div>
        <Tag theme="fundamentals" small={true} icon={true} />{' '}
        <Tag theme="fundamentals" icon={true} />
      </div>
    );
  }
}
