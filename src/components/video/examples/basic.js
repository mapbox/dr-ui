/*
Basic.
*/
import React from 'react';
import Video from '../video';

export default class Example extends React.Component {
  render() {
    return <Video src="./assets/browser-example.mp4" title="A video!" />;
  }
}
