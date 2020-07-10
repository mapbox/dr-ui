/*
Basic.
*/
import React from 'react';
import CardContainer from '../card-container';
import Card from '../../card/card';

export default class Example extends React.Component {
  render() {
    return (
      <CardContainer
        title="Category"
        path="#category"
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
      />
    );
  }
}
