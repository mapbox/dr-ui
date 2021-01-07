/*
Lazy load the Search component
*/
import React from 'react';
import Lazy from '../lazy';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <Lazy
        height={30}
        component={() => import('../../search/examples/basic.js')}
      />
    );
  }
}
