import Browser from '../browser';
import React from 'react';

const testCases = {};

testCases.basic = {
  component: Browser,
  description: '',
  props: {
    children: (
      <img
        src="./assets/browser-example.png"
        className="round-b"
        alt="manage-styles"
      />
    )
  }
};

testCases.video = {
  component: Browser,
  description: '',
  props: {
    children: (
      <video
        autoPlay
        loop
        muted
        width="100%"
        className="block mx-auto round-b"
        src="./assets/browser-example.mp4"
        type="video/mp4"
        title="animated GIF walking through how to filter a source layer by adding a vector source clicking Filter > Create filter > select a data field from the list provided > select a value from the list provided"
      >
        Your browser doesn't support embedded videos.
      </video>
    )
  }
};

export { testCases };
