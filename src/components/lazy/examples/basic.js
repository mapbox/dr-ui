/*
Lazy load a video
*/
import React from 'react';
import Lazy from '../lazy';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <Lazy
        height={500}
        component={() => import('../../video/examples/basic.js')}
      />
    );
  }
}
