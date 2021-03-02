import React from 'react';
import Browser from '../browser';
import Basic from '../examples/basic';

const testCases = {};

testCases.basic = {
  description: 'With image',
  element: <Basic />
};

testCases.video = {
  component: Browser,
  description: 'With video',
  props: {
    children: (
      <video
        autoPlay
        loop
        muted
        width="100%"
        className="block mx-auto round-b"
        src="../files/browser-example.mp4"
        type="video/mp4"
        title="animated GIF walking through how to filter a source layer by adding a vector source clicking Filter > Create filter > select a data field from the list provided > select a value from the list provided"
      >
        Your browser doesn't support embedded videos.
      </video>
    )
  }
};

export { testCases };
