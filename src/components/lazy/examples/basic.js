/*
Lazy load the Search component
*/
import React from 'react';
import Lazy from '../lazy';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <Lazy
        lazyClasses="h30-mm h36"
        lazyComponent={() => import('../../search/examples/basic.js')}
      />
    );
  }
}
