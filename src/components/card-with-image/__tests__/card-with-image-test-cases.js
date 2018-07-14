import React from 'react';
import { CardWithImage } from '../card-with-image';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: CardWithImage,
  description: 'Plain ol card',
  props: {
    title: 'Title',
    path: 'url',
    thumbnail: (
      <div
        className="relative h120 mb12"
        style={{
          backgroundImage:
            "url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.webp')",
          backgroundSize: '100% auto',
          backgroundPosition: 'center'
        }}
      />
    ),
    description: 'described.'
  }
};

export default { testCases, noRenderCases };
