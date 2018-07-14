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
    thumbnail: <img src="https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.webp" />,
    description: 'described.'
  }
};

export default { testCases, noRenderCases };
