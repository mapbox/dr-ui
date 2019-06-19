import React from 'react';
import Card from '../card';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: Card,
  description: 'Card with image',
  props: {
    title: 'Title',
    path: 'url',
    thumbnail: (
      <div
        className="relative h120 mb12"
        style={{
          backgroundImage:
            "url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')",
          backgroundSize: '100% auto',
          backgroundPosition: 'center'
        }}
      />
    ),
    description: 'described.'
  }
};

testCases.noImage = {
  component: Card,
  description: 'Card with no image',
  props: {
    title: 'Title',
    path: 'url',
    description: 'described.'
  }
};

testCases.withLevelAndLanguage = {
  component: Card,
  description: 'Card with level and language',
  props: {
    title: 'This is a full-length title',
    path: 'url',
    description: "Here's a reasonable length for a description.",
    level: 2,
    language: 'JavaScript'
  }
};

export { testCases, noRenderCases };
