/*
Basic.
*/
import React from 'react';
import DemoIframe from '../demo-iframe';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <DemoIframe title="Light map style" src="../files/ios-horizontal.png" />
    );
  }
}
