import React from 'react';
import ExamplesPage from '../examples-page';
import CardContainer from '../../card-container/card-container';
import Card from '../../card/card';

const testCases = {};

testCases.basic = {
  component: ExamplesPage,
  description: 'Basic',
  props: {
    frontMatter: {
      title: 'Title',
      description: 'Description.'
    },
    cardContainers: [
      <CardContainer
        title="Container title one"
        path="#container-title-one"
        fullWidthCards={false}
        cards={[
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
                    "url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')",
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
                    "url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')",
                  backgroundSize: '100% auto',
                  backgroundPosition: 'center'
                }}
              />
            }
          />
        ]}
      />,
      <CardContainer
        title="Container title two"
        path="#container-title-two"
        fullWidthCards={false}
        cards={[
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
                    "url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')",
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
                    "url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')",
                  backgroundSize: '100% auto',
                  backgroundPosition: 'center'
                }}
              />
            }
          />,
          <Card
            key="2"
            title="Example two"
            path="path"
            description="description"
            thumbnail={
              <div
                className="relative h120 mb12"
                style={{
                  backgroundImage:
                    "url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')",
                  backgroundSize: '100% auto',
                  backgroundPosition: 'center'
                }}
              />
            }
          />
        ]}
      />
    ]
  }
};

export default { testCases };
