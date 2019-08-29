import Browser from '../browser';
import React from 'react';

const testCases = {};

testCases.basic = {
  component: Browser,
  description: '',
  props: {
    children: (
      <img
        src="https://docs.mapbox.com/studio-manual/assets/ref-styles-manage-styles-1200-599fd585f5f2d8e0729d5fe37f9722c0.webp"
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
        src="https://docs.mapbox.com/studio-manual/assets/filter-source-layer-8794aabd77c86712e6aee99bb764182e.mp4"
        type="video/mp4"
        title="animated GIF walking through how to filter a source layer by adding a vector source clicking Filter > Create filter > select a data field from the list provided > select a value from the list provided"
      >
        Your browser doesn't support embedded videos.
      </video>
    )
  }
};

export { testCases };
