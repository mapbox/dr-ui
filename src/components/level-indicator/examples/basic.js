/*
Basic
*/
import React from 'react';
import LevelIndicator from '../level-indicator';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <LevelIndicator level={1} />
        <LevelIndicator level={2} />
        <LevelIndicator level={3} />
      </div>
    );
  }
}
