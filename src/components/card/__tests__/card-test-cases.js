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

export default { testCases, noRenderCases };
