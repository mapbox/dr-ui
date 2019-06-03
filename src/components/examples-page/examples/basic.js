/*
Basic.
*/
import React from 'react';
import ExamplesPage from '../examples-page';
import Card from '../../card/card';
import CardContainer from '../../card-container/card-container';

export default class Example extends React.Component {
  render() {
    return (
      <ExamplesPage
        frontMatter={{
          title: 'Title',
          description: 'Description.'
        }}
        cardContainers={[
          <CardContainer
            title="Container title one"
            path="#container-title-one"
            fullWidthCards={false}
            cards={[
              <Card
                key="0"
                title="Example one"
                path="path"
                description="Lorem ipsum dolor sit amet."
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
                description="Consectetur adipisicing elit"
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
                description="Ded do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
                description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
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
        ]}
      />
    );
  }
}
