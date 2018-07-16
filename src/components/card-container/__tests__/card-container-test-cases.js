import React from 'react';
import { CardContainer } from '../card-container';
import { Card } from '../../card/card';

const testCases = {};

testCases.basic = {
  component: CardContainer,
  description: 'Basic',
  props: {
    title: 'Category',
    path: '#category',
    fullWidthCards: false,
    cards: [
      <Card
        key="0"
        title="Example one"
        path="path"
        description="description"
        thumbnail={
          <div
            className="relative h120 mb12"
            style={{
              backgroundImage:
                "url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.webp')",
              backgroundSize: '100% auto',
              backgroundPosition: 'center'
            }}
          />
        }
      />,
      <Card
        key="1"
        title="Example two"
        path="path"
        description="description"
        thumbnail={
          <div
            className="relative h120 mb12"
            style={{
              backgroundImage:
                "url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.webp')",
              backgroundSize: '100% auto',
              backgroundPosition: 'center'
            }}
          />
        }
      />
    ]
  }
};

testCases.noImage = {
  component: CardContainer,
  description: 'No thumbnail image',
  props: {
    title: 'Another category',
    path: '#another-category',
    fullWidthCards: true,
    cards: [
      <Card
        key="0"
        title="Example one"
        path="path"
        description="description"
      />,
      <Card key="1" title="Example two" path="path" description="description" />
    ]
  }
};

export default { testCases };
