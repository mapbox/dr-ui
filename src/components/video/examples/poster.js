/*
The video will not autoplay. Uses `poster` to set preview image.
*/
import React from 'react';
import Video from '../video';

export default class Example extends React.PureComponent {
  render() {
    return (
      <Video
        autoplay={false}
        poster="./files/browser-example-mp4-poster.png"
        src="./files/browser-example.mp4"
        title="A video!"
      />
    );
  }
}
