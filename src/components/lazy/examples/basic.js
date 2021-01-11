/*
Lazy load the Search component
*/
import React from 'react';
import Lazy from '../lazy';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <Lazy
        lazyHeight={30}
        lazyComponent={() => import('../../search/examples/basic.js')}
      />
    );
  }
}
