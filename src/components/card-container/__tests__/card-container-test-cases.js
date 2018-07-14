import React from 'react';
import CardContainer from '../card-container';
import CardWithImage from '../../card-with-image/card-with-image';
import CardTextOnly from '../../card-text-only/card-text-only';

const testCases = {};

testCases.basic = {
  component: CardContainer,
  description: 'Basic',
  props: {
    category: {
      title: 'A category',
      path: '#a-category'
    },
    cards: [
      <CardWithImage
        key="0"
        title="Example one"
        path="path"
        description="description"
        thumbnail={
          <img src="https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.webp" />
        }
      />,
      <CardWithImage
        key="1"
        title="Example two"
        path="path"
        description="description"
        thumbnail={
          <img src="https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.webp" />
        }
      />
    ]
  }
};

testCases.noImage = {
  component: CardContainer,
  description: 'No thumbnail image',
  props: {
    category: {
      title: 'A category',
      path: '#a-category'
    },
    cards: [
      <CardTextOnly
        key="0"
        title="Example one"
        path="path"
        description="description"
      />,
      <CardTextOnly
        key="1"
        title="Example two"
        path="path"
        description="description"
      />
    ]
  }
};

export default { testCases };
