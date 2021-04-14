/*
Basic.
*/
import React from 'react';
import Video from '../video';

export default class Example extends React.PureComponent {
  render() {
    return <Video src="../files/browser-example.mp4" title="A video!" />;
  }
}
