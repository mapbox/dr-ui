/*
Basic.
*/
import React from 'react';
import Phone from '../phone';
import Video from '../../video';

export default class Basic extends React.Component {
  render() {
    return (
      <Phone mode="landscape" platform="ios">
        <Video src="/files/browser-example.mp4" title="example" />
      </Phone>
    );
  }
}
